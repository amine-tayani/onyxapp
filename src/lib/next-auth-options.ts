import CredentialsProvider from 'next-auth/providers/credentials';
import { NextAuthOptions, Session } from 'next-auth';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import prisma from './db/prisma';
import { comparePassword } from './hash-password';

export const AUTH_OPTIONS: NextAuthOptions = {
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
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(credentials) {
        const user = await prisma.user.findUnique({
          where: {
            email: credentials?.email.trim().toLowerCase(),
          },
          select: {
            id: true,
            name: true,
            email: true,
            avatar: true,
            banner: true,
            emailVerified: true,
            hashedPassword: true,
          },
        });
        if (!user) {
          throw new Error('Account or Email does not Exists.');
        }

        const isCorrectPassword = await comparePassword(
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
      // TODO : Add user avatar to session object so that we can use it in the header
      // use prisma to get user avatar and add it to session object without the bug of redirecing to the login page

      const onyxSession: Session = {
        ...session,
        user: {
          ...session.user,
          id: token.id,
        },
      };

      return onyxSession;
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
