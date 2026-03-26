import { Hero } from '../components/Hero';
import { Legacy } from '../components/Legacy';
import { ServiceNexus } from '../components/ServiceNexus';
import { Testimonials } from '../components/Testimonials';

export function Home() {
  return (
    <>
      <Hero />
      <Legacy />
      <ServiceNexus />
      <Testimonials />
    </>
  );
}
