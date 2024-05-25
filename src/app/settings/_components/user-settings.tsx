'use client';

import { Separator } from '@/components/ui/separator';
import { UpdateProfileForm } from './update-profile';
import { UserProfileProps } from '@/types/user';

export default function UserSettings({ user }: UserProfileProps) {
  return (
    <div className='space-y-4'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          Manage settings for your Onyx profile
        </p>
      </div>
      <Separator />
      <UpdateProfileForm user={user} />
    </div>
  );
}
