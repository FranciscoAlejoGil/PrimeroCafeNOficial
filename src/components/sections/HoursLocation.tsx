import { MapPin, Clock } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export function HoursLocation() {
  return (
    <section
      id="ubicacion"
      aria-labelledby="ubicacion-heading"
      className="bg-surface py-24 sm:py-32"
    >
      <Container className="grid gap-16 lg:grid-cols-2 lg:items-start lg:gap-20">
        <FadeIn direction="left">
          <p className="text-sm font-medium tracking-wide text-terracotta uppercase">
            Ubicación y horarios
          </p>
          <h2
            id="ubicacion-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            Te esperamos en Villa Crespo
          </h2>

          <div className="mt-8 flex items-start gap-3">
            <MapPin className="mt-0.5 size-5 shrink-0 text-terracotta" />
            <p className="text-foreground/80">{siteConfig.address.full}</p>
          </div>

          <div className="mt-6 flex items-start gap-3">
            <Clock className="mt-0.5 size-5 shrink-0 text-terracotta" />
            <table className="w-full max-w-xs text-sm text-foreground/80">
              <tbody>
                {siteConfig.hours.map((row) => (
                  <tr key={row.day}>
                    <th scope="row" className="py-1 pr-4 text-left font-normal text-foreground/60">
                      {row.day}
                    </th>
                    <td className="py-1 text-right font-medium">{row.time}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Button href={siteConfig.maps.directionsUrl} size="lg">
              Cómo llegar
            </Button>
            <Button href={siteConfig.contact.whatsappUrl} size="lg" variant="secondary">
              Escribirnos por WhatsApp
            </Button>
          </div>
        </FadeIn>

        <FadeIn direction="right" delay={0.1}>
          <div className="overflow-hidden rounded-3xl border border-clay/15 shadow-xl shadow-black/5">
            <iframe
              src={siteConfig.maps.embedUrl}
              title={`Mapa de ubicación de ${siteConfig.name}`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-[420px] w-full grayscale-[15%]"
            />
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
