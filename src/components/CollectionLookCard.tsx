import type { Look } from '../data/portfolioData';

type CollectionLookCardProps = {
  look: Look;
  emphasis?: boolean;
};

export function CollectionLookCard({ look, emphasis = false }: CollectionLookCardProps) {
  const className = [
    'look-card',
    emphasis ? 'look-card--emphasis' : '',
    look.image.src ? 'look-card--has-image' : '',
  ].filter(Boolean).join(' ');

  return (
    <article className={className}>
      <div
        className={look.image.src ? 'look-figure look-figure--has-image' : 'look-figure'}
        aria-label={look.image.alt}
        role="img"
      >
        {look.image.src ? <img src={look.image.src} alt={look.image.alt} /> : null}
      </div>
      {look.title || look.silhouette ? (
        <div className="look-card__meta">
          {look.title ? <strong>{look.title}</strong> : null}
          {look.silhouette ? <p>{look.silhouette}</p> : null}
        </div>
      ) : null}
    </article>
  );
}
