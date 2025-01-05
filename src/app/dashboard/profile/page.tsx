import { notFound } from 'next/navigation';

import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/db/prisma';

import UserProfileCard from './card';

export default async function ProfilePage() {
  const session = await getAuthSession();

  if (!session?.user) return;

  const user = await prisma.user.findFirst({
    where: {
      name: {
        equals: session.user.name,
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

  // @ts-ignore
  return <UserProfileCard user={user} />;
}
