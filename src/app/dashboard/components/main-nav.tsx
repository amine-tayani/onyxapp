'use client';

import { type LucideIcon } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import {
  SidebarGroup,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/components/ui/sidebar';
import { cn } from '@/lib/cn';

export function MainNav({
  items,
}: {
  items: {
    title: string;
    url: string;
    icon?: LucideIcon;
    isActive?: boolean;
    items?: {
      title: string;
      url: string;
    }[];
  }[];
}) {
  const pathname = usePathname();

  return (
    <SidebarGroup className='mt-4'>
      <SidebarGroupLabel>main</SidebarGroupLabel>
      <SidebarMenu>
        {items.map((item) => (
          <SidebarMenuItem>
            <SidebarMenuButton tooltip={item.title} asChild>
              <Link
                key={item.url}
                href={item.url}
                className={cn(
                  buttonVariants({ variant: 'sidenav' }),
                  pathname === item.url
                    ? 'bg-muted text-primary hover:bg-muted hover:text-primary'
                    : 'hover:bg-muted hover:text-primary',
                  'justify-start gap-x-2 [&>svg]:hover:text-primary'
                )}
              >
                {item.icon && (
                  <item.icon
                    strokeWidth={1.5}
                    className={cn(
                      pathname === item.url
                        ? 'text-primary'
                        : 'text-muted-foreground/80',
                      'h-5 w-5 transition-all duration-300 ease-in-out '
                    )}
                  />
                )}
                <span>{item.title}</span>
              </Link>
            </SidebarMenuButton>
            <SidebarMenuSub>
              {item.items?.map((subItem) => (
                <SidebarMenuSubItem key={subItem.title}>
                  <SidebarMenuSubButton asChild>
                    <a href={subItem.url}>
                      <span>{subItem.title}</span>
                    </a>
                  </SidebarMenuSubButton>
                </SidebarMenuSubItem>
              ))}
            </SidebarMenuSub>
          </SidebarMenuItem>
        ))}
      </SidebarMenu>
    </SidebarGroup>
  );
}
