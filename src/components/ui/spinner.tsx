'use client';

import * as React from 'react';

import { cn } from '@/lib/cn';

export function Spinner({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        'inline h-6 w-6 animate-spin fill-gray-600 text-gray-200',
        className
      )}
    />
  );
}
