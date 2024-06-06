'use server';

import { getServerSession } from 'next-auth';
import { AuthConfig } from '@/config/auth';
import {
  ProfileFormSchema,
  profileFormSchema,
} from './_components/profile-schema';
import prisma from '@/lib/db/prisma';
import { revalidatePath } from 'next/cache';

export async function updateGeneralSettings(data: ProfileFormSchema) {
  const session = await getServerSession(AuthConfig);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  profileFormSchema.parse(data);

  const existingProfile = await prisma.user.findFirstOrThrow({
    where: {
      id: session.user.id,
    },
  });

  if (!existingProfile) {
    throw new Error('No profile was found for this user.');
  }

  await prisma.user.update({
    where: {
      id: session.user.id,
    },
    data: {
      name: data.name,
      email: data.email,
      bio: data.bio,
      avatar: data.avatar,
      banner: data.banner,
    },
  });

  const userLinksToCreate = data.socialLinks?.map((link) => ({
    url: link.url,
    user: {
      connect: { id: session.user?.id },
    },
  }));

  try {
    await prisma.$transaction([
      // 4. Delete all existing user links for the user
      prisma.userLink.deleteMany({
        where: {
          user: {
            some: {
              id: session.user.id,
            },
          },
        },
      }),
      // @ts-ignore
      ...userLinksToCreate.map((userLink) =>
        prisma.userLink.create({
          data: userLink,
        })
      ),
    ]);
  } catch (error) {
    // Handle the error, and possibly log it
    console.error('Transaction error:', error);
    throw error; // Re-throw the error if needed
  } finally {
    await prisma.$disconnect();
  }

  revalidatePath('/settings/general');

  return {
    message: 'Settings updated successfully',
  };
}
