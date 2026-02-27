import { BASE_URL } from '@/lib/seo';

const pages = [
    { path: '', priority: 1.0 },
    { path: '/fleet', priority: 0.9 },
    { path: '/services', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/contact', priority: 0.7 },
];

const locales = ['en', 'ar'];

export default function sitemap() {
    const entries = [];
    const now = new Date().toISOString();

    for (const locale of locales) {
        for (const page of pages) {
            entries.push({
                url: `${BASE_URL}/${locale}${page.path}`,
                lastModified: now,
                changeFrequency: page.priority === 1.0 ? 'weekly' : 'monthly',
                priority: page.priority,
            });
        }
    }

    return entries;
}
