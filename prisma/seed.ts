import prisma from '@/lib/db/prisma';
import { applications } from './data';

async function main() {
  await prisma.application.createMany({
    data: applications,
  });
  console.log('Added applications data');
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
