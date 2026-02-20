"use client";

import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Menu, FlaskConical } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LanguageSwitcher } from "./language-switcher";

export function Header() {
  const t = useTranslations("header");
  const [open, setOpen] = useState(false);

  const navigation = [
    { name: t("nav.home"), href: "/" },
    { name: t("nav.about"), href: "#about" },
    { name: t("nav.products"), href: "#products" },
    { name: t("nav.quality"), href: "#quality" },
    { name: t("nav.legal"), href: "#legal" },
    { name: t("nav.contact"), href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-white/95 backdrop-blur-sm">
      <div className="container mx-auto flex h-14 sm:h-16 items-center justify-between px-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 sm:gap-2.5 group">
          <div className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-lg bg-helixon-navy text-white transition-colors group-hover:bg-helixon-blue">
            <FlaskConical className="h-4 w-4 sm:h-5 sm:w-5" />
          </div>
          <div className="flex flex-col">
            <span className="text-base sm:text-lg font-bold tracking-tight text-helixon-navy leading-tight">
              {t("brandName")}
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-helixon-slate leading-tight">
              {t("brandTagline")}
            </span>
          </div>
        </Link>

        <nav
          className="hidden lg:flex items-center gap-1"
          aria-label="Main navigation"
        >
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3 py-2 text-sm font-medium text-helixon-slate hover:text-helixon-navy transition-colors rounded-md hover:bg-helixon-light/50"
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <LanguageSwitcher />
          <Button
            variant="outline"
            size="sm"
            className="border-helixon-blue text-helixon-blue hover:bg-helixon-blue hover:text-white"
            asChild
          >
            <Link href="#contact">{t("requestQuote")}</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <LanguageSwitcher />
          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">{t("openMenu")}</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72 sm:w-80 p-0">
              <div className="flex flex-col h-full">
                <div className="flex items-center gap-2.5 p-5 border-b border-helixon-light">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-helixon-navy text-white">
                    <FlaskConical className="h-4 w-4" />
                  </div>
                  <SheetTitle className="text-lg font-bold text-helixon-navy">
                    {t("brandName")}
                  </SheetTitle>
                </div>

                <nav className="flex flex-col gap-0.5 p-3 flex-1">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className="px-3 py-3 text-sm font-medium text-helixon-slate hover:text-helixon-navy hover:bg-helixon-light/50 rounded-md transition-colors active:bg-helixon-light"
                    >
                      {item.name}
                    </Link>
                  ))}
                </nav>

                <div className="p-4 border-t border-helixon-light">
                  <Button
                    className="w-full bg-helixon-blue hover:bg-helixon-navy text-white"
                    asChild
                  >
                    <Link href="#contact" onClick={() => setOpen(false)}>
                      {t("requestQuote")}
                    </Link>
                  </Button>
                  <p className="text-[10px] text-helixon-slate text-center mt-3 leading-relaxed">
                    {t("disclaimer")}
                  </p>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
