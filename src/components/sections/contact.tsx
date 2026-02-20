"use client";

import { useTranslations } from "next-intl";
import { Mail, Building2, Clock, AlertTriangle } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ContactSection() {
  const t = useTranslations("contact");

  return (
    <section id="contact" className="py-20 lg:py-28 bg-helixon-white bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
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

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="border-helixon-light">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helixon-blue/10 mx-auto mb-4">
                <Mail className="h-5 w-5 text-helixon-blue" />
              </div>
              <h3 className="font-semibold text-helixon-navy mb-2">
                {t("cards.technical.title")}
              </h3>
              <p className="text-sm text-helixon-slate mb-3">
                {t("cards.technical.description")}
              </p>
              <p className="text-sm font-medium text-helixon-blue">
                {t("cards.technical.email")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-helixon-light">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helixon-blue/10 mx-auto mb-4">
                <Building2 className="h-5 w-5 text-helixon-blue" />
              </div>
              <h3 className="font-semibold text-helixon-navy mb-2">
                {t("cards.office.title")}
              </h3>
              <p className="text-sm text-helixon-slate mb-3">
                {t("cards.office.address1")}
                <br />
                {t("cards.office.address2")}
                <br />
                {t("cards.office.address3")}
              </p>
              <p className="text-sm font-medium text-helixon-blue">
                {t("cards.office.cif")}
              </p>
            </CardContent>
          </Card>

          <Card className="border-helixon-light">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helixon-blue/10 mx-auto mb-4">
                <Clock className="h-5 w-5 text-helixon-blue" />
              </div>
              <h3 className="font-semibold text-helixon-navy mb-2">
                {t("cards.response.title")}
              </h3>
              <p className="text-sm text-helixon-slate mb-3">
                {t("cards.response.description")}
              </p>
              <p className="text-sm font-medium text-helixon-blue">
                {t("cards.response.hours")}
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12 bg-helixon-light max-w-5xl mx-auto" />

        <div className="max-w-2xl mx-auto">
          <Card className="border-helixon-light">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold text-helixon-navy mb-2">
                {t("form.title")}
              </h3>
              <p className="text-sm text-helixon-slate mb-6">
                {t("form.subtitle")}
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-helixon-navy mb-1.5"
                    >
                      {t("form.fullName")}
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                      placeholder={t("form.fullNamePlaceholder")}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-helixon-navy mb-1.5"
                    >
                      {t("form.email")}
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                      placeholder={t("form.emailPlaceholder")}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-helixon-navy mb-1.5"
                  >
                    {t("form.institution")}
                  </label>
                  <input
                    id="institution"
                    type="text"
                    required
                    className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                    placeholder={t("form.institutionPlaceholder")}
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-helixon-navy mb-1.5"
                  >
                    {t("form.subject")}
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                  >
                    <option value="">{t("form.subjectPlaceholder")}</option>
                    <option value="quotation">{t("form.subjects.quotation")}</option>
                    <option value="bulk">{t("form.subjects.bulk")}</option>
                    <option value="custom">{t("form.subjects.custom")}</option>
                    <option value="coa">{t("form.subjects.coa")}</option>
                    <option value="technical">{t("form.subjects.technical")}</option>
                    <option value="account">{t("form.subjects.account")}</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-helixon-navy mb-1.5"
                  >
                    {t("form.message")}
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors resize-none"
                    placeholder={t("form.messagePlaceholder")}
                  />
                </div>

                <div className="rounded-lg border border-helixon-amber/20 bg-helixon-amber/5 p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-helixon-light text-helixon-blue focus:ring-helixon-blue"
                    />
                    <span className="text-xs text-helixon-slate leading-relaxed">
                      {t("form.checkbox")}{" "}
                      <strong className="text-helixon-navy">
                        {t("form.checkboxHighlight")}
                      </strong>{" "}
                      {t("form.checkboxEnd")}{" "}
                      <a
                        href="#legal"
                        className="text-helixon-blue underline hover:text-helixon-navy"
                      >
                        {t("form.termsAndConditions")}
                      </a>{" "}
                      {t("form.and")}{" "}
                      <a
                        href="#legal"
                        className="text-helixon-blue underline hover:text-helixon-navy"
                      >
                        {t("form.privacyPolicy")}
                      </a>
                      .
                    </span>
                  </label>
                </div>

                <Button
                  type="submit"
                  className="w-full bg-helixon-blue hover:bg-helixon-navy text-white font-semibold"
                  size="lg"
                >
                  {t("form.submit")}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        <div className="mt-8 flex items-start gap-3 max-w-2xl mx-auto rounded-lg border border-helixon-amber/20 bg-helixon-amber/5 p-4">
          <AlertTriangle className="h-4 w-4 text-helixon-amber shrink-0 mt-0.5" />
          <div className="text-xs text-helixon-slate leading-relaxed">
            <p className="font-semibold text-helixon-amber mb-1">
              {t("communicationPolicy.title")}
            </p>
            <p>{t("communicationPolicy.text")}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
