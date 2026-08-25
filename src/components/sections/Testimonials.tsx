import { Star, Quote } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";
import { testimonials } from "@/data/testimonials";

export function Testimonials() {
  return (
    <section id="opiniones" aria-labelledby="opiniones-heading" className="py-24 sm:py-32">
      <Container>
        <FadeIn className="mx-auto max-w-2xl text-center">
          <div className="flex items-center justify-center gap-1 text-gold">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="size-5 fill-gold" />
            ))}
          </div>
          <p className="mt-3 text-sm text-foreground/60">
            {siteConfig.rating.value} sobre 5 · más de{" "}
            {siteConfig.rating.count.toLocaleString("es-AR")} reseñas en Google
          </p>
          <h2
            id="opiniones-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Lo que dicen quienes ya nos visitaron
          </h2>
        </FadeIn>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={testimonial.author} delay={index * 0.1}>
              <figure className="h-full rounded-2xl border border-clay/15 bg-surface p-6">
                <Quote className="size-6 text-terracotta/40" aria-hidden />
                <blockquote className="mt-4 text-foreground/80">
                  “{testimonial.quote}”
                </blockquote>
                <figcaption className="mt-4 text-sm font-medium text-foreground/60">
                  {testimonial.author}
                </figcaption>
              </figure>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
