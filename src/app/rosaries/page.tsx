import PageHeader from '@/components/PageHeader';
import RosarySchedule from '@/components/RosarySchedule';

export const metadata = {
  title: 'Weekly Rosaries – Mercy for Life',
};

export default function RosariesPage() {
  return (
    <>
      <PageHeader
        title="Weekly Rosaries"
        subtitle="Join us outside abortion facilities each week to pray the Rosary for mothers, their babies, and those working in the industry."
      />
      <RosarySchedule />
    </>
  );
}
