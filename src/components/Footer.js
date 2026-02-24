'use client';

import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="footer">
            {/* Get In Touch */}
            <div className="container">
                <div className="contact-grid" style={{ marginBottom: '60px' }}>
                    <div className="contact-info-box">
                        <h2 className="section-title left-align" style={{ fontSize: '1.5rem', marginBottom: '20px' }}>Get in touch</h2>
                        <p style={{ marginBottom: '20px' }}>
                            Use our contact form for all information requests or contact us directly using the contact information below.
                            Feel free to get in touch with us via email or phone
                        </p>
                        <div style={{ marginBottom: '15px' }}>
                            <h4 style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '8px' }}>Our Office Location</h4>
                            <p>Behind Bawshar Municipality, Next to Cytidines Hotel, Al Gubra South, Muscat, Sultanate of Oman</p>
                        </div>
                        <div>
                            <h4 style={{ color: 'var(--accent-color)', fontSize: '0.9rem', marginBottom: '8px' }}>Phone</h4>
                            <p><a href="tel:+96895855229" style={{ color: 'var(--accent-color)' }}>+968 95855229</a></p>
                        </div>
                    </div>
                    <div className="contact-form">
                        <h3>Get started with a free Booking</h3>
                        <form onSubmit={(e) => e.preventDefault()}>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Your Name</label>
                                    <input type="text" placeholder="Full Name" />
                                </div>
                                <div className="form-group">
                                    <label>Your Email</label>
                                    <input type="email" placeholder="Email Address" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Phone</label>
                                    <input type="tel" placeholder="Phone Number" />
                                </div>
                                <div className="form-group">
                                    <label>Subject</label>
                                    <input type="text" placeholder="Subject" />
                                </div>
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <textarea placeholder="Your message..."></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                                Submit Reservation
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Social Media */}
            <div className="footer-social">
                <h2>Connect on Social Media</h2>
                <p>
                    Stay updated on our latest offerings, promotions, and travel tips by connecting with us on social media.
                    Follow us on our social media platforms for the latest updates and engage with our community of fellow
                    travelers by clicking on the Social Media icons
                </p>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="mailto:info@moujmuscat.com" aria-label="Email"><i className="fas fa-envelope"></i></a>
                    <a href="tel:+96895855229" aria-label="Phone"><i className="fas fa-phone"></i></a>
                    <a href="https://wa.me/96878456035" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp"></i>
                    </a>
                </div>
            </div>

            <div className="footer-bottom">
                <div className="footer-logo">
                    <h2>Mouj Muscat</h2>
                    <span className="gold-text" style={{ fontSize: '0.75rem', letterSpacing: '3px' }}>Rent Car</span>
                </div>
                <p>Copyright &copy; 2026 All Rights Reserved Mouj Muscat.</p>
            </div>
        </footer>
    );
}
