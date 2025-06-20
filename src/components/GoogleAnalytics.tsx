"use client";

import Script from "next/script";
import { usePathname } from "next/navigation";
import { useEffect } from "react";

const GA_MEASUREMENT_ID = "G-HSVZZHYD1K";

// Add minimal TypeScript declaration so window.gtag does not error.
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

/**
 * Google Analytics component that injects the gtag.js script once and
 * automatically sends a page_view event on route changes so that
 * analytics are captured across all pages, even when navigating on the
 * client side.
 */
export default function GoogleAnalytics() {
  const pathname = usePathname();

  // Send page_view on route change
  useEffect(() => {
    if (typeof window === "undefined" || !window.gtag) return;
    window.gtag("config", GA_MEASUREMENT_ID, {
      page_path: pathname,
    });
  }, [pathname]);

  return (
    <>
      <Script
        id="ga-gtag"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script
        id="ga-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', { page_path: window.location.pathname });
          `,
        }}
      />
    </>
  );
}
