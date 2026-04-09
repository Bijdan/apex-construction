import { NextRequest, NextResponse } from "next/server";
import { locales, type Locale } from "@/lib/i18n";

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if the pathname already starts with a valid locale
  const pathnameLocale = locales.find(
    (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
  );

  if (pathnameLocale) return NextResponse.next();

  // Detect preferred locale from Accept-Language header
  const acceptLanguage = request.headers.get("accept-language") ?? "";
  const preferredLocale: Locale = acceptLanguage.toLowerCase().includes("fr")
    ? "fr"
    : "en";

  // Redirect to the preferred locale
  request.nextUrl.pathname = `/${preferredLocale}${pathname === "/" ? "" : pathname}`;
  return NextResponse.redirect(request.nextUrl);
}

export const config = {
  matcher: ["/((?!_next|favicon\\.ico|.*\\..*).*)" ],
};
