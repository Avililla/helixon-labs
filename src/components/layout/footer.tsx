import Link from "next/link";
import { useTranslations } from "next-intl";
import { FlaskConical, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const t = useTranslations("footer");

  const navItems = [
    { name: t("navigation.items.home"), href: "/" },
    { name: t("navigation.items.about"), href: "#about" },
    { name: t("navigation.items.products"), href: "#products" },
    { name: t("navigation.items.quality"), href: "#quality" },
    { name: t("navigation.items.contact"), href: "#contact" },
  ];

  const legalItems = [
    { name: t("legal.items.legalCompliance"), href: "#legal" },
    { name: t("legal.items.avisoLegal"), href: "#legal" },
    { name: t("legal.items.privacy"), href: "#legal" },
    { name: t("legal.items.cookies"), href: "#legal" },
    { name: t("legal.items.terms"), href: "#legal" },
  ];

  const complianceItems = t.raw("compliance.items") as string[];

  return (
    <footer className="bg-helixon-navy text-helixon-light">
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 sm:py-6">
          <div className="flex items-start gap-2.5 sm:gap-3 rounded-lg border border-helixon-amber/30 bg-helixon-amber/5 p-3 sm:p-4">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-helixon-amber shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <p className="font-semibold text-helixon-amber mb-1">
                {t("importantNotice.title")}
              </p>
              <p className="text-helixon-gray">
                {t("importantNotice.text")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-helixon-blue text-white">
                <FlaskConical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white">
                {t("brand.name")}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-helixon-gray leading-relaxed mb-3 sm:mb-4">
              {t("brand.description")}
            </p>
            <p className="text-[10px] sm:text-xs text-helixon-slate">
              {t("brand.registered")}
              <br />
              {t("brand.cif")}
            </p>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              {t("navigation.title")}
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {navItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-helixon-gray hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              {t("legal.title")}
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {legalItems.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-xs sm:text-sm text-helixon-gray hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              {t("compliance.title")}
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-helixon-gray">
              {complianceItems.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-white/10" />

        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-helixon-slate text-center sm:text-left">
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className="text-[10px] sm:text-xs text-helixon-slate text-center sm:text-right">
            {t("disclaimer")}
          </p>
        </div>
      </div>
    </footer>
  );
}
