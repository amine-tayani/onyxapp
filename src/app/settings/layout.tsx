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
      <div className='container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10'>
        <aside className='h-[calcfull fixed top-14 z-30 -ml-2 hidden shrink-0 md:sticky md:block'>
          <div className='h-full py-6 pr-6 lg:py-8'>
            <SidebarNav />
          </div>
        </aside>
        <div className='flex-1 lg:max-w-3xl '>{children}</div>
      </div>
    </div>
  );
}
