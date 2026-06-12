import type { ConceptLayer } from '../data/portfolioData';

type ConceptLayerBlockProps = {
  layer: ConceptLayer;
};

export function ConceptLayerBlock({ layer }: ConceptLayerBlockProps) {
  return (
    <article className="concept-layer">
      <div className="concept-layer__index">{layer.number}</div>
      <div className="concept-layer__body">
        <h3>{layer.title}</h3>
        {layer.body ? <p>{layer.body}</p> : null}
      </div>
      <div className="concept-layer__diagram" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      {layer.annotation ? <p className="technical-caption">{layer.annotation}</p> : null}
    </article>
  );
}
