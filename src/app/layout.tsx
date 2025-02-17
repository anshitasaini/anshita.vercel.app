import "./globals.css";

import localFont from "next/font/local";
import Script from "next/script";

import { Providers } from "@/components/providers";
import DotNavigation from "@/components/dot-navigation";

const roobert = localFont({
  src: [
    {
      path: "../fonts/Roobert Regular.otf",
      // path: '../fonts/hinted-CheyenneSans-Regular.ttf',
      weight: "400",
      style: "normal",
    },
    {
      path: "../fonts/Roobert Medium.otf",
      // path: '../fonts/hinted-CheyenneSans-Medium.ttf',
      weight: "500",
      style: "normal",
    },
    {
      path: "../fonts/Roobert SemiBold.otf",
      // path: '../fonts/hinted-CheyenneSans-SemiBold.ttf',
      weight: "600",
      style: "normal",
    },
    {
      path: "../fonts/Roobert Bold.otf",
      // path: '../fonts/hinted-CheyenneSans-Bold.ttf',
      weight: "700",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="h-full">
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-8M5E3HZ2K5"
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){window.dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-8M5E3HZ2K5');
        `}
      </Script>
      <body className={roobert.className}>
        <Providers>{children}</Providers>
        <DotNavigation
          sections={[
            { id: "header", label: "Header" },
            { id: "experience", label: "Experience" },
            { id: "research", label: "Research" },
            { id: "honors", label: "Programs & Honors" },
          ]}
        />
      </body>
    </html>
  );
}
