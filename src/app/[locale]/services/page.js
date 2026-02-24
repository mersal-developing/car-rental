import { getTranslations } from '@/i18n/translations';

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

    return (
        <>
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
