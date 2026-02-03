import { Mail, Building2, Clock, AlertTriangle, Globe } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-helixon-white bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            Contact
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            Technical Enquiries & Orders
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            For product enquiries, quotation requests, bulk orders, or technical
            documentation, contact our team using the information below.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <Card className="border-helixon-light">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helixon-blue/10 mx-auto mb-4">
                <Mail className="h-5 w-5 text-helixon-blue" />
              </div>
              <h3 className="font-semibold text-helixon-navy mb-2">
                Technical Department
              </h3>
              <p className="text-sm text-helixon-slate mb-3">
                Product specifications, COA requests, custom synthesis enquiries
              </p>
              <p className="text-sm font-medium text-helixon-blue">
                info@helixonlabs.com
              </p>
            </CardContent>
          </Card>

          <Card className="border-helixon-light">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helixon-blue/10 mx-auto mb-4">
                <Building2 className="h-5 w-5 text-helixon-blue" />
              </div>
              <h3 className="font-semibold text-helixon-navy mb-2">
                Registered Office
              </h3>
              <p className="text-sm text-helixon-slate mb-3">
                Helixon Labs, S.L.
                <br />
                [Registered Address]
                <br />
                Spain
              </p>
              <p className="text-sm font-medium text-helixon-blue">
                CIF: B-XXXXXXXX
              </p>
            </CardContent>
          </Card>

          <Card className="border-helixon-light">
            <CardContent className="p-6 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-helixon-blue/10 mx-auto mb-4">
                <Clock className="h-5 w-5 text-helixon-blue" />
              </div>
              <h3 className="font-semibold text-helixon-navy mb-2">
                Response Times
              </h3>
              <p className="text-sm text-helixon-slate mb-3">
                Technical enquiries are processed during business hours (CET).
                We aim to respond within 48 hours.
              </p>
              <p className="text-sm font-medium text-helixon-blue">
                Mon–Fri, 09:00–17:00 CET
              </p>
            </CardContent>
          </Card>
        </div>

        <Separator className="my-12 bg-helixon-light max-w-5xl mx-auto" />

        {/* Contact Form Area */}
        <div className="max-w-2xl mx-auto">
          <Card className="border-helixon-light">
            <CardContent className="p-8">
              <h3 className="text-lg font-semibold text-helixon-navy mb-2">
                Request a Quotation
              </h3>
              <p className="text-sm text-helixon-slate mb-6">
                Complete the form below for product quotations, bulk pricing, or
                custom synthesis requests. All enquiries are subject to buyer
                qualification verification.
              </p>

              <form className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-helixon-navy mb-1.5"
                    >
                      Full Name *
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                      placeholder="Dr. / Prof. Name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-helixon-navy mb-1.5"
                    >
                      Institutional Email *
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                      placeholder="name@institution.edu"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="institution"
                    className="block text-sm font-medium text-helixon-navy mb-1.5"
                  >
                    Institution / Company *
                  </label>
                  <input
                    id="institution"
                    type="text"
                    required
                    className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                    placeholder="University / Laboratory / Company"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-helixon-navy mb-1.5"
                  >
                    Enquiry Subject *
                  </label>
                  <select
                    id="subject"
                    required
                    className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors"
                  >
                    <option value="">Select type of enquiry</option>
                    <option value="quotation">Product Quotation</option>
                    <option value="bulk">Bulk Order Enquiry</option>
                    <option value="custom">Custom Synthesis Request</option>
                    <option value="coa">COA / SDS Documentation Request</option>
                    <option value="technical">
                      Technical Specification Query
                    </option>
                    <option value="account">Account / Registration</option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-helixon-navy mb-1.5"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    required
                    className="w-full rounded-md border border-helixon-light bg-white px-3.5 py-2.5 text-sm text-helixon-navy placeholder:text-helixon-gray focus:border-helixon-blue focus:ring-1 focus:ring-helixon-blue outline-none transition-colors resize-none"
                    placeholder="Please include product names, CAS numbers, quantities required, and any relevant specifications."
                  />
                </div>

                {/* Mandatory Checkbox */}
                <div className="rounded-lg border border-helixon-amber/20 bg-helixon-amber/5 p-4">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      required
                      className="mt-1 h-4 w-4 rounded border-helixon-light text-helixon-blue focus:ring-helixon-blue"
                    />
                    <span className="text-xs text-helixon-slate leading-relaxed">
                      I certify that I represent a legitimate research
                      institution, laboratory, or biotechnology company, and
                      that any products requested will be used{" "}
                      <strong className="text-helixon-navy">
                        exclusively for laboratory research purposes.
                      </strong>{" "}
                      I confirm that products will not be used for human
                      consumption, veterinary use, or any therapeutic,
                      diagnostic, or clinical application. I accept the{" "}
                      <a
                        href="#legal"
                        className="text-helixon-blue underline hover:text-helixon-navy"
                      >
                        Terms & Conditions
                      </a>{" "}
                      and{" "}
                      <a
                        href="#legal"
                        className="text-helixon-blue underline hover:text-helixon-navy"
                      >
                        Privacy Policy
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
                  Submit Enquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>

        {/* Communication Notice */}
        <div className="mt-8 flex items-start gap-3 max-w-2xl mx-auto rounded-lg border border-helixon-amber/20 bg-helixon-amber/5 p-4">
          <AlertTriangle className="h-4 w-4 text-helixon-amber shrink-0 mt-0.5" />
          <div className="text-xs text-helixon-slate leading-relaxed">
            <p className="font-semibold text-helixon-amber mb-1">
              Communication Policy
            </p>
            <p>
              Helixon Labs provides technical support limited to product
              specifications, analytical documentation, and order processing. We
              do not provide guidance, recommendations, or information regarding
              biological activity, therapeutic applications, or clinical use of
              any product. Enquiries regarding human or veterinary applications
              will not receive a response.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
