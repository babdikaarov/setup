// layout.tsx

import type { Metadata } from "next";
import React from "react";
import "./globals.css";
import { getStaticParams } from "../../locales/server";
import { setStaticParamsLocale } from "next-international/server";

export const metadata: Metadata = {
   title: "Multi lang setup MedInfo home page",
};
export function generateStaticParams() {
   return getStaticParams();
}

export default async function RootLayout({
   params,
   children,
}: Readonly<{
   params: Promise<{ locale: string }>;
   children: React.ReactNode;
}>) {
   const { locale } = await params;
   setStaticParamsLocale(locale);

   return (
      <html lang={locale}>
         <body>{children}</body>
      </html>
   );
}
