import Link from 'next/link';

export default function MissionSection({ locale, t }) {
    return (
        <section className="mission-section">
            <div className="container">
                <div className="mission-container">
                    <div className="mission-text">
                        <h2 className="section-title">{t.mission.title}</h2>
                        <h3>{t.mission.subtitle}</h3>
                        <p>{t.mission.text}</p>
                        <Link href={`/${locale}/about`} className="btn btn-primary">{t.mission.cta}</Link>
                    </div>
                    <div className="mission-graphic">
                        <div className="target-icon">
                            <i className="fas fa-crosshairs"></i>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
