"use client";

import type { FormEvent } from "react";
import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import {
  createWhatsAppLink,
  siteConfig,
} from "@/config/site";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "");
    const phone = String(data.get("phone") ?? "");
    const area = String(data.get("area") ?? "");
    const service = String(data.get("service") ?? "");
    const details = String(data.get("details") ?? "");

    const message = [
      "Hello, I would like to request AC service.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Area: ${area}`,
      `Required service: ${service}`,
      `Details: ${details || "Not provided"}`,
    ].join("\n");

    const whatsappUrl = createWhatsAppLink(message);

    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
    setMessageSent(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-24 sm:py-32"
    >
      <div className="absolute -left-32 bottom-0 size-96 rounded-full bg-cyan-100/60 blur-[130px]" />

      <div className="section-shell relative grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
        <div className="reveal-up rounded-4xl bg-[#061322] p-7 text-white shadow-2xl sm:p-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-cyan-200">
            <MessageCircle size={15} />
            Contact us
          </div>

          <h2 className="font-display mt-6 text-4xl font-bold tracking-[-0.04em]">
            Need AC assistance?
          </h2>

          <p className="mt-5 leading-7 text-slate-300">
            Contact the service team directly or submit your details through
            the quotation form.
          </p>

          <div className="mt-9 space-y-4">
            <a
              href={siteConfig.phoneHref}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5.5 p-4 transition hover:border-cyan-300/30 hover:bg-white/8.5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950">
                <Phone size={21} />
              </span>

              <span>
                <span className="block text-xs text-white/50">Call us</span>
                <span className="mt-1 block font-bold">
                  {siteConfig.phoneDisplay}
                </span>
              </span>

              <ArrowRight
                size={18}
                className="ml-auto text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300"
              />
            </a>

            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5.5 p-4 transition hover:border-cyan-300/30 hover:bg-white/8.5"
            >
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <Mail size={21} />
              </span>

              <span>
                <span className="block text-xs text-white/50">Email</span>
                <span className="mt-1 block font-bold">
                  {siteConfig.email}
                </span>
              </span>
            </a>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5.5 p-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <MapPin size={21} />
              </span>

              <span>
                <span className="block text-xs text-white/50">Location</span>
                <span className="mt-1 block font-bold">
                  {siteConfig.address}
                </span>
              </span>
            </div>

            <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5.5 p-4">
              <span className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300">
                <Clock3 size={21} />
              </span>

              <span>
                <span className="block text-xs text-white/50">
                  Working hours
                </span>
                <span className="mt-1 block font-bold">
                  {siteConfig.workingHours}
                </span>
              </span>
            </div>
          </div>
        </div>

        <div className="reveal-up rounded-4xl border border-slate-200 bg-white p-6 shadow-2xl shadow-slate-900/8 sm:p-10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-cyan-700">
              Request a quotation
            </p>

            <h2 className="font-display mt-3 text-3xl font-bold tracking-[-0.035em] text-slate-950 sm:text-4xl">
              Tell us what service you need
            </h2>

            <p className="mt-4 text-sm leading-6 text-slate-600">
              After submission, your request will open directly in WhatsApp.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 space-y-5">
            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Full name
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your name"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile number
                </span>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+974"
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Area
                </span>

                <select
                  name="area"
                  required
                  defaultValue=""
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="" disabled>
                    Select your area
                  </option>

                  {siteConfig.serviceAreas.map((area) => (
                    <option key={area} value={area}>
                      {area}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Required service
                </span>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="h-13 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-sm text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                >
                  <option value="" disabled>
                    Choose a service
                  </option>
                  <option value="AC Repair">AC Repair</option>
                  <option value="AC Installation">AC Installation</option>
                  <option value="AC Deep Cleaning">AC Deep Cleaning</option>
                  <option value="Preventive Maintenance">
                    Preventive Maintenance
                  </option>
                  <option value="Commercial HVAC">Commercial HVAC</option>
                  <option value="Other AC Service">Other AC Service</option>
                </select>
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-slate-700">
                Additional details
              </span>

              <textarea
                name="details"
                rows={5}
                placeholder="Tell us about the AC problem..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
              />
            </label>

            <button
              type="submit"
              className="group flex w-full items-center justify-center gap-3 rounded-xl bg-linear-to-r from-cyan-500 to-cyan-400 px-6 py-4 font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-1 hover:shadow-xl"
            >
              Send request through WhatsApp
              <Send
                size={18}
                className="transition group-hover:translate-x-1"
              />
            </button>

            {messageSent && (
              <p className="flex items-center justify-center gap-2 text-sm font-semibold text-emerald-700">
                <CheckCircle2 size={17} />
                Your request was prepared in WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}