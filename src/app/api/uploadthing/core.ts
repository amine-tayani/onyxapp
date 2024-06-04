import { createUploadthing, type FileRouter } from 'uploadthing/next';
import { getServerSession } from 'next-auth/next';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/db/prisma';

const f = createUploadthing({
  errorFormatter: (err) => {
    console.log('Error uploading file', err.message);
    console.log('  - Above error caused by:', err.cause);

    return { message: err.message };
  },
});

export const ourFileRouter = {
  avatarImageUploader: f({ image: { maxFileCount: 1, maxFileSize: '4MB' } })
    // Set permissions and file types for this FileRoute
    .middleware(async () => {
      const session = await getServerSession(authOptions);
      // If you throw, the user will not be able to upload
      if (!session?.user?.id) throw new Error('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
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
      const session = await getServerSession(authOptions);
      // If you throw, the user will not be able to upload
      if (!session?.user?.id) throw new Error('Unauthorized');

      // Whatever is returned here is accessible in onUploadComplete as `metadata`
      return { userId: session.user.id };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      // save to db
      await prisma.imageUpload.create({
        data: {
          url: file.url,
          user: { connect: { id: metadata.userId } },
        },
      });
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
