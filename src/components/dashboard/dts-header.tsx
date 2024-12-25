import { LucideContainer } from 'lucide-react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';

import { buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/cn';

import { CreateAppButton } from './applications/create';

export function DTSHeader() {
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
      <CreateAppButton />
    </div>
  );
}
