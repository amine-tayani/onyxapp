'use client';

import * as React from 'react';
import * as z from 'zod';
import Image from 'next/image';
import { zodResolver } from '@hookform/resolvers/zod';
import { useFieldArray, useForm } from 'react-hook-form';
import { ImagePlus, Upload } from 'lucide-react';
import { UserProfileProps } from '@/types/user';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
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
import { profileFormSchema } from './profile-schema';
import { useUploadThing } from '@/utils/use-upload-thing';
import { getImageData } from '@/utils/image';
import { Spinner } from '@/components/ui/spinner';
import { updateGeneralSettings } from '../actions';

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function GeneralSettingsForm({ user }: UserProfileProps) {
  const [avatarPreview, setAvatarPreview] = React.useState('');
  const [bannerPreview, setBannerPreview] = React.useState('');
  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);
  const [bannerFile, setBannerFile] = React.useState<File | null>(null);

  const { startUpload: startAvatarUpload } = useUploadThing(
    'avatarImageUploader',
    {
      onClientUploadComplete: () => {
        toast({
          variant: 'mytheme',
          title: 'Avatar upload is Complete. ',
        });
      },
      onUploadError: () => {
        toast({
          variant: 'destructive',
          description: 'Error occurred while uploading the avatar',
        });
      },
    }
  );

  const { startUpload: startBannerUpload } = useUploadThing(
    'bannerImageUploader',
    {
      onClientUploadComplete: () => {
        toast({
          variant: 'mytheme',
          title: 'Banner upload is Complete. ',
        });
      },
      onUploadError: () => {
        toast({
          variant: 'destructive',
          description: 'Error occurred while uploading the banner',
        });
      },
    }
  );

  const socialLinksLength = user.socialLinks?.length || 0;
  const socialLinks = (user.socialLinks = [
    ...user.socialLinks,
    ...Array(3 - socialLinksLength).fill({
      id: null,
      url: '',
    }),
  ]).sort((a, b) => b.url.localeCompare(a.url));

  const defaultValues: Partial<ProfileFormValues> = {
    name: user.name || '',
    email: user.email || '',
    bio: user.bio || '',
    links: socialLinks,
    avatar: user.avatar || undefined,
    banner: user.banner || undefined,
  };

  const form = useForm<ProfileFormValues>({
    resolver: zodResolver(profileFormSchema),
    defaultValues,
    mode: 'onChange',
  });

  const { fields } = useFieldArray({
    name: 'links',
    control: form.control,
  });

  async function onSubmit(data: ProfileFormValues) {
    const avatarUploadResult = await startAvatarUpload([avatarFile!]);
    const bannerUploadResult = await startBannerUpload([bannerFile!]);

    data.avatar = avatarUploadResult && avatarUploadResult[0]?.url;
    data.banner = bannerUploadResult && bannerUploadResult[0]?.url;

    try {
      await updateGeneralSettings(data);
      toast({
        variant: 'mytheme',
        title: 'Your profile Settings has been successfully updated.',
      });
    } catch (error) {
      toast({
        variant: 'destructive',
        title: 'Something went wrong while updating your profile.',
      });
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
        <div className='flex items-center justify-between'>
          <div className='flex items-center space-x-4'>
            <Avatar>
              <AvatarImage
                src={
                  user.avatar
                    ? user.avatar
                    : avatarPreview
                      ? avatarPreview
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
              name='avatar'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex space-x-4'>
                      <Button type='button' size='sm'>
                        <Input
                          type='file'
                          id='fileInput'
                          name={field.name}
                          ref={field.ref}
                          className='hidden'
                          disabled={form.formState.isLoading}
                          onChange={(e) => {
                            const files = getImageData(e, setAvatarPreview);
                            field.onChange(files);
                            setAvatarFile(e.target.files![0]);
                          }}
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
        </div>

        <div className='flex flex-col items-center justify-center space-y-4'>
          <div className='group relative w-full '>
            <div className='mt-2 h-[140px] rounded-lg bg-hero'>
              {bannerPreview && (
                <Image
                  height={400}
                  src={bannerPreview}
                  alt='banner'
                  className='h-[140px] w-full rounded-lg object-cover object-center group-hover:blur-sm '
                  width={1000}
                />
              )}
            </div>
            <FormField
              control={form.control}
              name='banner'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex space-x-4'>
                      <Input
                        type='file'
                        id='bannerInput'
                        name={field.name}
                        ref={field.ref}
                        className='hidden'
                        disabled={form.formState.isLoading}
                        onChange={(e) => {
                          const files = getImageData(e, setBannerPreview);
                          field.onChange(files);
                          setBannerFile(e.target.files![0]);
                        }}
                      />
                      <div className='absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100'>
                        <Label
                          className='inline-flex cursor-pointer items-center justify-center rounded-full bg-neutral-800 p-4 text-primary transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'
                          htmlFor='bannerInput'
                        >
                          <ImagePlus className='h-6 w-6' />
                        </Label>
                      </div>
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
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
        <div>
          <p className='text-sm font-medium text-neutral-300'>Links</p>
          <p className='mt-1 text-sm text-muted-foreground'>
            Add your Portfolio, Github, Twitter, LinkedIn, or any other socials.
          </p>
        </div>

        {fields.map((item, index) => (
          <FormField
            control={form.control}
            key={item.id}
            name={`links.${index}.url`}
            render={({ field }) => (
              <FormItem>
                <div className='flex items-center space-x-2'>
                  <FormControl>
                    <Input
                      className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                      placeholder='https://example.com'
                      {...field}
                    />
                  </FormControl>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />
        ))}

        <Button
          className='text-neutral-300'
          type='submit'
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? <Spinner /> : 'Save Changes'}
        </Button>
      </form>
    </Form>
  );
}
