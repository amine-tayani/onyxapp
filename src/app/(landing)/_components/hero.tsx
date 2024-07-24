'use client';

import { motion } from 'framer-motion';
import React from 'react';
import Balancer from 'react-wrap-balancer';

import { cn } from '@/lib/cn';

export default function Hero() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className='mt-8 bg-gradient-to-br from-primary/80 to-neutral-100 bg-clip-text py-4 text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl'
      >
        <Balancer>
          Unleash Your Career <br /> Potential Sooner
        </Balancer>
      </motion.h1>
      <motion.p
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: 'easeInOut',
        }}
        className=' mt-4 text-center font-display text-muted-foreground/80 sm:text-lg md:max-w-xl md:leading-loose'
      >
        <Balancer>
          Say goodbye to the chaos of endless spreadsheets. Onyx empowers you to
          take control of your job search.
        </Balancer>
      </motion.p>
    </LampContainer>
  );
}

export const LampContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div
      className={cn(
        'relative z-0 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden rounded-md bg-background',
        className
      )}
    >
      <div className='relative isolate z-0 flex w-full flex-1 scale-y-125 items-center justify-center '>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage:
              'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
          }}
          className='bg-gradient-conic absolute inset-auto right-1/2 h-56 w-[30rem] overflow-visible from-hero via-transparent to-transparent text-white [--conic-position:from_70deg_at_center_top]'
        >
          <div className='absolute  bottom-0 left-0 z-20 h-40 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]' />
          <div className='absolute  bottom-0 left-0 z-20 h-full  w-40 bg-background [mask-image:linear-gradient(to_right,white,transparent)]' />
        </motion.div>
        <motion.div
          initial={{ opacity: 0.5, width: '15rem' }}
          whileInView={{ opacity: 1, width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          style={{
            backgroundImage:
              'conic-gradient(var(--conic-position), var(--tw-gradient-stops))',
          }}
          className='bg-gradient-conic absolute inset-auto left-1/2 h-56 w-[30rem] from-transparent via-transparent to-hero text-white [--conic-position:from_290deg_at_center_top]'
        >
          <div className='absolute  bottom-0 right-0 z-20 h-full  w-40 bg-background [mask-image:linear-gradient(to_left,white,transparent)]' />
          <div className='absolute  bottom-0 right-0 z-20 h-40 w-full bg-background [mask-image:linear-gradient(to_top,white,transparent)]' />
        </motion.div>
        <div className='absolute top-1/2 h-48 w-full translate-y-12 scale-x-150 bg-background blur-2xl'></div>
        <div className='absolute top-1/2 z-50 h-48 w-full bg-transparent opacity-10 backdrop-blur-md'></div>
        <div className='absolute inset-auto z-50 h-36 w-[28rem] -translate-y-1/2 rounded-full bg-hero opacity-50 blur-3xl'></div>
        <motion.div
          initial={{ width: '8rem' }}
          whileInView={{ width: '16rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-30 h-36 w-64 -translate-y-24 rounded-full bg-hero blur-2xl'
        />
        <motion.div
          initial={{ width: '15rem' }}
          whileInView={{ width: '30rem' }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: 'easeInOut',
          }}
          className='absolute inset-auto z-50 h-0.5 w-[30rem] -translate-y-28 bg-hero'
        />
        <div className='absolute inset-auto z-40 h-44 w-full -translate-y-[12.5rem] bg-background ' />
      </div>

      <div className='relative z-50 flex -translate-y-80 flex-col items-center px-5'>
        {children}
      </div>
    </div>
  );
};
