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
    const isPro = offer.title.toLowerCase() === 'pro';

    return (
      <div
        className={cn(
          'group relative flex flex-col overflow-hidden rounded-[20px] border p-8 shadow-lg backdrop-blur-sm',
          isPro
            ? 'border-hero bg-gradient-to-b from-hero/20 to-hero/5'
            : 'border-neutral-800 bg-neutral-800/40 hover:border-transparent hover:bg-neutral-800/60'
        )}
      >
        <div className='mb-5'>
          <h3 className='text-base font-medium uppercase tracking-wide text-neutral-300'>
            {offer.title}
          </h3>
          <div className='mt-4 flex items-baseline gap-2'>
            <span className='text-4xl font-bold tracking-tight text-white'>
              ${offer.prices.monthly}
            </span>
            <span className='text-sm font-medium text-neutral-400'>/month</span>
          </div>
          <p className='mt-2 text-sm text-neutral-400'>
            {isPro
              ? 'Powerful extra features for your growing business.'
              : 'Everything you need to get started.'}
          </p>
        </div>

        <div className='flex h-full flex-col justify-between'>
          <ul className='mb-8 space-y-4'>
            {offer.features.map((feature) => (
              <li key={feature} className='flex items-start gap-3'>
                <div className='mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500/80' />
                <span className='text-[13px] leading-relaxed text-neutral-300'>
                  {feature}
                </span>
              </li>
            ))}
          </ul>

          {userId && subscriptionPlan ? (
            offer.title === 'Free' ? (
              <Link
                href='/dashboard'
                className={cn(
                  'inline-flex h-10 items-center justify-center rounded-lg border border-neutral-800 px-6 text-sm font-medium text-white transition-colors hover:bg-white/5'
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
                  variant: isPro ? 'default' : 'outline',
                }),
                'w-[140px] rounded-lg transition-colors',
                isPro
                  ? 'bg-hero text-white hover:bg-hero/90'
                  : 'border-neutral-800 bg-transparent text-white hover:bg-white/10'
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
    <section className='mx-auto max-w-7xl px-4 py-24'>
      <div className='flex flex-col items-center text-center'>
        <h1 className='text-4xl font-bold tracking-tight sm:text-5xl'>
          Simple, transparent pricing
        </h1>
        <p className='mt-4 max-w-2xl text-lg text-neutral-400'>
          Start tracking your job applications for free. Upgrade to unlock
          advanced features, analytics, and unlimited applications tracking.
        </p>
      </div>

      <div className='mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
        {pricingData.map((offer) => (
          <PricingCard offer={offer} key={offer.title} />
        ))}
      </div>
    </section>
  );
}
