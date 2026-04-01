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

  try {
    const [locs, prays, settings] = await Promise.all([
      sanityFetch<SanityRosaryLocation[]>({ query: LOCATIONS_QUERY }),
      sanityFetch<SanityPrayer[]>({ query: PRAYERS_QUERY }),
      sanityFetch<{ rosaryWhatToBring?: string }>({ query: SETTINGS_QUERY }),
    ]);
    locations = locs;
    prayers = prays;
    whatToBring = settings?.rosaryWhatToBring;
  } catch (e) {
    // Sanity not yet seeded — fallback data used in components
  }

  // Fallback locations if Sanity has none yet
  const displayLocations: SanityRosaryLocation[] = locations.length > 0 ? locations : [
    {
      _id: 'fallback-1',
      name: 'Camelback Family Planning',
      address: '4141 N 32nd Street, Phoenix, AZ',
      mapsQuery: 'Camelback+Family+Planning+4141+N+32nd+Street+Phoenix+AZ',
      times: [
        { day: 'Wednesday', time: '9:30am' },
        { day: 'Thursday', time: '8:30am' },
        { day: 'Saturday', time: '8:00am' },
      ],
      parkingUrl: 'https://maps.app.goo.gl/LXJMybJezkGgxw196',
      parkingNote: 'Park in the lot next to the Shell station (not the front lot).',
    },
    {
      _id: 'fallback-2',
      name: 'Planned Parenthood',
      address: '4715 N 15th Street, Phoenix, AZ',
      mapsQuery: 'Planned+Parenthood+4715+N+15th+Street+Phoenix+AZ',
      times: [{ day: 'Friday', time: '9:30am' }],
      parkingUrl: null,
      parkingNote: null,
    },
  ];

  return (
    <>
      <PageHeader
        title="Rosaries & Prayers"
        subtitle="Two ways to pray with us — join us on the sidewalk each week, or pray along from home."
      />
      <RosarySchedule locations={displayLocations} whatToBring={whatToBring} />
      <Prayers prayers={prayers} />
    </>
  );
}
