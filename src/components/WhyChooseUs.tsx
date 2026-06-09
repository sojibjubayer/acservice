import type { LucideIcon } from "lucide-react";
import {
  BadgeDollarSign,
  Clock3,
  Headphones,
  SearchCheck,
  ShieldCheck,
  Wrench,
} from "lucide-react";

type Feature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const features: Feature[] = [
  {
    title: "Detailed inspection",
    description:
      "We inspect the system carefully to identify the actual cause of the problem.",
    icon: SearchCheck,
  },
  {
    title: "Clear quotations",
    description:
      "The recommended service and expected cost are explained before work starts.",
    icon: BadgeDollarSign,
  },
  {
    title: "Professional service",
    description:
      "Work is completed carefully with attention to cleanliness and property safety.",
    icon: ShieldCheck,
  },
  {
    title: "Responsive support",
    description:
      "Customers can contact us directly through phone or WhatsApp for assistance.",
    icon: Headphones,
  },
];

const process = [
  {
    number: "01",
    title: "Contact us",
    text: "Call, WhatsApp or submit the quotation form.",
    icon: Headphones,
  },
  {
    number: "02",
    title: "Inspection",
    text: "A technician checks the system and identifies the issue.",
    icon: SearchCheck,
  },
  {
    number: "03",
    title: "Service",
    text: "The approved repair or maintenance work is completed.",
    icon: Wrench,
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden bg-[#061322] py-24 text-white sm:py-32">
      <div className="hero-grid absolute inset-0 opacity-30" />
      <div className="absolute left-0 top-0 size-96 rounded-full bg-cyan-500/10 blur-[130px]" />
      <div className="absolute bottom-0 right-0 size-96 rounded-full bg-blue-600/10 blur-[130px]" />

      <div className="section-shell relative">
        <div className="reveal-up grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-200">
              <Clock3 size={15} />
              Why choose us
            </div>

            <h2 className="font-display text-balance text-4xl font-bold tracking-[-0.04em] sm:text-5xl">
              Straightforward service from start to finish
            </h2>
          </div>

          <p className="max-w-2xl text-base leading-8 text-slate-300 lg:ml-auto">
            Our service process is designed to make AC repairs and maintenance
            easier to understand, arrange and complete.
          </p>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <article
                key={feature.title}
                className="reveal-up rounded-[1.75rem] border border-white/10 bg-white/5.5 p-6 backdrop-blur-md transition duration-300 hover:-translate-y-2 hover:border-cyan-300/30 hover:bg-white/8.5"
              >
                <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/15">
                  <Icon size={23} />
                </span>

                <h3 className="font-display mt-6 text-xl font-bold">
                  {feature.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {feature.description}
                </p>
              </article>
            );
          })}
        </div>

        <div className="reveal-up mt-16 overflow-hidden rounded-4xl border border-white/10 bg-white/4.5">
          <div className="grid md:grid-cols-3">
            {process.map((step, index) => {
              const Icon = step.icon;

              return (
                <article
                  key={step.number}
                  className={`relative p-7 sm:p-9 ${
                    index !== process.length - 1
                      ? "border-b border-white/10 md:border-b-0 md:border-r"
                      : ""
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-display text-sm font-bold text-cyan-300">
                      STEP {step.number}
                    </span>

                    <Icon size={24} className="text-white/25" />
                  </div>

                  <h3 className="font-display mt-7 text-2xl font-bold">
                    {step.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {step.text}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}