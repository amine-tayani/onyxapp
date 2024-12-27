'use client';

import { Chrome, X } from 'lucide-react';

import { Button } from '@/components/ui/button';

interface SessionCardProps {
  userBrowser: string;
  userMachine: string;
  userLocation: string;
}

function SessionCard({
  userBrowser,
  userMachine,
  userLocation,
}: SessionCardProps) {
  return (
    <div className='group ml-4 flex items-center justify-between space-x-4 rounded-xl bg-muted/60 p-4 transition-colors duration-150 ease-in hover:bg-muted/80'>
      <div className='flex items-center space-x-4'>
        <div className='rounded-xl bg-neutral-700 p-2'>
          <Chrome className='size-5 text-primary' />
        </div>
        <div className='space-y-1'>
          <p className=' text-sm font-medium leading-none text-primary'>
            {userBrowser} on {userMachine}
          </p>
          <div className='flex items-center text-sm text-muted-foreground'>
            <div className='mr-1 size-1 rounded-full bg-green-500' />
            <span className='mr-1 text-green-600'>Current session</span>.{' '}
            {userLocation},
          </div>
        </div>
      </div>
      <Button className='hidden group-hover:flex' size='smi'>
        <X className='size-4' />
      </Button>
    </div>
  );
}

export default SessionCard;
