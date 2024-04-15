'use client';

import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { EmptyPlaceholder } from '@/components/ui/empty-placeholder';
import { Application } from '@/lib/db/types';
import { EditApplicationButton } from '@/components/dashboard/applications/edit-application-button';

export function ApplicationView({ application }: { application: Application }) {
  const editor = useEditor({
    editable: false,
    content: `${application.description}`,
    editorProps: {
      attributes: {
        class:
          'text-sm text-neutral-200 prose max-w-none custom-scrollable-element h-[400px] overflow-y-auto mb-8',
      },
    },
    extensions: [
      StarterKit,
      Paragraph,
      Text,
      Heading.configure({
        levels: [1, 2, 3, 4],
      }),
    ],
  });

  if (!editor) {
    return null;
  }

  if (!application) {
    return (
      <div className='col-span-4 flex h-full flex-col'>
        <EmptyPlaceholder className='my-4 '>
          <EmptyPlaceholder.Description>
            No content
          </EmptyPlaceholder.Description>
        </EmptyPlaceholder>
      </div>
    );
  }

  return (
    <div className='col-span-4 flex h-full flex-col'>
      <div className='mx-8'>
        <div className='flex justify-between'>
          <div>
            <div className=''>
              <p className='mb-2 text-sm leading-6 text-muted-foreground/80 '>
                {application.location}
              </p>
              <div className='flex items-center'>
                <h1 className='inline-block text-2xl font-extrabold tracking-tight text-neutral-100 sm:text-3xl'>
                  {application.title}
                </h1>
              </div>
            </div>
            <p className='mt-2 text-lg text-muted-foreground/80'>
              {application.company}
            </p>
          </div>
          <div className='text-sm text-primary/80'>
            <EditApplicationButton application={application} />
          </div>
        </div>

        <div className='py-8'>
          <h1 className='mb-4 inline-block text-xl font-bold tracking-tight text-neutral-100'>
            Job description
          </h1>
          <EditorContent editor={editor} />
        </div>
      </div>
    </div>
  );
}
