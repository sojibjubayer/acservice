export const siteConfig = {
  name: "ArcticFlow AC Services",
  shortName: "ArcticFlow",
  domain: "https://acservice.samiracloud.com",

  description:
    "Professional AC repair, cleaning, installation and maintenance services across Doha and Qatar.",

  phoneDisplay: "+974 3000 0000",
  phoneHref: "tel:+97430000000",
  whatsappNumber: "97430000000",
  email: "service@arcticflow.qa",

  address: "Doha, Qatar",
  workingHours: "24/7 Emergency Support",

  nav: [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],

  serviceAreas: [
    "Doha",
    "Al Wakrah",
    "Al Rayyan",
    "Lusail",
    "The Pearl",
    "West Bay",
    "Old Airport",
    "Industrial Area",
  ],

  images: {
    hero:
      "https://images.pexels.com/photos/5463575/pexels-photo-5463575.jpeg?auto=compress&cs=tinysrgb&w=1800",

    about:
      "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=1200",

    services: [
      "https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/6471911/pexels-photo-6471911.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/6471912/pexels-photo-6471912.jpeg?auto=compress&cs=tinysrgb&w=900",
      "https://images.pexels.com/photos/5463581/pexels-photo-5463581.jpeg?auto=compress&cs=tinysrgb&w=900",
    ],

    projects: [
      "https://images.pexels.com/photos/5463587/pexels-photo-5463587.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/5463576/pexels-photo-5463576.jpeg?auto=compress&cs=tinysrgb&w=1200",
      "https://images.pexels.com/photos/6471913/pexels-photo-6471913.jpeg?auto=compress&cs=tinysrgb&w=1200",
    ],
  },
} as const;

export function createWhatsAppLink(message: string): string {
  return `https://wa.me/${siteConfig.whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;
}