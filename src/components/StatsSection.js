export default function StatsSection({ t }) {
    return (
        <section className="stats-section">
            <div className="container">
                <p style={{ textAlign: 'center', color: 'rgba(255,255,255,0.6)', marginBottom: '20px', textTransform: 'uppercase', letterSpacing: '3px', fontSize: '0.85rem' }}>
                    {t.stats.ourFleet}
                </p>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">24</span>
                        <span className="stat-label">{t.stats.fleet}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">12<sup>+</sup></span>
                        <span className="stat-label">{t.stats.xpYears}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2</span>
                        <span className="stat-label">{t.stats.branches}</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">250<sup>+</sup></span>
                        <span className="stat-label">{t.stats.clients}</span>
                    </div>
                </div>
                <p className="stats-description">{t.stats.description}</p>
                <div className="stars-rating">★ ★ ★ ★ ★</div>
            </div>
        </section>
    );
}
