// @ts-nocheck

'use client';

import { SettingsIcon } from 'lucide-react';
import Link from 'next/link';
import * as React from 'react';

import { Icons } from '@/components/ui/icons';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from '@/components/ui/sidebar';

import { DashboardSideNav } from './sidenav';
import { UserMenu } from './user-menu';

const data = {
  sideNav: [
    {
      title: 'Settings',
      url: '#',
      icon: SettingsIcon,
      isActive: true,
      items: [
        {
          title: 'General',
          url: '#',
        },
        {
          title: 'Team',
          url: '#',
        },
        {
          title: 'Billing',
          url: '#',
        },
      ],
    },
  ],
};

export function DashboardSidebar({
  ...props
}: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible='icon' {...props}>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size='lg' asChild>
              <Link href='/' className=''>
                <Icons.logo className='size-8' />
                <span className='truncate text-sm font-semibold leading-tight'>
                  Onyx
                </span>
              </Link>
            </SidebarMenuButton>
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
