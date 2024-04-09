'use client';

import * as React from 'react';
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
// import { Spinner } from '@/components/ui/spinner';

export function DeleteApplicationButton() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

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
                // form.clearErrors();
                // form.reset();
                setDialogOpen(false);
              }}
            >
              Cancel
            </Button>
            <Button
              // disabled={form.formState.isSubmitting || loading}
              className='bg-hero hover:bg-purple-800 disabled:cursor-not-allowed disabled:opacity-20 disabled:hover:bg-none'
              type='submit'
            >
              Delete
              {/* {form.formState.isSubmitting || loading ? <Spinner /> : 'Delete'} */}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
