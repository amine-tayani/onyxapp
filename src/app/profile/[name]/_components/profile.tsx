import { HeartIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { User } from '@/lib/db/types';
import { Skeleton } from '@/components/ui/skeleton';

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
              <Button className='w-full'>
                Follow
                <span className='ml-2'>
                  <HeartIcon className='h-4 w-4' />
                </span>
              </Button>
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
