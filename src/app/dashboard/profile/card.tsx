'use client';

import format from 'date-fns/format';
import {
  Globe2,
  Mail,
  MapPinIcon,
  MessageSquare,
  Star,
  Users,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { UserProfileProps } from '@/types/user';

export default function UserProfileCard({ user }: UserProfileProps) {
  return (
    <div className='min-h-screen bg-background'>
      <div className='relative h-48 bg-muted'>
        <Image
          src={
            user.banner
              ? user.banner
              : 'https://pbs.twimg.com/profile_banners/1603463890272194582/1714062352/1500x500'
          }
          alt='User Banner'
          className='size-full rounded-t-xl object-cover'
          width={1200}
          height={200}
        />
        <div className='absolute -bottom-16 left-8'>
          <div className='relative size-32'>
            <div className='flex items-center space-x-4'>
              <Avatar className='ring-4 ring-muted ring-offset-4 ring-offset-neutral-900'>
                <AvatarImage
                  className='rounded-full border-4 border-background'
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

          <Tabs defaultValue='profile' className='space-y-4'>
            <TabsList>
              <TabsTrigger value='profile'>Profile</TabsTrigger>
              <TabsTrigger value='threads'>Threads</TabsTrigger>
              <TabsTrigger value='shows'>Shows</TabsTrigger>
              <TabsTrigger value='series'>Series</TabsTrigger>
              <TabsTrigger value='guestbook'>Guestbook</TabsTrigger>
            </TabsList>
            <TabsContent value='profile' className='space-y-6'>
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
            </TabsContent>
          </Tabs>
        </div>

        <div className='space-y-6'>
          <Card className='p-6'>
            <h2 className='mb-4 text-lg font-semibold'>Links</h2>
            <div className='space-y-3'>
              <Link
                href='#'
                className='flex items-center gap-2 text-sm text-blue-500 hover:underline'
              >
                <Mail className='size-4' />
                {user.email}
              </Link>
              <Link
                href='#'
                className='flex items-center gap-2 text-sm text-blue-500 hover:underline'
              >
                <Globe2 className='size-4' />
                {user.socialLinks[1].url}
              </Link>
              <Link
                href='https://linkedin.com'
                className='flex items-center gap-2 text-sm text-blue-500 hover:underline'
              >
                <svg className='size-4' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z'></path>
                </svg>
                {user.socialLinks[0].url}
              </Link>
              <Link
                href='https://github.com'
                className='flex items-center gap-2 text-sm text-blue-500 hover:underline'
              >
                <svg className='size-4' viewBox='0 0 24 24' fill='currentColor'>
                  <path d='M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.17 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.167 22 16.418 22 12c0-5.523-4.477-10-10-10z'></path>
                </svg>
                GitHub Profile
              </Link>
            </div>
          </Card>

          <Card className='p-6'>
            <h2 className='mb-4 text-lg font-semibold'>Community Karma</h2>
            <div className='space-y-4'>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <MessageSquare className='size-4 text-blue-500' />
                  <span className='text-sm'>Threads</span>
                </div>
                <span className='font-semibold'>7,216</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <MessageSquare className='size-4 text-green-500' />
                  <span className='text-sm'>Replies</span>
                </div>
                <span className='font-semibold'>4,812</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Star className='size-4 text-yellow-500' />
                  <span className='text-sm'>Shows</span>
                </div>
                <span className='font-semibold'>37</span>
              </div>
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-2'>
                  <Users className='size-4 text-purple-500' />
                  <span className='text-sm'>People invited</span>
                </div>
                <span className='font-semibold'>260</span>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}
