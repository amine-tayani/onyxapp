'use client';

import * as React from 'react';
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from '@/components/ui/alert-dialog';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function DeleteApplicationButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger>
        <Button
          size='icon'
          variant='link'
          className='h-5 w-5 outline-none focus-visible:ring-inset'
        >
          <XIcon className='h-5 w-5 text-muted-foreground/80 hover:text-primary' />
          <span className='sr-only'>Edit</span>
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from our servers.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction>Continue</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
