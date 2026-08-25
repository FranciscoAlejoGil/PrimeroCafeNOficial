"use client";

import { motion } from "framer-motion";
import { Star, Gift, Milk, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import type { Feature } from "@/types";

const reasons: Feature[] = [
  {
    icon: Star,
    title: `${siteConfig.rating.value}★ en Google`,
    description: `Más de ${siteConfig.rating.count.toLocaleString("es-AR")} reseñas respaldan la calidad del café y la atención.`,
  },
  {
    icon: Gift,
    title: "Programa de sellos",
    description: "Juntá 10 sellos en tu tarjeta física y el próximo café va por casa.",
  },
  {
    icon: Milk,
    title: "Opciones para todos",
    description: "Leche de avena disponible y opciones dulces y saladas variadas.",
  },
  {
    icon: Clock,
    title: "Horarios amplios",
    description: "Abierto de mañana a noche, de lunes a sábado.",
  },
];

export function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="bg-surface py-24 sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-terracotta uppercase">
            Por qué elegirnos
          </p>
          <h2
            id="why-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Motivos para volver
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {reasons.map((reason, index) => (
            <FadeIn key={reason.title} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group h-full rounded-2xl border border-clay/15 bg-background p-6 transition-shadow hover:shadow-xl hover:shadow-black/5"
              >
                <div className="inline-flex size-10 items-center justify-center rounded-lg bg-gold/15 text-gold transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6">
                  <reason.icon className="size-5" />
                </div>
                <h3 className="mt-4 font-medium">{reason.title}</h3>
                <p className="mt-2 text-sm text-foreground/70">
                  {reason.description}
                </p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
