import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  FlaskConical,
  Microscope,
  ShieldCheck,
  FileCheck,
  ArrowRight,
  Atom,
} from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-helixon-navy via-helixon-blue to-helixon-steel">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-hex-pattern opacity-30" />
      <div className="absolute inset-0 bg-gradient-to-t from-helixon-navy/80 to-transparent" />

      {/* Decorative Molecules - hidden on small screens */}
      <div className="absolute top-20 right-10 opacity-10 hidden md:block">
        <Atom className="h-40 w-40 text-helixon-teal-light" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-5 hidden md:block">
        <Atom className="h-64 w-64 text-white" />
      </div>

      <div className="relative container mx-auto px-4 lg:px-8 py-16 sm:py-24 lg:py-36">
        <div className="max-w-4xl">
          {/* Badge */}
          <Badge
            variant="outline"
            className="mb-4 sm:mb-6 border-helixon-teal/40 text-helixon-teal-light bg-helixon-teal/10 px-2.5 sm:px-3 py-1 text-[11px] sm:text-xs"
          >
            <ShieldCheck className="h-3 w-3 mr-1 sm:mr-1.5" />
            EU Regulatory Compliant
          </Badge>

          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 sm:mb-6">
            Synthetic Peptides &{" "}
            <span className="sm:hidden">Chemical Reagents</span>
            <br className="hidden sm:block" />
            <span className="hidden sm:inline">Chemical Reagents</span>
            <span className="block text-helixon-teal-light mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
              for Laboratory Research
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-helixon-gray max-w-2xl mb-4 leading-relaxed">
            Helixon Labs provides high-purity synthetic peptides and chemical
            reagents to laboratories, universities, and research institutions
            across Europe.
          </p>

          {/* Mandatory Research Disclaimer */}
          <div className="flex items-start sm:items-center gap-2 rounded-md border border-helixon-amber/30 bg-helixon-amber/10 px-3 sm:px-4 py-2 sm:py-2.5 mb-6 sm:mb-8">
            <FlaskConical className="h-4 w-4 text-helixon-amber shrink-0 mt-0.5 sm:mt-0" />
            <p className="text-xs sm:text-sm font-medium text-helixon-amber leading-snug">
              Products supplied strictly for laboratory research purposes. Not
              for human or veterinary use.
            </p>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3">
            <Button
              size="lg"
              className="bg-helixon-teal hover:bg-helixon-teal-dark text-white font-semibold h-11 sm:h-10 text-sm"
              asChild
            >
              <Link href="#products">
                View Product Catalogue
                <ArrowRight className="h-4 w-4 ml-2" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="border border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white h-11 sm:h-10 text-sm"
              asChild
            >
              <Link href="#quality">Quality & Documentation</Link>
            </Button>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-10 sm:mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 border-t border-white/10 pt-8 sm:pt-10">
          {[
            {
              icon: FlaskConical,
              value: ">98%",
              label: "Min. Purity (HPLC)",
            },
            {
              icon: FileCheck,
              value: "COA",
              label: "Certificate per Batch",
            },
            {
              icon: Microscope,
              value: "GHS",
              label: "Compliant Labelling",
            },
            {
              icon: ShieldCheck,
              value: "REACH",
              label: "EU Reg. (EC) 1907/2006",
            },
          ].map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <stat.icon className="h-4 w-4 sm:h-5 sm:w-5 text-helixon-teal mb-1.5 sm:mb-2 mx-auto md:mx-0" />
              <p className="text-xl sm:text-2xl font-bold text-white">
                {stat.value}
              </p>
              <p className="text-[10px] sm:text-xs text-helixon-gray mt-0.5 sm:mt-1">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
