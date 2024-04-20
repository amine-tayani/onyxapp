'use client';

import Link from 'next/link';
import { cn } from '@/lib/cn';
import { usePathname } from 'next/navigation';
import { MessageCircle, Home, BarChart3, PencilLine } from 'lucide-react';
import { buttonVariants } from '@/components/ui/button';
import { CreateAppButton } from '../applications/create-application-button';
import { Separator } from '@radix-ui/react-dropdown-menu';

interface SidebarNavProps extends React.HTMLAttributes<HTMLElement> {}

export function DashboardSidebar({ className, ...props }: SidebarNavProps) {
  const pathname = usePathname();

  const items = [
    {
      title: 'Dashboard',
      href: '/dashboard',
      icon: Home,
    },
    {
      title: 'Analytics',
      href: '/dashboard/analytics',
      icon: BarChart3,
    },
    {
      title: 'FAQ',
      href: '/dashboard/faq',
      icon: MessageCircle,
    },
    {
      title: 'Support',
      href: '/dashboard/support',
      icon: PencilLine,
    },
  ];

  return (
    <aside className='hidden border-r border-muted px-2 lg:block lg:w-52'>
      <nav
        className={cn(
          'mt-8 flex space-x-2 lg:flex-col lg:space-x-0 lg:space-y-2',
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
      <Separator className='mt-4 h-px w-full bg-muted' />
      <div className='mt-2'>
        <CreateAppButton />
      </div>
    </aside>
  );
}
