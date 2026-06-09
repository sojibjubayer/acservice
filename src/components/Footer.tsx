import {
  Mail,
  MapPin,
  Phone,
  Snowflake,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const footerServices = [
  "AC Repair",
  "AC Installation",
  "AC Deep Cleaning",
  "Preventive Maintenance",
  "Commercial HVAC",
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030b14] text-white">
      <div className="section-shell grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <a href="#home" className="inline-flex items-center gap-3">
            <span className="flex size-11 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950">
              <Snowflake size={25} />
            </span>

            <span>
              <span className="font-display block text-lg font-bold">
                {siteConfig.shortName}
              </span>

              <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.22em] text-cyan-300">
                AC Services Qatar
              </span>
            </span>
          </a>

          <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
            Professional air-conditioning repair, installation, cleaning and
            maintenance services for residential and commercial properties.
          </p>
        </div>

        <div>
          <h3 className="font-display font-bold">Quick links</h3>

          <div className="mt-5 flex flex-col gap-3">
            {siteConfig.nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold">Our services</h3>

          <div className="mt-5 flex flex-col gap-3">
            {footerServices.map((service) => (
              <a
                key={service}
                href="#services"
                className="w-fit text-sm text-slate-400 transition hover:translate-x-1 hover:text-cyan-300"
              >
                {service}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold">Contact details</h3>

          <div className="mt-5 space-y-4 text-sm text-slate-400">
            <a
              href={siteConfig.phoneHref}
              className="flex items-center gap-3 transition hover:text-cyan-300"
            >
              <Phone size={17} />
              {siteConfig.phoneDisplay}
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="flex items-center gap-3 transition hover:text-cyan-300"
            >
              <Mail size={17} />
              {siteConfig.email}
            </a>

            <p className="flex items-center gap-3">
              <MapPin size={17} />
              {siteConfig.address}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="section-shell flex flex-col gap-3 py-6 text-center text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:text-left">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>

          <p>Demo website by Samira Cloud</p>
        </div>
      </div>
    </footer>
  );
}