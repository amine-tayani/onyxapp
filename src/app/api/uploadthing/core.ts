import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { getServerSession } from 'next-auth/next';
import { AuthConfig } from '@/config/auth';
import prisma from '@/lib/db/prisma';
import { UTApi } from 'uploadthing/server';

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log('Error uploading file', err.message);
    console.log('  - Above error caused by:', err.cause);

    return { message: err.message };
  },
});

const session = await getServerSession(AuthConfig);

export const ourFileRouter = {
  avatarImageUploader: f({ image: { maxFileCount: 1, maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      // If you throw, the user will not be able to upload
      if (!session?.user?.id) throw new Error('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // use utapi to delete old files if they exist

      // save to db
      await prisma.imageUpload.create({
        data: {
          url: file.url,
          user: { connect: { id: metadata.userId } },
        },
      });
    }),
  bannerImageUploader: f({ image: { maxFileCount: 1, maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const session = await getServerSession(AuthConfig);
      // If you throw, the user will not be able to upload
      if (!session?.user?.id) throw new Error('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // use utapi to delete old banner files if they exist
      // save to db
      await prisma.imageUpload.create({
        data: {
          url: file.url,
          user: { connect: { id: metadata.userId } },
        },
      });
    }),
} satisfies FileRouter;

export const utapi = new UTApi();

export type OurFileRouter = typeof ourFileRouter;
