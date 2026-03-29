import PageHeader from '@/components/PageHeader';
import About from '@/components/About';

export const metadata = {
  title: 'About – Mercy for Life',
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="We are a community of faithful Catholics and friends united in our commitment to defend and celebrate the gift of human life."
      />
      <About />
    </>
  );
}
