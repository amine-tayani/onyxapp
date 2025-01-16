'use client';

import format from 'date-fns/format';
import { LinkIcon, MapPinIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { UserProfileProps } from '@/types/user';

export default function UserProfileCard({ user }: UserProfileProps) {
  return (
    <div className='mt-8 min-h-screen'>
      <div className='relative px-10 py-3'>
        <Image
          src={
            user.banner
              ? user.banner
              : 'https://pbs.twimg.com/profile_banners/1603463890272194582/1714062352/1500x500'
          }
          alt='User Banner'
          className='size-full rounded-t-xl object-cover'
          width={1000}
          height={200}
        />
        <div className='absolute -bottom-16 left-8'>
          <div className='relative size-32'>
            <div className='flex items-center space-x-4'>
              <div className='relative'>
                <Avatar className='size-24 ring-2 ring-muted ring-offset-2 ring-offset-neutral-900'>
                  <AvatarImage
                    className='rounded-full border-4 border-background object-cover'
                    src={
                      user.avatar ||
                      'https://avatars.githubusercontent.com/u/104228?v=4'
                    }
                    alt={user.name || 'User Avatar'}
                    width={128}
                    height={128}
                  />
                  <AvatarFallback>
                    <Skeleton className='size-32 rounded-full' />
                  </AvatarFallback>
                </Avatar>
                <span className='absolute bottom-2 end-2'>
                  <span className='sr-only'>Verified</span>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='20'
                    height='20'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      className='fill-hero'
                      d='M3.046 8.277A4.402 4.402 0 0 1 8.303 3.03a4.4 4.4 0 0 1 7.411 0 4.397 4.397 0 0 1 5.19 3.068c.207.713.23 1.466.067 2.19a4.4 4.4 0 0 1 0 7.415 4.403 4.403 0 0 1-3.06 5.187 4.398 4.398 0 0 1-2.186.072 4.398 4.398 0 0 1-7.422 0 4.398 4.398 0 0 1-5.257-5.248 4.4 4.4 0 0 1 0-7.437Z'
                    />
                    <path
                      className='fill-hero'
                      d='M4.674 8.954a3.602 3.602 0 0 1 4.301-4.293 3.6 3.6 0 0 1 6.064 0 3.598 3.598 0 0 1 4.3 4.302 3.6 3.6 0 0 1 0 6.067 3.6 3.6 0 0 1-4.29 4.302 3.6 3.6 0 0 1-6.074 0 3.598 3.598 0 0 1-4.3-4.293 3.6 3.6 0 0 1 0-6.085Z'
                    />
                    <path
                      className='fill-primary'
                      d='M15.707 9.293a1 1 0 0 1 0 1.414l-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 1 1 1.414-1.414L11 12.586l3.293-3.293a1 1 0 0 1 1.414 0Z'
                    />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container mx-auto mt-20 grid gap-6 px-4 pb-8 md:grid-cols-3 lg:px-8'>
        <div className='md:col-span-2'>
          <div className='mb-6 space-y-4'>
            <div className='flex items-start justify-between'>
              <div>
                <h1 className='text-2xl font-bold'>{user.name}</h1>
                <div className='inline-flex gap-x-3'>
                  <p className='text-sm text-muted-foreground'>
                    @{user.name} · joined{' '}
                    {format(user.createdAt, 'MMM dd, yyyy')}
                  </p>
                  <span className='flex items-center text-sm text-muted-foreground'>
                    <MapPinIcon className='mr-1 size-4 ' />
                    {user.location}
                  </span>
                </div>
              </div>
              <Button>Edit Profile</Button>
            </div>
            <div className='flex gap-4'>
              <div className='flex items-center gap-2'>
                <span>
                  {user.experience === 0
                    ? 'no'
                    : user.experience === 1
                      ? '1 year'
                      : `${user.experience} years`}
                </span>
                <span className='text-sm text-muted-foreground'>
                  experience
                </span>
              </div>
            </div>
          </div>

          <div className='space-y-6'>
            <Card className='p-6'>
              <h2 className='mb-4 text-xl font-semibold'>About</h2>
              <div className='space-y-4'>
                <p className='text-sm leading-relaxed'>{user.bio}</p>
                <div className='space-y-2'>
                  <h3 className='font-semibold'>Skills</h3>
                  <div className='flex flex-wrap gap-2'>
                    {user.skills.map((skill) => (
                      <Badge key={skill.id}>{skill.text}</Badge>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>

        <div className='space-y-6'>
          <Card className='p-6'>
            <h2 className='mb-4 text-lg font-semibold'>Links</h2>
            <div className='space-y-3'>
              {user.socialLinks.map((link) => (
                <Link
                  key={link.id}
                  href={link.url}
                  className='flex items-center gap-2 text-sm text-blue-500 hover:underline'
                >
                  <LinkIcon className='size-4' />
                  <span>{link.url}</span>
                </Link>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
