'use client';

// import { useState } from 'react';
// import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Heading from '@tiptap/extension-heading';
import Paragraph from '@tiptap/extension-paragraph';
import Text from '@tiptap/extension-text';
import { Toolbar } from './editor-toolbar';
import Placeholder from '@tiptap/extension-placeholder';

export default function Tiptap() {
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
    Placeholder.configure({
      placeholder: 'Write the job description.',
    }),
    Paragraph,
    Text,
    Heading.configure({
      levels: [1, 2, 3, 4],
    }),
  ];

  const editor = useEditor({
    extensions: extensions,
    onUpdate({ editor }) {
      console.log(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'scrollbar min-h-[150px] max-h-[150px] w-[700px] rounded-lg rounded-br-none rounded-bl-none bg-muted px-3 py-6 border-b-0 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 overflow-y-auto',
      },
    },
  });

  return (
    <div>
      <div className='border'>
        <Toolbar editor={editor} />
      </div>
      <div className='flex justify-center'>
        <EditorContent editor={editor} />
      </div>
    </div>
  );
}
