import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import EmailSignup from '@/components/EmailSignup';
import RosarySchedule from '@/components/RosarySchedule';
import About from '@/components/About';
import Mission from '@/components/Mission';
import GetInvolved from '@/components/GetInvolved';
import Resources from '@/components/Resources';
import Contact from '@/components/Contact';
import Events from '@/components/Events';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <EmailSignup />
      <RosarySchedule />
      <Mission />
      <About />
      <GetInvolved />
      <Events />
      <Resources />
      <Contact />
      <Footer />
    </main>
  );
}
