import { getTranslations } from '@/i18n/translations';
import { BASE_URL } from '@/lib/seo';

export async function generateMetadata({ params }) {
    const { locale } = await params;
    return {
        title: locale === 'ar'
            ? 'خدماتنا | موج مسقط لتأجير السيارات'
            : 'Our Services | Mouj Muscat Car Rentals',
        alternates: {
            canonical: `${BASE_URL}/${locale}/services`,
        },
    };
}

export default async function ServicesPage({ params }) {
    const { locale } = await params;
    const t = getTranslations(locale);

    const servicesList = [
        { icon: 'fas fa-car', title: t.services.service1, desc: t.services.service1Desc },
        { icon: 'fas fa-tags', title: t.services.service2, desc: t.services.service2Desc },
        { icon: 'fas fa-calendar-alt', title: t.services.service3, desc: t.services.service3Desc },
        { icon: 'fas fa-laptop', title: t.services.service4, desc: t.services.service4Desc },
        { icon: 'fas fa-headset', title: t.services.service5, desc: t.services.service5Desc },
        { icon: 'fas fa-plane-arrival', title: t.services.service6, desc: t.services.service6Desc },
        { icon: 'fas fa-shield-alt', title: t.services.service7, desc: t.services.service7Desc },
        { icon: 'fas fa-road', title: t.services.service8, desc: t.services.service8Desc },
    ];

    const servicesSchema = {
        '@context': 'https://schema.org',
        '@type': 'ItemList',
        name: locale === 'ar' ? 'خدماتنا' : 'Our Services',
        url: `${BASE_URL}/${locale}/services`,
        itemListElement: servicesList.map((s, i) => ({
            '@type': 'ListItem',
            position: i + 1,
            item: {
                '@type': 'Service',
                name: s.title,
                description: s.desc,
                provider: {
                    '@type': 'Organization',
                    name: 'Mouj Muscat Car Rentals',
                    url: BASE_URL,
                },
            },
        })),
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(servicesSchema) }}
            />
            {/* Hero */}
            <section className="hero hero-mini">
                <img className="hero-bg" src="/hero-bg.jpg" alt={t.services.heroTitle} />
                <div className="hero-content">
                    <h1>{t.services.heroTitle}</h1>
                    <h2>{t.services.heroSlogan}</h2>
                    <p>{t.services.heroText}</p>
                </div>
            </section>

            {/* Services */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">{t.services.title}</h2>
                    <p className="section-subtitle">{t.services.subtitle}</p>
                    <div className="features-grid">
                        {servicesList.map((s, i) => (
                            <div className="feature-box" key={i}>
                                <span className="icon"><i className={s.icon}></i></span>
                                <h4>{s.title}</h4>
                                <p>{s.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
