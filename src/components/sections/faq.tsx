import { useTranslations } from "next-intl";
import { AlertCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqKeys = ["q1", "q2", "q3", "q4", "q5", "q6", "q7", "q8", "q9", "q10"] as const;

export function FAQSection() {
  const t = useTranslations("faq");

  return (
    <section id="faq" className="py-20 lg:py-28 bg-white">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            {t("label")}
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            {t("title")}
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            {t("subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-3">
            {faqKeys.map((key, index) => (
              <AccordionItem
                key={key}
                value={`faq-${index}`}
                className="rounded-lg border border-helixon-light bg-white px-6 data-[state=open]:shadow-sm"
              >
                <AccordionTrigger className="text-left text-sm font-medium text-helixon-navy hover:text-helixon-blue py-4 hover:no-underline">
                  {t(`items.${key}.question`)}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-helixon-slate leading-relaxed pb-4">
                  {t(`items.${key}.answer`)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-10 flex items-start gap-3 max-w-3xl mx-auto rounded-lg border border-helixon-light bg-muted/30 p-4">
          <AlertCircle className="h-4 w-4 text-helixon-slate shrink-0 mt-0.5" />
          <p className="text-xs text-helixon-slate leading-relaxed">
            {t("notice")}
          </p>
        </div>
      </div>
    </section>
  );
}
