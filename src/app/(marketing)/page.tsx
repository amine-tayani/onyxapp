import { getAuthSession } from '@/lib/auth';
import { getUserSubscriptionPlan } from '@/lib/payments/subscription';

import Features from './_components/features';
import Footer from './_components/footer';
import Hero from './_components/hero';
import PricingCards from './_components/pricings-cards';

export default async function HomePage() {
  const session = await getAuthSession();

  const user = session?.user;

  let subscriptionPlan;

  if (user && user.id) {
    subscriptionPlan = await getUserSubscriptionPlan(user.id);
  }

  return (
    <>
      <Hero />
      <Features />
      <PricingCards subscriptionPlan={subscriptionPlan} userId={user?.id} />
      <Footer />
    </>
  );
}
