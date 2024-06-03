import type { User } from '@/lib/db/types';

export interface UserProfileProps {
  user: Pick<
    User,
    | 'id'
    | 'email'
    | 'createdAt'
    | 'bio'
    | 'avatar'
    | 'banner'
    | 'name'
    | 'skills'
    | 'location'
    | 'experience'
  >;
}
