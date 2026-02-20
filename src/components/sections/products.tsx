import { useTranslations } from "next-intl";
import { AlertTriangle, ExternalLink, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Product {
  key: string;
  cas: string;
  molecularFormula: string;
  molecularWeight: string;
  purity: string;
  analysisMethod: string;
  appearance: string;
  storage: string;
  pubchemCid: string;
}

const productKeys = [
  "semaglutide",
  "tirzepatide",
  "bpc157",
  "cjc1295",
  "tb500",
  "melanotan2",
] as const;

export function ProductsSection() {
  const t = useTranslations("products");

  return (
    <section id="products" className="py-20 lg:py-28 bg-helixon-white bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
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

        <div className="flex items-center justify-center gap-2 rounded-lg border border-helixon-red/20 bg-helixon-red/5 px-6 py-3 mb-10 max-w-2xl mx-auto">
          <AlertTriangle className="h-4 w-4 text-helixon-red shrink-0" />
          <p className="text-sm font-semibold text-helixon-red text-center">
            {t("disclaimer")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {productKeys.map((key) => (
            <ProductCard key={key} productKey={key} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-xs text-helixon-slate max-w-2xl mx-auto">
            {t("bottomNotice")}
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ productKey }: { productKey: string }) {
  const t = useTranslations(`products.items.${productKey}`);
  const tLabels = useTranslations("products");

  const product: Product = {
    key: productKey,
    cas: t("cas"),
    molecularFormula: t("formula"),
    molecularWeight: t("weight"),
    purity: t("purity"),
    analysisMethod: t("analysisMethod"),
    appearance: t("appearance"),
    storage: t("storage"),
    pubchemCid: t("pubchemCid"),
  };

  return (
    <Card className="border-helixon-light hover:shadow-lg transition-shadow bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Badge
              variant="outline"
              className="mb-2 text-[10px] border-helixon-teal/30 text-helixon-teal bg-helixon-teal/5"
            >
              {t("category")}
            </Badge>
            <CardTitle className="text-lg text-helixon-navy">
              {t("name")}
            </CardTitle>
          </div>
          <FlaskConical className="h-5 w-5 text-helixon-slate shrink-0 mt-1" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        <div className="space-y-2 text-sm">
          <DataRow label={tLabels("labels.cas")} value={product.cas} mono />
          <DataRow label={tLabels("labels.formula")} value={product.molecularFormula} mono />
          <DataRow label={tLabels("labels.weight")} value={product.molecularWeight} />
          <DataRow label={tLabels("labels.purity")} value={product.purity} />
          <DataRow label={tLabels("labels.analysis")} value={product.analysisMethod} />
          <DataRow label={tLabels("labels.appearance")} value={product.appearance} />
          <DataRow label={tLabels("labels.storage")} value={product.storage} />
        </div>

        <Separator className="bg-helixon-light" />

        <div className="flex items-center gap-2 text-xs">
          <span className="text-helixon-slate">{tLabels("ref")}</span>
          <a
            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${product.pubchemCid}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-helixon-teal hover:text-helixon-teal-dark transition-colors"
          >
            {tLabels("pubchem")} {product.pubchemCid}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        <div className="rounded bg-muted px-3 py-2">
          <p className="text-[10px] text-helixon-slate leading-relaxed">
            <strong>{tLabels("cardDisclaimer")}</strong>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}

function DataRow({
  label,
  value,
  mono = false,
}: {
  label: string;
  value: string;
  mono?: boolean;
}) {
  return (
    <div className="flex justify-between gap-2">
      <span className="text-helixon-slate text-xs shrink-0">{label}</span>
      <span
        className={`text-xs font-medium text-helixon-navy text-right ${
          mono ? "font-mono" : ""
        }`}
      >
        {value}
      </span>
    </div>
  );
}
