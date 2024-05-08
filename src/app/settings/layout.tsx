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
    <div className=''>
      <div className='space-y-6 p-10 pb-16 md:block lg:px-12'>
        <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
          <aside className='fixed top-14 z-30 -ml-2 hidden h-full shrink-0 md:sticky md:block'>
            <SidebarNav />
          </aside>
          <div className='flex-1 lg:max-w-3xl '>{children}</div>
        </div>
      </div>
    </div>
  );
}
