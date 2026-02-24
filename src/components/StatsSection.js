export default function StatsSection({ showDescription = false }) {
    return (
        <section className="stats-section">
            <div className="container">
                <h2 className="section-title" style={{ marginBottom: '10px' }}>Tailored for Your Travel Needs</h2>
                <p className="section-subtitle" style={{ marginBottom: '30px' }}>Our Fleet</p>
                <div className="stats-grid">
                    <div className="stat-item">
                        <span className="stat-number">24</span>
                        <span className="stat-label">Our Fleet</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">12+</span>
                        <span className="stat-label">XP Years</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">2</span>
                        <span className="stat-label">Branches</span>
                    </div>
                    <div className="stat-item">
                        <span className="stat-number">250+</span>
                        <span className="stat-label">Clients</span>
                    </div>
                </div>
                {showDescription && (
                    <p className="stats-description">
                        Established with a passion for exploration and a commitment to exceptional service, our car rental company is
                        more than just a provider of vehicles; we&apos;re your gateway to unforgettable experiences in Oman.
                    </p>
                )}
                <div className="stars-rating">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                </div>
            </div>
        </section>
    );
}
