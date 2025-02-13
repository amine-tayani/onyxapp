'use client';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Application, ApplicationStatus } from '@/lib/db/types';

import { ApplicationCard } from './card';

interface GridModeProps {
  data: Application[];
}

export function GridMode({ data }: GridModeProps) {
  const labels = Object.values(ApplicationStatus).map((status) => ({
    label: status,
    value: status,
  }));

  return (
    <Tabs defaultValue={data[0].status} className='mt-3 space-y-4'>
      <div className='flex justify-between '>
        <TabsList className='w-full sm:w-auto '>
          {labels.map(({ label, value }) => (
            <TabsTrigger className='w-24 sm:w-auto' key={label} value={value}>
              <span className='capitalize'>{label.toLowerCase()}</span>
            </TabsTrigger>
          ))}
        </TabsList>
      </div>

      {labels.map(({ label, value }) => (
        <TabsContent key={label} value={value} className='space-y-4'>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {data.filter((application) => application.status === value)
              .length === 0 ? (
              <p className='p-2 text-sm text-muted-foreground'>
                No applications yet
              </p>
            ) : (
              data.map((item) => (
                <ApplicationCard application={item} key={item.id} />
              ))
            )}
          </div>
        </TabsContent>
      ))}
    </Tabs>
  );
}
