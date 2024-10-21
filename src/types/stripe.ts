import { User } from '@/lib/db/types';

export type SubscriptionPlan = {
  title: string;
  prices: {
    monthly: number;
  };
  billing: string;
  discount?: string;
  features: string[];
  buttonText: string;
  recommended?: boolean;
  stripeIds?: {
    monthly: string | null;
  };
};

export type UserSubscriptionPlan = SubscriptionPlan &
  Pick<
    Omit<User, 'hashedPassword'>,
    'stripeCustomerId' | 'stripeSubscriptionId' | 'stripePriceId'
  > & {
    stripeCurrentPeriodEnd: number;
    isPaid: boolean;
    interval: 'month' | null;
    isCanceled?: boolean;
  };
