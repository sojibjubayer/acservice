import {
  ArrowRight,
  Check,
  Clock3,
  PhoneCall,
  ShieldCheck,
  Snowflake,
  Star,
} from "lucide-react";
import {
  createWhatsAppLink,
  siteConfig,
} from "@/config/site";

export default function Hero() {
  const whatsappUrl = createWhatsAppLink(
    "Hello, I need AC service in Qatar. Please send me more information.",
  );

  return (
    <section
      id="home"
      className="relative flex min-h-225 items-center overflow-hidden bg-[#061322] pt-36 text-white md:min-h-205"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url("${siteConfig.images.hero}")`,
        }}
      />

      <div className="absolute inset-0 bg-linear-to-r from-[#04111f] via-[#06182b]/95 to-[#06182b]/45" />
      <div className="absolute inset-0 bg-linear-to-t from-[#061322] via-transparent to-[#061322]/35" />
      <div className="hero-grid absolute inset-0 opacity-50" />

      <div className="absolute -left-20 top-1/3 size-72 rounded-full bg-cyan-400/15 blur-[100px]" />
      <div className="absolute -right-24 bottom-20 size-80 rounded-full bg-blue-600/20 blur-[120px]" />

      <div className="section-shell relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <div className="mb-7 inline-flex items-center gap-3 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-md">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-cyan-300 opacity-75" />
              <span className="relative inline-flex size-2 rounded-full bg-cyan-300" />
            </span>

            Fast AC Support Across Qatar
          </div>

          <h1 className="font-display text-balance max-w-4xl text-5xl font-bold leading-[1.05] tracking-[-0.045em] sm:text-6xl lg:text-7xl">
            Reliable cooling.
            <span className="linear-text block">Whenever you need it.</span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
            Professional AC repair, installation, deep cleaning and preventive
            maintenance for homes, offices, shops and commercial properties.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex items-center justify-center gap-3 rounded-full bg-cyan-400 px-7 py-4 font-bold text-slate-950 shadow-xl shadow-cyan-500/20 transition hover:-translate-y-1 hover:bg-cyan-300"
            >
              Request AC Service
              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </a>

            <a
              href={siteConfig.phoneHref}
              className="flex items-center justify-center gap-3 rounded-full border border-white/20 bg-white/5 px-7 py-4 font-bold text-white backdrop-blur-md transition hover:-translate-y-1 hover:border-cyan-300/40 hover:bg-white/10"
            >
              <PhoneCall size={19} />
              Call Technician
            </a>
          </div>

          <div className="mt-10 flex flex-wrap gap-x-7 gap-y-3 text-sm text-slate-200">
            {[
              "Home and commercial",
              "Clear quotations",
              "Qualified technicians",
            ].map((item) => (
              <span key={item} className="flex items-center gap-2">
                <span className="flex size-5 items-center justify-center rounded-full bg-cyan-400/15 text-cyan-300">
                  <Check size={13} strokeWidth={3} />
                </span>
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:mr-0">
          <div className="animate-float glass-panel relative rounded-4xl p-6 sm:p-8">
            <div className="mb-8 flex items-start justify-between">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                  Emergency Service
                </p>

                <h2 className="font-display mt-2 text-2xl font-bold">
                  Keep your space cool
                </h2>
              </div>

              <span className="flex size-12 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20">
                <Snowflake size={25} />
              </span>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <Clock3 size={22} />
                </span>

                <div>
                  <p className="font-semibold">Flexible scheduling</p>
                  <p className="mt-1 text-sm text-white/55">
                    Appointments arranged around your availability
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/6 p-4">
                <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                  <ShieldCheck size={22} />
                </span>

                <div>
                  <p className="font-semibold">Professional workmanship</p>
                  <p className="mt-1 text-sm text-white/55">
                    Careful diagnosis and practical solutions
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-6">
              <div className="flex -space-x-2">
                {["A", "M", "S"].map((letter) => (
                  <span
                    key={letter}
                    className="flex size-9 items-center justify-center rounded-full border-2 border-[#10243a] bg-slate-200 text-xs font-bold text-slate-800"
                  >
                    {letter}
                  </span>
                ))}
              </div>

              <div className="text-right">
                <div className="flex justify-end gap-0.5 text-amber-300">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star key={index} size={14} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-1 text-xs text-white/55">
                  Customer-focused service
                </p>
              </div>
            </div>
          </div>

          <div className="animate-float-delayed absolute -bottom-8 -left-3 rounded-2xl border border-white/15 bg-white p-4 text-slate-900 shadow-2xl sm:-left-10">
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-xl bg-cyan-100 text-cyan-700">
                <PhoneCall size={20} />
              </span>

              <div>
                <p className="text-xs text-slate-500">Need assistance?</p>
                <p className="font-bold">{siteConfig.phoneDisplay}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 h-16 w-full bg-linear-to-t from-slate-50 to-transparent" />
    </section>
  );
}