"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Cookie } from "lucide-react";

export function CookieBanner() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem("helixon-cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("helixon-cookie-consent", "accepted");
    setVisible(false);
  };

  const handleReject = () => {
    localStorage.setItem("helixon-cookie-consent", "rejected");
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div
      className="fixed bottom-0 left-0 right-0 z-[100] border-t border-border bg-white shadow-lg"
      role="dialog"
      aria-label="Cookie consent"
    >
      <div className="container mx-auto px-4 lg:px-8 py-3 sm:py-4">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-4">
          <Cookie className="h-5 w-5 text-helixon-slate shrink-0 hidden sm:block" />
          <div className="flex-1">
            <p className="text-xs sm:text-sm font-semibold text-helixon-navy mb-0.5 sm:mb-1">
              Cookie Policy (Art. 22 LSSI-CE)
            </p>
            <p className="text-[11px] sm:text-xs text-helixon-slate leading-relaxed">
              This website uses strictly necessary cookies for session management.
              Analytical cookies require your explicit consent.{" "}
              <a
                href="#legal"
                className="text-helixon-blue underline hover:text-helixon-navy"
              >
                See policy
              </a>
              .
            </p>
          </div>
          <div className="flex items-center gap-2 sm:gap-3 shrink-0 w-full sm:w-auto">
            <Button
              variant="outline"
              size="sm"
              onClick={handleReject}
              className="flex-1 sm:flex-none border-helixon-slate text-helixon-slate hover:bg-helixon-light h-8 text-xs sm:text-sm"
            >
              Reject All
            </Button>
            <Button
              size="sm"
              onClick={handleAccept}
              className="flex-1 sm:flex-none bg-helixon-blue hover:bg-helixon-navy text-white h-8 text-xs sm:text-sm"
            >
              Accept All
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
