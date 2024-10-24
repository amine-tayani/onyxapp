import { cva, VariantProps } from 'class-variance-authority';
import { Loader2Icon } from 'lucide-react';
import React from 'react';

import { cn } from '@/lib/cn';

const spinnerVariants = cva('items-center justify-center', {
  variants: {
    show: {
      true: 'flex',
      false: 'hidden',
    },
  },
  defaultVariants: {
    show: true,
  },
});

const loaderVariants = cva('animate-spin', {
  variants: {
    size: {
      xs: 'w-5 h-5',
      sm: 'w-7 h-7',
      md: 'w-9 h-9',
    },
  },
  defaultVariants: {
    size: 'sm',
  },
});

interface SpinnerContentProps
  extends VariantProps<typeof spinnerVariants>,
    VariantProps<typeof loaderVariants> {
  className?: string;
  children?: React.ReactNode;
}

export function Spinner({
  size,
  show,
  children,
  className,
}: SpinnerContentProps) {
  return (
    <span className={spinnerVariants({ show })}>
      <Loader2Icon className={cn(loaderVariants({ size }), className)} />
      {children}
    </span>
  );
}
