export const locales = ['en', 'ar'];
export const defaultLocale = 'en';

export function getDirection(locale) {
    return locale === 'ar' ? 'rtl' : 'ltr';
}
