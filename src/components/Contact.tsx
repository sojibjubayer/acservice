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
import { createWhatsAppLink, siteConfig } from "@/config/site";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const directWhatsAppUrl = createWhatsAppLink(
    "Hello, I need AC service in Qatar. Please send me more information.",
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const data = new FormData(form);

    const name = String(data.get("name") ?? "").trim();
    const phone = String(data.get("phone") ?? "").trim();
    const area = String(data.get("area") ?? "").trim();
    const service = String(data.get("service") ?? "").trim();
    const details = String(data.get("details") ?? "").trim();

    const message = [
      "Hello, I would like to request AC service.",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `Area: ${area}`,
      `Required service: ${service}`,
      `Details: ${details || "Not provided"}`,
    ].join("\n");

    window.open(
      createWhatsAppLink(message),
      "_blank",
      "noopener,noreferrer",
    );

    setMessageSent(true);
    form.reset();
  }

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-white py-16 sm:py-24 lg:py-32"
    >
      {/* Background decoration */}
      <div className="pointer-events-none absolute -left-40 bottom-0 size-80 rounded-full bg-cyan-100/70 blur-[110px] sm:size-96" />

      <div className="pointer-events-none absolute -right-40 top-10 size-72 rounded-full bg-blue-100/60 blur-[120px]" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-4 sm:gap-8 sm:px-6 lg:grid-cols-[0.82fr_1.18fr] lg:gap-10 lg:px-8">
        {/* Contact information */}
        <div className="reveal-up overflow-hidden rounded-3xl bg-[#061322] p-5 text-white shadow-2xl shadow-slate-950/15 sm:rounded-4xl sm:p-8 lg:p-10">
          <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3.5 py-2 text-[11px] font-bold uppercase tracking-[0.16em] text-cyan-200 sm:px-4 sm:text-xs sm:tracking-[0.18em]">
            <MessageCircle size={15} className="shrink-0" />
            Contact us
          </div>

          <h2 className="font-display mt-5 text-3xl font-bold tracking-[-0.04em] sm:mt-6 sm:text-4xl lg:text-5xl">
            Need AC assistance?
          </h2>

          <p className="mt-4 max-w-lg text-sm leading-7 text-slate-300 sm:mt-5 sm:text-base">
            Contact our team directly or send your service details using the
            quotation form.
          </p>

          <div className="mt-7 space-y-3 sm:mt-9 sm:space-y-4">
            {/* Phone */}
            <a
              href={siteConfig.phoneHref}
              className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5.5 p-3.5 transition hover:border-cyan-300/30 hover:bg-white/8.5 sm:gap-4 sm:p-4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400 text-slate-950 sm:size-12">
                <Phone size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-white/50">Call us</span>

                <span className="mt-1 block truncate text-sm font-bold sm:text-base">
                  {siteConfig.phoneDisplay}
                </span>
              </span>

              <ArrowRight
                size={18}
                className="shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-cyan-300"
              />
            </a>

            {/* WhatsApp */}
            <a
              href={directWhatsAppUrl}
              target="_blank"
              rel="noreferrer"
              className="group flex min-w-0 items-center gap-3 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-3.5 transition hover:border-emerald-300/40 hover:bg-emerald-400/15 sm:gap-4 sm:p-4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500 text-white sm:size-12">
                <MessageCircle size={21} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-white/50">WhatsApp</span>

                <span className="mt-1 block text-sm font-bold sm:text-base">
                  Chat with our team
                </span>
              </span>

              <ArrowRight
                size={18}
                className="shrink-0 text-white/30 transition group-hover:translate-x-1 group-hover:text-emerald-300"
              />
            </a>

            {/* Email */}
            <a
              href={`mailto:${siteConfig.email}`}
              className="group flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5.5 p-3.5 transition hover:border-cyan-300/30 hover:bg-white/8.5 sm:gap-4 sm:p-4"
            >
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 sm:size-12">
                <Mail size={20} />
              </span>

              <span className="min-w-0 flex-1">
                <span className="block text-xs text-white/50">Email</span>

                <span className="mt-1 block break-all text-sm font-bold sm:text-base">
                  {siteConfig.email}
                </span>
              </span>
            </a>

            {/* Location */}
            <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5.5 p-3.5 sm:gap-4 sm:p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 sm:size-12">
                <MapPin size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-white/50">Location</span>

                <span className="mt-1 block text-sm font-bold leading-5 sm:text-base">
                  {siteConfig.address}
                </span>
              </span>
            </div>

            {/* Working hours */}
            <div className="flex min-w-0 items-center gap-3 rounded-2xl border border-white/10 bg-white/5.5 p-3.5 sm:gap-4 sm:p-4">
              <span className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-cyan-300 sm:size-12">
                <Clock3 size={20} />
              </span>

              <span className="min-w-0">
                <span className="block text-xs text-white/50">
                  Working hours
                </span>

                <span className="mt-1 block text-sm font-bold leading-5 sm:text-base">
                  {siteConfig.workingHours}
                </span>
              </span>
            </div>
          </div>
        </div>

        {/* Quotation form */}
        <div className="reveal-up rounded-3xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-900/[0.07] sm:rounded-4xl sm:p-8 lg:p-10">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-700 sm:text-xs sm:tracking-[0.2em]">
              Request a quotation
            </p>

            <h2 className="font-display mt-3 text-2xl font-bold tracking-[-0.035em] text-slate-950 sm:text-3xl lg:text-4xl">
              Tell us what service you need
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-600 sm:mt-4">
              Your request will open directly in WhatsApp after submission.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="mt-7 space-y-4 sm:mt-8 sm:space-y-5"
          >
            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <label className="block min-w-0">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Full name
                </span>

                <input
                  type="text"
                  name="name"
                  required
                  autoComplete="name"
                  placeholder="Your name"
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </label>

              <label className="block min-w-0">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Mobile number
                </span>

                <input
                  type="tel"
                  name="phone"
                  required
                  inputMode="tel"
                  autoComplete="tel"
                  placeholder="+974"
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
                />
              </label>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
              <label className="block min-w-0">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Area
                </span>

                <select
                  name="area"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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

              <label className="block min-w-0">
                <span className="mb-2 block text-sm font-semibold text-slate-700">
                  Required service
                </span>

                <select
                  name="service"
                  required
                  defaultValue=""
                  className="min-h-12 w-full rounded-xl border border-slate-200 bg-slate-50 px-4 text-base text-slate-950 outline-none transition focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100"
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
                rows={4}
                placeholder="Tell us about the AC problem..."
                className="w-full resize-none rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-base text-slate-950 outline-none transition placeholder:text-slate-400 focus:border-cyan-500 focus:bg-white focus:ring-4 focus:ring-cyan-100 sm:min-h-32"
              />
            </label>

            <button
              type="submit"
              className="group flex min-h-13 w-full items-center justify-center gap-2 rounded-xl bg-linear-to-r from-cyan-500 to-cyan-400 px-4 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-cyan-500/20 transition hover:-translate-y-0.5 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-cyan-200 sm:gap-3 sm:px-6 sm:py-4 sm:text-base"
            >
              <span className="text-center">
                Send request through WhatsApp
              </span>

              <Send
                size={18}
                className="shrink-0 transition group-hover:translate-x-1"
              />
            </button>

            {messageSent && (
              <p
                aria-live="polite"
                className="flex items-center justify-center gap-2 text-center text-sm font-semibold text-emerald-700"
              >
                <CheckCircle2 size={17} className="shrink-0" />
                Your request was prepared in WhatsApp.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}