'use client';

export default function ContactPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero hero-mini">
                <img
                    className="hero-bg"
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920"
                    alt="Contact Us"
                />
                <div className="hero-content">
                    <h1>Contact Us</h1>
                    <h2 className="gold-text">Tailored for Your Travel Needs</h2>
                    <p>
                        We value your inquiries, feedback, and the opportunity to assist you with your car rental needs.
                        Whether you have questions about our services, need assistance with a reservation, or simply want
                        to share your experience, we&apos;re here for you.
                    </p>
                </div>
            </section>

            {/* Customer Support & Reach Out */}
            <section className="support-section">
                <div className="container">
                    <div className="support-grid">
                        <div className="support-text">
                            <h3>Customer Support</h3>
                            <p>
                                Our dedicated customer support team is available 24/7 to address your queries and provide assistance.
                            </p>
                            <h3 style={{ marginTop: '30px' }}>Contact Mouj Muscat Car Rentals through the following channels</h3>
                            <p>
                                <a href="tel:+96895855229" style={{ color: 'var(--accent-color)' }}>+968 95855229</a>
                                {' · '}
                                <a href="mailto:info@moujmuscat.com" style={{ color: 'var(--accent-color)' }}>info@moujmuscat.com</a>
                            </p>
                        </div>
                        <div className="support-text">
                            <h3>Reach out to us for</h3>
                            <ul className="reach-list">
                                <li>Reservation inquiries</li>
                                <li>Vehicle specifications</li>
                                <li>Pricing details</li>
                                <li>Technical support</li>
                                <li>Any other assistance you may need</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Two Cities */}
            <section className="branches-section" style={{ background: 'var(--primary-bg)' }}>
                <div className="container">
                    <h2 className="section-title">Two Cities, Countless Possibilities</h2>
                    <p className="section-subtitle">
                        If you prefer face-to-face interaction, you can visit our branches in Muscat and Salalah.
                        Our staff at each location will be happy to assist you with your car rental needs.
                    </p>
                    <div className="branches-grid">
                        <div className="branch-card">
                            <h4>Muscat Office</h4>
                            <p>Behind Bawshar Municipality, Next to Cytidines Hotel, Al Gubra South, Muscat, Sultanate of Oman</p>
                            <div className="contact-info">
                                <a href="mailto:info@moujmuscat.com"><i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>info@moujmuscat.com</a>
                                <a href="tel:+96895855229"><i className="fas fa-phone" style={{ marginRight: '8px' }}></i>+968 95855229</a>
                            </div>
                        </div>
                        <div className="branch-card">
                            <h4>Salalah Office</h4>
                            <p>23rd July Street. Al zahir Medical complex Building, Salalah, Sultanate of Oman</p>
                            <div className="contact-info">
                                <a href="mailto:info@moujmuscat.com"><i className="fas fa-envelope" style={{ marginRight: '8px' }}></i>info@moujmuscat.com</a>
                                <a href="tel:+96893894900"><i className="fas fa-phone" style={{ marginRight: '8px' }}></i>+968 93894900</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
