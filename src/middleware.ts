import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

/**
 * Redirect any requests hitting the default Vercel preview / production domain
 * (e.g. https://mutai-enterprise.vercel.app) to the primary domain
 * https://mutai.co.ke using a permanent redirect (HTTP 308).
 *
 * This guarantees that:
 * 1. Users always see the canonical URL.
 * 2. Search engines don’t index the `.vercel.app` version, preventing the
 *    “Vercel” site-name label that currently shows in Google results.
 */
export function middleware(request: NextRequest) {
  const host = request.headers.get('host') || '';

  // Only redirect if the request is coming through the default Vercel domain
  if (host.endsWith('.vercel.app')) {
    const url = request.nextUrl.clone();
    url.protocol = 'https:'; // ensure https
    url.hostname = 'mutai.co.ke';
    return NextResponse.redirect(url, 308);
  }

  return NextResponse.next();
}

export const config = {
  // Apply to all routes
  matcher: '/:path*',
};
