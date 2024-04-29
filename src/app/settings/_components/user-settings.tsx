'use client';

import { Separator } from '@/components/ui/separator';
import { ProfileForm } from './profile-form';
import { UserProfileProps } from './props';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb';
import { ArrowLeft } from 'lucide-react';

export default function UserSettings({ user }: UserProfileProps) {
  return (
    <div className='space-y-4'>
      <Breadcrumb className='mb-8'>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              className='inline-flex items-center space-x-2'
              href={`/profile/${user.name}`}
            >
              <ArrowLeft className='h-4 w-4' />
              <span>Profile</span>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator>/</BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage>Settings</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
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
