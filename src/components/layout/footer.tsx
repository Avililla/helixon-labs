import Link from "next/link";
import { FlaskConical, AlertTriangle } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  return (
    <footer className="bg-helixon-navy text-helixon-light">
      {/* Regulatory Notice */}
      <div className="border-b border-white/10">
        <div className="container mx-auto px-4 lg:px-8 py-4 sm:py-6">
          <div className="flex items-start gap-2.5 sm:gap-3 rounded-lg border border-helixon-amber/30 bg-helixon-amber/5 p-3 sm:p-4">
            <AlertTriangle className="h-4 w-4 sm:h-5 sm:w-5 text-helixon-amber shrink-0 mt-0.5" />
            <div className="text-xs sm:text-sm leading-relaxed">
              <p className="font-semibold text-helixon-amber mb-1">
                Important Notice
              </p>
              <p className="text-helixon-gray">
                All products supplied by Helixon Labs are intended strictly for
                laboratory research and experimental purposes. Not approved for
                human consumption, veterinary use, therapeutic applications, or
                diagnostic procedures.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Content */}
      <div className="container mx-auto px-4 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Company */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-2 sm:gap-2.5 mb-3 sm:mb-4">
              <div className="flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg bg-helixon-blue text-white">
                <FlaskConical className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
              </div>
              <span className="text-base sm:text-lg font-bold text-white">
                Helixon Labs
              </span>
            </div>
            <p className="text-xs sm:text-sm text-helixon-gray leading-relaxed mb-3 sm:mb-4">
              Technical supplier of synthetic peptides and chemical reagents for
              scientific research.
            </p>
            <p className="text-[10px] sm:text-xs text-helixon-slate">
              Registered in Spain
              <br />
              CIF: B-XXXXXXXX
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Navigation
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { name: "Home", href: "/" },
                { name: "About Us", href: "#about" },
                { name: "Products", href: "#products" },
                { name: "Quality", href: "#quality" },
                { name: "Contact", href: "#contact" },
              ].map((item) => (
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

          {/* Legal */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Legal
            </h3>
            <ul className="space-y-2 sm:space-y-2.5">
              {[
                { name: "Legal & Compliance", href: "#legal" },
                { name: "Aviso Legal", href: "#legal" },
                { name: "Privacy (GDPR)", href: "#legal" },
                { name: "Cookie Policy", href: "#legal" },
                { name: "Terms & Conditions", href: "#legal" },
              ].map((item) => (
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

          {/* Compliance */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Compliance
            </h3>
            <ul className="space-y-2 sm:space-y-2.5 text-xs sm:text-sm text-helixon-gray">
              <li>REACH (EC) 1907/2006</li>
              <li>CLP (EC) 1272/2008</li>
              <li>LSSI-CE (Ley 34/2002)</li>
              <li>GDPR / LOPD-GDD</li>
              <li>GHS Labelling</li>
            </ul>
          </div>
        </div>

        <Separator className="my-6 sm:my-8 bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 sm:gap-4">
          <p className="text-[10px] sm:text-xs text-helixon-slate text-center sm:text-left">
            &copy; {new Date().getFullYear()} Helixon Labs. All rights reserved.
          </p>
          <p className="text-[10px] sm:text-xs text-helixon-slate text-center sm:text-right">
            Products for laboratory research only. Not for human or veterinary
            use.
          </p>
        </div>
      </div>
    </footer>
  );
}
