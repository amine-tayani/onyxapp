'use client';

import { useTransition } from 'react';

import { Button } from '@/components/ui/button';
import { cn } from '@/lib/cn';
import { SubscriptionPlan, UserSubscriptionPlan } from '@/types/stripe';

import { Spinner } from '../ui/spinner';

interface BillingFormButtonProps {
  offer: SubscriptionPlan;
  subscriptionPlan: UserSubscriptionPlan;
}

export function BillingFormButton({
  offer,
  subscriptionPlan,
}: BillingFormButtonProps) {
  const [isPending, startTransition] = useTransition();
  const generateUserStripeSession = generateUserStripe.bind(
    null,
    offer.stripeIds?.monthly as string
  );

  const stripeSessionAction = async () => {
    startTransition(async () => {
      await generateUserStripeSession();
    });
  };

  const userOffer = subscriptionPlan.stripePriceId === offer.stripeIds?.monthly;

  return (
    <Button
      variant={userOffer ? 'default' : 'outline'}
      className={cn('w-full', userOffer ? 'text-primary' : 'text-neutral-900')}
      disabled={isPending}
      onClick={stripeSessionAction}
    >
      {isPending ? (
        <>
          <Spinner /> Loading
        </>
      ) : (
        <>{userOffer ? 'Manage Subscription' : 'Upgrade'}</>
      )}
    </Button>
  );
}
