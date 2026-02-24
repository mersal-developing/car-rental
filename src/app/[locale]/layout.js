import '../globals.css';
import { Montserrat, Playfair_Display, Noto_Kufi_Arabic } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { locales, getDirection } from '@/i18n/config';
import { getTranslations } from '@/i18n/translations';

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
    return {
        title: {
            template: `%s | ${t.hero.title}`,
            default: `${t.hero.title} | ${t.nav.home}`,
        },
        description: t.mission.text,
        keywords: ['car rental', 'Oman', 'Muscat', 'Salalah', 'rent car', 'Mouj Muscat', 'تأجير سيارات', 'عُمان', 'مسقط'],
    };
}

export default async function LocaleLayout({ children, params }) {
    const { locale } = await params;
    const dir = getDirection(locale);
    const fontClasses = `${montserrat.variable} ${playfair.variable} ${notoKufi.variable}`;
    const t = getTranslations(locale);

    return (
        <html lang={locale} dir={dir} className={fontClasses}>
            <head>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </head>
            <body>
                <Navbar locale={locale} t={t} />
                <main>{children}</main>
                <Footer locale={locale} t={t} />
            </body>
        </html>
    );
}
