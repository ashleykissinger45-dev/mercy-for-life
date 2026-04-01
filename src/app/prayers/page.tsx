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

      {/* Section 1 */}
      <div className="bg-white pt-14 pb-2">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-2">
            Weekly Rosaries Outside Abortion Facilities
          </h2>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto">
            Every week we gather peacefully outside local abortion facilities to pray the Rosary for mothers, their babies, and those working inside.
          </p>
        </div>
      </div>
      <RosarySchedule />

      {/* Section 2 */}
      <div className="bg-white pt-14 pb-2">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="font-serif text-2xl md:text-3xl font-light text-neutral-900 mb-2">
            Prayers from Our Ministry
          </h2>
          <p className="text-neutral-500 text-sm max-w-xl mx-auto">
            Prayers used by our group that you can read and pray along with from anywhere.
          </p>
        </div>
      </div>
      <Prayers />
    </>
  );
}
