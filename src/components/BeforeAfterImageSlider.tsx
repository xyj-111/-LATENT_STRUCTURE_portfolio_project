import { useRef, useState } from 'react';
import type { CSSProperties, KeyboardEvent, PointerEvent } from 'react';
import type { LookDyeComparison } from '../data/portfolioData';

type BeforeAfterImageSliderProps = {
  comparison: LookDyeComparison;
  displayLabel: string;
};

function clampPosition(value: number) {
  return Math.min(100, Math.max(0, value));
}

export function BeforeAfterImageSlider({ comparison, displayLabel }: BeforeAfterImageSliderProps) {
  const [position, setPosition] = useState(50);
  const sliderRef = useRef<HTMLDivElement>(null);
  const hasImages = Boolean(comparison.before.src && comparison.after.src);

  function updatePosition(clientX: number) {
    const slider = sliderRef.current;

    if (slider === null) {
      return;
    }

    const bounds = slider.getBoundingClientRect();
    const nextPosition = ((clientX - bounds.left) / bounds.width) * 100;
    setPosition(clampPosition(nextPosition));
  }

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    sliderRef.current?.setPointerCapture(event.pointerId);
    updatePosition(event.clientX);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    if (!event.currentTarget.hasPointerCapture(event.pointerId)) {
      return;
    }

    updatePosition(event.clientX);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      setPosition((current) => clampPosition(current - 4));
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      setPosition((current) => clampPosition(current + 4));
    }
  }

  const sliderStyle = {
    '--reveal-position': `${position}%`,
  } as CSSProperties;
  const sliderClassName = [
    'before-after-slider',
    hasImages ? 'before-after-slider--has-images' : '',
    position <= 0 ? 'before-after-slider--at-after' : '',
    position >= 100 ? 'before-after-slider--at-before' : '',
  ].filter(Boolean).join(' ');

  return (
    <div
      className={sliderClassName}
      ref={sliderRef}
      role="slider"
      aria-label={comparison.ariaLabel}
      aria-valuemin={0}
      aria-valuemax={100}
      aria-valuenow={Math.round(position)}
      tabIndex={0}
      style={sliderStyle}
      onKeyDown={handleKeyDown}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
    >
      <div className="before-after-slider__layer before-after-slider__layer--before">
        <span className="before-after-slider__label before-after-slider__label--before">{comparison.beforeLabel}</span>
        <div className="before-after-slider__garment">
          {comparison.before.src ? <img src={comparison.before.src} alt={comparison.before.alt} loading="lazy" decoding="async" /> : null}
          {!hasImages ? <span>{displayLabel}</span> : null}
        </div>
      </div>
      <div className="before-after-slider__layer before-after-slider__layer--after" aria-hidden="true">
        <span className="before-after-slider__label before-after-slider__label--after">{comparison.afterLabel}</span>
        <div className="before-after-slider__garment">
          {comparison.after.src ? <img src={comparison.after.src} alt={comparison.after.alt} loading="lazy" decoding="async" /> : null}
          {!hasImages ? <span>{displayLabel}</span> : null}
        </div>
      </div>
      <div className="before-after-slider__handle" aria-hidden="true">
        <span />
      </div>
    </div>
  );
}
