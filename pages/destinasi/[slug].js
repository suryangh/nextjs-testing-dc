import { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Layout from '@/components/Layout';
import destinations from '@/data/destinations';

export default function DestinationDetailPage({ destination }) {
  const [booked, setBooked] = useState(false);

  if (!destination) {
    return (
      <Layout>
        <div style={{ textAlign: 'center', padding: '96px 24px' }}>
          <h2>Destinasi tidak ditemukan</h2>
          <Link href="/destinasi" className="btn btn-primary" style={{ marginTop: '16px' }}>
            Kembali ke Daftar Destinasi
          </Link>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{destination.name} - Wisata Nusantara</title>
        <meta name="description" content={destination.summary} />
      </Head>

      {/* Breadcrumb */}
      <nav className="breadcrumb animate-fade-in">
        <Link href="/">Beranda</Link>
        <span>/</span>
        <Link href="/destinasi">Destinasi</Link>
        <span>/</span>
        <span style={{ color: 'var(--emerald-400)', fontWeight: 600 }}>{destination.name}</span>
      </nav>

      {/* Immersive Hero Header */}
      <div className="detail-hero animate-fade-in">
        <img src={destination.image} alt={destination.name} className="detail-hero-img" />
        <div className="detail-hero-overlay">
          <div className="detail-hero-meta">
            <div className="detail-pills" style={{ marginBottom: '12px' }}>
              <span className="pill pill-emerald">{destination.category || 'Wisata Alam'}</span>
              <span className="pill">
                ⭐ {destination.rating || '4.9'} ({destination.reviewsCount || 500}+ Ulasan)
              </span>
            </div>
            <h1>{destination.name}</h1>
            <p style={{ color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '6px' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
              </svg>
              <span>{destination.location}, Indonesia</span>
            </p>
          </div>
        </div>
      </div>

      {/* Content & Booking Grid */}
      <div className="detail-grid animate-fade-in">
        <div className="detail-content-box">
          <h3>Tentang Destinasi</h3>
          <p>{destination.description}</p>
          <p>{destination.summary}</p>

          <h3 style={{ marginTop: '36px' }}>Sorotan Aktivitas & Fasilitas</h3>
          <ul className="features-list">
            {(destination.features || ['Spot Foto Ikonik', 'Pemandu Lokal', 'Transportasi', 'Kuliner Khas']).map((item, idx) => (
              <li key={idx}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--emerald-400)" strokeWidth="2.5">
                  <polyline points="20 6 9 17 4 12"></polyline>
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Booking / Inquiry Sidebar */}
        <div>
          <div className="booking-card">
            <div className="booking-price-header">
              <span>Perkiraan Paket Tour</span>
              <strong>{destination.price || 'Rp 500.000'}</strong>
              <span style={{ fontSize: '0.85rem', color: 'var(--emerald-400)', marginTop: '4px' }}>
                ⏱️ Durasi: {destination.duration || '2 Hari 1 Malam'}
              </span>
            </div>

            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
              Termasuk akomodasi, pemandu wisata berpengalaman, serta jaminan keselamatan terbaik.
            </p>

            {booked ? (
              <div
                style={{
                  background: 'rgba(16, 185, 129, 0.15)',
                  border: '1px solid var(--emerald-400)',
                  borderRadius: 'var(--radius-md)',
                  padding: '16px',
                  textAlign: 'center',
                  color: 'var(--emerald-400)',
                  fontWeight: 600,
                  fontSize: '0.9rem'
                }}
              >
                🎉 Permintaan Demo Tour Terkirim!
              </div>
            ) : (
              <button
                className="btn btn-primary"
                style={{ width: '100%' }}
                onClick={() => setBooked(true)}
              >
                Pesan / Booking Demo
              </button>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: destinations.map((destination) => ({
      params: { slug: destination.slug }
    })),
    fallback: false
  };
}

export async function getStaticProps({ params }) {
  const destination = destinations.find((item) => item.slug === params.slug) || null;

  return {
    props: {
      destination
    }
  };
}
