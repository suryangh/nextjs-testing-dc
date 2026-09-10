import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="navbar">
      <div className="container nav-content">
        <Link href="/" className="brand">
          Wisata Nusantara
        </Link>
        <nav>
          <ul className="nav-links">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <Link href="/destinasi">Destinasi</Link>
            </li>
            <li>
              <Link href="/kontak">Kontak</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
