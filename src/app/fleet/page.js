'use client';

import { useState } from 'react';
import { vehicles } from '@/data/vehicles';
import InsuredFleet from '@/components/InsuredFleet';
import DocumentsRequired from '@/components/DocumentsRequired';

export default function FleetPage() {
    const categories = Object.keys(vehicles);
    const [activeCategory, setActiveCategory] = useState(categories[0]);
    const [activeBrand, setActiveBrand] = useState(null);
    const [activeModel, setActiveModel] = useState(null);

    const brands = Object.keys(vehicles[activeCategory] || {});
    const models = activeBrand ? Object.keys(vehicles[activeCategory][activeBrand] || {}) : [];
    const years = activeModel ? vehicles[activeCategory][activeBrand][activeModel] || [] : [];

    const handleCategoryClick = (cat) => {
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

    // Breadcrumb builder
    const breadcrumbs = [
        { label: 'All Categories', onClick: () => { setActiveBrand(null); setActiveModel(null); } },
    ];
    if (activeBrand) {
        breadcrumbs.push({ label: activeBrand, onClick: () => { setActiveModel(null); } });
    }
    if (activeModel) {
        breadcrumbs.push({ label: activeModel, onClick: () => { } });
    }

    return (
        <>
            {/* Hero */}
            <section className="hero hero-mini">
                <img
                    className="hero-bg"
                    src="/hero-bg.jpg"
                    alt="Our Fleet"
                />
                <div className="hero-content">
                    <h1>Mouj Muscat Car Rentals</h1>
                    <h2 className="gold-text">Explore Our Fleet</h2>
                    <p>
                        Impressive fleet of vehicles designed to cater to every type of traveler and adventure enthusiast.
                        Whether you&apos;re embarking on a solo expedition, a family vacation, or a business trip, our diverse
                        selection ensures you&apos;ll find the ideal companion for the road ahead.
                    </p>
                </div>
            </section>

            {/* Fleet Browser */}
            <section className="fleet-section" style={{ paddingTop: '80px' }}>
                <div className="container">
                    <h2 className="section-title">Variety Of Vehicles</h2>
                    <p className="section-subtitle">
                        Explore our fleet in detail, view vehicle specifications, and choose the perfect ride for your upcoming journey.
                    </p>

                    {/* Category Tabs */}
                    <div className="fleet-tabs">
                        {categories.map((cat) => (
                            <button
                                key={cat}
                                className={`fleet-tab ${activeCategory === cat ? 'active' : ''}`}
                                onClick={() => handleCategoryClick(cat)}
                            >
                                {cat}
                            </button>
                        ))}
                    </div>

                    {/* Breadcrumb */}
                    {activeBrand && (
                        <div className="fleet-breadcrumb">
                            <button onClick={breadcrumbs[0].onClick}>
                                <i className="fas fa-chevron-left" style={{ marginRight: '6px', fontSize: '0.7rem' }}></i>
                                {activeCategory}
                            </button>
                            {activeBrand && (
                                <>
                                    <span className="separator">/</span>
                                    <button
                                        onClick={breadcrumbs[1].onClick}
                                        className={!activeModel ? 'current' : ''}
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

                    {/* Level 1: Brands in the active category */}
                    {!activeBrand && (
                        <div className="brand-grid fade-in" key={activeCategory}>
                            {brands.map((brand) => {
                                // Get first car image for brand thumbnail
                                const firstModel = Object.keys(vehicles[activeCategory][brand])[0];
                                const firstCar = vehicles[activeCategory][brand][firstModel][0];
                                const modelCount = Object.keys(vehicles[activeCategory][brand]).length;
                                return (
                                    <div
                                        key={brand}
                                        className="brand-card"
                                        onClick={() => handleBrandClick(brand)}
                                    >
                                        <div className="brand-card-image">
                                            <img src={firstCar.image} alt={brand} />
                                            <div className="brand-card-overlay">
                                                <span className="brand-badge">{modelCount} model{modelCount > 1 ? 's' : ''}</span>
                                            </div>
                                        </div>
                                        <div className="brand-card-info">
                                            <h3>{brand}</h3>
                                            <span className="browse-link">Browse models <i className="fas fa-arrow-right"></i></span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Level 2: Models for the active brand */}
                    {activeBrand && !activeModel && (
                        <div className="model-grid fade-in" key={activeBrand}>
                            {models.map((model) => {
                                const modelCars = vehicles[activeCategory][activeBrand][model];
                                const yearCount = modelCars.length;
                                return (
                                    <div
                                        key={model}
                                        className="model-card"
                                        onClick={() => handleModelClick(model)}
                                    >
                                        <div className="model-card-image">
                                            <img src={modelCars[0].image} alt={`${activeBrand} ${model}`} />
                                            <div className="model-card-overlay">
                                                <span className="year-badge">{yearCount} variant{yearCount > 1 ? 's' : ''}</span>
                                            </div>
                                        </div>
                                        <div className="model-card-info">
                                            <h4>{activeBrand} {model}</h4>
                                            <span className="browse-link">View years <i className="fas fa-arrow-right"></i></span>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    )}

                    {/* Level 3: Year variants for the active model */}
                    {activeModel && (
                        <div className="year-grid fade-in" key={activeModel}>
                            <h3 className="year-grid-title">
                                {activeBrand} {activeModel}
                                <span className="year-count">{years.length} available</span>
                            </h3>
                            <div className="vehicle-grid">
                                {years
                                    .sort((a, b) => b.year - a.year)
                                    .map((car, index) => (
                                        <div className="vehicle-card" key={`${activeModel}-${index}`}>
                                            <div className="vehicle-image">
                                                <img src={car.image} alt={`${activeBrand} ${activeModel} ${car.year}`} />
                                                <div className="vehicle-year-tag">{car.year}</div>
                                            </div>
                                            <div className="vehicle-name">
                                                {activeBrand} {activeModel} {car.year}
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Fully Insured Fleet */}
            <InsuredFleet />

            {/* Documents Required */}
            <DocumentsRequired />
        </>
    );
}
