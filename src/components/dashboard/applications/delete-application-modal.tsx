/* eslint-disable unused-imports/no-unused-vars */
'use client';

import { useRouter } from 'next/navigation';
import * as React from 'react';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { Spinner } from '@/components/ui/spinner';

import { deleteApplication } from './_actions';

interface DeleteApplicationDialogProps {
  applicationId: string;
  isDeleteApplicationDialogOpen?: boolean;
  // eslint-disable-next-line no-unused-vars
  setDeleteApplicationDialogOpen: (o: boolean) => void;
}

export function DeleteApplicationModal({
  applicationId,
  setDeleteApplicationDialogOpen,
  isDeleteApplicationDialogOpen,
}: DeleteApplicationDialogProps) {
  const router = useRouter();
  const [loading, setLoading] = React.useState(false);

  const handleDeleteApplication = async () => {
    try {
      await deleteApplication(applicationId);
      setLoading(true);
      toast.info('Application is deleted now.');
      router.refresh();
    } catch (err) {
      toast.error('Error occured while deleting application');
    } finally {
      setLoading(false);
      setDeleteApplicationDialogOpen(false);
    }
  };

  return (
    <>
      <Dialog open={isDeleteApplicationDialogOpen}>
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
              onClick={() => setDeleteApplicationDialogOpen(false)}
            >
              Cancel
            </Button>
            <Button
              variant='destructive'
              onClick={() => {
                void handleDeleteApplication();
              }}
            >
              {loading ? (
                <>
                  <Spinner /> Deleting
                </>
              ) : (
                'Delete'
              )}
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  );
}
