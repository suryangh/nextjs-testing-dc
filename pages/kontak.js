import { useState } from 'react';
import Head from 'next/head';
import Layout from '@/components/Layout';

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setSubmitted(true);
    }
  };

  return (
    <Layout>
      <Head>
        <title>Kontak & Dukungan | Wisata Nusantara</title>
        <meta name="description" content="Hubungi tim Wisata Nusantara untuk kebutuhan demo sysadmin & testing." />
      </Head>

      <section className="section-header animate-fade-in" style={{ marginTop: '16px' }}>
        <div>
          <h2>Hubungi Kami</h2>
          <p>Memiliki pertanyaan seputar pengujian sysadmin atau demo aplikasi? Kirimkan pesan Anda di bawah ini.</p>
        </div>
      </section>

      <div className="contact-grid animate-fade-in">
        {/* Contact Form */}
        <div className="contact-card">
          <h3 style={{ fontSize: '1.3rem', marginBottom: '20px' }}>Kirim Pesan</h3>

          {submitted ? (
            <div
              style={{
                background: 'rgba(16, 185, 129, 0.15)',
                border: '1px solid var(--emerald-400)',
                borderRadius: 'var(--radius-md)',
                padding: '20px',
                color: 'var(--emerald-400)',
                textAlign: 'center'
              }}
            >
              <h4 style={{ color: 'var(--emerald-400)', marginBottom: '8px' }}>✓ Pesan Terkirim!</h4>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>
                Terima kasih <strong>{formData.name}</strong>. Pesan Anda telah diterima oleh simulasikan server.
              </p>
              <button
                className="btn btn-glass"
                style={{ marginTop: '16px', fontSize: '0.85rem' }}
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', subject: '', message: '' });
                }}
              >
                Kirim Pesan Lain
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Nama Lengkap</label>
                <input
                  type="text"
                  required
                  placeholder="Masukkan nama anda"
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Alamat Email</label>
                <input
                  type="email"
                  required
                  placeholder="admin@wisata-dummy.test"
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Subjek</label>
                <input
                  type="text"
                  placeholder="Subjek pertanyaan"
                  className="form-input"
                  style={{ paddingLeft: '16px' }}
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                />
              </div>

              <div className="form-group">
                <label className="form-label">Pesan</label>
                <textarea
                  required
                  placeholder="Tuliskan detail pertanyaan atau masukan anda..."
                  className="form-input textarea-input"
                  style={{ paddingLeft: '16px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>
                Kirim Pesan Sekarang
              </button>
            </form>
          )}
        </div>

        {/* Info Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <div className="contact-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Info Kontak Demo</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="feature-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Email Official</div>
                  <div style={{ fontWeight: 600 }}>admin@wisata-dummy.test</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="feature-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
                    <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
                    <line x1="6" y1="6" x2="6.01" y2="6"></line>
                    <line x1="6" y1="18" x2="6.01" y2="18"></line>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Server Proxy</div>
                  <div style={{ fontWeight: 600 }}>Nginx Docker Container (Port 80)</div>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <div className="feature-icon" style={{ width: '40px', height: '40px', marginBottom: 0 }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                </div>
                <div>
                  <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Host Node</div>
                  <div style={{ fontWeight: 600 }}>Next.js Dev Server (Port 3000)</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
