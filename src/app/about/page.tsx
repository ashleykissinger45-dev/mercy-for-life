import PageHeader from '@/components/PageHeader';
import About from '@/components/About';
import { sanityFetch } from '@/lib/sanity';

export const metadata = {
  title: 'About – Mercy for Life',
};

export const revalidate = 3600;

export default async function AboutPage() {
  const settings = await sanityFetch<{ churchUrl?: string | null }>({
    query: `*[_type == "siteSettings"][0]{ churchUrl }`,
    revalidate: 3600,
  });

  return (
    <>
      <PageHeader
        title="About Us"
        subtitle="We are a community of faithful Catholics and friends united in our commitment to defend and celebrate the gift of human life."
      />
      <About churchUrl={settings?.churchUrl} />
    </>
  );
}
