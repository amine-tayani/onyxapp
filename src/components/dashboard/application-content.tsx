'use client';

import { useSearchParams } from 'next/navigation';

import { Application } from '@/lib/db/types';

import { GridView } from './applications/grid';
import { TableView } from './applications/table';
import { ApplicationsContentHeader } from './content-header';
import { EmptyPlaceholder } from './empty-placeholder';

interface ApplicationsContentProps {
  applications: Application[];
}

export function ApplicationsContent({
  applications,
}: ApplicationsContentProps) {
  const params = useSearchParams();
  const mode = params.get('mode');

  return (
    <div className='flex-1 px-6'>
      <ApplicationsContentHeader />
      {applications.length === 0 ? (
        <EmptyPlaceholder />
      ) : mode === 'table' ? (
        <TableView applications={applications} />
      ) : (
        <GridView applications={applications} />
      )}
    </div>
  );
}
