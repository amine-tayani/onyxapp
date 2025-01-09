'use server';

import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/auth';
import { stripe } from '@/lib/payments/stripe';

export type responseAction = {
  status: 'success' | 'error';
  stripeUrl?: string;
};

const billingUrl = `${process.env.NEXT_PUBLIC_APP_URL}/dashboard`;

export async function openCustomerPortal(
  userStripeId: string
): Promise<responseAction> {
  let redirectUrl: string = '';

  try {
    const session = await getAuthSession();

    if (!session?.user || !session?.user.email) {
      throw new Error('Unauthorized');
    }

    if (userStripeId) {
      const stripeSession = await stripe.billingPortal.sessions.create({
        customer: userStripeId,
        return_url: billingUrl,
      });

      redirectUrl = stripeSession.url as string;
    }
  } catch (error) {
    throw new Error('Failed to generate user stripe session');
  }

  redirect(redirectUrl);
}
