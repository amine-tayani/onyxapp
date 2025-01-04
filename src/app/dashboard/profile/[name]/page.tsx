import { notFound } from 'next/navigation';

import prisma from '@/lib/db/prisma';

import UserProfile from '../prof-card.tsx';

export default async function ProfilePage() {
  const user = await prisma.user.findFirst({
    where: {
      name: {
        equals: '',
      },
    },
    select: {
      name: true,
      email: true,
      bio: true,
      location: true,
      avatar: true,
      banner: true,
      experience: true,
      socialLinks: true,
      createdAt: true,
    },
  });

  if (!user) {
    notFound();
  }

  return <UserProfile user={user} />;
}
