// @ts-nocheck

'use client';

import {
  BellIcon,
  CreditCard,
  Inbox,
  PieChartIcon,
  SettingsIcon,
  ShieldIcon,
  UserIcon,
} from 'lucide-react';
import * as React from 'react';

import { Icons } from '@/components/ui/icons';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarRail,
  useSidebar,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/cn';

import { DashboardSideNav } from './sidenav';
import { UserMenu } from './user-menu';

const data = {
  sideNav: [
    {
      title: 'Inbox',
      url: '/dashboard/inbox',
      icon: Inbox,
    },
    {
      title: 'Analytics',
      url: '/dashboard/analytics',
      icon: PieChartIcon,
    },
    {
      title: 'Notifications',
      url: '/dashboard/notifications',
      icon: BellIcon,
    },
    {
      title: 'Settings',
      url: '/dashboard/settings',
      icon: SettingsIcon,
    },
    {
      title: 'Billing',
      url: '/dashboard/billing',
      icon: CreditCard,
    },
    {
      title: 'Profile',
      url: '/dashboard/profile',
      icon: UserIcon,
    },
    {
      title: 'Security',
      url: '/dashboard/security',
      icon: ShieldIcon,
    },
  ],
};

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  const { state } = useSidebar();
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <div
              href='/dashboard'
              className={cn(
                'mt-4 flex items-center gap-x-2',
                state === 'collapsed' ? 'ml-0' : 'ml-3'
              )}
            >
              <Icons.logo className='size-8' />
              <span
                className={cn(
                  state === 'collapsed'
                    ? 'hidden -translate-x-10 opacity-0'
                    : 'translate-x-0 truncate text-sm font-semibold leading-tight opacity-100 duration-300 ease-in-out'
                )}
              >
                Dashboard
              </span>
            </div>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <DashboardSideNav items={data.sideNav} />
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
