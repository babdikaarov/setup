// layout.tsx

import type { Metadata } from "next";
import React from "react";
import "./globals.css";

export const metadata: Metadata = {
   title: "Multi lang setup MedInfo home page",
};

export default async function RootLayout({
   params,
   children,
}: Readonly<{
   params: Promise<{ locale: string }>;
   children: React.ReactNode;
}>) {
   const { locale } = await params;
   
   return (
      <html lang={locale}>
         <body>{children}</body>
      </html>
   );
}
