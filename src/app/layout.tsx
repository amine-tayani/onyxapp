import './globals.css';

import type { Metadata } from 'next';

import { NextAuthProvider } from '@/components/auth/providers';
import { Toaster } from '@/components/toast/toaster';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';
import { fontSans } from '@/lib/font';

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
    <html lang='en' suppressHydrationWarning>
      <body className={cn('font-sans antialiased', fontSans.variable)}>
        <Toaster />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
