'use client';

import Link from 'next/link';
import FeatureCard from './feature-card';
import {
  BarChart2,
  BellRing,
  Blocks,
  CalendarCheck,
  ChevronRight,
  Gauge,
  PackageOpen,
  Rocket,
} from 'lucide-react';

export default function Features() {
  return (
    <div className='mx-4 my-32 rounded-3xl border border-muted-foreground/20 text-center'>
      <div className='relative overflow-hidden py-16 md:pt-28'>
        <div className='relative z-20 px-6'>
          <div className='w-full text-center'>
            <div className='flex items-center justify-center space-x-1.5 font-medium text-muted-foreground/70 sm:text-lg'>
              <Rocket className='h-5 w-5' />
              <span>Features</span>
            </div>
            <div className='mt-5 flex justify-center font-display text-[1.7rem] font-extrabold leading-[1.3] text-primary md:text-5xl md:leading-[1.15]'>
              <h1 className='max-w-2xl'>
                Job search{' '}
                <span className='bg-gradient-to-l from-purple-800 via-violet-900 to-purple-800 bg-clip-text text-transparent'>
                  leveled up
                </span>
              </h1>
            </div>
            <h3 className='mt-3.5 font-medium text-muted-foreground/70 sm:text-lg'>
              Built for those who seek an opportunity
            </h3>
          </div>

          <div className='mx-auto mt-6 w-fit'>
            <Link
              className='flex w-full items-center justify-center rounded-full p-1 text-primary sm:w-fit'
              href='/signup'
            >
              <span className='flex w-full items-center justify-center  space-x-1 rounded-full bg-hero px-5 py-2 text-sm font-medium hover:bg-hero/70 sm:w-fit'>
                <span>Get Started</span>
                <ChevronRight className='h-5 w-5' />
              </span>
            </Link>
          </div>
        </div>
        <div className='absolute left-1/2 top-0 z-0 mx-auto h-full w-full max-w-6xl -translate-x-1/2'>
          <div className='absolute left-0 hidden h-full w-px bg-muted-foreground/20 xl:block' />
          <div className='absolute right-0 hidden h-full w-px bg-muted-foreground/20 xl:block' />
        </div>
        <div className='absolute left-1/2 top-0 z-10 mx-auto h-full w-full max-w-5xl -translate-x-1/2'>
          <div className='absolute left-0 hidden h-full w-px bg-muted-foreground/20 xl:block' />
          <div className='absolute right-0 hidden h-full w-px bg-muted-foreground/20 xl:block' />
        </div>

        <div className='absolute top-[3.8rem] z-0 hidden h-px w-full bg-muted-foreground/20 md:block' />
      </div>
      <div className='h-px w-full bg-muted-foreground/20' />
      <div className='mx-auto grid max-w-6xl gap-px border-x border-muted-foreground/20 bg-background text-left md:grid-cols-3'>
        <FeatureCard
          icon={PackageOpen}
          title='Centralized Organization'
          description=' Say goodbye to scattered information, you have a dedicated space to monitor your job
              search progress.'
        />
        <FeatureCard
          icon={Gauge}
          title='Insightful Dashboard'
          description=' Onyx provides real-time metrics, helping you
              gauge your job search performance at a glance.'
        />
        <FeatureCard
          icon={BellRing}
          title='Deadline notifications'
          description='Onyx keep you on track and make sure you Receive timely reminders for upcoming application deadlines'
        />
        <FeatureCard
          icon={BarChart2}
          title='Status Tracking'
          description='Track the status of each application seamlessly and
              monitor every step of your application process.'
        />
        <FeatureCard
          icon={CalendarCheck}
          title='Interview Coordination'
          description='Sync your calendar and choose available time slots, and 
              arrange your interviews  effortlessly.'
        />
        <FeatureCard
          icon={Blocks}
          title='Personalized Insights'
          description='Onyx analyzes your application and ensures you make informed decisions and stand
              out in job market'
        />
      </div>
      <div className='h-px w-full bg-muted-foreground/20' />
      <div className='mx-auto max-w-6xl border-x border-muted-foreground/20 md:h-24' />
    </div>
  );
}
