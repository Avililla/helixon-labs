"use client";

import { useState } from "react";
import { AlertTriangle, X } from "lucide-react";

export function DisclaimerBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="disclaimer-banner relative" role="alert">
      <div className="container mx-auto flex items-center justify-center gap-1.5 sm:gap-2 px-8 sm:px-4">
        <AlertTriangle className="h-3 w-3 shrink-0 hidden sm:block" />
        <p className="font-medium text-[10px] sm:text-xs leading-tight sm:leading-normal">
          Products for laboratory research only. Not for human or veterinary
          use.
        </p>
        <button
          onClick={() => setVisible(false)}
          className="absolute right-2 sm:right-4 p-1 hover:text-white transition-colors"
          aria-label="Dismiss disclaimer"
        >
          <X className="h-3 w-3" />
        </button>
      </div>
    </div>
  );
}
