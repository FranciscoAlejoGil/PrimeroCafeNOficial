import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { FadeIn } from "@/components/ui/FadeIn";
import { siteConfig } from "@/config/site";

export function CTA() {
  return (
    <section className="py-24 sm:py-32">
      <Container>
        <FadeIn className="flex flex-col items-center rounded-3xl bg-foreground px-6 py-16 text-center text-background sm:px-16">
          <h2 className="max-w-xl font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl">
            ¿Ya tenés ganas de un buen café?
          </h2>
          <p className="mt-4 max-w-md text-background/70">
            Pasá por Thames 1176, Villa Crespo, y empezá a juntar sellos:
            cada 10, el café va por casa.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button
              href={siteConfig.contact.whatsappUrl}
              size="lg"
              className="bg-background text-foreground hover:opacity-90"
            >
              Escribinos por WhatsApp
            </Button>
            <Button
              href={siteConfig.maps.directionsUrl}
              size="lg"
              variant="ghost"
              className="border border-background/40 text-background hover:bg-background/10"
            >
              Cómo llegar
            </Button>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
