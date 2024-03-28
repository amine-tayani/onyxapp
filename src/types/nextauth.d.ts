/* eslint-disable no-unused-vars */

import { DefaultSession, DefaultUser } from 'next-auth';

interface IUser extends DefaultUser {
  id: string;
  /**
   * Add additionnal fields to User
   */
}
declare module 'next-auth' {
  interface User extends IUser {}
  interface Session {
    user?: User;
  }
}
declare module 'next-auth/jwt' {
  interface JWT extends IUser {}
}
