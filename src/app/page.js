import Link from 'next/link';
import MissionSection from '@/components/MissionSection';
import StatsSection from '@/components/StatsSection';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero" id="home">
        <img
          className="hero-bg"
          src="/hero-bg.jpg"
          alt="Luxury Car on Oman Coastal Road"
        />
        <div className="hero-content">
          <h1>Mouj Muscat Car Rentals</h1>
          <h2 className="gold-text">Discover the Freedom of the Open Road</h2>
          <Link href="/about" className="btn btn-primary">READ MORE</Link>
        </div>
      </section>

      {/* Variety Of Vehicles */}
      <section className="fleet-section" id="fleet">
        <div className="container">
          <h2 className="section-title">Variety Of Vehicles</h2>
          <p className="section-subtitle">
            Your adventure begins with Mouj Muscat Car Rentals. Explore Oman with confidence, knowing you have
            a reliable partner by your side. Start your journey today by browsing our fleet and securing your
            reservation online.
          </p>

          <div className="fleet-grid">
            {/* 4x4 */}
            <div className="fleet-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&q=80&w=800"
                  alt="4x4 Vehicle"
                />
              </div>
              <div className="card-info">
                <h3>4x4</h3>
                <Link href="/fleet#4x4" className="btn btn-outline btn-small">SEE MORE</Link>
              </div>
            </div>

            {/* SUV */}
            <div className="fleet-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?auto=format&fit=crop&q=80&w=800"
                  alt="SUV Vehicle"
                />
              </div>
              <div className="card-info">
                <h3>SUV</h3>
                <Link href="/fleet#suv" className="btn btn-outline btn-small">SEE MORE</Link>
              </div>
            </div>

            {/* Sedan */}
            <div className="fleet-card">
              <div className="card-image">
                <img
                  src="https://images.unsplash.com/photo-1550355291-bbee04a92027?auto=format&fit=crop&q=80&w=800"
                  alt="Sedan Vehicle"
                />
              </div>
              <div className="card-info">
                <h3>Sedan</h3>
                <Link href="/fleet#sedan" className="btn btn-outline btn-small">SEE MORE</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section" id="services">
        <div className="container">
          <h2 className="section-title">Why Choose Us?</h2>
          <p className="section-subtitle">
            Here we take pride in offering a range of services designed to make your journey as seamless and
            enjoyable as possible. Whether you&apos;re a local exploring your own city or a tourist ready to discover
            the beauty of Oman, our services are tailored to meet your unique travel needs.
          </p>

          <div className="features-grid">
            <div className="feature-box">
              <i className="fas fa-tags icon"></i>
              <h4>Transparent Pricing</h4>
              <p>No hidden fees, no surprises. Our pricing is straightforward and competitive and what you see is what you pay.</p>
              <Link href="/services" className="more-link">more</Link>
            </div>
            <div className="feature-box">
              <i className="fas fa-handshake icon"></i>
              <h4>Service Excellence</h4>
              <p>Our dedicated team is here to assist you every step of the way, ensuring a smooth and enjoyable rental experience.</p>
              <Link href="/services" className="more-link">more</Link>
            </div>
            <div className="feature-box">
              <i className="fas fa-calendar-alt icon"></i>
              <h4>Flexible Options</h4>
              <p>Whether you need a vehicle for a day, a week, or longer, we offer flexible rental options to suit your plans.</p>
              <Link href="/services" className="more-link">more</Link>
            </div>
            <div className="feature-box">
              <i className="fas fa-laptop icon"></i>
              <h4>Online Booking</h4>
              <p>Convenience at your fingertips. Easily reserve your vehicle online, and we&apos;ll have it ready for you when you arrive.</p>
              <Link href="/services" className="more-link">more</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <MissionSection />

      {/* Stats */}
      <StatsSection showDescription={true} />

      {/* Two Cities */}
      <section className="branches-section">
        <div className="container">
          <h2 className="section-title">Two Cities, Countless Possibilities</h2>
          <p className="section-subtitle">
            Explore the beauty of Muscat or experience the lush landscapes of Salalah. Our strategically located
            branches make it easy for you to start your journey wherever you are. Enjoy the freedom to travel on
            your terms, discovering hidden gems and iconic landmarks at your own pace.
          </p>
          <div className="branches-grid">
            <div className="branch-card">
              <h4>Muscat</h4>
              <p>Behind Bawshar Municipality, Next to Cytidines Hotel, Al Gubra South, Muscat, Sultanate of Oman</p>
              <div className="contact-info">
                <a href="mailto:info@moujmuscat.com">info@moujmuscat.com</a>
                <a href="tel:+96895855229">+968 95855229</a>
              </div>
            </div>
            <div className="branch-card">
              <h4>Salalah</h4>
              <p>23rd July Street. Al zahir Medical complex Building, Salalah, Sultanate of Oman</p>
              <div className="contact-info">
                <a href="mailto:info@moujmuscat.com">info@moujmuscat.com</a>
                <a href="tel:+96893894900">+968 93894900</a>
              </div>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      {/* Discovery Oman */}
      <section className="discovery-section">
        <div className="container">
          <h2 className="section-title">Discovery Oman</h2>
          <p className="discovery-text">
            Embark on a transformative journey with our specialized services, guiding you to discover the rich tapestry of Oman.
            Our curated experiences seamlessly blend comfort and exploration, offering you a unique opportunity to delve into
            the captivating beauty of this Arabian gem. From the ancient traditions and cultural marvels to the breathtaking
            landscapes and hidden treasures, we invite you to uncover Oman&apos;s secrets with us.
          </p>
          <div className="dest-grid">
            <div className="dest-card">
              <img src="https://moujrentcar.com/images/1.jpeg" alt="Muscat" />
              <h4>Muscat</h4>
            </div>
            <div className="dest-card">
              <img src="https://moujrentcar.com/images/11.jpeg" alt="Salalah" />
              <h4>Salalah</h4>
            </div>
            <div className="dest-card">
              <img src="https://moujrentcar.com/images/3.jpeg" alt="Wahiba Sands" />
              <h4>Wahiba Sands</h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
