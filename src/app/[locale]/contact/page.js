'use client';

import { usePathname } from 'next/navigation';
import { BASE_URL, BRANCHES } from '@/lib/seo';

export default function ContactPage() {
    const pathname = usePathname();
    const locale = pathname.startsWith('/ar') ? 'ar' : 'en';

    const t = locale === 'ar' ? {
        heroTitle: 'اتصل بنا',
        heroSlogan: 'مصممة لاحتياجات سفرك',
        heroText: 'نقدر استفساراتكم وملاحظاتكم وفرصة مساعدتكم في احتياجات تأجير السيارات.',
        supportTitle: 'دعم العملاء',
        supportText: 'فريق دعم العملاء المتفاني لدينا متاح على مدار الساعة للإجابة على استفساراتكم وتقديم المساعدة.',
        channelsTitle: 'تواصل مع موج مسقط لتأجير السيارات من خلال القنوات التالية',
        reachTitle: 'تواصل معنا بخصوص',
        reach1: 'استفسارات الحجز', reach2: 'مواصفات المركبات', reach3: 'تفاصيل الأسعار',
        reach4: 'الدعم الفني', reach5: 'أي مساعدة أخرى قد تحتاجها',
        branchesSubtitle: 'إذا كنت تفضل التواصل الشخصي، يمكنك زيارة فروعنا في مسقط وصلالة.',
        muscatOffice: 'مكتب مسقط', salalahOffice: 'مكتب صلالة',
        muscat: 'مسقط', salalah: 'صلالة',
        muscatAddress: 'خلف بلدية بوشر، بجوار فندق سيتيدنز، الغبرة الجنوبية، مسقط، سلطنة عُمان',
        salalahAddress: 'شارع 23 يوليو، مبنى مجمع الزاهر الطبي، صلالة، سلطنة عُمان',
        contactUs: 'اتصل بنا',
        citiesTitle: 'مدينتان، إمكانيات لا حصر لها',
    } : {
        heroTitle: 'Contact Us',
        heroSlogan: 'Tailored for Your Travel Needs',
        heroText: 'We value your inquiries, feedback, and the opportunity to assist you with your car rental needs.',
        supportTitle: 'Customer Support',
        supportText: 'Our dedicated customer support team is available 24/7 to address your queries and provide assistance.',
        channelsTitle: 'Contact Mouj Muscat Car Rentals through the following channels',
        reachTitle: 'Reach out to us for',
        reach1: 'Reservation inquiries', reach2: 'Vehicle specifications', reach3: 'Pricing details',
        reach4: 'Technical support', reach5: 'Any other assistance you may need',
        branchesSubtitle: 'If you prefer face-to-face interaction, you can visit our branches in Muscat and Salalah.',
        muscatOffice: 'Muscat Office', salalahOffice: 'Salalah Office',
        muscat: 'Muscat', salalah: 'Salalah',
        muscatAddress: 'Behind Bawshar Municipality, Next to Cytidines Hotel, Al Gubra South, Muscat, Sultanate of Oman',
        salalahAddress: '23rd July Street. Al zahir Medical complex Building, Salalah, Sultanate of Oman',
        contactUs: 'Contact Us',
        citiesTitle: 'Two Cities, Countless Possibilities',
    };

    const contactSchema = {
        '@context': 'https://schema.org',
        '@type': 'ContactPage',
        name: t.heroTitle,
        url: `${BASE_URL}/${locale}/contact`,
        mainEntity: [
            {
                '@type': 'LocalBusiness',
                name: `Mouj Muscat Car Rentals — ${t.muscatOffice}`,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: BRANCHES.muscat.address,
                    addressLocality: 'Muscat',
                    addressCountry: 'OM',
                },
                telephone: BRANCHES.muscat.phone,
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: BRANCHES.muscat.lat,
                    longitude: BRANCHES.muscat.lng,
                },
            },
            {
                '@type': 'LocalBusiness',
                name: `Mouj Muscat Car Rentals — ${t.salalahOffice}`,
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: BRANCHES.salalah.address,
                    addressLocality: 'Salalah',
                    addressCountry: 'OM',
                },
                telephone: BRANCHES.salalah.phone,
                geo: {
                    '@type': 'GeoCoordinates',
                    latitude: BRANCHES.salalah.lat,
                    longitude: BRANCHES.salalah.lng,
                },
            },
        ],
    };

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(contactSchema) }}
            />
            {/* Hero */}
            <section className="hero hero-mini">
                <img className="hero-bg" src="/hero-bg.jpg" alt={t.heroTitle} />
                <div className="hero-content">
                    <h1>{t.heroTitle}</h1>
                    <h2>{t.heroSlogan}</h2>
                    <p>{t.heroText}</p>
                </div>
            </section>

            {/* Support */}
            <section className="support-section">
                <div className="container">
                    <div className="support-grid">
                        <div className="support-text">
                            <h3>{t.supportTitle}</h3>
                            <p>{t.supportText}</p>
                            <br />
                            <p>{t.channelsTitle}:</p>
                            <br />
                            <p><strong>Email:</strong> <a href="mailto:info@moujrentcar.com">info@moujrentcar.com</a></p>
                            <p><strong>WhatsApp:</strong> <a href="https://wa.me/96878456035">+968 7845 6035</a></p>
                            <p><strong>{locale === 'ar' ? 'الهاتف' : 'Phone'}:</strong> <a href="tel:+96895855229">+968 9585 5229</a></p>
                        </div>
                        <div className="support-text">
                            <h3>{t.reachTitle}</h3>
                            <ul className="reach-list">
                                <li>{t.reach1}</li>
                                <li>{t.reach2}</li>
                                <li>{t.reach3}</li>
                                <li>{t.reach4}</li>
                                <li>{t.reach5}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Branches */}
            <section className="branches-section">
                <div className="container">
                    <h2 className="section-title">{t.citiesTitle}</h2>
                    <p className="section-subtitle">{t.branchesSubtitle}</p>
                    <div className="branches-grid">
                        <div className="branch-card">
                            <h4>{t.muscatOffice}</h4>
                            <p>{t.muscatAddress}</p>
                            <div className="contact-info">
                                <a href="tel:+96895855229">+968 9585 5229</a>
                                <a href="mailto:info@moujrentcar.com">info@moujrentcar.com</a>
                            </div>
                        </div>
                        <div className="branch-card">
                            <h4>{t.salalahOffice}</h4>
                            <p>{t.salalahAddress}</p>
                            <div className="contact-info">
                                <a href="tel:+96878456035">+968 7845 6035</a>
                                <a href="mailto:info@moujrentcar.com">info@moujrentcar.com</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
