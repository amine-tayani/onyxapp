import './globals.css';

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
            icons={{ error: '❌', success: '✅', warning: '⚠️', info: 'ℹ️' }}
            toastOptions={{
              classNames: {
                error:
                  'bg-gradient-to-r from-muted/80 to-muted/90 text-red-500',
                success:
                  'bg-gradient-to-r from-muted/80 to-muted/90 text-green-500',
                warning:
                  'bg-gradient-to-r from-muted/80 to-muted/90 text-yellow-500',
                info: 'bg-gradient-to-r from-muted/80 to-muted/90 text-blue-500',
              },
            }}
          />
        </NextAuthProvider>
      </body>
    </html>
  );
}
