'use client';

import Link from 'next/link';
import { useSession } from 'next-auth/react';
import * as React from 'react';

import UserNav from '@/components/ui/navigation/user-nav';
import useScroll from '@/hooks/use-scroll';
import { cn } from '@/lib/cn';

import { Icons } from '../icons';
import { Skeleton } from '../skeleton';
import AuthenticationLinks from './auth-links';
import { MobileNav } from './mobile-nav';
import { NavLink } from './nav-link';

export function Navigation() {
  const { status, data: session } = useSession();
  const scrolled = useScroll(80);

  const NavLinks = () => (
    <>
      <NavLink slug='Product' href='/product' />
      <NavLink slug='Features' href='/features' />
      <NavLink slug='Blog' href='/blog' />
      <NavLink slug='Customers' href='/customers' />
      <NavLink slug='Pricing' href='/pricing' />
      {session?.user ? <NavLink slug='Dashboard' href='/dashboard' /> : null}
      {status === 'unauthenticated' && <NavLink slug='Login' href='/login' />}
    </>
  );

  return (
    <header
      className={cn('sticky inset-x-0 top-0 z-30 w-full transition-all', {
        'border-b border-neutral-800 bg-background/75 pt-0.5 drop-shadow-sm backdrop-blur-lg':
          scrolled,
      })}
    >
      <nav className=' m-4 flex h-10 items-center p-2 text-sm font-medium lg:mx-32 lg:p-3'>
        <div className='flex w-full items-center justify-between'>
          <div className='relative flex items-center gap-3'>
            <Link className='mx-4 focus:outline-none' href='/'>
              <Icons.logo className='h-10 w-10' />
            </Link>
            <div className='hidden items-center md:flex md:space-x-6'>
              <NavLinks />
            </div>
          </div>

          <div className='flex'>
            <div className='flex items-center justify-end gap-2'>
              {status === 'authenticated' && session ? (
                <UserNav />
              ) : status === 'loading' ? (
                <Skeleton className='w-28 rounded-lg bg-muted py-4' />
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
