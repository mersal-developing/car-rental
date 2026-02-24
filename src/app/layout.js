import './globals.css';
import { Montserrat, Playfair_Display } from 'next/font/google';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  variable: '--font-heading',
  display: 'swap',
});

export const metadata = {
  title: {
    template: '%s | Mouj Muscat Rent Car',
    default: 'Mouj Muscat Rent Car | Home',
  },
  description: 'At Mouj Muscat, our mission is simple: to enhance your travel experience by providing reliable, high-quality vehicles and exceptional customer service.',
  keywords: ['car rental', 'Oman', 'Muscat', 'Salalah', 'rent car', 'Mouj Muscat', 'vehicle rental'],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${montserrat.variable} ${playfair.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
