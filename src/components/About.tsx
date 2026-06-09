import {
  BadgeCheck,
  CheckCircle2,
  MapPin,
  Snowflake,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const benefits = [
  "Residential and commercial service",
  "Clear explanation before work begins",
  "Careful inspection and fault diagnosis",
  "Support across major areas of Qatar",
];

export default function About() {
  return (
    <section id="about" className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="section-shell grid items-center gap-14 lg:grid-cols-2">
        <div className="reveal-up relative">
          <div
            className="min-h-135 rounded-4xl bg-cover bg-center shadow-2xl shadow-slate-900/15"
            style={{
              backgroundImage: `url("${siteConfig.images.about}")`,
            }}
          />

          <div className="absolute inset-0 rounded-4xl bg-linear-to-t from-slate-950/55 via-transparent to-transparent" />

          <div className="animate-float absolute -bottom-8 right-3 max-w-65 rounded-2xl border border-slate-200 bg-white p-5 shadow-2xl sm:-right-8">
            <div className="flex items-center gap-3">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-cyan-100 text-cyan-700">
                <BadgeCheck size={25} />
              </span>

              <div>
                <p className="font-display font-bold text-slate-950">
                  Service you can trust
                </p>
                <p className="mt-1 text-xs leading-5 text-slate-500">
                  Professional support from inspection to completion
                </p>
              </div>
            </div>
          </div>

          <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/20 bg-slate-950/55 px-4 py-2 text-xs font-semibold text-white backdrop-blur-md">
            <MapPin size={14} className="text-cyan-300" />
            Serving Doha and Qatar
          </div>
        </div>

        <div className="reveal-up lg:pl-7">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
            <Snowflake size={15} />
            About our service
          </div>

          <h2 className="font-display text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
            Practical AC solutions built around your comfort
          </h2>

          <p className="mt-6 text-base leading-8 text-slate-600">
            We provide air-conditioning repair, cleaning, installation and
            maintenance services for homes and businesses across Qatar.
          </p>

          <p className="mt-4 text-base leading-8 text-slate-600">
            Our approach begins with careful inspection, followed by a clear
            explanation of the recommended work before the service starts.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {benefits.map((benefit) => (
              <div
                key={benefit}
                className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 p-4"
              >
                <CheckCircle2
                  size={20}
                  className="mt-0.5 shrink-0 text-cyan-600"
                />

                <span className="text-sm font-semibold leading-6 text-slate-700">
                  {benefit}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-col gap-4 border-t border-slate-200 pt-8 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm text-slate-500">Call for AC assistance</p>
              <a
                href={siteConfig.phoneHref}
                className="font-display mt-1 block text-xl font-bold text-slate-950 hover:text-cyan-700"
              >
                {siteConfig.phoneDisplay}
              </a>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-1 hover:bg-cyan-600"
            >
              Get a free quotation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}