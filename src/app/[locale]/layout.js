import '../globals.css';
import { Montserrat, Playfair_Display, Noto_Kufi_Arabic } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { locales, getDirection } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';
import { BASE_URL, BRANCHES } from '@/lib/seo';

const montserrat = Montserrat({
    subsets: ['latin'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-body',
    display: 'swap',
});

const playfair = Playfair_Display({
    subsets: ['latin'],
    weight: ['400', '600', '700'],
    variable: '--font-heading',
    display: 'swap',
});

const notoKufi = Noto_Kufi_Arabic({
    subsets: ['arabic'],
    weight: ['300', '400', '500', '600', '700'],
    variable: '--font-arabic',
    display: 'swap',
});

export async function generateStaticParams() {
    return locales.map((locale) => ({ locale }));
}

export const viewport = {
    width: 'device-width',
    initialScale: 1,
};

export async function generateMetadata({ params }) {
    const { locale } = await params;
    const t = getTranslations(locale);
    const ogLocale = locale === 'ar' ? 'ar_OM' : 'en_US';
    const canonicalUrl = `${BASE_URL}/${locale}`;

    return {
        title: {
            template: `%s | ${t.hero.title}`,
            default: `${t.hero.title} | ${t.nav.home}`,
        },
        description: t.mission.text,
        keywords: ['car rental', 'Oman', 'Muscat', 'Salalah', 'rent car', 'Mouj Muscat', 'تأجير سيارات', 'عُمان', 'مسقط'],
        alternates: {
            canonical: canonicalUrl,
            languages: {
                en: `${BASE_URL}/en`,
                ar: `${BASE_URL}/ar`,
                'x-default': `${BASE_URL}/ar`,
            },
        },
        openGraph: {
            type: 'website',
            locale: ogLocale,
            siteName: t.hero.title,
            url: canonicalUrl,
            title: `${t.hero.title} | ${t.nav.home}`,
            description: t.mission.text,
            images: [
                {
                    url: `${BASE_URL}/hero-bg.jpg`,
                    width: 1200,
                    height: 630,
                    alt: t.hero.title,
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${t.hero.title} | ${t.nav.home}`,
            description: t.mission.text,
            images: [`${BASE_URL}/hero-bg.jpg`],
        },
        other: {
            'geo.region': 'OM',
            'geo.placename': 'Muscat, Oman',
            'geo.position': `${BRANCHES.muscat.lat};${BRANCHES.muscat.lng}`,
            'ICBM': `${BRANCHES.muscat.lat}, ${BRANCHES.muscat.lng}`,
        },
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    const dir = getDirection(locale);
    const fontClasses = `${montserrat.variable} ${playfair.variable} ${notoKufi.variable}`;
    const t = getTranslations(locale);

    return (
        <html lang={locale} dir={dir} className={fontClasses} suppressHydrationWarning>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body suppressHydrationWarning>
                <Navbar locale={locale} t={t} />
                <main>{children}</main>
                <Footer locale={locale} t={t} />
            </body>
        </html>
    );
}
