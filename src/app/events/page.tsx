import PageHeader from '@/components/PageHeader';
import Events, { SanityEvent } from '@/components/Events';
import { sanityFetch } from '@/lib/sanity';

export const metadata = {
  title: 'Events – Mercy for Life',
};

export const revalidate = 60;

const EVENTS_QUERY = `*[_type == "event"] | order(order asc) {
  _id, title, status, date, time, location, description, details, directionsUrl, link, linkText
}`;

export default async function EventsPage() {
  const allEvents = await sanityFetch<SanityEvent[]>({ query: EVENTS_QUERY });

  const upcomingEvents = allEvents.filter((e) => e.status === 'upcoming');
  const previousEvents = allEvents.filter((e) => e.status === 'previous');

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
