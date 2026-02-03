import { AlertTriangle, ExternalLink, FlaskConical } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Product {
  name: string;
  chemicalName: string;
  cas: string;
  molecularFormula: string;
  molecularWeight: string;
  purity: string;
  analysisMethod: string;
  appearance: string;
  storage: string;
  pubchemCid: string;
  category: string;
}

const products: Product[] = [
  {
    name: "Semaglutide",
    chemicalName:
      "N-(26-{2-[2-(2-{2-[2-(2-{(S)-2-[(S)-2-((S)-2-{(S)-2-[(S)-2-((S)-2-Amino-3-(1H-imidazol-4-yl)propanamido)-4-methylpentanamido]-4-carboxybutanamido}-3-(1H-indol-3-yl)propanamido)propanamido]-3-methylbutanamido}ethylamino)-2-oxoethyl]amino}-2-oxoethylamino)-2-oxoethyl]amino}-2-oxoethylamino)-2-oxoethyl]amino}-2,6,20,26-tetraoxo-...) Acetate Salt",
    cas: "910463-68-2",
    molecularFormula: "C187H291N45O59",
    molecularWeight: "4113.58 g/mol",
    purity: "≥98% (HPLC)",
    analysisMethod: "HPLC, LC-MS, Amino Acid Analysis",
    appearance: "White to off-white lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    pubchemCid: "56843331",
    category: "GLP-1 Receptor Agonist Peptide",
  },
  {
    name: "Tirzepatide",
    chemicalName:
      "Tirzepatide (C225H348N48O68) Acetate Salt — Dual GIP/GLP-1 Receptor Agonist Peptide",
    cas: "2023788-19-2",
    molecularFormula: "C225H348N48O68",
    molecularWeight: "4813.45 g/mol",
    purity: "≥98% (HPLC)",
    analysisMethod: "HPLC, LC-MS, Amino Acid Analysis",
    appearance: "White to off-white lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    pubchemCid: "156588324",
    category: "GIP/GLP-1 Receptor Agonist Peptide",
  },
  {
    name: "BPC-157",
    chemicalName:
      "L-Valine, glycyl-L-alpha-glutamyl-L-prolyl-L-prolyl-L-prolylglycyl-L-lysyl-L-prolyl-L-alanyl-L-aspartyl-L-aspartyl-L-alanylglycyl-L-leucyl- Acetate Salt",
    cas: "137525-51-0",
    molecularFormula: "C62H98N16O22",
    molecularWeight: "1419.53 g/mol",
    purity: "≥98% (HPLC)",
    analysisMethod: "HPLC, ESI-MS",
    appearance: "White lyophilized powder",
    storage: "-20°C, desiccated",
    pubchemCid: "108101",
    category: "Pentadecapeptide Fragment",
  },
  {
    name: "CJC-1295 (without DAC)",
    chemicalName:
      "L-Tyrosyl-D-alanyl-L-aspartyl-L-alanyl-L-isoleucyl-L-phenylalanyl-L-threonyl-L-glutaminyl-L-seryl-L-tyrosyl-L-arginyl-L-lysyl-L-valyl-L-leucyl-L-alanyl-L-glutaminyl-L-leucyl-L-seryl-L-alanyl-L-arginyl-L-lysyl-L-leucyl-L-leucyl-L-glutaminyl-L-aspartyl-L-isoleucyl-L-leucyl-L-seryl-L-arginyl Acetate Salt",
    cas: "863288-34-0",
    molecularFormula: "C152H252N44O42",
    molecularWeight: "3367.97 g/mol",
    purity: "≥98% (HPLC)",
    analysisMethod: "HPLC, MALDI-TOF MS",
    appearance: "White to off-white lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    pubchemCid: "91976842",
    category: "Growth Hormone Releasing Hormone Analogue",
  },
  {
    name: "TB-500 (Thymosin Beta-4 Fragment)",
    chemicalName:
      "Thymosin Beta-4 Acetyl Fragment 17-23, Ac-LKKTETQ — Acetate Salt",
    cas: "77591-33-4",
    molecularFormula: "C38H68N10O15",
    molecularWeight: "904.99 g/mol",
    purity: "≥98% (HPLC)",
    analysisMethod: "HPLC, LC-MS",
    appearance: "White lyophilized powder",
    storage: "-20°C, desiccated",
    pubchemCid: "16134148",
    category: "Thymosin Beta-4 Peptide Fragment",
  },
  {
    name: "Melanotan II",
    chemicalName:
      "Ac-Nle-cyclo[Asp-His-D-Phe-Arg-Trp-Lys]-NH2 Acetate Salt",
    cas: "121062-08-6",
    molecularFormula: "C50H69N15O9",
    molecularWeight: "1024.18 g/mol",
    purity: "≥98% (HPLC)",
    analysisMethod: "HPLC, ESI-MS",
    appearance: "White lyophilized powder",
    storage: "-20°C, desiccated, protected from light",
    pubchemCid: "92432",
    category: "Melanocortin Receptor Agonist Peptide",
  },
];

