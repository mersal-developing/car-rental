import Link from 'next/link';
import StatsSection from '@/components/StatsSection';
import MissionSection from '@/components/MissionSection';
import { getTranslations } from '@/i18n/translations';
import { BASE_URL, BRANCHES } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);
  return {
    title: locale === 'ar'
      ? 'تأجير سيارات في مسقط وصلالة | موج مسقط'
      : 'Car Rental in Muscat & Salalah | Mouj Muscat',
    description: t.fleet.subtitle,
    alternates: {
      canonical: `${BASE_URL}/${locale}`,
    },
  };
}

export default async function HomePage({ params }) {
  const { locale } = await params;
  const t = getTranslations(locale);

  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Mouj Muscat Car Rentals',
    url: BASE_URL,
    logo: `${BASE_URL}/hero-bg.jpg`,
    email: 'info@moujrentcar.com',
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: BRANCHES.muscat.phone,
        contactType: 'customer service',
        areaServed: 'OM',
        availableLanguage: ['Arabic', 'English'],
      },
      {
        '@type': 'ContactPoint',
        telephone: BRANCHES.salalah.phone,
        contactType: 'customer service',
        areaServed: 'OM',
        availableLanguage: ['Arabic', 'English'],
      },
    ],
  };

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'AutoRental',
    name: 'Mouj Muscat Car Rentals',
    url: BASE_URL,
    image: `${BASE_URL}/hero-bg.jpg`,
    email: 'info@moujrentcar.com',
    priceRange: '$$',
    currenciesAccepted: 'OMR',
    location: [
      {
        '@type': 'Place',
        name: 'Mouj Muscat — Muscat Branch',
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
        '@type': 'Place',
        name: 'Mouj Muscat — Salalah Branch',
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
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      {/* Hero */}
      <section className="hero" id="home">
        <img
          className="hero-bg"
          src="/hero-bg.jpg"
          alt="Luxury Car on Oman Coastal Road"
        />
        <div className="hero-content">
          <h1>{t.hero.title}</h1>
          <h2>{t.hero.slogan}</h2>
          <Link href={`/${locale}/about`} className="btn btn-primary">{t.hero.cta}</Link>
        </div>
      </section>

      {/* Fleet Categories */}
      <section className="fleet-section">
        <div className="container">
          <h2 className="section-title">{t.fleet.title}</h2>
          <p className="section-subtitle">{t.fleet.subtitle}</p>
          <div className="fleet-grid">
            {['4x4', 'SUV', 'Sedan'].map((cat) => (
              <div className="fleet-card" key={cat}>
                <div className="card-image">
                  <img
                    src={
                      cat === '4x4'
                        ? 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=600'
                        : cat === 'SUV'
                          ? 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=600'
                          : 'https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=600'
                    }
                    alt={cat}
                  />
                </div>
                <div className="card-info">
                  <h3>{cat}</h3>
                  <Link href={`/${locale}/fleet`} className="btn btn-outline btn-small">{t.fleet.seeMore}</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">{t.whyChoose.title}</h2>
          <p className="section-subtitle">{t.whyChoose.subtitle}</p>
          <div className="features-grid">
            <div className="feature-box">
              <span className="icon"><i className="fas fa-tags"></i></span>
              <h4>{t.whyChoose.pricing}</h4>
              <p>{t.whyChoose.pricingDesc}</p>
              <Link href={`/${locale}/services`} className="more-link">{t.whyChoose.more} →</Link>
            </div>
            <div className="feature-box">
              <span className="icon"><i className="fas fa-headset"></i></span>
              <h4>{t.whyChoose.excellence}</h4>
              <p>{t.whyChoose.excellenceDesc}</p>
              <Link href={`/${locale}/services`} className="more-link">{t.whyChoose.more} →</Link>
            </div>
            <div className="feature-box">
              <span className="icon"><i className="fas fa-calendar-alt"></i></span>
              <h4>{t.whyChoose.flexible}</h4>
              <p>{t.whyChoose.flexibleDesc}</p>
              <Link href={`/${locale}/services`} className="more-link">{t.whyChoose.more} →</Link>
            </div>
            <div className="feature-box">
              <span className="icon"><i className="fas fa-laptop"></i></span>
              <h4>{t.whyChoose.booking}</h4>
              <p>{t.whyChoose.bookingDesc}</p>
              <Link href={`/${locale}/services`} className="more-link">{t.whyChoose.more} →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <MissionSection locale={locale} t={t} />

      {/* Stats */}
      <StatsSection t={t} />

      {/* Two Cities */}
      <section className="branches-section">
        <div className="container">
          <h2 className="section-title">{t.cities.title}</h2>
          <p className="section-subtitle">{t.cities.subtitle}</p>
          <div className="branches-grid">
            <div className="branch-card">
              <h4>{t.cities.muscat}</h4>
              <p>{t.cities.muscatAddress}</p>
              <div className="contact-info">
                <a href="tel:+96895855229">+968 9585 5229</a>
                <a href="mailto:info@moujrentcar.com">info@moujrentcar.com</a>
              </div>
            </div>
            <div className="branch-card">
              <h4>{t.cities.salalah}</h4>
              <p>{t.cities.salalahAddress}</p>
              <div className="contact-info">
                <a href="tel:+96878456035">+968 7845 6035</a>
                <a href="mailto:info@moujrentcar.com">info@moujrentcar.com</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Discovery Oman */}
      <section className="discovery-section">
        <div className="container">
          <h2 className="section-title">{t.discovery.title}</h2>
          <p className="discovery-text">{t.discovery.text}</p>
          <div className="dest-grid">
            <div className="dest-card">
              <img src="/oman-muscat-city.png" alt={t.cities.muscat} />
              <h4>{t.cities.muscat}</h4>
            </div>
            <div className="dest-card">
              <img src="/oman-coastal-highway.png" alt={t.discovery.coastalHighway} />
              <h4>{t.discovery.coastalHighway}</h4>
            </div>
            <div className="dest-card">
              <img src="/oman-desert-dunes.png" alt={t.discovery.wahibaSands} />
              <h4>{t.discovery.wahibaSands}</h4>
            </div>
            <div className="dest-card">
              <img src="/oman-mountains.png" alt={t.discovery.mountains} />
              <h4>{t.discovery.mountains}</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
