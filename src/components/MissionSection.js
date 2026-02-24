import Link from 'next/link';

export default function MissionSection() {
    return (
        <section className="mission-section">
            <div className="container mission-container">
                <div className="mission-text">
                    <h2 className="section-title left-align">Our Mission</h2>
                    <h3>Your Journey, Our Priority</h3>
                    <p>
                        At Mouj Muscat, our mission is simple: to enhance your travel experience by providing reliable,
                        high-quality vehicles and exceptional customer service. We understand that each journey is unique,
                        and we are dedicated to tailoring our services to meet your individual needs and preferences.
                    </p>
                    <Link href="/about" className="btn btn-primary" style={{ marginTop: '10px' }}>
                        READ MORE
                    </Link>
                </div>
                <div className="mission-graphic">
                    <div className="target-icon">
                        <i className="fas fa-bullseye"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