export function ProductsSection() {
  return (
    <section id="products" className="py-20 lg:py-28 bg-helixon-white bg-hex-pattern">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <p className="text-sm font-semibold uppercase tracking-widest text-helixon-teal mb-3">
            Product Catalogue
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-helixon-navy mb-4">
            Research Peptides & Chemical Reagents
          </h2>
          <p className="text-helixon-slate leading-relaxed">
            All compounds are supplied as lyophilized powders with documented
            purity specifications. Each product includes a batch-specific
            Certificate of Analysis (COA) and Safety Data Sheet (SDS).
          </p>
        </div>

        {/* Mandatory Disclaimer */}
        <div className="flex items-center justify-center gap-2 rounded-lg border border-helixon-red/20 bg-helixon-red/5 px-6 py-3 mb-10 max-w-2xl mx-auto">
          <AlertTriangle className="h-4 w-4 text-helixon-red shrink-0" />
          <p className="text-sm font-semibold text-helixon-red text-center">
            For research use only. Not approved for human or veterinary
            consumption.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <ProductCard key={product.cas} product={product} />
          ))}
        </div>

        {/* Bottom Notice */}
        <div className="mt-12 text-center">
          <p className="text-xs text-helixon-slate max-w-2xl mx-auto">
            This catalogue presents a selection of research reagents. All
            products are characterised by chemical identity and analytical data
            only. No information regarding biological activity, efficacy, or
            therapeutic application is provided. For bulk enquiries or custom
            synthesis, please contact our technical department.
          </p>
        </div>
      </div>
    </section>
  );
}

function ProductCard({ product }: { product: Product }) {
  return (
    <Card className="border-helixon-light hover:shadow-lg transition-shadow bg-white">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-2">
          <div>
            <Badge
              variant="outline"
              className="mb-2 text-[10px] border-helixon-teal/30 text-helixon-teal bg-helixon-teal/5"
            >
              {product.category}
            </Badge>
            <CardTitle className="text-lg text-helixon-navy">
              {product.name}
            </CardTitle>
          </div>
          <FlaskConical className="h-5 w-5 text-helixon-slate shrink-0 mt-1" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3">
        {/* Chemical Data Table */}
        <div className="space-y-2 text-sm">
          <DataRow label="CAS Number" value={product.cas} mono />
          <DataRow label="Molecular Formula" value={product.molecularFormula} mono />
          <DataRow label="Molecular Weight" value={product.molecularWeight} />
          <DataRow label="Purity" value={product.purity} />
          <DataRow label="Analysis" value={product.analysisMethod} />
          <DataRow label="Appearance" value={product.appearance} />
          <DataRow label="Storage" value={product.storage} />
        </div>

        <Separator className="bg-helixon-light" />

        {/* References */}
        <div className="flex items-center gap-2 text-xs">
          <span className="text-helixon-slate">Ref:</span>
          <a
            href={`https://pubchem.ncbi.nlm.nih.gov/compound/${product.pubchemCid}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-helixon-teal hover:text-helixon-teal-dark transition-colors"
          >
            PubChem CID {product.pubchemCid}
            <ExternalLink className="h-3 w-3" />
          </a>
        </div>

        {/* Per-product disclaimer */}
        <div className="rounded bg-muted px-3 py-2">
          <p className="text-[10px] text-helixon-slate leading-relaxed">
            <strong>For research use only.</strong> Not approved for human or
            veterinary consumption. The buyer assumes full responsibility for
            compliance with applicable regulations.
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
