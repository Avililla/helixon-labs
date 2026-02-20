import { useTranslations } from "next-intl";
import { ShieldCheck, UserCheck, ClipboardCheck, Lock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

export function CheckoutInfoSection() {
  const t = useTranslations("checkout");

  const steps = [
    {
      icon: UserCheck,
      step: t("steps.registration.step"),
      title: t("steps.registration.title"),
      description: t("steps.registration.description"),
    },
    {
      icon: ClipboardCheck,
      step: t("steps.certification.step"),
      title: t("steps.certification.title"),
      description: t("steps.certification.description"),
    },
    {
      icon: ShieldCheck,
      step: t("steps.declaration.step"),
      title: t("steps.declaration.title"),
      description: t("steps.declaration.description"),
    },
    {
      icon: Lock,
      step: t("steps.processing.step"),
      title: t("steps.processing.title"),
      description: t("steps.processing.description"),
    },
  ];

  return (
    <section id="account" className="py-20 lg:py-28 bg-gradient-to-b from-helixon-navy to-helixon-blue">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal-light mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {t("title")}
          </h2>
          <p className="text-helixon-gray leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {steps.map((item) => (
            <Card
              key={item.step}
              className="border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-2xl font-bold text-helixon-teal-light/30">
                    {item.step}
                  </span>
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-helixon-teal/20">
                    <item.icon className="h-5 w-5 text-helixon-teal-light" />
                  </div>
                </div>
                <h3 className="font-semibold text-white mb-2 text-sm">
                  {item.title}
                </h3>
                <p className="text-xs text-helixon-gray leading-relaxed">
                  {item.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-10 max-w-3xl mx-auto rounded-lg border border-white/10 bg-white/5 p-5 text-center">
          <p className="text-sm text-helixon-gray">
            {t("disclaimerLabel")}
          </p>
          <p className="text-white font-medium mt-2 italic">
            &ldquo;{t("disclaimerQuote")}&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
