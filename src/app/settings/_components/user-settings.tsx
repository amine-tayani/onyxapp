'use client';

import { Separator } from '@/components/ui/separator';
import { ProfileForm } from './profile-form';
import { UserProfileProps } from '../../../types/user';

export default function UserSettings({ user }: UserProfileProps) {
  return (
    <div className='mt-20 space-y-4'>
      <div>
        <h3 className='text-lg font-semibold tracking-wide'>Profile</h3>
        <p className='text-sm text-muted-foreground'>
          Manage settings for your Onyx profile
        </p>
      </div>
      <Separator />
      <ProfileForm user={user} />
    </div>
  );
}
