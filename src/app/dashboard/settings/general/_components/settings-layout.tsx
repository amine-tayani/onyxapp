'use client';

import { UserProfileProps } from '@/types/user';

import { GeneralSettingsForm } from './form';

export default function UserGeneralSettings({ user }: UserProfileProps) {
  return (
    <div className='m-6 flex max-w-3xl flex-col space-y-6'>
      <div>
        <h3 className='text-xl font-semibold leading-loose tracking-wide'>
          General
        </h3>
        <p className='text-sm text-primary/80'>Onyx profile</p>
      </div>
      <GeneralSettingsForm user={user} />
    </div>
  );
}
