"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Globe, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { locales, localeNames, type Locale } from "@/i18n/config";
import { setLocale } from "@/i18n/actions";

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const locale = useLocale() as Locale;
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const [isOpen, setIsOpen] = useState(false);

  const handleLocaleChange = (newLocale: Locale) => {
    startTransition(async () => {
      await setLocale(newLocale);
      router.refresh();
      setIsOpen(false);
    });
  };

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        disabled={isPending}
        className="flex items-center gap-1.5 text-sm font-medium text-helixon-slate hover:text-helixon-navy"
        aria-label={t("selectLanguage")}
      >
        <Globe className="h-4 w-4" />
        <span className="hidden sm:inline">{localeNames[locale]}</span>
        <span className="sm:hidden">{locale.toUpperCase()}</span>
      </Button>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-40"
            onClick={() => setIsOpen(false)}
          />
          <div className="absolute right-0 top-full mt-1 z-50 min-w-[140px] rounded-lg border border-helixon-light bg-white py-1 shadow-lg">
            {locales.map((loc) => (
              <button
                key={loc}
                onClick={() => handleLocaleChange(loc)}
                disabled={isPending}
                className={`flex w-full items-center justify-between gap-2 px-4 py-2 text-sm text-left hover:bg-helixon-light transition-colors ${
                  loc === locale ? "text-helixon-navy font-medium" : "text-helixon-slate"
                }`}
              >
                <span>{localeNames[loc]}</span>
                {loc === locale && <Check className="h-4 w-4 text-helixon-teal" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}
