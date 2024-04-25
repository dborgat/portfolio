import createMiddleware from 'next-intl/middleware';
import { NextRequest, NextResponse } from 'next/server';

// export default createMiddleware({
//   // A list of all locales that are supported
//   locales: ['en', 'es'],

//   // Used when no locale matches
//   defaultLocale: 'en'
// });

const nextIntlMiddleware = createMiddleware({
  locales: ['en', 'es'],
  defaultLocale: 'en',
  localePrefix: 'never',
});

export function middleware(req: NextRequest): NextResponse {
  return nextIntlMiddleware(req);
}

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(es|en)/:path*'],
};
