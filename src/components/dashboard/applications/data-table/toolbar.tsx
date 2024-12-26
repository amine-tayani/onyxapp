'use client';

import { Table } from '@tanstack/react-table';
import { RotateCwIcon } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

import { statuses } from './data';
import { DataTableFacetedFilter } from './faceted-filter';
import { DataTableViewOptions } from './option-view';

interface DataTableToolbarProps<TData> {
  table: Table<TData>;
}

export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0;

  return (
    <div className='mb-2 mt-4 flex items-center'>
      <div className='flex flex-1 items-center space-x-2'>
        <Input
          placeholder='Filter applications...'
          value={(table.getColumn('title')?.getFilterValue() as string) ?? ''}
          onChange={(event) =>
            table.getColumn('title')?.setFilterValue(event.target.value)
          }
          className='h-8 w-[150px] border-none bg-muted hover:bg-muted/70 focus:bg-muted/60 lg:w-[250px]'
        />
        {table.getColumn('status') && (
          <DataTableFacetedFilter
            column={table.getColumn('status')}
            title='Filter'
            options={statuses}
          />
        )}

        {isFiltered && (
          <Button
            variant='link'
            onClick={() => table.resetColumnFilters()}
            className='group h-8 px-2 text-muted-foreground hover:text-primary lg:px-3'
          >
            Reset
            <RotateCwIcon className='ml-2 size-4' />
          </Button>
        )}
      </div>
      <DataTableViewOptions table={table} />
    </div>
  );
}
