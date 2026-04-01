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
        subtitle="Sign up to stay connected, and find other ways to support our mission."
      />
      <EmailSignup />
      <GetInvolved />
    </>
  );
}
