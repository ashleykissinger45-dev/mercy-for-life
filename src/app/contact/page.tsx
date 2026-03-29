import PageHeader from '@/components/PageHeader';
import Contact from '@/components/Contact';

export const metadata = {
  title: 'Contact – Mercy for Life',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        subtitle="Have questions or want to learn more? We'd love to hear from you."
      />
      <Contact />
    </>
  );
}
