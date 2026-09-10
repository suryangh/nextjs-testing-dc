import Layout from '@/components/Layout';
import destinations from '@/data/destinations';
import DestinationCard from '@/components/DestinationCard';

export default function DestinationsPage() {
  return (
    <Layout>
      <section className="section-head">
        <h1>Daftar Destinasi Wisata</h1>
        <p>Kumpulan data statis lokal destinasi wisata untuk kebutuhan demo.</p>
      </section>
      <div className="grid">
        {destinations.map((destination) => (
          <DestinationCard key={destination.id} destination={destination} />
        ))}
      </div>
    </Layout>
  );
}
