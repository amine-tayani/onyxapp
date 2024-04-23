'use client';

import { Application } from '@/lib/db/types';
import { DataTable } from './data-table/data-table';
import { columns } from './data-table/columns';

interface TableViewProps {
  applications: Application[];
}

export function TableView({ applications }: TableViewProps) {
  return (
    <div className='py-4'>
      <DataTable data={applications} columns={columns} />
    </div>
  );
}
