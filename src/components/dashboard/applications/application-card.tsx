'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Application } from '@/lib/db/types';

interface Props {
  application: Application;
}

export function ApplicationCard({ application }: Props) {
  return (
    <Card className=' space-y-1 rounded-xl'>
      <CardHeader className=' flex flex-row items-center justify-between space-y-0 pb-0'>
        <CardTitle className='font-display text-sm  font-medium text-muted-foreground '>
          {application.company}
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
