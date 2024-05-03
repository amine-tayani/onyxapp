import { notFound } from 'next/navigation';
import prisma from '@/lib/db/prisma';
import UserSettings from './_components/user-settings';

interface Props {
  params: {
    id: string;
  };
}

export default async function SettingPage({ params: { id } }: Props) {
  const user = await prisma.user.findFirst({
    where: {
      id: {
        equals: id,
      },
    },
    select: {
      id: true,
      createdAt: true,
      image: true,
      name: true,
      email: true,
      bio: true,
      skills: true,
      location: true,
      experience: true,
    },
  });

  if (!user) return notFound();

  return <UserSettings user={user} />;
}
