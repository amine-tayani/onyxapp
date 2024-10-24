'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import * as React from 'react';

import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/cn';

import { buttonVariants } from '../button';
import { Icons } from '../icons';
import { Skeleton } from '../skeleton';
import AuthenticationLinks from './auth-links';
import { MobileNav } from './mobile-nav';
import { NavLink } from './nav-link';

export function Navigation() {
  const { data: session, status } = useSession();
  const scrolled = useScroll(80);

  const NavLinks = () => (
    <>
      <NavLink slug='Product' href='/product' />
      <NavLink slug='Features' href='/features' />
      <NavLink slug='Blog' href='/blog' />
      <NavLink slug='Customers' href='/customers' />
      <NavLink slug='Pricing' href='/pricing' />
      {!session?.user && <NavLink slug='Login' href='/login' />}
    </>
  );

  return (
    <header
      className={cn(
        'sticky inset-x-0 top-0 z-30 w-full bg-gradient-to-r from-neutral-900 via-neutral-950 to-black text-center transition-all',
        {
          'opacity-95': scrolled,
        }
      )}
    >
      <nav className='mx-4 flex h-20 items-center text-sm font-medium lg:mx-32 '>
        <div className='flex w-full items-center justify-between'>
          <div className='relative flex items-center gap-3'>
            <Link className='mx-4 focus:outline-none' href='/'>
              <Icons.logo className='h-8 w-8' />
            </Link>
            <div className='hidden items-center md:flex md:space-x-6'>
              <NavLinks />
            </div>
          </div>

          <div className='flex'>
            <div className='flex items-center justify-end gap-2'>
              {status === 'loading' ? (
                <Skeleton className='w-28 rounded-lg bg-muted py-4' />
              ) : session?.user ? (
                <Link
                  className={cn(
                    buttonVariants({ variant: 'default' }),
                    'text-muted-foreground'
                  )}
                  href='/dashboard'
                >
                  Go to Dashboard
                </Link>
              ) : (
                <AuthenticationLinks />
              )}
              <MobileNav>
                <NavLinks />
              </MobileNav>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
