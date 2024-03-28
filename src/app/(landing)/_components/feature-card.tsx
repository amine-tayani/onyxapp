'use client';

import React, { type MouseEvent as ReactMouseEvent } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';
import { type LucideIcon } from 'lucide-react';
import { cn } from '@/lib/cn';
import { useIsMobile } from '@/hooks/use-mobile';

interface CardProps {
  title: string;
  description: string;
  iconColor?: string;
  icon?: LucideIcon;
}

export default function FeatureCard({ icon, title, description }: CardProps) {
  const MotionCard = motion(Card);
  const isMobile = useIsMobile();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMovement = ({
    currentTarget,
    clientX,
    clientY,
  }: ReactMouseEvent) => {
    if (isMobile) return;
    const { left, top } = currentTarget?.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  };

  const Icon = icon;
  return (
    <MotionCard
      onMouseMove={handleMouseMovement}
      className={cn(
        ' group relative w-full cursor-pointer overflow-hidden border border-muted-foreground/20 bg-muted transition duration-300'
      )}
    >
      <motion.div
        className='pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100'
        style={{
          boxShadow: ' 0 4px 30px rgba(0, 0, 0, 0.1)',
          filter: 'blur(5px)',
          background: useMotionTemplate`
            radial-gradient(
              300px circle at ${mouseX}px ${mouseY}px,
              rgba(10, 10, 10, .05),
              rgba(10, 10, 10, .05),
              rgba(10, 10, 10, .05),
              rgba(10, 10, 10, .05),              
              transparent 50%
            )
          `,
        }}
      />
      <CardHeader className='pb-3'>
        <CardTitle>
          <div className=''>
            <div>
              {Icon ? (
                <Icon
                  strokeWidth={1.5}
                  className={cn('mr-3 h-8 w-8 text-neutral-400')}
                />
              ) : null}
            </div>
            <h1 className='mt-3 text-base font-normal text-primary'>{title}</h1>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className='text-sm font-light text-neutral-400 sm:text-base sm:leading-7'>
          {description}
        </p>
      </CardContent>
    </MotionCard>
  );
}
