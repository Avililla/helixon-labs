import { HeroSection } from "@/components/sections/hero";
import { AboutSection } from "@/components/sections/about";
import { ProductsSection } from "@/components/sections/products";
import { QualitySection } from "@/components/sections/quality";
import { CheckoutInfoSection } from "@/components/sections/checkout-info";
import { LegalSection } from "@/components/sections/legal";
import { FAQSection } from "@/components/sections/faq";
import { ContactSection } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <QualitySection />
      <CheckoutInfoSection />
      <LegalSection />
      <FAQSection />
      <ContactSection />
    </>
  );
}
