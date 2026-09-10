import Link from 'next/link';
import Layout from '@/components/Layout';
import destinations from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';

export default function HomePage() {
  return (
    <Layout>
      <section className="hero">
        <h1>Jelajahi Wisata Indonesia</h1>
        <p>
          Website dummy frontend untuk demo/testing dengan contoh destinasi wisata
          populer Indonesia.
        </p>
        <Link href="/destinasi" className="button-link">
          Lihat Semua Destinasi
        </Link>
      </section>

      <section>
        <h2>Ringkasan Destinasi</h2>
        <div className="grid">
          {destinations.slice(0, 2).map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>
      </section>
    </Layout>
  );
}
