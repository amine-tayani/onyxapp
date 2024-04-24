import { CreateAppButton } from './applications/create-application-button';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';
import { Icons } from '../ui/icons';

export function ApplicationsContentHeader() {
  return (
    <div className='mt-2 flex items-center justify-between'>
      <div>
        <h2 className='text-3xl font-bold tracking-tight'>
          Jobs you applied to
        </h2>
      </div>
      <div className='flex items-center gap-x-4'>
        <Link
          href='/dashboard'
          className={cn(
            buttonVariants({
              className: 'flex items-center text-muted-foreground',
            })
          )}
        >
          <Icons.gridIcon className='h-5 w-5' />
          <span className='ml-2'>Grid</span>
        </Link>
        <Link
          href='/dashboard?mode=table'
          className={cn(
            buttonVariants({
              className: 'flex items-center text-muted-foreground',
            })
          )}
        >
          <Icons.tableIcon className='h-5 w-5' />
          <span className='ml-2 '>Table</span>
        </Link>
        <CreateAppButton />
      </div>
    </div>
  );
}
