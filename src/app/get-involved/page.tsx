import PageHeader from '@/components/PageHeader';
import GetInvolved from '@/components/GetInvolved';
import EmailSignup from '@/components/EmailSignup';

export const metadata = {
  title: 'Get Involved – Mercy for Life',
};

export default function GetInvolvedPage() {
  return (
    <>
      <PageHeader
        title="Get Involved"
        subtitle="There are many ways to support our mission and make a difference for life. Every action counts."
      />
      <GetInvolved />
      <EmailSignup />
    </>
  );
}
