"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, MapPin, Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Parallax } from "@/components/ui/Parallax";
import { siteConfig } from "@/config/site";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1541167760496-1628856ab772?w=1800&auto=format&fit=crop&q=80";

export function Hero() {
  return (
    <section className="relative flex min-h-[92vh] items-center overflow-hidden">
      <Parallax offset={50} className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -inset-y-16 inset-x-0">
          <Image
            src={HERO_IMAGE}
            alt="Barista sirviendo un café con arte latte en la barra de Primero Café"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70" />
      </Parallax>

      <Container className="flex flex-col items-center text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6 flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-sm backdrop-blur-sm"
        >
          <Star className="size-4 fill-gold text-gold" />
          <span>
            {siteConfig.rating.value} · Café de especialidad en Villa Crespo
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="max-w-3xl font-display text-4xl font-semibold tracking-tight text-balance sm:text-5xl md:text-6xl"
        >
          Café rico, atención cálida y una experiencia pensada para volver
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-white/85 text-balance"
        >
          Granos de origen único tostados en Buenos Aires, pastelería propia
          horneada todos los días y el trato cercano de siempre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Button href="#menu" size="lg">
            Ver el menú
            <ArrowRight className="size-4" />
          </Button>
          <Button href={siteConfig.maps.directionsUrl} size="lg" variant="outline">
            Cómo llegar
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex items-center gap-2 text-sm text-white/70"
        >
          <MapPin className="size-4 shrink-0" />
          <span>{siteConfig.address.full}</span>
        </motion.div>
      </Container>
    </section>
  );
}
