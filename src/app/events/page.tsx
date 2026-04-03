import PageHeader from '@/components/PageHeader';
import Events, { SanityEvent } from '@/components/Events';
import { sanityFetch } from '@/lib/sanity';

export const metadata = {
  title: 'Events – Mercy for Life',
};

export const revalidate = 60;

const EVENTS_QUERY = `*[_type == "event"] | order(dateISO asc) {
  _id, title, dateISO, time, location, description, details, directionsUrl, link, linkText
}`;

export default async function EventsPage() {
  const allEvents = await sanityFetch<SanityEvent[]>({ query: EVENTS_QUERY });

  const today = new Date().toISOString().split('T')[0];

  const upcomingEvents = allEvents.filter((e) => e.dateISO >= today);
  const previousEvents = allEvents.filter((e) => e.dateISO < today);

  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Join us for special gatherings, marches, prayer campaigns, and community events throughout the year."
      />
      <Events upcomingEvents={upcomingEvents} previousEvents={previousEvents} />
    </>
  );
}
