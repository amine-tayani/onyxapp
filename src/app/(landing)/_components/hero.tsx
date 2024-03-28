'use client';

import Link from 'next/link';
import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { Icons } from '@/components/ui/icons';
import { ChevronRight } from 'lucide-react';
import { Balancer } from 'react-wrap-balancer';

export default function Hero() {
  return (
    <div className=' relative pt-20 text-center lg:pt-40'>
      <div className='relative z-10'>
        <div className='px-6'>
          <div className=' mx-auto max-w-[22rem] space-y-2 font-display text-[2rem] font-extrabold leading-tight text-primary md:max-w-[40rem] md:text-6xl md:leading-[1.2]'>
            <h1>
              <Balancer>
                Unleash Your Career{' '}
                <span className='bg-gradient-to-l from-purple-800 via-violet-900 to-purple-800 bg-clip-text text-transparent'>
                  Potential Sooner
                </span>
              </Balancer>
            </h1>
          </div>
          <p className=' mx-auto mt-4 max-w-[26rem] font-display font-medium text-muted-foreground/70 sm:text-lg md:max-w-xl md:leading-loose'>
            <Balancer>
              Bid farewell to the chaos of endless spreadsheets. Onyx empowers
              you to take control of your job search.
            </Balancer>
          </p>
          <div className='mt-8 flex flex-col items-center justify-center space-y-4 px-12 sm:flex-row sm:space-x-6 sm:space-y-0'>
            <Link
              className='rounded bg-hero px-6 py-2 text-sm font-medium text-primary transition-colors hover:bg-hero/80'
              href='/signup'
            >
              Start For Free
            </Link>
            <Link
              className='flex items-center gap-x-2 rounded bg-secondary px-6 py-2 text-sm font-medium text-card-foreground transition-colors hover:bg-secondary/80'
              href={`${siteConfig.links.github}`}
            >
              <Icons.gitHub className='h-5 w-5' />
              Star Us On Github
            </Link>
          </div>
        </div>
      </div>
      <div className='relative z-10'>
        <div className='mx-auto w-full max-w-5xl px-6 py-24 text-center'>
          <h3 className='justify-center space-x-1.5 font-display font-medium text-muted-foreground/70 sm:text-lg md:flex'>
            <span>
              Powering those seeking an opportunity from entry level candidates
              to seniors.
            </span>
            <Link
              className='group mt-3 flex items-center justify-center font-medium text-primary/90 hover:text-primary md:mt-0'
              href='/customers'
            >
              <ChevronRight className='h-3.5 w-3.5 group-hover:text-primary' />
            </Link>
          </h3>
          <div className='mt-16 grid grid-cols-2 gap-10 sm:grid-cols-5'>
            {Array.from({ length: 10 }, (_, i) => (
              <div key={i} className='flex items-center justify-center'>
                <Image
                  src='/logos/cal_dark.svg'
                  width={100}
                  height={20}
                  alt='calcom'
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
