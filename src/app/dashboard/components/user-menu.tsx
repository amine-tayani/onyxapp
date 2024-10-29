'use client';

import {
  Bell,
  ChevronsUpDown,
  CreditCard,
  LogOutIcon,
  Settings,
  User,
} from 'lucide-react';
import Link from 'next/link';
import { useSession } from 'next-auth/react';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { LogoutButton } from '@/components/ui/navigation/logout-button';
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from '@/components/ui/sidebar';
import { Skeleton } from '@/components/ui/skeleton';

export function UserMenu() {
  const { isMobile } = useSidebar();
  const { data: session, status } = useSession();

  if (status === 'loading')
    return <Skeleton className='w-full rounded-lg bg-muted py-6' />;

  if (!session || !session.user) {
    return null;
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <Avatar className='h-8 w-8'>
                <AvatarImage
                  alt={session.user.name ?? 'avatar'}
                  src={
                    session.user.avatar ??
                    'https://avatars.githubusercontent.com/u/104228?v=4'
                  }
                />
                <AvatarFallback>
                  <Skeleton className='h-8 w-8 rounded-full py-3' />
                </AvatarFallback>
              </Avatar>
              <div className='flex flex-col space-y-1'>
                <p className='text-sm font-medium leading-none'>
                  {session.user.name}
                </p>
                <p className='text-xs leading-none'>{session.user.email}</p>
              </div>
              <ChevronsUpDown className='ml-auto h-4 w-4' />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className='min-w-56 w-[--radix-dropdown-menu-trigger-width] rounded-lg'
            side={isMobile ? 'bottom' : 'right'}
            align='end'
            sideOffset={4}
          >
            <DropdownMenuLabel className='p-0 font-normal'>
              <div className='flex items-center gap-2 px-1 py-1.5 text-left text-sm'>
                <Avatar className='h-8 w-8'>
                  <AvatarImage
                    alt={session.user.name ?? 'avatar'}
                    src={
                      session.user.avatar ??
                      'https://avatars.githubusercontent.com/u/104228?v=4'
                    }
                  />
                  <AvatarFallback>
                    <Skeleton className='h-8 w-8 rounded-full py-3' />
                  </AvatarFallback>
                </Avatar>
                <div className='flex flex-col space-y-1'>
                  <p className='text-sm font-medium leading-none'>
                    {session.user.name}
                  </p>
                  <p className='text-xs leading-none'>{session.user.email}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <Link href={`/profile/${session.user.name}`}>
                <DropdownMenuItem>
                  <User className='mr-2 h-5 w-5' />
                  Profile
                </DropdownMenuItem>
              </Link>
              <Link href='/settings'>
                <DropdownMenuItem>
                  <Settings className='mr-2 h-5 w-5' />
                  Settings
                </DropdownMenuItem>
              </Link>
              <DropdownMenuItem>
                <CreditCard className='mr-2 h-5 w-5' />
                Billing
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Bell className='mr-2 h-5 w-5' />
                Notifications
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem>
              <LogOutIcon className='mr-2 h-5 w-5' />
              <LogoutButton />
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}
