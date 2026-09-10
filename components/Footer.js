import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" className="brand-link">
              <div className="brand-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <span>Wisata<span className="gradient-text-emerald">Nusantara</span></span>
            </Link>
            <p>
              Platform informasi keindahan alam & budaya kebanggaan Indonesia. Dibuat khusus untuk pengujian infrastruktur & demo web sysadmin modern.
            </p>
          </div>

          <div className="footer-col">
            <h4>Navigasi</h4>
            <ul>
              <li><Link href="/">Beranda</Link></li>
              <li><Link href="/destinasi">Semua Destinasi</Link></li>
              <li><Link href="/kontak">Pusat Bantuan</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Kategori</h4>
            <ul>
              <li><Link href="/destinasi">Pegunungan & Kawah</Link></li>
              <li><Link href="/destinasi">Wisata Bahari & Karst</Link></li>
              <li><Link href="/destinasi">Danau & Kebudayaan</Link></li>
              <li><Link href="/destinasi">Petualangan Phinisi</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Buletin Informasi</h4>
            <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', marginBottom: '12px' }}>
              Dapatkan rekomendasi destinasi impian langsung ke email Anda.
            </p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input
                type="email"
                placeholder="Alamat email anda..."
                className="form-input"
                style={{ paddingLeft: '14px', fontSize: '0.85rem' }}
              />
              <button className="btn btn-primary" style={{ padding: '8px 16px', fontSize: '0.85rem' }}>
                Kirim
              </button>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Wisata Nusantara. Hak Cipta Dilindungi.</p>
          <p style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Sysadmin Test Node</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
