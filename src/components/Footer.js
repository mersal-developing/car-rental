'use client';

import Link from 'next/link';

export default function Footer({ locale, t }) {
    return (
        <footer className="footer">
            {/* Get In Touch */}
            <div className="container">
                <div className="contact-grid" style={{ marginBottom: '60px' }}>
                    <div className="contact-info-box">
                        <h2 className="section-title left-align" style={{ color: 'var(--accent-light)' }}>{t.footer.getInTouch}</h2>
                        <p style={{ marginBottom: '30px', color: 'rgba(255,255,255,0.75)' }}>
                            {t.footer.getInTouchText}
                        </p>
                        <h4>{t.footer.officeLocation}</h4>
                        <p>{t.cities.muscatAddress}</p>
                        <br />
                        <h4>{t.footer.phone}</h4>
                        <p>+968 9585 5229 | +968 7845 6035</p>
                    </div>

                    <form className="contact-form">
                        <h3>{t.footer.formTitle}</h3>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t.footer.name}</label>
                                <input type="text" placeholder={t.footer.namePlaceholder} />
                            </div>
                            <div className="form-group">
                                <label>{t.footer.email}</label>
                                <input type="email" placeholder={t.footer.emailPlaceholder} />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>{t.footer.phone}</label>
                                <input type="tel" placeholder={t.footer.phonePlaceholder} />
                            </div>
                            <div className="form-group">
                                <label>{t.footer.subject}</label>
                                <input type="text" placeholder={t.footer.subjectPlaceholder} />
                            </div>
                        </div>
                        <div className="form-group">
                            <label>{t.footer.message}</label>
                            <textarea placeholder={t.footer.messagePlaceholder}></textarea>
                        </div>
                        <button type="submit" className="btn btn-primary">{t.footer.submit}</button>
                    </form>
                </div>
            </div>

            {/* Social Media */}
            <div className="footer-social">
                <h2>{t.footer.socialTitle}</h2>
                <p>{t.footer.socialText}</p>
                <div className="social-icons">
                    <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
                    <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
                    <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
                    <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
                    <a href="#" aria-label="YouTube"><i className="fab fa-youtube"></i></a>
                    <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
                </div>
            </div>

            {/* Bottom */}
            <div className="footer-bottom">
                <div className="footer-logo">
                    <h2>{locale === 'ar' ? 'موج مسقط' : 'Mouj Muscat'} <span className="gold-text">{locale === 'ar' ? 'تأجير سيارات' : 'Rent Car'}</span></h2>
                </div>
                <p>{t.footer.copyright}</p>
            </div>
        </footer>
    );
}
