'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { usePathname } from 'next/navigation';
import { Bell, Wrench, Settings, UserSquare, ShieldHalf } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import UserNav from '@/components/ui/navigation/user-nav';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function SidebarNav({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  const items = [
    {
      title: 'General',
      href: '/settings',
      icon: Settings,
    },
    {
      title: 'Account',
      href: '/settings/account',
      icon: UserSquare,
    },
    {
      title: 'Preferences',
      href: '/settings/preferences',
      icon: Wrench,
    },
    {
      title: 'Notifications',
      href: '/settings/notifications',
      icon: Bell,
    },
    {
      title: 'Security',
      href: '/settings/security',
      icon: ShieldHalf,
    },
  ];

  return (
    <aside className='-mx-4 lg:w-[14%]'>
      <div className='flex items-center space-x-2'>
        <UserNav align='start' />
        <h1 className='font-display text-sm font-semibold text-primary/80'>
          Personal Account
        </h1>
      </div>
      <nav
        className={cn(
          'mt-8 flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-1',
          className
        )}
        {...props}
      >
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              buttonVariants({ variant: 'sidenav' }),
              pathname === item.href
                ? 'bg-muted text-primary hover:bg-muted hover:text-primary'
                : 'hover:bg-muted hover:text-primary',
              'group justify-start gap-x-2'
            )}
          >
            <item.icon
              strokeWidth={1.5}
              className={cn(
                pathname === item.href
                  ? 'text-primary group-hover:text-primary'
                  : 'text-muted-foreground/80 group-hover:text-primary',
                'h-5 w-5 transition-all duration-300 ease-in-out'
              )}
            />
            <span>{item.title}</span>
          </Link>
        ))}
      </nav>
    </aside>
  );
}
