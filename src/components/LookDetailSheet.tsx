import type { Look, PortfolioCopy, TechnicalFlat } from '../data/portfolioData';
import { BeforeAfterImageSlider } from './BeforeAfterImageSlider';
import { FabricSwatchPanel } from './FabricSwatchPanel';

type LookDetailSheetProps = {
  looks: Look[];
  copy: PortfolioCopy;
};

export function LookDetailSheet({ looks, copy }: LookDetailSheetProps) {
  const primaryLook = looks[0];
  const secondaryLook = looks[1] ?? looks[0];
  const techniques = Array.from(new Set(looks.flatMap((look) => [look.technique, ...look.constructionNotes]).filter(Boolean)));
  const swatches = Array.from(new Map(looks.flatMap((look) => look.swatches).map((color) => [color.name, color])).values());

  const renderFlats = (look: Look, side: 'left' | 'right') => {
    const flats = look.technicalFlats[side];

    return (
      <div className={`detail-column detail-column--${side} detail-column--look-${look.id}`}>
        <header className="tech-sheet-header">
          <h3>{copy.technicalFlat.headingPrefix} {Number(look.id)}</h3>
        </header>
        <div className="flat-technical-grid">
          {flats.map((flat: TechnicalFlat) => (
            <section className="flat-technical-block" key={flat.id}>
              <p className="technical-caption">{flat.label}</p>
              <div className={[
                'technical-flat',
                `technical-flat--${flat.variant}`,
                flat.image.src ? 'technical-flat--has-image' : '',
              ].filter(Boolean).join(' ')}>
                {flat.image.src ? <img src={flat.image.src} alt={flat.image.alt} loading="lazy" decoding="async" /> : null}
                <div className="technical-flat__labels">
                  <span>{flat.viewLabels.front}</span>
                  <span>{flat.viewLabels.back}</span>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    );
  };

  return (
    <article className="look-detail-sheet">
      {renderFlats(primaryLook, 'left')}

      <div className="detail-column detail-column--center">
        <BeforeAfterImageSlider comparison={primaryLook.dyeComparison} displayLabel={primaryLook.displayLabel} />
      </div>

      {renderFlats(secondaryLook, 'right')}

      <FabricSwatchPanel
        fabric={primaryLook.fabric}
        technique={primaryLook.technique}
        swatches={swatches}
        techniques={techniques}
        swatchImage={primaryLook.fabricSwatchImage}
        copy={copy.fabricPanel}
      />
    </article>
  );
}
