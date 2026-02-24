'use client';

import { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import InsuredFleet from '@/components/InsuredFleet';
import DocumentsRequired from '@/components/DocumentsRequired';

export default function FleetPage({ params: paramsPromise }) {
    // Since this is a client component, we use React.use() pattern
    // But for simplicity, we'll extract locale from window location
    const [activeCategory, setActiveCategory] = useState(null);
    const [activeBrand, setActiveBrand] = useState(null);
    const [activeModel, setActiveModel] = useState(null);

    // Detect locale from URL path
    const getLocale = () => {
        if (typeof window !== 'undefined') {
            const path = window.location.pathname;
            if (path.startsWith('/ar')) return 'ar';
        }
        return 'en';
    };

    const locale = typeof window !== 'undefined' ? getLocale() : 'en';

    // Inline translations for client component
    const t = locale === 'ar' ? {
        heroTitle: 'موج مسقط لتأجير السيارات',
        heroSlogan: 'استكشف أسطولنا',
        heroText: 'أسطول مذهل من المركبات مصمم لتلبية احتياجات كل مسافر ومحب للمغامرة.',
        browseTitle: 'تشكيلة متنوعة من المركبات',
        browseSubtitle: 'استكشف أسطولنا بالتفصيل، واطلع على مواصفات المركبات، واختر السيارة المثالية لرحلتك القادمة.',
        browseModels: 'تصفح الموديلات',
        viewYears: 'عرض السنوات',
        models: 'موديلات',
        variants: 'إصدارات',
        insuredTitle: 'أسطول مؤمن بالكامل',
        insuredText: 'كل مركبة في أسطولنا تأتي مع تغطية تأمينية شاملة، مما يوفر لك راحة البال أثناء رحلاتك.',
        docTitle: 'المستندات المطلوبة لتأجير السيارات',
        omani: 'المواطنون العُمانيون', gulf: 'مواطنو دول الخليج', foreigner: 'الأجانب / السياح',
        omanId: 'بطاقة الهوية العُمانية', omanLicense: 'رخصة قيادة عُمانية سارية',
        gulfId: 'بطاقة الهوية الوطنية', gulfLicense: 'رخصة قيادة سارية (من البلد الأصلي)',
        passport: 'جواز سفر ساري المفعول', intlLicense: 'رخصة قيادة دولية', visa: 'تأشيرة عُمان سارية',
        depositNote: 'ملاحظة: يُطلب مبلغ تأمين قابل للاسترداد بقيمة 50 ريال عُماني من جميع المواطنين الأجانب عند الاستئجار.',
    } : {
        heroTitle: 'Mouj Muscat Car Rentals',
        heroSlogan: 'Explore Our Fleet',
        heroText: 'Impressive fleet of vehicles designed to cater to every type of traveler and adventure enthusiast.',
        browseTitle: 'Variety Of Vehicles',
        browseSubtitle: 'Explore our fleet in detail, view vehicle specifications, and choose the perfect ride for your upcoming journey.',
        browseModels: 'Browse models',
        viewYears: 'View years',
        models: 'models',
        variants: 'variants',
        insuredTitle: 'Fully Insured Fleet',
        insuredText: 'Every vehicle in our fleet comes with comprehensive insurance coverage, providing you with peace of mind during your travels.',
        docTitle: 'Documents Required for Car Rental',
        omani: 'Omani Nationals', gulf: 'Gulf Country Nationals', foreigner: 'Foreigners / Tourists',
        omanId: 'Omani ID Card', omanLicense: 'Valid Omani Driving License',
        gulfId: 'National ID Card', gulfLicense: 'Valid Driving License (from home country)',
        passport: 'Valid Passport', intlLicense: 'International Driving License', visa: 'Valid Oman Visa',
        depositNote: 'Note: A refundable security deposit of OMR 50 is required for all foreign nationals at the time of rental.',
    };

    const categories = Object.keys(vehicles);

    // Initialize category
    if (!activeCategory && categories.length > 0) {
        // Will be set on first render
    }

    const currentCategory = activeCategory || categories[0];
    const brands = vehicles[currentCategory] || {};

    const handleCategoryChange = (cat) => {
        setActiveCategory(cat);
        setActiveBrand(null);
        setActiveModel(null);
    };

    const handleBrandClick = (brand) => {
        setActiveBrand(brand);
        setActiveModel(null);
    };

    const handleModelClick = (model) => {
        setActiveModel(model);
    };

    const handleBack = (level) => {
        if (level === 'category') {
            setActiveBrand(null);
            setActiveModel(null);
        } else if (level === 'brand') {
            setActiveModel(null);
        }
    };

    // Determine view level
    const renderContent = () => {
        if (activeModel && activeBrand) {
            // Level 3: Year variants
            const years = brands[activeBrand]?.[activeModel] || [];
            return (
                <div className="fade-in">
                    <h3 className="year-grid-title">
                        {activeBrand} {activeModel}
                        <span className="year-count">{years.length} {t.variants}</span>
                    </h3>
                    <div className="vehicle-grid">
                        {years.map((v, i) => (
                            <div className="vehicle-card" key={i}>
                                <div className="vehicle-image">
                                    <img src={v.image} alt={`${activeBrand} ${activeModel} ${v.year}`} />
                                    <span className="vehicle-year-tag">{v.year}</span>
                                </div>
                                <div className="vehicle-name">{activeBrand} {activeModel}</div>
                            </div>
                        ))}
                    </div>
                </div>
            );
        }

        if (activeBrand) {
            // Level 2: Models
            const models = Object.keys(brands[activeBrand] || {});
            return (
                <div className="fade-in">
                    <div className="model-grid">
                        {models.map((model) => {
                            const years = brands[activeBrand][model];
                            return (
                                <div className="model-card" key={model} onClick={() => handleModelClick(model)}>
                                    <div className="model-card-image">
                                        <img src={years[0]?.image} alt={model} />
                                        <div className="model-card-overlay">
                                            <span className="year-badge">{years.length} {t.variants}</span>
                                        </div>
                                    </div>
                                    <div className="model-card-info">
                                        <h4>{model}</h4>
                                        <span className="browse-link">{t.viewYears} →</span>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            );
        }

        // Level 1: Brands
        const brandNames = Object.keys(brands);
        return (
            <div className="fade-in">
                <div className="brand-grid">
                    {brandNames.map((brand) => {
                        const models = Object.keys(brands[brand]);
                        const firstModel = models[0];
                        const firstImage = brands[brand][firstModel]?.[0]?.image;
                        return (
                            <div className="brand-card" key={brand} onClick={() => handleBrandClick(brand)}>
                                <div className="brand-card-image">
                                    <img src={firstImage} alt={brand} />
                                    <div className="brand-card-overlay">
                                        <span className="brand-badge">{models.length} {t.models}</span>
                                    </div>
                                </div>
                                <div className="brand-card-info">
                                    <h3>{brand}</h3>
                                    <span className="browse-link">{t.browseModels} →</span>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        );
    };

    return (
        <>
            {/* Hero */}
            <section className="hero hero-mini">
                <img className="hero-bg" src="/hero-bg.jpg" alt={t.heroTitle} />
                <div className="hero-content">
                    <h1>{t.heroTitle}</h1>
                    <h2>{t.heroSlogan}</h2>
                    <p>{t.heroText}</p>
                </div>
            </section>

            {/* Fleet Browser */}
            <section className="fleet-section">
                <div className="container">
                    <h2 className="section-title">{t.browseTitle}</h2>
                    <p className="section-subtitle">{t.browseSubtitle}</p>

                    {/* Category Tabs */}
                    <div className="fleet-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`fleet-tab ${currentCategory === cat ? 'active' : ''}`}
                                onClick={() => handleCategoryChange(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Breadcrumb */}
                    {(activeBrand || activeModel) && (
                        <div className="fleet-breadcrumb">
                            <button onClick={() => handleBack('category')}>
                                {currentCategory}
                            </button>
                            {activeBrand && (
                                <>
                                    <span className="separator">/</span>
                                    <button
                                        className={!activeModel ? 'current' : ''}
                                        onClick={() => handleBack('brand')}
                                    >
                                        {activeBrand}
                                    </button>
                                </>
                            )}
                            {activeModel && (
                                <>
                                    <span className="separator">/</span>
                                    <span className="current">{activeModel}</span>
                                </>
                            )}
                        </div>
                    )}

                    {renderContent()}
                </div>
            </section>

            {/* Insured Fleet */}
            <section className="insured-section">
                <div className="container">
                    <h2 className="section-title">{t.insuredTitle}</h2>
                    <p>{t.insuredText}</p>
                </div>
            </section>

            {/* Documents */}
            <section className="documents-section">
                <div className="container">
                    <h2 className="section-title">{t.docTitle}</h2>
                    <div className="documents-grid">
                        <div className="document-card">
                            <h4>{t.omani}</h4>
                            <ul><li>{t.omanId}</li><li>{t.omanLicense}</li></ul>
                        </div>
                        <div className="document-card">
                            <h4>{t.gulf}</h4>
                            <ul><li>{t.gulfId}</li><li>{t.gulfLicense}</li></ul>
                        </div>
                        <div className="document-card">
                            <h4>{t.foreigner}</h4>
                            <ul><li>{t.passport}</li><li>{t.intlLicense}</li><li>{t.visa}</li></ul>
                        </div>
                    </div>
                    <p className="document-note">{t.depositNote}</p>
                </div>
            </section>
        </>
    );
}
