import NextAuth from 'next-auth';

import { AuthOptions } from '@/lib/auth/authjs-conf';

const handler = NextAuth(AuthOptions);

export { handler as GET, handler as POST };
