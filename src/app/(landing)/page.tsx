import Features from './_components/features';
import Footer from './_components/footer';
import Hero from './_components/hero';
import MoreFeatures from './_components/more-features';
import Pricing from './_components/pricing';

export default function HomePage() {
  return (
    <>
      <Hero />
      <Features />
      <MoreFeatures />
      <Pricing />
      <Footer />
    </>
  );
}
