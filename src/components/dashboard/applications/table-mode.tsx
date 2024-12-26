'use client';

import { Application } from '@/lib/db/types';

import { DataTable } from './data-table';
import { columns } from './data-table/columns';

interface TableModeProps {
  data: Application[];
}

export function TableMode({ data }: TableModeProps) {
  return (
    <div className='py-4'>
      <DataTable data={data} columns={columns} />
    </div>
  );
}
