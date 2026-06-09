import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import WhyChooseUs from "@/components/WhyChooseUs";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { siteConfig } from "@/config/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: siteConfig.name,
  description: siteConfig.description,
  url: siteConfig.domain,
  telephone: siteConfig.phoneDisplay,
  email: siteConfig.email,
  image: siteConfig.images.hero,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Doha",
    addressCountry: "QA",
  },
  areaServed: siteConfig.serviceAreas.map((area) => ({
    "@type": "City",
    name: area,
  })),
  serviceType: [
    "AC Repair",
    "AC Installation",
    "AC Cleaning",
    "AC Maintenance",
    "HVAC Service",
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(jsonLd),
        }}
      />

      <Header />

      <main>
        <Hero />
        <Services />
        <About />
        <WhyChooseUs />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <FloatingButtons />
    </>
  );
}