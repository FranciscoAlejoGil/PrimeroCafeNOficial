import { Coffee, Cookie, Sandwich, CupSoda } from "lucide-react";
import type { MenuCategory } from "@/types";

export const menu: MenuCategory[] = [
  {
    id: "cafe",
    title: "Café de especialidad",
    icon: Coffee,
    items: [
      {
        name: "Espresso",
        description: "Granos de origen único, tostados en Buenos Aires.",
      },
      {
        name: "Flat White",
        description: "Doble espresso con microespuma sedosa.",
      },
      {
        name: "Latte",
        description: "Suave y equilibrado, con opción de leche de avena.",
      },
      {
        name: "Cold Brew",
        description: "Extracción en frío durante 18 horas, notas dulces.",
      },
    ],
  },
  {
    id: "pasteleria",
    title: "Pastelería propia",
    icon: Cookie,
    items: [
      {
        name: "Roll de canela",
        description: "Nuestro clásico: tibio, esponjoso y bien especiado.",
      },
      {
        name: "Medialunas",
        description: "De manteca, horneadas todas las mañanas.",
      },
      {
        name: "Scone de queso",
        description: "Textura tierna por fuera, tierna por dentro.",
      },
      {
        name: "Cookie red velvet",
        description: "Crocante en el borde, húmeda en el centro.",
      },
      {
        name: "Cheesecake de frutos rojos",
        description: "Base amantecada y coulis de frutos rojos frescos.",
      },
      {
        name: "Alfajor de coco y dulce de leche",
        description: "Relleno generoso, cubierto en coco rallado.",
      },
    ],
  },
  {
    id: "salado",
    title: "Para almorzar",
    icon: Sandwich,
    items: [
      {
        name: "Tostado de cuatro quesos",
        description: "Generoso y bien fundido, ideal para compartir.",
      },
      {
        name: "Tostado de chipa",
        description: "Pan de queso relleno, crocante por fuera.",
      },
      {
        name: "Roll de panceta y provolone",
        description: "Dulce y salado en equilibrio justo.",
      },
    ],
  },
  {
    id: "frias",
    title: "Bebidas frías",
    icon: CupSoda,
    items: [
      {
        name: "Limonada de hibiscus",
        description: "Refrescante, floral y ligeramente ácida.",
      },
      {
        name: "Jugo de naranja exprimido",
        description: "Recién exprimido, sin azúcar agregada.",
      },
    ],
  },
];
