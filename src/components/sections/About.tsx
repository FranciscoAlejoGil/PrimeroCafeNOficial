import Image from "next/image";
import { Coffee, HeartHandshake, ChefHat } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const ABOUT_IMAGE =
  "https://images.unsplash.com/photo-1755884931646-ae6e1d227717?w=1400&auto=format&fit=crop&q=80";

const pillars = [
  {
    icon: Coffee,
    title: "Café de especialidad",
    description:
      "Granos de origen único, seleccionados y tostados en Buenos Aires, con un perfil de sabor definido en cada taza.",
  },
  {
    icon: HeartHandshake,
    title: "Trato cercano",
    description:
      "Un equipo que te reconoce, recuerda cómo te gusta tu café y te hace sentir en casa desde el primer día.",
  },
  {
    icon: ChefHat,
    title: "Pastelería propia",
    description:
      "Todo se hornea a diario en el local: rolls de canela, scones, cookies y mucho más, siempre recién hechos.",
  },
];

export function About() {
  return (
    <section id="historia" aria-labelledby="historia-heading" className="py-24 sm:py-32">
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-center lg:gap-20">
        <FadeIn direction="left" className="order-2 lg:order-1">
          <p className="text-sm font-medium tracking-wide text-terracotta uppercase">
            Nuestra historia
          </p>
          <h2
            id="historia-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Un rincón de Villa Crespo pensado para volver
          </h2>
          <p className="mt-6 text-lg text-foreground/70 text-balance">
            Primero Café nació con una idea simple: servir un café realmente
            bueno con la calidez de un lugar de barrio. Cada taza se prepara
            con granos de especialidad, y cada visita se siente personal,
            gracias a un equipo que está siempre presente.
          </p>

          <ul className="mt-10 space-y-6">
            {pillars.map((pillar) => (
              <li key={pillar.title} className="flex gap-4">
                <div className="mt-0.5 inline-flex size-10 shrink-0 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                  <pillar.icon className="size-5" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{pillar.title}</p>
                  <p className="mt-1 text-sm text-foreground/70">
                    {pillar.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </FadeIn>

        <FadeIn
          direction="right"
          delay={0.1}
          className="order-1 lg:order-2"
        >
          <div className="relative aspect-4/5 overflow-hidden rounded-3xl shadow-xl shadow-black/10">
            <Image
              src={ABOUT_IMAGE}
              alt="Interior cálido de una cafetería con mesas de madera y luz natural"
              fill
              sizes="(min-width: 1024px) 40vw, 90vw"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
