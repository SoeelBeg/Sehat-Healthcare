import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Doctors from '@/components/Doctors';
import Timings from '@/components/Timings';
import Gallery from '@/components/Gallery';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Doctors />
      <Timings />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}