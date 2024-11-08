// middleware.ts
import { createI18nMiddleware } from "next-international/middleware";
import { NextRequest, NextResponse } from "next/server";

// Set up the internationalization middleware
const I18nMiddleware = createI18nMiddleware({
   locales: ["ru", "ky"],
   defaultLocale: "ru",
});

export function middleware(request: NextRequest) {
   // Check if the path starts without a locale
   const { pathname } = request.nextUrl;
   const hasLocale = /^\/(ru|ky)(\/|$)/.test(pathname);

   // If there is no locale, redirect to the default locale (ru)
   if (!hasLocale) {
      const url = request.nextUrl.clone();
      url.pathname = `/ru${pathname}`;
      return NextResponse.redirect(url);
   }

   // Otherwise, proceed with the I18nMiddleware handling
   return I18nMiddleware(request);
}

// Define the paths where the middleware should be applied
export const config = {
   matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
};
