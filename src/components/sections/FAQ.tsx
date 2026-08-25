import { ChevronDown } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { FadeIn } from "@/components/ui/FadeIn";

const faqs = [
  {
    question: "¿Puedo reservar una mesa?",
    answer:
      "No tomamos reservas: el local es chico, pero solemos tener lugar en la vereda para grupos más grandes.",
  },
  {
    question: "¿Hacen delivery?",
    answer:
      "Por el momento no ofrecemos envíos a domicilio. Podés disfrutar tu pedido en el local o llevarlo para takeaway.",
  },
  {
    question: "¿Tienen opciones para dietas especiales?",
    answer:
      "Contamos con leche de avena como alternativa. Si tenés alguna alergia o necesidad puntual, escribinos por WhatsApp antes de tu visita y te contamos qué opciones hay disponibles.",
  },
  {
    question: "¿Cómo funciona el programa de sellos?",
    answer:
      "Por cada compra sumás un sello en tu tarjeta física. Al juntar 10 sellos, tu próximo café es gratis.",
  },
];

export function FAQ() {
  return (
    <section aria-labelledby="faq-heading" className="py-24 sm:py-32">
      <Container className="mx-auto max-w-3xl">
        <FadeIn className="text-center">
          <p className="text-sm font-medium tracking-wide text-terracotta uppercase">
            Preguntas frecuentes
          </p>
          <h2
            id="faq-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-balance sm:text-4xl"
          >
            ¿Tenés dudas?
          </h2>
        </FadeIn>

        <div className="mt-12 space-y-4">
          {faqs.map((faq, index) => (
            <FadeIn key={faq.question} delay={index * 0.05}>
              <details className="group rounded-2xl border border-clay/15 bg-surface p-6 open:pb-6">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 rounded-sm font-medium text-foreground outline-none marker:content-none focus-visible:ring-2 focus-visible:ring-terracotta">
                  {faq.question}
                  <ChevronDown className="size-5 shrink-0 text-terracotta transition-transform duration-300 group-open:rotate-180" />
                </summary>
                <p className="mt-4 text-sm text-foreground/70">{faq.answer}</p>
              </details>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
