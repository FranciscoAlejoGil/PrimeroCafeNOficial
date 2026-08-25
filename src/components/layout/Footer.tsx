import Link from "next/link";
import { MessageCircle, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/config/site";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-clay/15 bg-surface">
      <Container className="py-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="font-display text-lg font-semibold text-foreground">
              {siteConfig.name}
            </p>
            <p className="mt-3 max-w-xs text-sm text-foreground/60">
              {siteConfig.tagline}.
            </p>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Navegación</p>
            <nav className="mt-3 flex flex-col gap-2">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm text-sm text-foreground/60 outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Contacto</p>
            <div className="mt-3 flex flex-col gap-2 text-sm text-foreground/60">
              <a
                href={siteConfig.contact.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <MessageCircle className="size-4 shrink-0" />
                {siteConfig.contact.phoneDisplay}
              </a>
              <a
                href={siteConfig.contact.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-sm outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta"
              >
                <InstagramIcon className="size-4 shrink-0" />
                {siteConfig.contact.instagramHandle}
              </a>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium text-foreground">Ubicación</p>
            <a
              href={siteConfig.maps.directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 flex items-start gap-2 rounded-sm text-sm text-foreground/60 outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta"
            >
              <MapPin className="mt-0.5 size-4 shrink-0" />
              <span>{siteConfig.address.full}</span>
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-clay/15 pt-8 text-xs text-foreground/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p>Fotos ilustrativas cortesía de Unsplash.</p>
        </div>
      </Container>
    </footer>
  );
}
