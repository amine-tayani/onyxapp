import type { Metadata } from 'next';
import { satoshi, inter } from '@/lib/fonts/font';

import './globals.css';
import { NextAuthProvider } from '@/components/auth/providers';
import { Toaster } from '@/components/toast/toaster';
import { siteConfig } from '@/config/site';
import { cn } from '@/lib/cn';

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
    <html lang='en' className={cn(satoshi.variable, inter.variable)}>
      <body>
        <Toaster />
        <NextAuthProvider>{children}</NextAuthProvider>
      </body>
    </html>
  );
}
