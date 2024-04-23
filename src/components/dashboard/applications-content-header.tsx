import { Grid, TableIcon } from 'lucide-react';
import { CreateAppButton } from './applications/create-application-button';
import { buttonVariants } from '../ui/button';
import { cn } from '@/lib/cn';
import Link from 'next/link';

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
          href='/dashboard?view=grid'
          className={cn(
            buttonVariants({
              variant: 'sidenav',
              size: 'icon',
              className: 'bg-muted text-muted-foreground/80',
            })
          )}
        >
          <Grid />
        </Link>
        <Link
          href='/dashboard?mode=table'
          className={cn(
            buttonVariants({
              variant: 'sidenav',
              size: 'icon',
              className: 'bg-muted text-muted-foreground/80',
            })
          )}
        >
          <TableIcon />
        </Link>
        <CreateAppButton />
      </div>
    </div>
  );
}
