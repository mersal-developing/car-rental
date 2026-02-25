import { NextResponse } from 'next/server';
import { locales, defaultLocale } from './i18n/config';

export function proxy(request) {
    const { pathname } = request.nextUrl;

    // Skip static files and API routes
    if (
        pathname.startsWith('/_next') ||
        pathname.startsWith('/api') ||
        pathname.includes('.') // static files like .jpg, .svg
    ) {
        return NextResponse.next();
    }

    // Check if pathname already has a locale
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    );

    if (pathnameHasLocale) return NextResponse.next();

    // Redirect to default locale
    const locale = defaultLocale;
    request.nextUrl.pathname = `/${locale}${pathname}`;
    return NextResponse.redirect(request.nextUrl);
}

export const config = {
    matcher: ['/((?!_next|api|favicon.ico).*)'],
};
