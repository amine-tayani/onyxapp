import { Pencil } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/lib/db/types';
import { buttonVariants } from '@/components/ui/button';
import { Skeleton } from '@/components/ui/skeleton';
import Link from 'next/link';
import { cn } from '@/lib/cn';

interface UserProfileProps {
  user: Pick<
    User,
    | 'id'
    | 'email'
    | 'createdAt'
    | 'bio'
    | 'image'
    | 'name'
    | 'skills'
    | 'location'
    | 'experience'
  >;
}

export default function UserProfile({ user }: UserProfileProps) {
  return (
    <div className='mx-auto max-w-2xl flex-1 space-y-4 rounded-xl bg-[#0E0E0E] p-8 pt-6'>
      <Card className='rounded-xl bg-transparent'>
        <CardHeader>
          <div className='flex items-center justify-between space-y-2'>
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage
                  className='h-20 w-20'
                  src={
                    user.image ||
                    'https://avatars.githubusercontent.com/u/104228?v=4'
                  }
                  alt={user.name || 'User Avatar'}
                />
                <AvatarFallback>
                  <Skeleton className='h-20 w-20 rounded-full' />
                </AvatarFallback>
              </Avatar>
              <div>
                <h1 className='text-4xl font-bold tracking-tight text-white'>
                  {user.name}
                </h1>
                <span className='text-lg text-muted-foreground/90'>
                  {user.email}
                </span>
              </div>
            </div>
            <div className='flex flex-col space-y-4'>
              <Link
                href='/settings/'
                className={cn(
                  buttonVariants(),
                  'text-neutral-300 outline-none hover:text-primary focus-visible:ring-inset'
                )}
              >
                <Pencil className='mr-2 h-5 w-5' />
                <span>Edit Profile</span>
              </Link>
            </div>
          </div>
        </CardHeader>
        <CardContent className='mt-4 flex flex-col'>
          <section className='flex flex-col space-y-4'>
            <h3 className='text-2xl font-bold tracking-tight text-white'>
              About me
            </h3>
            <p className='text-sm text-muted-foreground/90'>
              {user.bio || 'your bio goes here.'}
            </p>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}