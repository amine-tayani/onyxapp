import { SubscriptionPlan } from '@/types/stripe';

export const pricingData: SubscriptionPlan[] = [
  {
    title: 'Free',
    prices: {
      monthly: 0,
    },
    billing: 'Free for everyone',
    features: [
      'Up to 10 job applications',
      'Basic application tracking',
      'Resume storage',
      'Job search integration',
    ],
    buttonText: 'Get started',
    stripeIds: {
      monthly: null,
    },
  },
  {
    title: 'Pro',
    prices: {
      monthly: 18,
    },
    billing: 'Billed monthly',
    discount: '-20%',
    features: [
      'Unlimited job applications',
      'Advanced application tracking',
      'Multiple resume versions',
      'Email notifications',
    ],
    buttonText: 'Upgrade to Pro',
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_PRO_MONTHLY_PLAN_ID!,
    },
  },
  {
    title: 'Business',
    prices: {
      monthly: 30,
    },
    billing: 'Billed monthly',
    discount: '-20%',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Analytics and insights',
      'Custom pipeline stages',
      'Integration with ATS',
    ],
    buttonText: 'Choose Business',
    stripeIds: {
      monthly: process.env.NEXT_PUBLIC_STRIPE_BUSINESS_MONTHLY_PLAN_ID!,
    },
  },
];

// generate stripe price id
//
