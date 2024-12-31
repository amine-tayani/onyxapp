'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { Tag, TagInput } from 'emblor';
import { Edit2, User2 } from 'lucide-react';
import Image from 'next/image';
import * as React from 'react';
import { useFieldArray, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import * as z from 'zod';

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Spinner } from '@/components/ui/spinner';
import { Textarea } from '@/components/ui/textarea';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip';
import { UserProfileProps } from '@/types/user';
import { getImageData } from '@/utils/image';
import { useUploadThing } from '@/utils/use-upload-thing';

import { updateGeneralSettings } from '../actions';
import { profileFormSchema } from './profile-schema';

type ProfileFormValues = z.infer<typeof profileFormSchema>;

export function GeneralSettingsForm({ user }: UserProfileProps) {
  const [avatarPreview, setAvatarPreview] = React.useState('');
  const [bannerPreview, setBannerPreview] = React.useState('');
  const [avatarFile, setAvatarFile] = React.useState<File | null>(null);
  const [bannerFile, setBannerFile] = React.useState<File | null>(null);
  const [tags, setTags] = React.useState<Tag[]>([]);
  const [activeTagIndex, setActiveTagIndex] = React.useState<number | null>(
    null
  );

  const { startUpload: startAvatarUpload } = useUploadThing(
    'avatarImageUploader',
    {
      onClientUploadComplete: () => {
        toast.success('Avatar upload is Complete. ');
      },
      onUploadError: (e) => {
        if (e.code === 'INTERNAL_CLIENT_ERROR') return;
        toast.error('Error occurred while uploading the avatar');
      },
    }
  );

  const { startUpload: startBannerUpload } = useUploadThing(
    'bannerImageUploader',
    {
      onClientUploadComplete: () => {
        toast.success('Banner upload is Complete. ');
      },
      onUploadError: (e) => {
        if (e.code === 'INTERNAL_CLIENT_ERROR') return;
        toast.error('Error occurred while uploading the banner');
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
    experience: user.experience || undefined,
    location: user.location || '',
    skills: user.skills,
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
    try {
      const avatarUploadResult = await startAvatarUpload([avatarFile!]);
      const bannerUploadResult = await startBannerUpload([bannerFile!]);

      data.avatar = avatarUploadResult && avatarUploadResult[0]?.url;
      data.banner = bannerUploadResult && bannerUploadResult[0]?.url;

      await updateGeneralSettings(data);
      toast.success('Your Settings has been updated.');
    } catch (error) {
      toast.error('Something went wrong while updating your profile.');
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
                  avatarPreview ||
                  user.avatar ||
                  'https://avatars.githubusercontent.com/u/104228?v=4'
                }
                alt='avatar'
                className='size-14 object-cover object-center'
                width={100}
                height={100}
              />
              <AvatarFallback className='size-14'>
                <User2 className='size-8' />
              </AvatarFallback>
            </Avatar>
            <FormField
              control={form.control}
              name='avatar'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <div className='flex space-x-4'>
                      <Button
                        type='button'
                        variant='link'
                        size='sm'
                        className='h-7 rounded-full text-muted-foreground hover:bg-muted hover:text-primary'
                      >
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
                          className='inline-flex items-center gap-2'
                        >
                          <Edit2 className='size-4' />
                          <span>Upload</span>
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
          <div className='group relative '>
            <div className='mt-2 h-[140px] w-[760px] rounded-lg bg-hero'>
              {bannerPreview ||
                (user.banner && (
                  <Image
                    width={1000}
                    height={400}
                    src={bannerPreview || user.banner}
                    alt='banner'
                    className='h-[140px] rounded-lg object-cover object-center group-hover:blur-sm '
                  />
                ))}
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
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <Label
                                className='group inline-flex cursor-pointer items-center justify-center rounded-full bg-neutral-700 p-2.5 text-primary transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50'
                                htmlFor='bannerInput'
                              >
                                <Edit2 className='size-6 text-neutral-200' />
                              </Label>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>Add banner</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
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
        <div className='grid grid-cols-2 gap-x-3'>
          <FormField
            control={form.control}
            name='location'
            render={({ field }) => (
              <FormItem>
                <Label className='text-neutral-300'>Location</Label>
                <FormControl>
                  <Input
                    className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                    placeholder='Your Location'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name='experience'
            render={({ field }) => (
              <FormItem>
                <Label className='text-neutral-300'>Experience</Label>
                <FormControl>
                  <Input
                    className='border-none bg-muted hover:bg-muted/70 focus:bg-muted/60'
                    placeholder='Years of experience?'
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
              <Label className='text-neutral-300'>Bio</Label>
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
        <FormField
          control={form.control}
          name='skills'
          render={({ field }) => (
            <FormItem className='flex flex-col items-start'>
              <Label className='text-left'>Skills</Label>
              <FormControl className='w-full'>
                <TagInput
                  styleClasses={{
                    input: 'border border-gray-300 p-2',
                    inlineTagsContainer: 'bg-gray-200 p-2 rounded',
                    tagPopover: {
                      popoverContent: 'bg-white shadow-lg',
                      popoverTrigger: 'text-blue-500 hover:text-blue-600',
                    },
                    tagList: {
                      container: 'bg-red-100',
                      sortableList: 'p-1',
                    },
                    autoComplete: {
                      command: 'bg-blue-100',
                      popoverTrigger: 'bg-green-200',
                      popoverContent: 'p-4',
                      commandList: 'list-none',
                      commandGroup: 'font-bold',
                      commandItem: 'cursor-pointer hover:bg-gray-100',
                    },
                    tag: {
                      body: 'flex items-center gap-2',
                      closeButton: 'text-red-500 hover:text-red-600',
                    },
                    clearAllButton: 'text-red-500 hover:text-red-600',
                  }}
                  {...field}
                  tags={tags}
                  activeTagIndex={activeTagIndex}
                  setActiveTagIndex={setActiveTagIndex}
                  className='sm:min-w-[450px]'
                  placeholder='What skills do you have?'
                  maxTags={25}
                  showCount
                  size='sm'
                  animation='fadeIn'
                  shape='pill'
                  borderStyle='none'
                  setTags={(newTags) => {
                    setTags(newTags);
                    form.setValue('skills', newTags as [Tag, ...Tag[]]);
                  }}
                  customTagRenderer={(tag, isActiveTag) => (
                    <div
                      key={tag.id}
                      className={`rounded-full bg-neutral-700 px-2 py-1 ${isActiveTag ? 'ring-2 ring-muted/60 ring-offset-2 ring-offset-neutral-600' : ''}`}
                    >
                      <span className='mr-1'>{tag.text}</span>
                    </div>
                  )}
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
          {form.formState.isSubmitting ? (
            <>
              <Spinner /> Saving
            </>
          ) : (
            'Save Changes'
          )}
        </Button>
      </form>
    </Form>
  );
}
