'use client';

import { useTransition } from 'react';

import { generateUserStripe } from '@/app/(landing)/_components/actions/generate-stripe-user';
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
      variant='outline'
      className={cn('w-ful rounded-xl text-primary-foreground')}
      disabled={isPending}
      onClick={stripeSessionAction}
    >
      {isPending ? (
        <Spinner className='mr-2 text-primary-foreground' size='xs' />
      ) : userOffer ? (
        'Manage Subscription'
      ) : (
        'Upgrade'
      )}
    </Button>
  );
}
