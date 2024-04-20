'use client';

import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { buttonVariants } from '@/components/ui/button';

interface NavProps {
  links: {
    title: string;
    icon: LucideIcon;
    variant: 'default' | 'sidenav' | 'ghost';
  }[];
}

export function Nav({ links }: NavProps) {
  return (
    <div className='group flex flex-col gap-4 py-2'>
      <nav className='hidden gap-2 border-r p-4 sm:grid sm:w-52'>
        {links.map((link, index) => (
          <Link
            key={index}
            href={'dashboard/' + link.title.toLowerCase()}
            className={cn(
              buttonVariants({ variant: link.variant, size: 'sm' }),
              link.variant === 'sidenav' &&
                'bg-muted text-white hover:bg-muted hover:text-white',
              'justify-start'
            )}
          >
            <link.icon className='mr-2 h-4 w-4' />
            {link.title}
          </Link>
        ))}
      </nav>
    </div>
  );
}
