import Head from 'next/head';
import Layout from '@/components/Layout';
import destinations from '@/data/destinations';

export default function DestinationDetailPage({ destination }) {
  if (!destination) {
    return (
      <Layout>
        <h1>Destinasi tidak ditemukan</h1>
      </Layout>
    );
  }

  return (
    <Layout>
      <Head>
        <title>{destination.name} | Wisata Nusantara</title>
      </Head>
      <article className="detail">
        <h1>{destination.name}</h1>
        <p className="muted">{destination.location}</p>
        <img src={destination.image} alt={destination.name} className="detail-image" />
        <p>{destination.description}</p>
      </article>
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
