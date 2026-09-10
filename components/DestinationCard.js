import Link from 'next/link';

export default function DestinationCard({ destination }) {
  return (
    <article className="card">
      <img src={destination.image} alt={destination.name} className="card-image" />
      <div className="card-body">
        <h3>{destination.name}</h3>
        <p className="muted">{destination.location}</p>
        <p>{destination.summary}</p>
        <Link href={`/destinasi/${destination.slug}`} className="button-link">
          Lihat Detail
        </Link>
      </div>
    </article>
  );
}
