import en from './en.json';
import ar from './ar.json';

const translations = { en, ar };

export function getTranslations(locale) {
    return translations[locale] || translations.en;
}
