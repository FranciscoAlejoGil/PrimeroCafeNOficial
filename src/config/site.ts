export const siteConfig = {
  name: "Primero Café",
  shortName: "Primero",
  tagline: "Café de especialidad en el corazón de Villa Crespo",
  description:
    "Café rico, atención cálida y una experiencia pensada para volver. Primero Café es una cafetería de especialidad en Villa Crespo, Buenos Aires: granos de origen único, pastelería propia y trato cercano.",
  url: "https://primerocafe.com.ar",
  address: {
    street: "Thames 1176",
    neighborhood: "Villa Crespo",
    city: "CABA, Argentina",
    full: "Thames 1176, Villa Crespo, CABA",
  },
  contact: {
    phoneDisplay: "+54 9 11 2769-1695",
    whatsappUrl:
      "https://wa.me/5491127691695?text=Hola%20Primero%20Caf%C3%A9%2C%20quisiera%20hacer%20una%20consulta",
    instagramUrl: "https://www.instagram.com/primerocafe.ar/",
    instagramHandle: "@primerocafe.ar",
  },
  maps: {
    embedUrl:
      "https://www.google.com/maps?q=Primero+Caf%C3%A9,+Thames+1176,+Villa+Crespo,+Buenos+Aires&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=Primero+Caf%C3%A9,+Thames+1176,+Villa+Crespo,+CABA",
  },
  rating: {
    value: 4.9,
    count: 1900,
  },
  hours: [
    { day: "Lunes a martes", time: "7:00 – 19:30" },
    { day: "Miércoles", time: "7:00 – 20:30" },
    { day: "Jueves a viernes", time: "7:00 – 19:30" },
    { day: "Sábado", time: "8:00 – 19:00" },
    { day: "Domingo", time: "Cerrado" },
  ],
  nav: [
    { label: "Nuestra Historia", href: "#historia" },
    { label: "Menú", href: "#menu" },
    { label: "Galería", href: "#galeria" },
    { label: "Opiniones", href: "#opiniones" },
    { label: "Ubicación", href: "#ubicacion" },
  ],
} as const;
