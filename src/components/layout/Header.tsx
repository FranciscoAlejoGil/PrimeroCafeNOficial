"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { siteConfig } from "@/config/site";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-clay/15 bg-background/85 backdrop-blur">
      <Container className="flex h-16 items-center justify-between">
        <motion.div whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.97 }}>
          <Link
            href="/"
            className="rounded-sm font-display text-xl font-semibold tracking-tight text-foreground outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
          >
            {siteConfig.name}
          </Link>
        </motion.div>

        <nav className="hidden items-center gap-8 md:flex">
          {siteConfig.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-sm text-sm text-foreground/70 outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button href={siteConfig.contact.whatsappUrl} size="sm">
            Pedir por WhatsApp
          </Button>
        </div>

        <motion.button
          type="button"
          aria-label="Abrir menú"
          aria-expanded={isOpen}
          whileTap={{ scale: 0.9 }}
          className="inline-flex items-center justify-center rounded-md p-2 text-foreground outline-none focus-visible:ring-2 focus-visible:ring-terracotta md:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? <X className="size-6" /> : <Menu className="size-6" />}
        </motion.button>
      </Container>

      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeInOut" }}
            className="overflow-hidden border-b border-clay/15 md:hidden"
          >
            <Container className="flex flex-col gap-4 py-4">
              {siteConfig.nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="rounded-sm text-sm text-foreground/70 outline-none transition-colors hover:text-terracotta focus-visible:text-terracotta focus-visible:ring-2 focus-visible:ring-terracotta"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <Button
                href={siteConfig.contact.whatsappUrl}
                size="sm"
                className="w-full"
                onClick={() => setIsOpen(false)}
              >
                Pedir por WhatsApp
              </Button>
            </Container>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
