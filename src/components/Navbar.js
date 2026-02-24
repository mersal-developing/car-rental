'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar({ locale, t }) {
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setMobileOpen(false);
    }, [pathname]);

    const otherLocale = locale === 'en' ? 'ar' : 'en';
    const switchLocalePath = pathname.replace(`/${locale}`, `/${otherLocale}`);

    const links = [
        { href: `/${locale}`, label: t.nav.home },
        { href: `/${locale}/about`, label: t.nav.about },
        { href: `/${locale}/contact`, label: t.nav.contact },
        { href: `/${locale}/fleet`, label: t.nav.fleet },
        { href: `/${locale}/services`, label: t.nav.services },
    ];

    const isActive = (linkHref) => {
        if (linkHref === `/${locale}`) return pathname === `/${locale}`;
        return pathname.startsWith(linkHref);
    };

    return (
        <>
            <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
                <div className="logo">
                    <Link href={`/${locale}`}>
                        {locale === 'ar' ? 'موج مسقط' : 'Mouj Muscat'}<br />
                        <span>{locale === 'ar' ? 'تأجير سيارات' : 'Rent Car'}</span>
                    </Link>
                </div>

                <div className="nav-links">
                    {links.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={isActive(link.href) ? 'active' : ''}
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="nav-icons">
                    <Link href={switchLocalePath} className="lang-switch">
                        {locale === 'en' ? 'عربي' : 'EN'}
                    </Link>
                    <a href="tel:+96895855229" aria-label="Phone">
                        <i className="fas fa-phone phone-icon"></i>
                    </a>
                    <a href="https://wa.me/96878456035" aria-label="WhatsApp" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-whatsapp whatsapp-icon"></i>
                    </a>
                    <button
                        className="hamburger"
                        onClick={() => setMobileOpen(!mobileOpen)}
                        aria-label="Toggle menu"
                    >
                        <i className={`fas ${mobileOpen ? 'fa-times' : 'fa-bars'}`}></i>
                    </button>
                </div>
            </nav>

            <div className={`mobile-menu ${mobileOpen ? 'active' : ''}`}>
                {links.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        className={isActive(link.href) ? 'active' : ''}
                        onClick={() => setMobileOpen(false)}
                    >
                        {link.label}
                    </Link>
                ))}
                <Link href={switchLocalePath} className="lang-switch-mobile" onClick={() => setMobileOpen(false)}>
                    {locale === 'en' ? 'العربية' : 'English'}
                </Link>
            </div>
        </>
    );
}
