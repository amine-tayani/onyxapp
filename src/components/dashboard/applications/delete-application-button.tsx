'use client';

import * as React from 'react';
import { useRouter } from 'next/navigation';
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogFooter,
  DialogTitle,
  DialogHeader,
  DialogDescription,
} from '@/components/ui/dialog';
import { XIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Spinner } from '@/components/ui/spinner';
import { useToast } from '@/components/toast/use-toast';
import type { Application } from '@/lib/db/types';
import { deleteApplication } from './_actions';

interface Props {
  application: Application;
}

export function DeleteApplicationButton({ application }: Props) {
  const [dialogOpen, setDialogOpen] = React.useState(false);
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();

  const handleDeleteApplication = async () => {
    try {
      await deleteApplication(application);
      setLoading(true);
      toast({
        variant: 'mytheme',
        title: 'Application Deleted',
        description: 'The Application was successfully deleted.',
      });
      router.refresh();
    } catch (err) {
      toast({
        title: 'Uh Oh!',
        variant: 'destructive',
        description:
          'An error occurred while trying to delete your application.',
      });
    } finally {
      setLoading(false);
      setDialogOpen(false);
    }
  };

  return (
    <>
      <Dialog open={dialogOpen} onOpenChange={(o) => setDialogOpen(o)}>
        <DialogTrigger asChild>
          <Button
            onClick={() => {
              setDialogOpen(!dialogOpen);
            }}
            size='icon'
            variant='link'
            className='group h-5 w-5 outline-none focus-visible:ring-inset'
          >
            <XIcon className='h-5 w-5 text-muted-foreground/80 hover:text-primary' />
            <span className='sr-only'>Delete</span>
          </Button>
        </DialogTrigger>

        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
          }}
          className='bg-[#1d1d1d] px-8 py-6'
        >
          <DialogHeader>
            <DialogTitle className='text-2xl font-semibold text-neutral-100'>
              Are you absolutely sure?
            </DialogTitle>
            <DialogDescription>
              This action cannot be undone. This will permanently delete this
              application
            </DialogDescription>
          </DialogHeader>

          <DialogFooter className='flex-row items-center justify-end gap-1 pt-4 '>
            <Button
              type='button'
              onClick={() => {
                setDialogOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              variant='destructive'
              onClick={() => {
                void handleDeleteApplication();
              }}
            >
              {loading ? <Spinner /> : 'Delete'}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
