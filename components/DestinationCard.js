import Link from 'next/link';

export default function DestinationCard({ destination }) {
  return (
    <article className="destination-card animate-fade-in">
      <div className="card-image-wrapper">
        <img src={destination.image} alt={destination.name} className="card-image" />
        <span className="card-badge-top">{destination.category || 'Destinasi'}</span>
        <span className="card-rating-top">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
            <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
          </svg>
          {destination.rating || '4.9'}
        </span>
      </div>

      <div className="card-body">
        <div className="card-title-row">
          <h3 className="card-title">{destination.name}</h3>
        </div>

        <div className="card-location">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
            <circle cx="12" cy="10" r="3"></circle>
          </svg>
          <span>{destination.location}</span>
        </div>

        <p className="card-summary">{destination.summary}</p>

        <div className="card-footer">
          <div>
            <span className="card-price-label">Mulai Dari</span>
            <div className="card-price-value">{destination.price || 'Rp 500.000'}</div>
          </div>
          <Link href={`/destinasi/${destination.slug}`} className="card-link">
            <span>Detail</span>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </Link>
        </div>
      </div>
    </article>
  );
}
