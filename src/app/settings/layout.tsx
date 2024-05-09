import type { Metadata } from 'next';
import { SidebarNav } from './_components/sidebar-nav';

export const metadata: Metadata = {
  title: 'Settings | Onyx',
  description: 'onyx user Settings page',
};

export default async function SettingsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <div className='space-y-6 p-10 pb-16 md:block lg:px-12'>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <SidebarNav />
          <div className='flex-1 lg:max-w-2xl'>{children}</div>
        </div>
      </div>
    </main>
  );
}
