'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button size='icon' className='h-5 w-5'>
                  <LucideMoreVertical className='h-5 w-5 text-muted-foreground/80' />
                  <span className='sr-only'>More</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align='end'>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
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
