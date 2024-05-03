import type { User } from '@/lib/db/types';

export interface UserProfileProps {
  user: Pick<
    User,
    | 'id'
    | 'email'
    | 'createdAt'
    | 'bio'
    | 'image'
    | 'name'
    | 'skills'
    | 'location'
    | 'experience'
  >;
}
