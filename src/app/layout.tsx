import './globals.css';

import { BadgeCheckIcon, ShieldXIcon } from 'lucide-react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { NextAuthProvider } from '@/components/auth/providers';
import { Toaster } from '@/components/ui/sonner';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Onyx - Manage your job applications',
  description: `${siteConfig.description}`,
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={cn('antialiased', inter.className)}>
      <body>
        <NextAuthProvider>
          {children}
          <Toaster
            expand
            icons={{
              error: <ShieldXIcon />,
              success: <BadgeCheckIcon />,
            }}
            toastOptions={{
              classNames: {
                error: 'bg-muted text-red-500',
                success: 'bg-muted text-green-500',
                warning: 'bg-muted text-yellow-500',
                info: 'bg-muted text-blue-500',
              },
            }}
          />
        </NextAuthProvider>
      </body>
    </html>
  );
}
