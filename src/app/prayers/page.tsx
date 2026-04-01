import PageHeader from '@/components/PageHeader';
import Prayers from '@/components/Prayers';
import RosarySchedule from '@/components/RosarySchedule';

export const metadata = {
  title: 'Rosaries & Prayers – Mercy for Life',
};

export default function PrayersPage() {
  return (
    <>
      <PageHeader
        title="Rosaries & Prayers"
        subtitle="Join us each week to pray the Rosary outside abortion facilities, and pray along with our daily prayer to end abortion."
      />
      <RosarySchedule />
      <Prayers />
    </>
  );
}
