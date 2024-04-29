import { notFound } from 'next/navigation';
import UserProfile from './_components/profile';
import prisma from '@/lib/db/prisma';

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
      id: true,
      email: true,
      createdAt: true,
      bio: true,
      image: true,
      name: true,
      skills: true,
      location: true,
      socialLinks: true,
      experience: true,
    },
  });

  if (!user) {
    notFound();
  }

  return <UserProfile user={user} />;
}
