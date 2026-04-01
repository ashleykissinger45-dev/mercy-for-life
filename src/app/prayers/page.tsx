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
        subtitle="Two ways to pray with us — join us on the sidewalk each week, or pray along from home."
      />

      <RosarySchedule />
      <Prayers />
    </>
  );
}
