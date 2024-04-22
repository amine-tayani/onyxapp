import type { Metadata } from 'next';
import { siteConfig } from '@/config/site';
import UserNav from '@/components/ui/navigation/user-nav';
import { DashboardSidebar } from '@/components/dashboard/sidebar';
import { Icons } from '@/components/ui/icons';

export const metadata: Metadata = {
  title: 'Dashboard | Onyx',
  description: `${siteConfig.description}`,
};

export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='flex-1 space-y-4 p-8 pt-6'>
        <div className='flex h-16 items-center justify-between px-4'>
          <div className='flex items-center space-x-4'>
            <Icons.logo className='h-8 w-8' />
          </div>
          <div className='ml-auto'>
            <UserNav align='end' />
          </div>
        </div>
        <div className='flex flex-1'>
          <DashboardSidebar />
          {children}
        </div>
      </div>
    </main>
  );
}
