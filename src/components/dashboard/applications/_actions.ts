'use server';

import { getServerSession } from 'next-auth';
import { CreateOrUpdateApplicationSchema } from './zod-schema';
import { authOptions } from '@/lib/nextauth';
import prisma from '@/lib/db/prisma';

export async function createApplication(data: CreateOrUpdateApplicationSchema) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  return prisma.application.create({
    data: {
      ...data,
      userId: session.user.id,
    },
    select: {
      id: true,
    },
  });
}

export async function updateApplication(
  data: CreateOrUpdateApplicationSchema,
  id: string
) {
  const session = await getServerSession(authOptions);

  if (!session || !session.user) {
    throw new Error('User is not logged in');
  }

  const application = await prisma.application.findFirstOrThrow({
    where: {
      id,
    },
  });

  if (!application) {
    throw new Error('No Application was found with this id.');
  }

  await prisma.application.update({
    where: {
      id,
    },
    data,
  });

  return application;
}
