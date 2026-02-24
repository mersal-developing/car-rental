import StatsSection from '@/components/StatsSection';
import { getTranslations } from '@/i18n/translations';

export default async function AboutPage({ params }) {
    const { locale } = await params;
    const t = getTranslations(locale);

    return (
        <>
            {/* Hero */}
            <section className="hero hero-mini">
                <img className="hero-bg" src="/hero-bg.jpg" alt={t.about.heroTitle} />
                <div className="hero-content">
                    <h1>{t.about.heroTitle}</h1>
                    <h2>{t.about.heroSlogan}</h2>
                    <p>{t.about.heroText}</p>
                </div>
            </section>

            {/* Welcome */}
            <section className="about-section">
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>{t.about.welcomeTitle}</h2>
                            <h3>{t.about.welcomeSubtitle}</h3>
                            <p>{t.about.welcomeText1}</p>
                            <p>{t.about.welcomeText2}</p>
                        </div>
                        <div className="about-text">
                            <h2>{t.about.storyTitle}</h2>
                            <h3>{t.about.storySubtitle}</h3>
                            <p>{t.about.storyText}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-section" style={{ background: 'var(--bg-section)' }}>
                <div className="container">
                    <h2 className="section-title">{t.about.valuesTitle}</h2>
                    <div className="about-values-grid" style={{ marginTop: '40px' }}>
                        <div className="value-card">
                            <h4>{t.about.value1Title}</h4>
                            <p>{t.about.value1Text}</p>
                        </div>
                        <div className="value-card">
                            <h4>{t.about.value2Title}</h4>
                            <p>{t.about.value2Text}</p>
                        </div>
                        <div className="value-card">
                            <h4>{t.about.value3Title}</h4>
                            <p>{t.about.value3Text}</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Quality */}
            <section className="about-section">
                <div className="container">
                    <h2 className="section-title">{t.about.qualityTitle}</h2>
                    <p className="section-subtitle">{t.about.qualityText}</p>
                </div>
            </section>

            <StatsSection t={t} />
        </>
    );
}
