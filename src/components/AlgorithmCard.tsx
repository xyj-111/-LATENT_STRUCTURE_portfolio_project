import type { AlgorithmCardData } from '../data/portfolioData';

type AlgorithmCardProps = {
  card: AlgorithmCardData;
};

export function AlgorithmCard({ card }: AlgorithmCardProps) {
  return (
    <a className="algorithm-card" href={card.href} target="_blank" rel="noreferrer">
      <p className="technical-caption">{card.label}</p>
      <h3>{card.title}</h3>
      {card.body ? <p>{card.body}</p> : null}
      {card.metrics.length > 0 ? (
        <ul>
          {card.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>
      ) : null}
    </a>
  );
}
