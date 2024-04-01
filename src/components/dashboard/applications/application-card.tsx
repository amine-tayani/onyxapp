'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Application } from '@/lib/db/types';
import { LucideMoreVertical } from 'lucide-react';

interface Props {
  application: Application;
}

export function ApplicationCard({ application }: Props) {
  return (
    <Card className=' group space-y-1 rounded-xl'>
      <CardHeader className=' flex space-y-0 pb-0'>
        <CardTitle className='font-display text-sm font-medium text-muted-foreground '>
          <div className='flex items-center justify-between'>
            <span>{application.company}</span>
            <LucideMoreVertical className='hidden h-5 w-5 hover:text-neutral-100 group-hover:block' />
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className='text-2xl font-bold'>{application.title}</div>
        <p className=' font-display text-sm text-neutral-400'>
          {application.location}
        </p>
      </CardContent>
    </Card>
  );
}
