'use client';

import { Application } from '@/lib/db/types';

import { columns } from './data-table/columns';
import { DataTable } from './data-table/data-table';

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
