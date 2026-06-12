import type { PaletteColor } from '../data/portfolioData';

type FabricSwatchPanelProps = {
  fabric: string;
  technique: string;
  swatches: PaletteColor[];
  techniques: string[];
  swatchImage?: {
    src: string;
    alt: string;
  };
  copy: {
    title: string;
    swatchImage: {
      src: string;
      alt: string;
    };
    fabricLabel: string;
    swatchAriaLabel: string;
    swatchLabel: string;
    techniqueLabel: string;
    colorLabel: string;
  };
};

export function FabricSwatchPanel({ fabric, swatchImage, copy }: FabricSwatchPanelProps) {
  const image = swatchImage ?? copy.swatchImage;

  return (
    <aside className="fabric-panel">
      <div className="panel-block">
        <p className="technical-caption">{copy.fabricLabel}</p>
        {fabric ? <h3>{fabric}</h3> : null}
      </div>
      <div className="swatch-grid swatch-grid--image" aria-label={copy.swatchAriaLabel}>
        <img src={image.src} alt={image.alt} />
      </div>
    </aside>
  );
}
