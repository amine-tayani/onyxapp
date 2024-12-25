'use client';

import { useSearchParams } from 'next/navigation';

import { Application } from '@/lib/db/types';

import { GridMode } from './applications/grid-mode';
import { TableMode } from './applications/table-mode';
import { DTSHeader } from './dts-header';
import { EmptyPlaceholder } from './empty-placeholder';

interface MainViewProps {
  applications: Application[];
}

export function MainView({ applications }: MainViewProps) {
  const params = useSearchParams();
  const mode = params.get('mode');

  return (
    <div className='flex-1 px-6'>
      <DTSHeader />
      {applications.length === 0 ? (
        <EmptyPlaceholder />
      ) : mode === 'table' ? (
        <TableMode data={applications} />
      ) : (
        <GridMode data={applications} />
      )}
    </div>
  );
}
