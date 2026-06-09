import type { LucideIcon } from "lucide-react";
import {
  ArrowUpRight,
  BrushCleaning,
  Building2,
  Fan,
  Gauge,
  Snowflake,
  Wrench,
} from "lucide-react";
import { siteConfig } from "@/config/site";

type Service = {
  title: string;
  description: string;
  icon: LucideIcon;
  image: string;
};

const services: Service[] = [
  {
    title: "AC Repair",
    description:
      "Diagnosis and repair for weak cooling, unusual noise, water leakage and other common AC problems.",
    icon: Wrench,
    image: siteConfig.images.services[0],
  },
  {
    title: "AC Installation",
    description:
      "Professional installation and replacement of split, window and central air-conditioning systems.",
    icon: Snowflake,
    image: siteConfig.images.services[1],
  },
  {
    title: "AC Deep Cleaning",
    description:
      "Detailed cleaning of filters, coils, drain lines and internal components for cleaner airflow.",
    icon: BrushCleaning,
    image: siteConfig.images.services[2],
  },
  {
    title: "Preventive Maintenance",
    description:
      "Scheduled inspections and maintenance designed to reduce breakdowns and improve performance.",
    icon: Gauge,
    image: siteConfig.images.services[3],
  },
  {
    title: "Duct and Vent Service",
    description:
      "Inspection and cleaning solutions for air ducts, vents and airflow distribution systems.",
    icon: Fan,
    image: siteConfig.images.services[4],
  },
  {
    title: "Commercial HVAC",
    description:
      "Cooling support for offices, shops, restaurants, warehouses and other commercial properties.",
    icon: Building2,
    image: siteConfig.images.services[5],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="soft-grid relative overflow-hidden bg-slate-50 py-24 sm:py-32"
    >
      <div className="absolute right-0 top-0 size-80 rounded-full bg-cyan-200/30 blur-[120px]" />

      <div className="section-shell relative">
        <div className="reveal-up mx-auto max-w-3xl text-center">
          <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
            Our AC Services
          </div>

          <h2 className="font-display text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Complete cooling solutions for every space
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-7 text-slate-600">
            From emergency repairs to regular maintenance, our services are
            designed to keep your air-conditioning system working efficiently.
          </p>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="card-shine reveal-up group relative min-h-[390px] overflow-hidden rounded-[1.75rem] bg-slate-900 shadow-xl shadow-slate-900/5"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${service.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#04111f] via-[#06182b]/65 to-[#06182b]/10" />

                <div className="absolute inset-x-0 bottom-0 z-10 p-6">
                  <div className="mb-5 flex items-center justify-between">
                    <span className="flex size-12 items-center justify-center rounded-2xl border border-white/15 bg-white/10 text-cyan-300 backdrop-blur-md">
                      <Icon size={24} />
                    </span>

                    <span className="font-display text-sm font-bold text-white/40">
                      0{index + 1}
                    </span>
                  </div>

                  <h3 className="font-display text-2xl font-bold text-white">
                    {service.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-300">
                    {service.description}
                  </p>

                  <a
                    href="#contact"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-cyan-300 transition group-hover:gap-3"
                  >
                    Request service
                    <ArrowUpRight size={17} />
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