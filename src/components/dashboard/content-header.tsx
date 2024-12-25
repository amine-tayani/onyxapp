import { LucideContainer } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { cn } from '@/lib/cn';

import { buttonVariants } from '../ui/button';
import { CreateAppButton } from './applications/create';

export function ApplicationsContentHeader() {
  const params = useSearchParams();
  const mode = params.get('mode');
  return (
    <div className='mt-2 flex items-center justify-end gap-2'>
      <Link
        href={!mode ? '/dashboard?mode=table' : '/dashboard'}
        className={cn(
          buttonVariants({
            size: 'sm',
            variant: 'link',
          }),
          'flex h-8 w-24 gap-2 rounded-lg text-muted-foreground'
        )}
      >
        <LucideContainer className='size-4' />
        <span className='hidden md:block'>View</span>
      </Link>
      {/* <div className='flex items-center gap-x-4 '>
        <Link
          href='/dashboard'
          className={cn(
            buttonVariants({
              className: 'flex items-center text-muted-foreground',
            })
          )}
        >
          <Icons.gridIcon className='size-5' />
          <span className='ml-2 hidden md:inline'>Grid</span>
        </Link>
        <Link
          href='/dashboard?mode=table'
          className={cn(
            buttonVariants({
              className: 'flex items-center text-muted-foreground',
            })
          )}
        >
          <TableIcon strokeWidth={1} className='size-5' />
          <span className='ml-2 hidden md:inline'>Table</span>
        </Link> */}
      <CreateAppButton />
      {/* </div> */}
    </div>
  );
}
