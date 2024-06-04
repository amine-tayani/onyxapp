import CredentialsProvider from 'next-auth/providers/credentials';
import { hash, compare } from 'bcrypt';
import { NextAuthOptions } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './db/prisma';

export const authOptions: NextAuthOptions = {
  cookies: {
    sessionToken: {
      name: 'next-auth.session-token',
      options: {
        httpOnly: true,
        sameSite: 'lax',
        path: '/',
        secure: true,
      },
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Your email address',
        },
        password: {
          label: 'Password',
          type: 'password',
          placeholder: 'Your password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email.toLowerCase(),
          },
          select: {
            id: true,
            name: true,
            email: true,
            hashedPassword: true,
            avatar: true,
            banner: true,
            emailVerified: true,
          },
        });
        if (!user) {
          throw new Error('Account or Email does not Exists.');
        }

        const isCorrectPassword = await compare(
          credentials!.password,
          user.hashedPassword as string
        );

        if (!isCorrectPassword) {
          throw new Error('Password you have provided is incorrect.');
        }

        const { id, email, name, avatar, banner, emailVerified } = user;

        return {
          id,
          email,
          name,
          avatar,
          banner,
          emailVerified,
        };
      },
    }),
  ],
  pages: {
    signIn: '/login',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },

    async session({ session, token }) {
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };
    },
  },
  session: {
    strategy: 'jwt',
  },

  jwt: {
    secret: process.env.NEXTAUTH_SECRET,
  },

  debug: process.env.NODE_ENV === 'development',
};

export async function hashPassword(password: string): Promise<string> {
  return await hash(password, 12);
}
