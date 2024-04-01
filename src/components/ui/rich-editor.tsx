/* eslint-disable no-unused-vars */
'use client';

// import { useState } from 'react';
// import Highlight from "@tiptap/extension-highlight";
import { EditorContent, useEditor } from '@tiptap/react';
import CharacterCount from '@tiptap/extension-character-count';
import Placeholder from '@tiptap/extension-placeholder';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import StarterKit from '@tiptap/starter-kit';
import Text from '@tiptap/extension-text';
import { Toolbar } from './editor-toolbar';

interface RichEditorProps {
  onChange: (body: string) => void;
  value: string;
}

export default function Editor({ onChange, value }: RichEditorProps) {
  const limit = 2000;
  const extensions = [
    StarterKit.configure({
      bulletList: {
        keepMarks: true,
        keepAttributes: false,
      },
    }),
    CharacterCount.configure({ limit }),
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
      onChange(editor.getHTML());
    },
    editorProps: {
      attributes: {
        class:
          'custom-scrollable-element min-h-[150px] max-h-[150px] w-[700px] rounded-lg rounded-br-none rounded-bl-none bg-muted px-3 py-6 border-b-0 text-sm ring-offset-background text-neutral-200 focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50 prose max-w-none overflow-y-auto',
      },
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <div>
      <div className='border'>
        <Toolbar editor={editor} />
      </div>
      <div className='flex justify-center'>
        <EditorContent editor={editor} value={value} />
      </div>
      <div className='character-count my-2 flex justify-between text-sm text-muted-foreground/80'>
        <span>
          {editor.storage.characterCount.characters()}/{limit} characters
        </span>
        <span>{editor.storage.characterCount.words()} words</span>
      </div>
    </div>
  );
}
