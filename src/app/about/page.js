import MissionSection from '@/components/MissionSection';

export const metadata = {
    title: 'About Us',
    description: 'Learn about Mouj Muscat Car Rentals - your trusted partner for car rentals in Oman since 2005.',
};

export default function AboutPage() {
    return (
        <>
            {/* Hero */}
            <section className="hero hero-mini">
                <img
                    className="hero-bg"
                    src="/hero-bg.jpg"
                    alt="About Us"
                />
                <div className="hero-content">
                    <h1>About Us</h1>
                    <h2 className="gold-text">Tailored for Your Travel Needs</h2>
                </div>
            </section>

            {/* Welcome */}
            <section className="about-section" >
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Welcome to Mouj Muscat Car Rentals</h2>
                            <p>
                                Welcome to Mouj Muscat Car Rentals, where we believe that every journey should be an adventure and every
                                traveler deserves a reliable partner on the road. Established with a passion for exploration and a
                                commitment to exceptional service, our car rental company is more than just a provider of vehicles;
                                we&apos;re your gateway to unforgettable experiences in Oman.
                            </p>
                        </div>
                        <div className="about-text">
                            <h2>Our Story</h2>
                            <h3>Are you ready?</h3>
                            <p>
                                Are you ready for a seamless and exhilarating travel experience? Look no further! Mouj Muscat Car Rentals
                                is your trusted partner in exploring Oman&apos;s stunning landscapes and vibrant cities. With branches in
                                Muscat and Salalah, we bring convenience and reliability to your journey.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Driven by Passion & What Sets Us Apart */}
            <section className="about-section" >
                <div className="container">
                    <div className="about-grid">
                        <div className="about-text">
                            <h2>Driven by Passion</h2>
                            <h3>What Sets Us Apart</h3>
                            <p>
                                Founded in 2005, Mouj Muscat Car Rentals was born out of a shared love for travel and the desire to
                                provide a seamless and enjoyable experience for every traveler. What started as a vision has grown into
                                a thriving car rental service with branches in Muscat and Salalah, serving locals and visitors alike.
                            </p>
                        </div>
                        <div className="about-text">
                            <h2>Quality Fleet</h2>
                            <p>
                                We take pride in offering a diverse and meticulously maintained fleet of vehicles, ensuring that you have
                                the perfect ride for every occasion.
                            </p>
                            <h2 style={{ marginTop: '30px' }}>Join Us on the Road</h2>
                            <p>
                                Whether you&apos;re a local exploring your own city or a traveler eager to discover the beauty of Oman,
                                Mouj Muscat Car Rentals is here to be your trusted companion on the road. We invite you to explore our
                                fleet, discover our services, and embark on a journey with the confidence that comes from choosing a
                                reliable and customer-focused car rental partner.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="about-section" >
                <div className="container">
                    <div className="about-values-grid">
                        <div className="value-card">
                            <h4><i className="fas fa-tags" style={{ marginRight: '10px' }}></i>Transparent Pricing</h4>
                            <p>
                                Honesty and transparency are at the core of our values. With Mouj Muscat, what you see is what you get
                                – no hidden fees, no surprises.
                            </p>
                        </div>
                        <div className="value-card">
                            <h4><i className="fas fa-user-check" style={{ marginRight: '10px' }}></i>Centric Approach</h4>
                            <p>
                                Your satisfaction is our priority. Our friendly and knowledgeable team is here to assist you at every step,
                                making sure your rental experience is smooth and stress-free.
                            </p>
                        </div>
                        <div className="value-card">
                            <h4><i className="fas fa-map-marked-alt" style={{ marginRight: '10px' }}></i>Local Expertise</h4>
                            <p>
                                As a company deeply rooted in Oman, we bring a wealth of local knowledge to your fingertips. From hidden
                                gems to travel tips, we&apos;re here to make your journey memorable.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Mission */}
            <MissionSection />
        </>
    );
}
