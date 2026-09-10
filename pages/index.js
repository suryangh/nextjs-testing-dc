import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import destinations from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';

export default function HomePage() {
  return (
    <Layout>
      <Head>
        <title>Wisata Nusantara | Jelajahi Keindahan Wisata Indonesia</title>
        <meta name="description" content="Website eksplorasi destinasi wisata populer di Indonesia dengan tampilan modern glassmorphism." />
      </Head>

      {/* Hero Section */}
      <section className="hero-section animate-fade-in">
        <div className="hero-content">
          <div className="glass-badge">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
            <span>Destinasi Impian Indonesia 🇮🇩</span>
          </div>

          <h1 className="hero-title">
            Temukan Keajaiban <br />
            <span className="gradient-text">Alam & Budaya Nusantara</span>
          </h1>

          <p className="hero-description">
            Jelajahi keindahan puncak kawah Bromo, keajaiban bawah laut Raja Ampat, hingga pesona eksotis Danau Toba dan Labuan Bajo dalam satu pengalaman interaktif.
          </p>

          <div className="hero-actions">
            <Link href="/destinasi" className="btn btn-primary">
              <span>Mulai Petualangan</span>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="5" y1="12" x2="19" y2="12"></line>
                <polyline points="12 5 19 12 12 19"></polyline>
              </svg>
            </Link>

            <Link href="/kontak" className="btn btn-glass">
              <span>Hubungi Tim Demo</span>
            </Link>
          </div>

          {/* Quick Stats Bar */}
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">17.000+</span>
              <span className="stat-label">Pulau Eksotis</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4.9 / 5</span>
              <span className="stat-label">Kepuasan Pengunjung</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">300+</span>
              <span className="stat-label">Ragam Budaya</span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section style={{ margin: '48px 0' }}>
        <div className="section-header">
          <div>
            <h2>Destinasi Unggulan</h2>
            <p>Pilihan lokasi wisata terpopuler yang wajib Anda kunjungi sekali seumur hidup.</p>
          </div>
          <Link href="/destinasi" className="btn btn-glass" style={{ fontSize: '0.88rem' }}>
            <span>Lihat Semua</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>

        <div className="destinations-grid">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="features-section">
        <div className="section-header" style={{ textAlign: 'center', justifyContent: 'center' }}>
          <div>
            <h2>Mengapa Memilih Kami?</h2>
            <p>Pengalaman menjelajah keindahan Indonesia dengan standar kualitas demo terbaik.</p>
          </div>
        </div>

        <div className="features-grid">
          <div className="feature-box">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <h3>Lokasi Terverifikasi</h3>
            <p>Seluruh informasi destinasi wisata dikurasi langsung dari spot-spot terbaik di tanah air.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h3>Pengalaman Autentik</h3>
            <p>Rasakan keanekaragaman kuliner, seni, dan keramahan penduduk lokal di setiap daerah.</p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3>Infrastruktur Cepat</h3>
            <p>Web didukung oleh reverse proxy Nginx dan arsitektur Next.js modern yang sangat responsif.</p>
          </div>
        </div>
      </section>
    </Layout>
  );
}
