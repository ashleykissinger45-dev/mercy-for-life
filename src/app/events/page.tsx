import PageHeader from '@/components/PageHeader';
import Events from '@/components/Events';

export const metadata = {
  title: 'Events – Mercy for Life',
};

export default function EventsPage() {
  return (
    <>
      <PageHeader
        title="Events"
        subtitle="Join us for special gatherings, marches, prayer campaigns, and community events throughout the year."
      />
      <Events />
    </>
  );
}
