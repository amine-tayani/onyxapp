'use server';

import { redirect } from 'next/navigation';
import { getServerSession } from 'next-auth';

import { AuthOptions } from '@/lib/auth/authjs-conf';
import { stripe } from '@/lib/payments/stripe';
import { getUserSubscriptionPlan } from '@/lib/payments/subscription';

export type responseAction = {
  status: 'success' | 'error';
  stripeUrl?: string;
};

// this is the url that user will be redirected to after finishing
const billingUrl = `${process.env.NEXT_PUBLIC_APP_URL}/`;

export async function generateUserStripe(
  priceId: string
): Promise<responseAction> {
  let redirectUrl: string = '';

  try {
    const session = await getServerSession(AuthOptions);
    const user = session?.user;

    if (!user || !user.email || !user.id) {
      throw new Error('Unauthorized');
    }

    const subscriptionPlan = await getUserSubscriptionPlan(user.id);

    if (subscriptionPlan.isPaid && subscriptionPlan.stripeCustomerId) {
      // User on Paid Plan - Create a portal session to manage subscription.
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: subscriptionPlan.stripeCustomerId,
        return_url: billingUrl,
      });

      redirectUrl = stripeSession.url as string;
    } else {
      // User on Free Plan - Create a checkout session to upgrade.
      const stripeSession = await stripe.checkout.sessions.create({
        success_url: billingUrl,
        cancel_url: billingUrl,
        payment_method_types: ['card'],
        mode: 'subscription',
        billing_address_collection: 'auto',
        customer_email: user.email,
        line_items: [
          {
            price: priceId,
            quantity: 1,
          },
        ],
        metadata: {
          userId: user.id,
        },
      });

      redirectUrl = stripeSession.url as string;
    }
  } catch (error) {
    if (error instanceof Error) {
      console.log(error.message);
    }
  }

  // no revalidatePath because redirect
  redirect(redirectUrl);
}
