"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { gallery } from "@/data/gallery";

export function Gallery() {
  return (
    <section id="galeria" aria-labelledby="galeria-heading" className="py-24 sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium tracking-wide text-terracotta uppercase">
            Galería
          </p>
          <h2
            id="galeria-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Un vistazo a Primero Café
          </h2>
        </FadeIn>

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-3">
          {gallery.map((image, index) => (
            <FadeIn key={image.src} delay={(index % 3) * 0.1}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className={`group relative aspect-square overflow-hidden rounded-2xl ${
                  index === 0 ? "col-span-2 aspect-video sm:col-span-1 sm:aspect-square" : ""
                }`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-3 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <p className="text-xs text-white/80">{image.credit}</p>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
