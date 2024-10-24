// TODO

'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

import { BillingFormButton } from '@/components/billing/form-button';
import { Button, buttonVariants } from '@/components/ui/button';
import { pricingData } from '@/config/pricing';
import { cn } from '@/lib/cn';
import { SubscriptionPlan, UserSubscriptionPlan } from '@/types/stripe';

interface PricingCardsProps {
  userId?: string;
  subscriptionPlan?: UserSubscriptionPlan;
}

export default function PricingCards({
  userId,
  subscriptionPlan,
}: PricingCardsProps) {
  const PricingCard = ({ offer }: { offer: SubscriptionPlan }) => {
    return (
      <div
        className={cn(
          'relative flex flex-col overflow-hidden rounded-3xl border shadow-sm',
          offer.title.toLocaleLowerCase() === 'pro'
            ? '-m-1 ring-1 ring-purple-700 ring-offset-1 ring-offset-purple-950'
            : ''
        )}
        key={offer.title}
      >
        <div
          className={cn(
            'min-h-[150px] items-start space-y-4 p-6',
            offer.title.toLocaleLowerCase() === 'pro'
              ? 'bg-gradient-to-r from-hero  via-purple-900 to-purple-950'
              : 'bg-muted/50'
          )}
        >
          <p className='flex text-sm font-bold uppercase tracking-wider text-muted-foreground'>
            {offer.title}
          </p>

          <div className='flex flex-row'>
            <div className='flex items-end'>
              <div className='flex text-left text-3xl font-semibold leading-6'>
                ${offer.prices.monthly}
              </div>
              <div className='-mb-1 ml-2 text-left text-sm font-medium text-muted-foreground'>
                <div>/month</div>
              </div>
            </div>
          </div>
          <div
            className={cn(
              'text-left text-sm ',
              offer.title.toLocaleLowerCase() === 'pro'
                ? 'text-neutral-100'
                : 'text-muted-foreground'
            )}
          >
            {offer.billing}
          </div>
        </div>

        <div className='flex h-full flex-col justify-between gap-16 p-6'>
          <ul className='space-y-3 text-left text-[13px] leading-[19px]  text-primary/70'>
            {offer.features.map((feature) => (
              <li className='flex items-center gap-x-3' key={feature}>
                <Check className='h-3 w-3 shrink-0 text-purple-500' />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title === 'Free' ? (
              <Button
                disabled
                className='w-full rounded-xl text-muted-foreground/60 disabled:cursor-not-allowed disabled:opacity-50'
              >
                On Free Plan
              </Button>
            ) : (
              <BillingFormButton
                offer={offer}
                subscriptionPlan={subscriptionPlan}
              />
            )
          ) : (
            <Link
              href='/signup'
              className={cn(
                buttonVariants({
                  variant: 'default',
                }),
                'w-full rounded-xl',
                offer.title.toLocaleLowerCase() === 'pro'
                  ? 'bg-gradient-to-r from-hero  via-purple-900 to-purple-950 text-primary'
                  : 'text-neutral-100'
              )}
            >
              Get started
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='my-20 flex items-center justify-center overflow-x-auto p-4 text-white'>
      <div className='relative grid h-[450px] w-full min-w-[1000px] max-w-5xl grid-cols-1 gap-2 sm:grid-cols-2 lg:grid-cols-3'>
        {pricingData.map((offer) => (
          <PricingCard offer={offer} key={offer.title} />
        ))}
      </div>
    </div>
  );
}
