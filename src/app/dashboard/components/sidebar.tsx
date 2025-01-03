// @ts-nocheck

'use client';

import {
  BellIcon,
  CreditCardIcon,
  HomeIcon,
  Inbox,
  PieChartIcon,
  Settings2Icon,
  SettingsIcon,
  ShieldIcon,
  User2Icon,
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

import { MainNav } from './main-nav';
import { SettingsNav } from './settings-nav';
import { UserMenu } from './user-menu';

const SETTINGS_PREF = '/dashboard/settings';

const data = {
  main: [
    {
      title: 'Home',
      url: '/dashboard',
      icon: HomeIcon,
    },

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
      title: 'Profile',
      url: '/dashboard/profile',
      icon: UserIcon,
    },
  ],
  settings: [
    {
      title: 'General',
      url: `${SETTINGS_PREF}/`,
      icon: SettingsIcon,
    },
    {
      title: 'Account',
      url: `${SETTINGS_PREF}/account`,
      icon: User2Icon,
    },
    {
      title: 'Billing',
      url: `${SETTINGS_PREF}/billing`,
      icon: CreditCardIcon,
    },
    {
      title: 'Appearance',
      url: `${SETTINGS_PREF}/preferences`,
      icon: Settings2Icon,
    },
    {
      title: 'Notifications',
      url: `${SETTINGS_PREF}/notifications`,
      icon: BellIcon,
    },
    {
      title: 'Security',
      url: `${SETTINGS_PREF}/security`,
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
        <MainNav items={data.main} />
        <SettingsNav items={data.settings} />
      </SidebarContent>
      <SidebarFooter>
        <UserMenu />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
