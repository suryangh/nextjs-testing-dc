import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';
import destinations from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';

export default function DestinationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...new Set(destinations.map((item) => item.category).filter(Boolean))];

  const filteredDestinations = destinations.filter((dest) => {
    const matchesSearch =
      dest.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      dest.summary.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'All' || dest.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <Layout>
      <Head>
        <title>Daftar Destinasi | Wisata Nusantara</title>
        <meta name="description" content="Jelajahi seluruh daftar destinasi wisata unggulan di Indonesia." />
      </Head>

      <section className="section-header animate-fade-in" style={{ marginTop: '16px' }}>
        <div>
          <h2>Eksplorasi Destinasi</h2>
          <p>Temukan keindahan alam dan surga pariwisata Nusantara sesuai impian liburan Anda.</p>
        </div>
      </section>

      {/* Search and Filter Controls */}
      <div className="search-filter-wrapper animate-fade-in">
        <div className="search-input-group">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <input
            type="text"
            placeholder="Cari nama tempat, lokasi (misal: Bromo, Papua, Toba)..."
            className="form-input"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <select
          className="filter-select"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat === 'All' ? 'Semua Kategori' : cat}
            </option>
          ))}
        </select>
      </div>

      {/* Destination Grid or Empty State */}
      {filteredDestinations.length > 0 ? (
        <div className="destinations-grid">
          {filteredDestinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      ) : (
        <div
          style={{
            textAlign: 'center',
            padding: '64px 24px',
            background: 'var(--glass-bg)',
            borderRadius: 'var(--radius-lg)',
            border: '1px solid var(--border-glass)'
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="var(--text-muted)" strokeWidth="1.5" style={{ marginBottom: '16px' }}>
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
          <h3>Destinasi Tidak Ditemukan</h3>
          <p style={{ color: 'var(--text-muted)', marginTop: '8px' }}>
            Tidak ada lokasi yang cocok dengan kata kunci &quot;{searchTerm}&quot;. Coba cari kata kunci lainnya.
          </p>
        </div>
      )}
    </Layout>
  );
}
