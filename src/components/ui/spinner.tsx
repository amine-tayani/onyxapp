import * as React from 'react';

import { cn } from '@/lib/cn';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg';
}

export function Spinner({ className, size = 'sm', ...props }: SpinnerProps) {
  return (
    <div
      role='status'
      className={cn(
        'mr-2 inline-block animate-spin rounded-full border-2 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]',
        {
          'h-4 w-4': size === 'sm',
          'h-8 w-8 ': size === 'md',
          'h-12 w-12': size === 'lg',
        },
        className
      )}
      {...props}
    />
  );
}
