import type { User } from '@/lib/db/types';

export interface UserProfileProps {
  user: Pick<User, 'id' | 'email' | 'image' | 'name' | 'createdAt'>;
}
