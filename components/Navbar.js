import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();

  const isActive = (path) => {
    if (path === '/' && router.pathname === '/') return true;
    if (path !== '/' && router.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link href="/" className="brand-link">
          <div className="brand-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <span>Wisata<span className="gradient-text-emerald">Nusantara</span></span>
        </Link>

        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/" className={`nav-link-item ${isActive('/') ? 'active' : ''}`}>
                Beranda
              </Link>
            </li>
            <li>
              <Link href="/destinasi" className={`nav-link-item ${isActive('/destinasi') ? 'active' : ''}`}>
                Destinasi
              </Link>
            </li>
            <li>
              <Link href="/kontak" className={`nav-link-item ${isActive('/kontak') ? 'active' : ''}`}>
                Kontak
              </Link>
            </li>
          </ul>
        </nav>

        <Link href="/destinasi" className="nav-cta">
          <span>Jelajahi Sekarang</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="5" y1="12" x2="19" y2="12"></line>
            <polyline points="12 5 19 12 12 19"></polyline>
          </svg>
        </Link>
      </div>
    </header>
  );
}
