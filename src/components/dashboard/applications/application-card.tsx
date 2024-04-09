'use client';

import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Application } from '@/lib/db/types';
import { EditApplicationButton } from './edit-application-button';
import { DeleteApplicationButton } from './delete-application-button';

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
            <div className='flex items-center space-x-2 opacity-0 transition-opacity duration-200 ease-in-out group-hover:opacity-100'>
              <EditApplicationButton />
              <DeleteApplicationButton />
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link href={`/applications/${application.id}`}>
          <div className='text-2xl font-bold'>{application.title}</div>
          <p className=' font-display text-sm text-neutral-400'>
            {application.location}
          </p>
        </Link>
      </CardContent>
    </Card>
  );
}
