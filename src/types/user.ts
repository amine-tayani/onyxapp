import type { User } from '@/lib/db/types';

export interface UserProfileProps {
  user: Omit<User, 'hashedPassword'> & {
    socialLinks: {
      id: string;
      url: string;
    }[];
  };
}
