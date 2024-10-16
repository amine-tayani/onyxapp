'use client';

import { Check } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { cn } from '@/lib/cn';

type PricingTier = {
  name: string;
  price: string;
  billing: string;
  discount?: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
};

const tiers: PricingTier[] = [
  {
    name: 'Free',
    price: '$0',
    billing: 'Free for everyone',
    features: [
      'Up to 10 job applications',
      'Basic application tracking',
      'Resume storage',
      'Job search integration',
    ],
    buttonText: 'Get started',
  },
  {
    name: 'Pro',
    price: '$8 per month',
    billing: 'Billed yearly',
    discount: '-20%',
    features: [
      'Unlimited job applications',
      'Advanced application tracking',
      'Multiple resume versions',
      'Email notifications',
    ],
    buttonText: 'Upgrade to Pro',
    recommended: true,
  },
  {
    name: 'Business',
    price: '$15 per month',
    billing: 'Billed yearly',
    discount: '-20%',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Analytics and insights',
      'Custom pipeline stages',
      'Integration with ATS',
    ],
    buttonText: 'Choose Business',
  },
];

export default function PricingTiers() {
  return (
    <div className='my-20 flex items-center justify-center overflow-x-auto p-4 text-white'>
      <div className='relative grid h-[450px] w-full min-w-[1000px] max-w-5xl grid-cols-1 gap-0 sm:grid-cols-2 lg:grid-cols-3'>
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={cn(
              'rounded-xl border-none bg-transparent p-8 text-left',
              tier.recommended
                ? 'bg-gradient-to-b from-muted/80 to-neutral-800'
                : 'bg-transparent'
            )}
          >
            <h3 className='mb-2 font-semibold'>{tier.name}</h3>
            <div className='mb-1 font-medium text-muted-foreground'>
              {tier.price}
            </div>
            <div className='mb-6 mt-8 flex items-center text-sm text-gray-400'>
              {tier.billing}
              {tier.discount && (
                <span className='ml-2 rounded-full bg-hero px-2 py-0.5 font-display text-xs font-medium text-primary'>
                  {tier.discount}
                </span>
              )}
            </div>
            <Separator
              orientation='horizontal'
              className={cn(
                'my-4 bg-neutral-800',
                tier.recommended && 'bg-neutral-700'
              )}
            />
            <ul className='mb-8 space-y-4'>
              {tier.features.map((feature, featureIndex) => (
                <li
                  key={featureIndex}
                  className='flex items-start text-neutral-400'
                >
                  <Check className='mr-3 mt-0.5 h-3 w-3 shrink-0' />
                  <span className='text-sm '>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              variant={tier.recommended ? 'outline' : 'default'}
              className={cn(
                'absolute bottom-0 mb-8 rounded-lg px-4 text-sm font-medium',
                tier.recommended && 'text-black'
              )}
            >
              {tier.buttonText}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
