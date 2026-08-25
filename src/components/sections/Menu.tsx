"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { menu } from "@/data/menu";

export function Menu() {
  return (
    <section id="menu" aria-labelledby="menu-heading" className="bg-surface py-24 sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-terracotta uppercase">
            Menú
          </p>
          <h2
            id="menu-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Especialidad, pastelería y algo salado
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Una selección pensada para el desayuno, la merienda o una pausa a
            media mañana.
          </p>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {menu.map((category, index) => (
            <FadeIn key={category.id} delay={index * 0.1}>
              <motion.div
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="h-full rounded-3xl border border-clay/15 bg-background p-8 transition-shadow hover:shadow-xl hover:shadow-black/5"
              >
                <div className="flex items-center gap-3">
                  <div className="inline-flex size-11 items-center justify-center rounded-full bg-terracotta/10 text-terracotta">
                    <category.icon className="size-5" />
                  </div>
                  <h3 className="font-display text-xl font-semibold">
                    {category.title}
                  </h3>
                </div>

                <ul className="mt-6 space-y-4">
                  {category.items.map((item) => (
                    <li
                      key={item.name}
                      className="border-t border-clay/10 pt-4 first:border-t-0 first:pt-0"
                    >
                      <p className="font-medium text-foreground">{item.name}</p>
                      <p className="mt-1 text-sm text-foreground/60">
                        {item.description}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
