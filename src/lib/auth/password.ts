import { compare, hash } from 'bcryptjs';

export async function hashPassword(plain: string) {
  return await hash(plain, 12);
}

export async function validatePassword(plain: string, hashed: string) {
  return await compare(plain, hashed);
}
