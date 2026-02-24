import Link from 'next/link';
import MissionSection from '@/components/MissionSection';
import StatsSection from '@/components/StatsSection';
import InsuredFleet from '@/components/InsuredFleet';
import DocumentsRequired from '@/components/DocumentsRequired';

export const metadata = {
    title: 'Our Services',
    description: 'Discover our range of car rental services including flexible options, transparent pricing, and 24/7 support.',
};

export default function ServicesPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero hero-mini">
                <img
                    className="hero-bg"
                    src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?auto=format&fit=crop&q=80&w=1920"
                    alt="Our Services"
                />
                <div className="hero-content">
                    <h1>Mouj Muscat Car Rentals</h1>
                    <h2 className="gold-text">Our Services</h2>
                    <p>
                        Here we take pride in offering a range of services designed to make your journey as seamless and
                        enjoyable as possible. Whether you&apos;re a local exploring your own city or a tourist ready to discover
                        the beauty of Oman, our services are tailored to meet your unique travel needs.
                    </p>
                </div>
            </section>

            {/* Why Choose Us - 8 Services */}
            <section className="features-section">
                <div className="container">
                    <h2 className="section-title">Why Choose Us?</h2>
                    <p className="section-subtitle">
                        Here we take pride in offering a range of services designed to make your journey as seamless and
                        enjoyable as possible. Whether you&apos;re a local exploring your own city or a tourist ready to discover
                        the beauty of Oman, our services are tailored to meet your unique travel needs.
                    </p>

                    <div className="features-grid">
                        <div className="feature-box">
                            <i className="fas fa-car-side icon"></i>
                            <h4>Big Fleet Selection</h4>
                            <p>
                                Choose from our diverse fleet of well-maintained vehicles, including compact cars, spacious SUVs,
                                and rugged off-road options. Our fleet is regularly updated to ensure you have access to the latest
                                models with the most advanced features.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-headset icon"></i>
                            <h4>Customer Support</h4>
                            <p>
                                Our dedicated customer support team is available 24/7 to assist you with any questions or concerns.
                                From vehicle specifications to rental agreements, we&apos;re here to ensure you have a smooth and
                                worry-free experience.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-map-marker-alt icon"></i>
                            <h4>Pickup Services</h4>
                            <p>
                                To enhance your convenience, we offer delivery and pickup services at selected locations. Whether
                                you&apos;re arriving at the airport or a specific address, we&apos;ll bring the vehicle to you and collect
                                it when your rental period concludes.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-laptop icon"></i>
                            <h4>Online Booking</h4>
                            <p>
                                Save time by booking your vehicle online through our user-friendly platform. Select your preferred
                                vehicle, choose your rental dates, and complete the reservation process with just a few clicks.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-tags icon"></i>
                            <h4>Transparent Pricing</h4>
                            <p>
                                At Mouj Muscat Car Rental, we believe in transparent and straightforward pricing. No hidden fees
                                or surprises. Our pricing is competitive, and what you see is what you pay.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-handshake icon"></i>
                            <h4>Service Excellence</h4>
                            <p>
                                Our dedicated team is here to assist you every step of the way, ensuring a smooth and enjoyable
                                rental experience.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-calendar-alt icon"></i>
                            <h4>Flexible Options</h4>
                            <p>
                                Whether you need a vehicle for a day, a week, or an extended period, we offer flexible rental
                                options to accommodate your schedule.
                            </p>
                        </div>
                        <div className="feature-box">
                            <i className="fas fa-plus-circle icon"></i>
                            <h4>Additional Services</h4>
                            <p>
                                Enhance your journey with our additional services, including GPS navigation, child seats, and
                                comprehensive insurance options. Customize your rental to meet your specific requirements.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <MissionSection />

            {/* Stats */}
            <StatsSection showDescription={true} />

            {/* Fully Insured Fleet */}
            <InsuredFleet />

            {/* Documents Required */}
            <DocumentsRequired />
        </>
    );
}
