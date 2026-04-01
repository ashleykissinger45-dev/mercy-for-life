import PageHeader from '@/components/PageHeader';
import Prayers, { SanityPrayer } from '@/components/Prayers';
import RosarySchedule, { SanityRosaryLocation } from '@/components/RosarySchedule';
import { sanityFetch } from '@/lib/sanity';

export const metadata = {
  title: 'Rosaries & Prayers – Mercy for Life',
};

export const revalidate = 60;

const LOCATIONS_QUERY = `*[_type == "rosaryLocation"] | order(order asc) {
  _id, name, address, mapsQuery, times, parkingUrl, parkingNote
}`;

const PRAYERS_QUERY = `*[_type == "prayer"] | order(order asc) {
  _id, title, description, author, externalLink, linkText
}`;

const SETTINGS_QUERY = `*[_type == "siteSettings"][0] { rosaryWhatToBring }`;

export default async function PrayersPage() {
  let locations: SanityRosaryLocation[] = [];
  let prayers: SanityPrayer[] = [];
  let whatToBring: string | undefined;

  const [locs, prays, settings] = await Promise.all([
    sanityFetch<SanityRosaryLocation[]>({ query: LOCATIONS_QUERY }),
    sanityFetch<SanityPrayer[]>({ query: PRAYERS_QUERY }),
    sanityFetch<{ rosaryWhatToBring?: string }>({ query: SETTINGS_QUERY }),
  ]);
  locations = locs;
  prayers = prays;
  whatToBring = settings?.rosaryWhatToBring;

  return (
    <>
      <PageHeader
        title="Rosaries & Prayers"
        subtitle="Two ways to pray with us — join us on the sidewalk each week, or pray along from home."
      />
      <RosarySchedule locations={locations} whatToBring={whatToBring} />
      <Prayers prayers={prayers} />
    </>
  );
}
