import PageHeader from '@/components/PageHeader';
import Prayers from '@/components/Prayers';

export const metadata = {
  title: 'Prayers – Mercy for Life',
};

export default function PrayersPage() {
  return (
    <>
      <PageHeader
        title="Prayers"
        subtitle="A collection of prayers we use in our ministry. Click any prayer to read or pray along."
      />
      <Prayers />
    </>
  );
}
