import { notFound } from 'next/navigation';
import prisma from '@/lib/db/prisma';
import UserProfile from './_components/user-profile';

interface Props {
  params: {
    id: string;
  };
}

export default async function ProfilePage({ params: { id } }: Props) {
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
    },
  });

  if (!user) return notFound();

  return <UserProfile user={user} />;
}
