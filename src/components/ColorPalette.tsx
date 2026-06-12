import { useEffect, useMemo, useRef, useState } from 'react';
import type { PaletteColor } from '../data/portfolioData';

const materialModules = import.meta.glob('../assets/material-palette/*.png', {
  eager: true,
  import: 'default',
}) as Record<string, string>;

const materialInfo = [
  { name: 'Washed Cotton Canvas', composition: '100% Cotton', weight: '310 GSM' },
  { name: 'Compact Twill Drill', composition: '98% Cotton, 2% Elastane', weight: '285 GSM' },
  { name: 'Garment-Dyed Poplin', composition: '100% Cotton', weight: '145 GSM' },
  { name: 'Dry Linen Blend', composition: '55% Linen, 45% Cotton', weight: '220 GSM' },
  { name: 'Peached Cotton Sateen', composition: '97% Cotton, 3% Elastane', weight: '240 GSM' },
  { name: 'Technical Cotton Nylon', composition: '68% Cotton, 32% Nylon', weight: '180 GSM' },
  { name: 'Brushed Herringbone', composition: '80% Cotton, 20% Linen', weight: '260 GSM' },
  { name: 'Lightweight Ripstop', composition: '70% Cotton, 30% Polyamide', weight: '135 GSM' },
  { name: 'Textured Slub Canvas', composition: '100% Cotton', weight: '330 GSM' },
  { name: 'Soft Utility Gabardine', composition: '65% Cotton, 35% Lyocell', weight: '250 GSM' },
  { name: 'Paper-Touch Taffeta', composition: '100% Recycled Nylon', weight: '95 GSM' },
  { name: 'Washed Denim Twill', composition: '100% Cotton', weight: '360 GSM' },
  { name: 'Dense Cotton Oxford', composition: '100% Cotton', weight: '190 GSM' },
  { name: 'Matte Coated Canvas', composition: '72% Cotton, 28% Polyurethane', weight: '340 GSM' },
  { name: 'Raw Linen Plainweave', composition: '100% Linen', weight: '210 GSM' },
  { name: 'Soft Wool Cotton Serge', composition: '52% Wool, 48% Cotton', weight: '295 GSM' },
];

const materialImages = Object.entries(materialModules)
  .sort(([a], [b]) => a.localeCompare(b))
  .map(([path, src], index) => ({
    src,
    alt: `Material palette sample ${String(index + 1).padStart(2, '0')}`,
    info: materialInfo[index] ?? {
      name: `Material Sample ${String(index + 1).padStart(2, '0')}`,
      composition: 'Material composition to be confirmed',
      weight: 'Weight to be confirmed',
    },
  }));

type ColorPaletteProps = {
  colors: PaletteColor[];
  compact?: boolean;
};

