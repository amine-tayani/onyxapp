import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { HeartIcon } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

export default async function ProfilePage() {
  return (
    <div className='mx-auto max-w-2xl flex-1 space-y-4 rounded-xl bg-[#0E0E0E] p-8 pt-6'>
      <Card className='rounded-xl bg-transparent'>
        <CardHeader>
          <div className='flex items-center justify-between space-y-2'>
            <div className='flex items-center space-x-4'>
              <Avatar>
                <AvatarImage
                  className='h-20 w-20'
                  src='https://pbs.twimg.com/profile_images/1781740852903047168/gMqrfRkz_400x400.png'
                  alt='Amine Tayani'
                />
                <AvatarFallback>AM</AvatarFallback>
              </Avatar>
              <div>
                <h1 className='text-4xl font-bold tracking-tight text-white'>
                  Amine Tayani
                </h1>
                <span className='text-lg text-muted-foreground/90'>
                  Software Engineer
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
              I am a software engineer with a passion for building web
              applications. I have a degree in Computer Science from the
              University of California, Berkeley. I have worked on various
              projects, including building web applications, mobile apps, and
              desktop software.
            </p>

            <section className='flex flex-col space-y-4'>
              <h3 className='text-2xl font-bold tracking-tight text-white'>
                Skills
              </h3>
              <ul className='space-x-2 space-y-2'>
                <Badge variant='secondary'>TypeScript</Badge>
                <Badge variant='secondary'>React</Badge>
                <Badge variant='secondary'>Next.js</Badge>
                <Badge variant='secondary'>Tailwind CSS</Badge>
                <Badge variant='secondary'>Node.js</Badge>
                <Badge variant='secondary'>MongoDB</Badge>
                <Badge variant='secondary'>Express</Badge>
                <Badge variant='secondary'>Git</Badge>
                <Badge variant='secondary'>Vue.js</Badge>
                <Badge variant='secondary'>Angular</Badge>
                <Badge variant='secondary'>Svelte</Badge>
                <Badge variant='secondary'>Flutter</Badge>
                <Badge variant='secondary'>Kotlin</Badge>
                <Badge variant='secondary'>C#</Badge>
                <Badge variant='secondary'>Python</Badge>
                <Badge variant='secondary'>Go</Badge>
              </ul>
            </section>
          </section>
        </CardContent>
      </Card>
    </div>
  );
}
