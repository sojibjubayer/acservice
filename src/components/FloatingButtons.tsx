import {
  MessageCircle,
  Phone,
} from "lucide-react";
import {
  createWhatsAppLink,
  siteConfig,
} from "@/config/site";

export default function FloatingButtons() {
  const whatsappUrl = createWhatsAppLink(
    "Hello, I need AC service. Please send me more information.",
  );

  return (
    <div className="fixed bottom-5 right-4 z-40 flex flex-col gap-3 sm:bottom-7 sm:right-7">
      <a
        href={siteConfig.phoneHref}
        aria-label="Call AC service"
        className="group flex size-13 items-center justify-center rounded-full border border-white/20 bg-slate-950 text-white shadow-2xl transition hover:-translate-y-1 hover:bg-cyan-600 sm:size-14"
      >
        <Phone
          size={21}
          className="transition group-hover:rotate-12"
        />
      </a>

      <div className="relative">
        <span className="animate-pulse-ring absolute inset-0 rounded-full bg-emerald-400" />

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          aria-label="Contact through WhatsApp"
          className="relative flex size-14 items-center justify-center rounded-full bg-emerald-500 text-white shadow-2xl shadow-emerald-500/25 transition hover:-translate-y-1 hover:bg-emerald-400 sm:size-16"
        >
          <MessageCircle size={27} fill="currentColor" />
        </a>
      </div>
    </div>
  );
}