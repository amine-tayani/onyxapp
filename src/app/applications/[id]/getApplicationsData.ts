import prisma from '@/lib/db/prisma';

export async function getApplicationList() {
  const applications = await prisma.application.findMany({
    orderBy: [
      {
        id: 'desc',
      },
    ],
  });

  return applications;
}

export async function getApplicationById(id: string) {
  try {
    const applications = await prisma.application.findFirstOrThrow({
      where: {
        id,
      },
      orderBy: [
        {
          id: 'desc',
        },
      ],
    });

    return applications;
  } catch (error) {
    console.log(error);
    return [];
  }
}
