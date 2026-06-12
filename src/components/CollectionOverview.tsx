import { useRef } from 'react';
import type { PointerEvent } from 'react';
import type { Look } from '../data/portfolioData';
import { CollectionLookCard } from './CollectionLookCard';

type CollectionOverviewProps = {
  title: string;
  looks: Look[];
  copy: {
    tag: string;
    ariaSuffix: string;
    rangePrefix: string;
  };
};

export function CollectionOverview({ title, looks, copy }: CollectionOverviewProps) {
  const archiveRef = useRef<HTMLDivElement>(null);
  const dragStart = useRef({ scrollLeft: 0, x: 0 });
  const imageLooks = looks.filter((look) => look.image.src);
  const firstLookId = looks[0]?.id ?? '';
  const lastLookId = looks[looks.length - 1]?.id ?? '';

  function handlePointerDown(event: PointerEvent<HTMLDivElement>) {
    if (event.pointerType !== 'mouse' || event.button !== 0 || archiveRef.current === null) {
      return;
    }

    dragStart.current = {
      scrollLeft: archiveRef.current.scrollLeft,
      x: event.clientX,
    };

    archiveRef.current.classList.add('is-dragging');
    archiveRef.current.setPointerCapture(event.pointerId);
  }

  function handlePointerMove(event: PointerEvent<HTMLDivElement>) {
    const archive = archiveRef.current;

    if (archive === null || !archive.classList.contains('is-dragging')) {
      return;
    }

    event.preventDefault();
    archive.scrollLeft = dragStart.current.scrollLeft - (event.clientX - dragStart.current.x);
  }

  function stopDragging(event: PointerEvent<HTMLDivElement>) {
    const archive = archiveRef.current;

    if (archive === null) {
      return;
    }

    archive.classList.remove('is-dragging');

    if (archive.hasPointerCapture(event.pointerId)) {
      archive.releasePointerCapture(event.pointerId);
    }
  }

  return (
    <div className="collection-overview">
      <section className="look-group look-group--archive" aria-label={`${title} ${copy.ariaSuffix}`}>
        <div className="look-group__tag">{copy.tag}</div>
        <div
          className="look-archive"
          ref={archiveRef}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={stopDragging}
          onPointerCancel={stopDragging}
          onPointerLeave={stopDragging}
        >
          <div className="look-archive__track">
            {imageLooks.map((look) => (
              <CollectionLookCard look={look} key={look.id} emphasis />
            ))}
          </div>
        </div>
        <div className="vertical-section-label">{copy.rangePrefix} {firstLookId}-{lastLookId}</div>
      </section>
      <p className="collection-overview__title">{title}</p>
    </div>
  );
}
