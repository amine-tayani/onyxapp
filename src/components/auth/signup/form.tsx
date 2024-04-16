'use client';

import * as React from 'react';
import * as z from 'zod';
import Link from 'next/link';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/toast/use-toast';
import { Input } from '@/components/ui/input';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { SignupSchema } from './validators';
import { Spinner } from '@/components/ui/spinner';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export type SignupFormSchema = z.infer<typeof SignupSchema>;

export function CreateAccountForm({ className, ...props }: UserAuthFormProps) {
  const [loading, setLoading] = React.useState(false);
  const { toast } = useToast();
  const router = useRouter();
  const form = useForm<SignupFormSchema>({
    resolver: zodResolver(SignupSchema),
    mode: 'onChange',
    defaultValues: {
      email: '',
      password: '',
    },
  });

  async function onSubmit(data: SignupFormSchema) {
    try {
      setLoading(true);
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        toast({
          variant: 'destructive',
          description: await response.json(),
        });
      } else {
        toast({
          variant: 'mytheme',
          title: 'Account created.',
          description: 'Check you email for more infos.',
        });
        router.push('/login');
      }
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className={cn('grid gap-4', className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className='mt-2 grid gap-4'>
            <div className='grid gap-2'>
              <FormField
                name='email'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Email
                    </FormLabel>
                    <FormControl>
                      <Input
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        placeholder='Your email address'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <div className='grid gap-2'>
              <FormField
                name='password'
                control={form.control}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='text-muted-foreground/80'>
                      Password
                    </FormLabel>
                    <FormControl>
                      <Input
                        type='password'
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        placeholder='Your password'
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
          </div>

          <div className='my-4 flex items-center space-x-4'>
            <Button
              size='sm'
              className='bg-hero px-4 hover:bg-hero/90 disabled:cursor-not-allowed disabled:opacity-50'
              type='submit'
              disabled={loading}
            >
              {loading ? <Spinner /> : 'Sign up'}
            </Button>
            <p className='text-sm text-muted-foreground'>
              Already have an account?{' '}
              <Link
                href='/login'
                className='text-neutral-300 hover:text-neutral-100'
              >
                Login
              </Link>
            </p>
          </div>
        </form>
      </Form>
    </div>
  );
}
