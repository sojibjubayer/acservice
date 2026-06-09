import {
  ArrowUpRight,
  Building2,
  Home,
  Store,
} from "lucide-react";
import { siteConfig } from "@/config/site";

const projects = [
  {
    title: "Residential AC Maintenance",
    category: "Villa cooling system",
    icon: Home,
    image: siteConfig.images.projects[0],
  },
  {
    title: "Outdoor Unit Repair",
    category: "Technical inspection",
    icon: Building2,
    image: siteConfig.images.projects[1],
  },
  {
    title: "Commercial HVAC Service",
    category: "Business property",
    icon: Store,
    image: siteConfig.images.projects[2],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="soft-grid bg-slate-50 py-24 sm:py-32">
      <div className="section-shell">
        <div className="reveal-up flex flex-col gap-7 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-3xl">
            <div className="mb-4 inline-flex rounded-full bg-cyan-100 px-4 py-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-800">
              Recent work
            </div>

            <h2 className="font-display text-balance text-4xl font-bold tracking-[-0.04em] text-slate-950 sm:text-5xl">
              Cooling work completed with care
            </h2>

            <p className="mt-5 max-w-2xl leading-7 text-slate-600">
              A professional project gallery helps customers understand the
              services, systems and properties your company handles.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-300 bg-white px-6 py-3 text-sm font-bold text-slate-900 transition hover:border-cyan-500 hover:text-cyan-700"
          >
            Discuss your project
            <ArrowUpRight size={17} />
          </a>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {projects.map((project, index) => {
            const Icon = project.icon;

            return (
              <article
                key={project.title}
                className={`card-shine reveal-up group relative overflow-hidden rounded-4xl bg-slate-950 shadow-xl ${
                  index === 1 ? "lg:translate-y-8" : ""
                }`}
              >
                <div
                  className="h-117.5 bg-cover bg-center transition duration-700 group-hover:scale-110"
                  style={{
                    backgroundImage: `url("${project.image}")`,
                  }}
                />

                <div className="absolute inset-0 bg-linear-to-t from-slate-950 via-slate-950/15 to-transparent" />

                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex size-11 items-center justify-center rounded-xl border border-white/15 bg-white/10 text-cyan-300 backdrop-blur-md">
                      <Icon size={21} />
                    </span>

                    <span className="rounded-full border border-white/15 bg-black/20 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 backdrop-blur-md">
                      Project 0{index + 1}
                    </span>
                  </div>

                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                    {project.category}
                  </p>

                  <h3 className="font-display mt-2 text-2xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>
              </article>
            );
          })}
        </div>

        <p className="mt-16 text-center text-xs text-slate-500">
          Replace these demonstration images with the client&apos;s genuine
          project photographs before publishing.
        </p>
      </div>
    </section>
  );
}