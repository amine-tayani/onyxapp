'use client';

import * as React from 'react';
import * as z from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { UserProfileProps } from '@/types/user';
import { cn } from '@/lib/cn';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from '@/components/toast/use-toast';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Skeleton } from '@/components/ui/skeleton';
import { profileFormSchema } from './profile-form-schema';
import { PlusIcon, Upload, X } from 'lucide-react';

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function ProfileForm({ user }: UserProfileProps) {
  const [preview, setPreview] = React.useState('');

  function getImageData(event: React.ChangeEvent<HTMLInputElement>) {
    const dataTransfer = new DataTransfer();

    Array.from(event.target.files!).forEach((image) =>
      dataTransfer.items.add(image)
    );

    const files = dataTransfer.files;
    const displayUrl = URL.createObjectURL(event.target.files![0]);

    return { files, displayUrl };
  }

  const defaultValues: Partial<ProfileFormValues> = {
    name: user.name || '',
    email: user.email || '',
    bio: user.bio || '',
    urls: [{ value: '' }],
    media: undefined,
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields, append, remove } = useFieldArray({
    name: 'urls',
    control: form.control,
  });

  function onSubmit(data: ProfileFormValues) {
    toast({
      variant: 'mytheme',
      title: 'You submitted the following values:',
      description: <pre>{JSON.stringify(data, null, 2)}</pre>,
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Avatar>
              <AvatarImage
                src={
                  preview
                    ? preview
                    : 'https://avatars.githubusercontent.com/u/104228?v=4'
                }
                alt='avatar'
                className='h-14 w-14 object-cover object-center'
                width={40}
              />
              <AvatarFallback>
                <Skeleton className='h-14 w-14 rounded-full bg-background' />
              </AvatarFallback>
            </Avatar>
            <FormField
              control={form.control}
              name='media'
              render={({ field }) => (
                <FormItem>
                  <Label className='text-neutral-300'>Profile picture</Label>
                  <FormControl>
                    <div className='flex space-x-4'>
                      <Button type='button' size='sm'>
                        <Input
                          type='file'
                          className='hidden'
                          id='fileInput'
                          name={field.name}
                          disabled={form.formState.isLoading}
                          onChange={(e) => {
                            const { files, displayUrl } = getImageData(e);
                            setPreview(displayUrl);
                            field.onChange(files);
                            toast({
                              variant: 'mytheme',
                              description: 'Uploading Picture...',
                            });
                          }}
                          ref={field.ref}
                        />
                        <label
                          htmlFor='fileInput'
                          className='flex items-center space-x-2'
                        >
                          <Upload className='h-4 w-4' />
                          <span className='whitespace-nowrap'>Upload</span>
                        </label>
                      </Button>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          {/* show x delete button only when we have image in db otherwise hide it */}
        </div>

        <div className='grid grid-cols-2 gap-x-3'>
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <Label className='text-neutral-300'>Username</Label>
                <FormControl>
                  <Input
                    className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                    placeholder='Your name'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='email'
            render={({ field }) => (
              <FormItem>
                <Label className='text-neutral-300'>Email</Label>
                <FormControl>
                  <Input
                    className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                    placeholder='Edit your email'
                    {...field}
                  />
                </FormControl>

                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name='bio'
          render={({ field }) => (
            <FormItem>
              <Label className='text-neutral-300'>About</Label>
              <FormControl>
                <Textarea
                  className='resize-none border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                  placeholder='Tell us a bit about yourself'
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className='relative'>
          {fields.map((field, index) => (
            <FormField
              control={form.control}
              key={field.id}
              name={`urls.${index}.value`}
              render={({ field }) => (
                <FormItem>
                  <Label
                    className={cn(index !== 0 && 'sr-only', 'text-neutral-300')}
                  >
                    URLs
                  </Label>
                  <FormDescription className={cn(index !== 0 && 'sr-only')}>
                    Add links to your website, blog, or social media profiles.
                  </FormDescription>
                  <div className='flex items-center space-x-2'>
                    <FormControl>
                      <Input
                        className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                        {...field}
                      />
                    </FormControl>

                    {fields.length > 1 && (
                      <div className='flex items-center space-x-2'>
                        <Button
                          type='button'
                          variant='link'
                          size='icon'
                          className='hover:scale-110 hover:text-primary'
                          onClick={() => remove(index)}
                        >
                          <X className=' h-4 w-4' />
                        </Button>
                      </div>
                    )}
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />
          ))}
          <Button
            type='button'
            size='sm'
            className='absolute right-0 top-0 text-neutral-300'
            onClick={() => append({ value: '' })}
          >
            <PlusIcon className='mr-2 h-4 w-4' />
            Add URL
          </Button>
        </div>
        <Button className='text-neutral-300' type='submit'>
          Save Changes
        </Button>
      </form>
    </Form>
  );
}
