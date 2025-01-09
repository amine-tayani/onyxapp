'use client';

import { ArrowRight } from 'lucide-react';
import React from 'react';

import { Button } from '@/components/ui/button';

export default function Hero() {
  return (
    <div className='flex min-h-[600px] items-center justify-center bg-gradient-to-r from-neutral-900 via-neutral-950 to-black pb-20 pt-8'>
      <div className='mx-auto max-w-5xl text-center'>
        <div className='mb-8 inline-block'>
          <Button
            variant='secondary'
            className='rounded-full bg-hero px-4 py-1.5 text-sm font-medium text-white hover:bg-hero/80'
          >
            <span className='mr-2 font-semibold'>Nov 17-19</span>
            First beta release
            <span className='ml-2'>→</span>
          </Button>
        </div>
        <h1 className='mb-6 text-5xl font-extrabold leading-relaxed text-white md:text-6xl lg:text-7xl'>
          Supercharge the
          <br />
          application process
        </h1>
        <p className='mx-auto mb-8 max-w-3xl text-xl text-neutral-400'>
          Organize applications, track progress, and streamline the job search
          in days, not months. Simplify workflows, empower candidates, and
          unlock opportunities for everyone around the world.
        </p>
        <div className='flex justify-center space-x-4'>
          <Button
            variant='secondary'
            className='rounded-lg  px-6 py-3 text-[15px] font-semibold'
          >
            Start for free
          </Button>
          <Button
            variant='ghost'
            className='group rounded-lg bg-transparent px-6 py-3 text-[15px] font-semibold text-white hover:bg-neutral-900/50 hover:text-white'
          >
            Browse features{' '}
            <ArrowRight className='ml-2 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1' />
          </Button>
        </div>
      </div>
    </div>
  );
}
