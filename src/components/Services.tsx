import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BrushCleaning,
  Fan,
  Gauge,
  PackageOpen,
  Repeat,
  Snowflake,
  Truck,
  Wrench,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
  badge: string;
};

const services: Service[] = [
  {
    title: "AC Repair",
    description:
      "Fast repair for weak cooling, water leakage, noise, compressor issues and common AC problems.",
    icon: Wrench,
    image: siteConfig.images.services[0],
    badge: "Most Demanded",
  },
  {
    title: "AC Cleaning",
    description:
      "Deep cleaning of filters, coils and indoor units for better cooling, fresh air and hygiene.",
    icon: BrushCleaning,
    image: siteConfig.images.services[1],
    badge: "Popular",
  },
  {
    title: "AC Gas Filling",
    description:
      "Professional gas refill and leak checking to restore powerful cooling performance.",
    icon: Gauge,
    image: siteConfig.images.services[2],
    badge: "High Demand",
  },
  {
    title: "AC Maintenance",
    description:
      "Regular inspection and servicing to prevent breakdowns and improve AC lifespan.",
    icon: Fan,
    image: siteConfig.images.services[3],
    badge: "Recommended",
  },
  {
    title: "AC Installation",
    description:
      "Safe installation of split, window and central AC units with proper fitting and testing.",
    icon: Snowflake,
    image: siteConfig.images.services[4],
    badge: "Expert Service",
  },
  {
    title: "AC Capacitor Change",
    description:
      "Quick capacitor replacement to fix starting problems and restore AC performance.",
    icon: Zap,
    image: siteConfig.images.services[5],
    badge: "Quick Fix",
  },
  {
    title: "Duct & Split AC Repair",
    description:
      "Repair service for ducted and split AC systems including airflow, leakage and drainage issues.",
    icon: PackageOpen,
    image: "https://acrepairserviceqatar.com/wp-content/uploads/2023/08/ducatable.jpg",
    badge: "Specialized",
  },
  {
    title: "AC Shifting",
    description:
      "Safe dismantling, moving and reinstallation of AC units with proper tools and care.",
    icon: Truck,
    image: "https://encrypted-tbn2.gstatic.com/licensed-image?q=tbn:ANd9GcQWg8KAKIPmhFTkigT7n6RCBPw8Bbj7AOmjrxwHh-6Ekx-2jsqS9uYXTFLX_1sGFAOUtZriaKv5QipzshQ",
    badge: "Relocation",
  },
  {
    title: "AC Buy & Sell",
    description:
      "Support for buying used AC units and selling old AC systems with practical guidance.",
    icon: Repeat,
    image: "https://dohaacservices24.com/wp-content/uploads/2025/06/USED-AC-BUY-AND-SELL-1-1.png",
    badge: "Support",
  },
];

export default function Services() {
  // Replace with your actual business WhatsApp number (include country code, omit spaces or +)
  const WHATSAPP_NUMBER = "1234567890"; 

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-slate-50 py-16 sm:py-24 md:py-32"
    >
      {/* Decorative Blur Spheres - Scaled to strictly prevent layout shifting/overflow on mobile */}
      <div className="absolute -top-12 right-0 size-72 rounded-full bg-cyan-200/40 blur-[100px] sm:size-96 sm:blur-[130px]" />
      <div className="absolute bottom-0 left-0 size-72 rounded-full bg-blue-200/30 blur-[100px] sm:size-96 sm:blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Heading Group */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="mb-4 inline-flex rounded-full border border-cyan-200 bg-white px-3.5 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 shadow-sm sm:px-4 sm:py-1.5 sm:text-xs">
            Our Services
          </span>

          <h2 className="font-display text-balance text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl md:text-5xl">
            Most demanded AC services in one place
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-base leading-relaxed text-slate-600 sm:mt-5 sm:text-lg">
            From urgent AC repair to cleaning, gas filling, installation and
            maintenance, choose the service you need and book instantly.
          </p>
        </div>

        {/* Fully Responsive Grid Container */}
        <div className="mt-12 grid gap-6 sm:mt-16 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            
            // Constructs clean, custom context messages for WhatsApp conversion
            const whatsappText = encodeURIComponent(
              `Hi! I'm looking to book your "${service.title}" service. Could you please share availability?`
            );
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappText}`;

            return (
              <article
                key={service.title}
                className="group relative flex min-h-105 flex-col justify-end overflow-hidden rounded-4xl bg-slate-950 p-6 shadow-xl shadow-slate-900/5 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/20 sm:p-8"
              >
                {/* Background Render */}
                <div
                  className="absolute inset-0 z-0 bg-cover bg-center transition duration-700 group-hover:scale-105"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />
                
                {/* Heavy Dark Layer to guarantee contrast over any mismatched web image backgrounds */}
                <div className="absolute inset-0 z-10 bg-linear-to-t from-slate-950 via-slate-950/85 to-slate-950/20" />

                {/* Floating Service Tracker */}
                <div className="absolute left-6 top-6 z-20 flex items-center gap-2 rounded-full border border-white/10 bg-black/20 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
                  <Icon size={14} className="text-cyan-400" />
                  <span className="opacity-90">0{index + 1}</span>
                </div>

                {/* Content Block */}
                <div className="relative z-20 mt-auto flex flex-col items-start">
                  <span className="mb-2 inline-block text-[10px] font-bold uppercase tracking-widest text-cyan-400 sm:text-xs">
                    {service.badge}
                  </span>

                  <h3 className="font-display text-xl font-bold text-white sm:text-2xl">
                    {service.title}
                  </h3>

                  <p className="mt-2.5 text-sm leading-relaxed text-slate-300 group-hover:text-white transition-colors duration-300">
                    {service.description}
                  </p>

                  {/* Wide Thumb-Friendly Mobile Button Interaction */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-500 py-3.5 text-center text-sm font-bold text-white shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:bg-cyan-400 active:scale-95 group-hover:bg-white group-hover:text-slate-950 group-hover:shadow-none"
                  >
                    Book via WhatsApp
                    <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}