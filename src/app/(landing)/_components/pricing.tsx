'use client';

import React from 'react';

import PricingTiers from './pricing-tiers';

export default function Pricing() {
  return (
    <div className='mx-4 my-32 rounded-3xl text-center'>
      <div className='relative overflow-hidden py-16 md:pt-28'>
        <div className='w-full text-center'>
          <div className='mt-5 flex justify-center text-4xl font-semibold leading-[1.3] tracking-wide text-primary md:text-5xl md:leading-[1.15]'>
            <h1 className='max-w-2xl'>Pricing</h1>
          </div>
          <h3 className='mb-8 mt-3.5 font-medium text-muted-foreground/70 sm:text-lg'>
            Use Onyx for free. You can upgrade to enable more additional
            features.
          </h3>
        </div>
        <PricingTiers />
      </div>
    </div>
  );
}
