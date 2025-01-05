import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { UploadThingError, UTApi } from 'uploadthing/server';

import { getAuthSession } from '@/lib/auth';
import prisma from '@/lib/db/prisma';

const f = createUploadthing();

export const utapi = new UTApi();

export const ourFileRouter = {
  avatarImageUploader: f({ image: { maxFileCount: 1, maxFileSize: '4MB' } })
    .middleware(async () => {
      const session = await getAuthSession();
      if (!session?.user?.id) throw new UploadThingError('Unauthorized');

      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.imageUpload.create({
        data: {
          url: file.url,
          user: { connect: { id: metadata.userId } },
        },
      });
    }),
  bannerImageUploader: f({ image: { maxFileCount: 1, maxFileSize: '4MB' } })
    .middleware(async () => {
      const session = await getAuthSession();
      if (!session?.user?.id) throw new Error('Unauthorized');

      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      await prisma.imageUpload.create({
        data: {
          url: file.url,
          user: { connect: { id: metadata.userId } },
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
