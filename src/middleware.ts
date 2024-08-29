import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { locales } from './config';

export default function middleware(request: NextRequest) {
  const i18nMiddleware = createMiddleware({
    // A list of all locales that are supported
    locales: locales,

    // localePrefix: localePrefix,
    // Disable automatic locale detection
    localeDetection: false,

    // Used when no locale matches
    defaultLocale: 'en',
  });

  const response = i18nMiddleware(request);

  return response;
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/((?!api|_next|_vercel|.*\\..*).*)', '/(en)/:path*'],
};
