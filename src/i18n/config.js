export const locales = ['en', 'ar'];
export const defaultLocale = 'ar';

export function getDirection(locale) {
    return locale === 'ar' ? 'rtl' : 'ltr';
}
