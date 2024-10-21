'use client';

import { Check } from 'lucide-react';
import Link from 'next/link';

import { BillingFormButton } from '@/components/billing/form-button';
import { buttonVariants } from '@/components/ui/button';
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
            ? '-m-0.5 border-2 border-purple-400'
            : ''
        )}
        key={offer.title}
      >
        <div className='min-h-[150px] items-start space-y-4 bg-muted/50 p-6'>
          <p className='font-urban flex text-sm font-bold uppercase tracking-wider text-muted-foreground'>
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
          {offer.prices.monthly > 0 ? (
            <div className='text-left text-sm text-muted-foreground'>
              when charged monthly
            </div>
          ) : null}
        </div>

        <div className='flex h-full flex-col justify-between gap-16 p-6'>
          <ul className='space-y-2 text-left text-sm font-medium leading-normal'>
            {offer.features.map((feature) => (
              <li className='flex items-start gap-x-3' key={feature}>
                <Check className='size-5 shrink-0 text-purple-500' />
                <p>{feature}</p>
              </li>
            ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title === 'Free' ? (
              <Link
                href='/dashboard'
                className={cn(
                  buttonVariants({
                    variant: 'outline',
                  }),
                  'w-full rounded-xl text-black'
                )}
              >
                Go to dashboard
              </Link>
            ) : (
              <BillingFormButton
                offer={offer}
                subscriptionPlan={subscriptionPlan}
              />
            )
          ) : (
            <Link
              href='/login'
              className={cn(
                buttonVariants({
                  variant:
                    offer.title.toLocaleLowerCase() === 'pro'
                      ? 'default'
                      : 'outline',
                }),
                'w-full rounded-xl',
                offer.title.toLocaleLowerCase() === 'pro'
                  ? 'text-primary'
                  : 'text-neutral-900'
              )}
            >
              Sign In
            </Link>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className='my-20 flex items-center justify-center overflow-x-auto p-4 text-white'>
      <div className='relative grid h-[450px] w-full min-w-[1000px] max-w-5xl grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3'>
        {pricingData.map((offer) => (
          <PricingCard offer={offer} key={offer.title} />
        ))}
      </div>
    </div>
  );
}