export function ColorPalette({ colors, compact = false }: ColorPaletteProps) {
  const scrollerRef = useRef<HTMLDivElement | null>(null);
  const itemRefs = useRef<Array<HTMLDivElement | null>>([]);
  const dragStateRef = useRef({
    isDragging: false,
    startX: 0,
    scrollLeft: 0,
  });
  const tooltipTimerRef = useRef<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [tooltipIndex, setTooltipIndex] = useState<number | null>(null);

  const images = useMemo(() => materialImages, []);

  useEffect(() => {
    if (compact || images.length === 0) {
      return;
    }

    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    let frame = 0;

    const updateActiveItem = () => {
      const scrollerBounds = scroller.getBoundingClientRect();
      const scrollerCenter = scrollerBounds.left + scrollerBounds.width / 2;
      let closestIndex = 0;
      let closestDistance = Number.POSITIVE_INFINITY;

      itemRefs.current.forEach((item, index) => {
        if (!item) {
          return;
        }

        const itemBounds = item.getBoundingClientRect();
        const itemCenter = itemBounds.left + itemBounds.width / 2;
        const distance = Math.abs(itemCenter - scrollerCenter);

        if (distance < closestDistance) {
          closestDistance = distance;
          closestIndex = index;
        }
      });

      setActiveIndex(closestIndex);
    };

    const requestUpdate = () => {
      window.cancelAnimationFrame(frame);
      frame = window.requestAnimationFrame(updateActiveItem);
    };

    updateActiveItem();
    scroller.addEventListener('scroll', requestUpdate, { passive: true });
    window.addEventListener('resize', requestUpdate);

    return () => {
      window.cancelAnimationFrame(frame);
      scroller.removeEventListener('scroll', requestUpdate);
      window.removeEventListener('resize', requestUpdate);
    };
  }, [compact, images.length]);

  useEffect(() => {
    if (compact || images.length === 0) {
      return;
    }

    const scroller = scrollerRef.current;

    if (!scroller) {
      return;
    }

    const clearTooltip = () => {
      if (tooltipTimerRef.current !== null) {
        window.clearTimeout(tooltipTimerRef.current);
        tooltipTimerRef.current = null;
      }

      setTooltipIndex(null);
    };

    const stopDragging = () => {
      dragStateRef.current.isDragging = false;
      scroller.classList.remove('material-palette-scroller--dragging');
    };

    const handlePointerDown = (event: PointerEvent) => {
      if (event.button !== 0) {
        return;
      }

      dragStateRef.current = {
        isDragging: true,
        startX: event.clientX,
        scrollLeft: scroller.scrollLeft,
      };
      clearTooltip();
      scroller.classList.add('material-palette-scroller--dragging');
      scroller.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!dragStateRef.current.isDragging) {
        return;
      }

      event.preventDefault();
      const dragDistance = event.clientX - dragStateRef.current.startX;
      scroller.scrollLeft = dragStateRef.current.scrollLeft - dragDistance;
    };

    const handlePointerUp = (event: PointerEvent) => {
      if (scroller.hasPointerCapture(event.pointerId)) {
        scroller.releasePointerCapture(event.pointerId);
      }

      stopDragging();
    };

    scroller.addEventListener('pointerdown', handlePointerDown);
    scroller.addEventListener('pointermove', handlePointerMove);
    scroller.addEventListener('pointerup', handlePointerUp);
    scroller.addEventListener('pointercancel', handlePointerUp);
    scroller.addEventListener('pointerleave', stopDragging);

    return () => {
      scroller.removeEventListener('pointerdown', handlePointerDown);
      scroller.removeEventListener('pointermove', handlePointerMove);
      scroller.removeEventListener('pointerup', handlePointerUp);
      scroller.removeEventListener('pointercancel', handlePointerUp);
      scroller.removeEventListener('pointerleave', stopDragging);
      clearTooltip();
    };
  }, [compact, images.length]);

  const clearTooltipTimer = () => {
    if (tooltipTimerRef.current !== null) {
      window.clearTimeout(tooltipTimerRef.current);
      tooltipTimerRef.current = null;
    }
  };

  const handleMaterialMouseEnter = (index: number) => {
    clearTooltipTimer();
    tooltipTimerRef.current = window.setTimeout(() => {
      setTooltipIndex(index);
      tooltipTimerRef.current = null;
    }, 1000);
  };

  const handleMaterialMouseLeave = () => {
    clearTooltipTimer();
    setTooltipIndex(null);
  };

  if (compact || images.length === 0) {
    return (
      <div className={compact ? 'color-palette color-palette--compact' : 'color-palette'}>
        {colors.map((color) => (
          <div className="color-chip" key={color.name} title={color.name}>
            <span style={{ backgroundColor: color.hex }} aria-hidden="true" />
            <div aria-hidden="true" />
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="material-palette-scroller" ref={scrollerRef} aria-label="Material palette image carousel">
      <div className="material-palette-track">
        <div className="material-palette-spacer" aria-hidden="true" />
        {images.map((image, index) => (
          <div
            className={index === activeIndex ? 'material-palette-item material-palette-item--active' : 'material-palette-item'}
            key={image.src}
            onMouseEnter={() => handleMaterialMouseEnter(index)}
            onMouseLeave={handleMaterialMouseLeave}
            ref={(node) => {
              itemRefs.current[index] = node;
            }}
          >
            <img src={image.src} alt={image.alt} draggable={false} loading="lazy" decoding="async" />
            {tooltipIndex === index ? (
              <aside className="material-palette-tooltip" aria-live="polite">
                <strong>{image.info.name}</strong>
                <span>{image.info.composition}</span>
                <span>{image.info.weight}</span>
              </aside>
            ) : null}
          </div>
        ))}
        <div className="material-palette-spacer" aria-hidden="true" />
      </div>
    </div>
  );
}
