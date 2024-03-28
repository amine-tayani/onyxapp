'use client';

import UserNav from '@/components/ui/navigation/user-nav';
import TeamSwitcher from '@/components/dashboard/team-switcher';

export default function NavHeader() {
  return (
    <div className='flex-1 space-y-4 p-8 pt-6'>
      <div className='hidden flex-col md:flex'>
        <div className='flex h-16 items-center justify-between px-4'>
          <TeamSwitcher />
          <div className='ml-auto flex items-center space-x-4'>
            <UserNav />
          </div>
        </div>
      </div>
    </div>
  );
}
