import { PageHeader } from '@/components/page-header';
import { AboutSection } from '@/components/sections/about-section';

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="Learn more about our story, our passion for beauty, and our commitment to you."
      />
      <AboutSection />
    </>
  );
}
