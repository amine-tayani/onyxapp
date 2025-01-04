import { notFound } from 'next/navigation';

import prisma from '@/lib/db/prisma';

import UserProfile from './_components/profile';

interface ProfilePageProps {
  params: {
    name: string;
  };
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  if (!params.name) {
    notFound();
  }

  const user = await prisma.user.findFirst({
    where: {
      name: {
        equals: params.name,
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
