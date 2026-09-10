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
        <title>Kontak & Bantuan | Wisata Nusantara</title>
        <meta name="description" content="Hubungi tim Wisata Nusantara untuk masukan & pertanyaan." />
      </Head>

      <section className="section-header animate-fade-in" style={{ marginTop: '16px', textAlign: 'center', justifyContent: 'center' }}>
        <div>
          <h2>Hubungi Kami</h2>
          <p>Memiliki pertanyaan, masukan, atau rekomendasi destinasi wisata? Kirimkan pesan Anda di bawah ini.</p>
        </div>
      </section>

      <div className="animate-fade-in" style={{ maxWidth: '680px', margin: '32px auto 0' }}>
        <div className="contact-card">
          <h3 style={{ fontSize: '1.4rem', marginBottom: '24px', textAlign: 'center' }}>Kirim Pesan Anda</h3>

          {submitted ? (
            <div
              style={{
                background: '#ecfdf5',
                border: '1px solid #a7f3d0',
                borderRadius: 'var(--radius-md)',
                padding: '24px',
                color: 'var(--emerald-700)',
                textAlign: 'center'
              }}
            >
              <h4 style={{ color: 'var(--emerald-700)', marginBottom: '8px', fontSize: '1.2rem' }}>✓ Pesan Terkirim!</h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                Terima kasih <strong>{formData.name}</strong>. Pesan Anda telah kami terima dan akan segera kami respon.
              </p>
              <button
                className="btn btn-glass"
                style={{ marginTop: '20px', fontSize: '0.88rem' }}
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
                  placeholder="Masukkan nama lengkap Anda"
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
                  placeholder="nama@email.com"
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
                  placeholder="Topik atau subjek pesan"
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
                  placeholder="Tuliskan detail pesan, pertanyaan, atau saran Anda..."
                  className="form-input textarea-input"
                  style={{ paddingLeft: '16px' }}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-primary" style={{ width: '100%', marginTop: '8px' }}>
                Kirim Pesan Sekarang
              </button>
            </form>
          )}
        </div>
      </div>
    </Layout>
  );
}
