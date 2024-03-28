import { Navigation } from '@/components/ui/navigation';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Profile | Onyx',
  description: 'User Onyx Profile Page ',
};

export default async function ProfileLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main>
      <Navigation />
      {children}
    </main>
  );
}
