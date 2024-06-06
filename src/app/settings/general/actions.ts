'use server';

import { getServerSession } from 'next-auth';
import { AuthConfig } from '@/config/auth';
import { ProfileFormSchema } from './_components/profile-schema';

export async function updateGeneralSettings(data: ProfileFormSchema) {
  const session = await getServerSession(AuthConfig);

  console.log(session, data);
}
