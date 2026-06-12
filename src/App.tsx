import { useEffect } from 'react';
import { AlgorithmCard } from './components/AlgorithmCard';
import { CollectionOverview } from './components/CollectionOverview';
import { ColorPalette } from './components/ColorPalette';
import { ConceptLayerBlock } from './components/ConceptLayerBlock';
import { EditorialHeader } from './components/EditorialHeader';
import { LookDetailSheet } from './components/LookDetailSheet';
import { SectionLabel } from './components/SectionLabel';
import videoMoodSource from './assets/video-mood.mp4';
import targetConsumerHover from './assets/target-consumer-hover.jpg';
import clo3d01 from './assets/clo3d/1.png';
import clo3d02 from './assets/clo3d/2.png';
import clo3d03 from './assets/clo3d/3.png';
import clo3d04 from './assets/clo3d/4.png';
import clo3d05 from './assets/clo3d/5.png';
import clo3d06 from './assets/clo3d/6.png';
import clo3d07 from './assets/clo3d/7.png';
import clo3d08 from './assets/clo3d/8.png';
import {
  algorithmCards,
  collection,
  conceptLayers,
  lookPairs,
  looks,
  palette,
  portfolioCopy,
} from './data/portfolioData';

function useSectionReveal() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>('.portfolio-section'));

    if (sections.length === 0) {
      return;
    }

    document.documentElement.classList.add('reveal-ready');

    if (!('IntersectionObserver' in window)) {
      sections.forEach((section) => section.classList.add('section-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('section-visible');
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin: '0px 0px -18% 0px',
        threshold: 0.12,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove('reveal-ready');
      sections.forEach((section) => section.classList.remove('section-visible'));
    };
  }, []);
}

function CornerMark() {
  return (
    <div className="corner-mark" aria-label="sub-stratum. LATENT STRUCTURE aw2027">
      <span className="corner-mark__substratum">sub-stratum.</span>
      <span className="corner-mark__brand">LATENT STRUCTURE</span>
      <span className="corner-mark__season">aw2027</span>
    </div>
  );
}

function HeroMoodboardSection() {
  return (
    <section className="portfolio-section hero-section" aria-labelledby="hero-title">
      <CornerMark />
      <div className="hero-image-board">
        <img src={portfolioCopy.hero.image.src} alt={portfolioCopy.hero.image.alt} className="hero-moodboard-image" />
      </div>
      <div className="hero-copy">
        <EditorialHeader
          id="hero-title"
          title={collection.name}
          body={collection.concept}
        />
        {collection.keywords.length > 0 ? (
          <div className="keyword-strip">
            {collection.keywords.map((keyword) => (
              <span key={keyword}>{keyword}</span>
            ))}
          </div>
        ) : null}
      </div>
    </section>
  );
}

function ConceptSystemSection() {
  return (
    <section className="portfolio-section concept-section" aria-labelledby="concept-title">
      <CornerMark />
      <h2 id="concept-title" className="visually-hidden">{portfolioCopy.concept.hiddenTitle}</h2>
      <div className="concept-spread">
        <div className="concept-visual concept-visual--left" aria-label={portfolioCopy.concept.visuals.left.ariaLabel}>
          <img src={portfolioCopy.concept.visuals.left.src} alt={portfolioCopy.concept.visuals.left.label} />
        </div>
        <div className="concept-copy-stack">
          {conceptLayers.map((layer) => (
            <ConceptLayerBlock layer={layer} key={layer.number} />
          ))}
        </div>
        <div className="concept-visual concept-visual--right" aria-label={portfolioCopy.concept.visuals.right.ariaLabel}>
          <img src={portfolioCopy.concept.visuals.right.src} alt={portfolioCopy.concept.visuals.right.label} />
        </div>
      </div>
    </section>
  );
}

function ResearchAnalysisSection() {
  return (
    <section className="portfolio-section research-analysis-section" aria-labelledby="research-analysis-title">
      <CornerMark />
      <div className="section-intro section-intro--compact">
        <SectionLabel label="MARKET RESEARCH" index="03" />
        <header className="editorial-header">
          <h1 id="research-analysis-title" className="research-title">
            <span>MARKET POSITIONING</span>
            <em>&amp;</em>
            <span>COMPETITIVE CONTEXT</span>
          </h1>
        </header>
      </div>
      <div className="research-analysis-layout">
        <article className="research-analysis-panel">
          <div className="consumer-profile">
            <div className="consumer-profile__heading">
              <span>01</span>
              <h3>Target Consumer</h3>
            </div>
            <div className="consumer-profile__detail">
              <dl className="consumer-profile__list">
                <div>
                  <dt>Age</dt>
                  <dd>25-40</dd>
                </div>
                <div>
                  <dt>Profile</dt>
                  <dd>
                    <span>Urban creative professionals</span>
                    <span>Design-conscious consumers</span>
                    <span>Gallery / culture-oriented audience</span>
                  </dd>
                </div>
                <div>
                  <dt>Values</dt>
                  <dd>
                    <span>Individuality</span>
                    <span>Craftsmanship</span>
                    <span>Process evidence</span>
                    <span>Emotional texture</span>
                  </dd>
                </div>
                <div>
                  <dt>Buying Scene</dt>
                  <dd>
                    <span>Concept stores</span>
                    <span>Gallery events</span>
                    <span>Independent designer boutiques</span>
                    <span>Cultural events</span>
                  </dd>
                </div>
                <div>
                  <dt>Purchase Motivation</dt>
                  <dd>Garments with narrative, material depth and subtle uniqueness</dd>
                </div>
              </dl>
              <img src={targetConsumerHover} alt="Target consumer visual reference" />
            </div>
          </div>
        </article>
        <article className="research-analysis-panel">
          <div className="market-map">
            <div className="market-map__heading">
              <span>02</span>
              <h3>Positioning Map</h3>
            </div>
            <div className="market-map__chart" aria-label="Positioning map">
              <span className="market-map__axis market-map__axis--top">Process-rich surface</span>
              <span className="market-map__axis market-map__axis--bottom">Clean minimal surface</span>
              <span className="market-map__axis market-map__axis--left">Commercial wearability</span>
              <span className="market-map__axis market-map__axis--right">Experimental expression</span>
              <span className="market-map__line market-map__line--vertical" />
              <span className="market-map__line market-map__line--horizontal" />
              <span className="market-map__arrow market-map__arrow--vertical" />
              <span className="market-map__arrow market-map__arrow--horizontal" />
              <span className="market-map__point market-map__point--uma">
                <b />
                UMA WANG
                <span className="market-map__tooltip">
                  <strong>Commonality</strong>
                  Muted textile depth / artisanal layering
                  <em>Difference: Latent Structure is more dye-system driven.</em>
                </span>
              </span>
              <span className="market-map__point market-map__point--latent market-map__point--primary">
                <b />
                LATENT STRUCTURE
              </span>
              <span className="market-map__point market-map__point--margiela">
                <b />
                MAISON MARGIELA
                <span className="market-map__tooltip market-map__tooltip--left">
                  <strong>Commonality</strong>
                  Deconstruction / inside-out logic
                  <em>Difference: Latent Structure reveals construction through dye absorption.</em>
                </span>
              </span>
              <span className="market-map__point market-map__point--yohji">
                <b />
                YOHJI YAMAMOTO
                <span className="market-map__tooltip market-map__tooltip--left">
                  <strong>Commonality</strong>
                  Architectural volume / asymmetry
                  <em>Difference: Latent Structure uses softer drape and washed surfaces.</em>
                </span>
              </span>
              <span className="market-map__point market-map__point--ann">
                <b />
                ANN DEMEULEMEESTER
                <span className="market-map__tooltip">
                  <strong>Commonality</strong>
                  Dark romantic tailoring / elongated silhouette
                  <em>Difference: Latent Structure is softer and more surface-memory focused.</em>
                </span>
              </span>
            </div>
            <div className="competitor-reference" aria-label="Competitor reference">
              <span>Uma Wang — textile depth / artisanal layering</span>
              <span>Maison Margiela — deconstruction / inside-out logic</span>
              <span>Ann Demeulemeester — poetic tailoring / dark romantic mood</span>
              <span>Yohji Yamamoto — architectural volume / asymmetry</span>
            </div>
          </div>
        </article>
        <article className="research-analysis-panel">
          <div className="competitor-conclusion">
            <div className="competitor-conclusion__heading">
              <span>03</span>
              <h3>Differentiation</h3>
            </div>
            <h4 className="competitor-conclusion__kicker">Core Position</h4>
            <p className="competitor-conclusion__statement">
              Garment dyeing becomes a system for revealing hidden construction.
            </p>
            <div className="competitor-conclusion__group">
              <h4>Sustainable Advantage</h4>
              <ol className="competitor-conclusion__list">
                <li>
                  <span>01</span>
                  Surface renewal through garment dyeing
                </li>
                <li>
                  <span>02</span>
                  Extended lifespan of existing materials
                </li>
                <li>
                  <span>03</span>
                  Construction traces as lasting value
                </li>
                <li>
                  <span>04</span>
                  Small-batch uniqueness with lower excess
                </li>
              </ol>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

function DyeAlgorithmSection() {
  return (
    <section className="portfolio-section algorithm-section" aria-labelledby="algorithm-title">
      <CornerMark />
      <div className="section-intro">
        <SectionLabel label={portfolioCopy.algorithm.sectionLabel} index={portfolioCopy.algorithm.sectionIndex} />
        <EditorialHeader
          id="algorithm-title"
          title={portfolioCopy.algorithm.title}
        />
      </div>
      <div className="algorithm-layout">
        <div className="algorithm-cards">
          {algorithmCards.map((card) => (
            <AlgorithmCard card={card} key={card.title} />
          ))}
        </div>
        <div className="dye-algorithm-image">
          <img src={portfolioCopy.algorithm.image.src} alt={portfolioCopy.algorithm.image.alt} />
        </div>
      </div>
    </section>
  );
}

function VideoMoodSection() {
  return (
    <section className="portfolio-section video-mood-section" aria-labelledby="video-mood-title">
      <CornerMark />
      <div className="section-intro section-intro--compact">
        <SectionLabel label="VIDEO MOOD" index="02" />
        <h1 id="video-mood-title" className="visually-hidden">Video Mood</h1>
      </div>
      <div className="video-mood-frame">
        <video
          src={videoMoodSource}
          aria-label="Video Mood"
          controls
          muted
          playsInline
          preload="metadata"
        />
      </div>
      <p className="video-mood-credit">
        Design assets: Seedance2.0, ChatGPT-image2&nbsp;&nbsp; BGM: Pheromone / Prince (Come 1994)
      </p>
    </section>
  );
}

function CollectionOverviewSection() {
  return (
    <section className="portfolio-section collection-section" aria-labelledby="collection-title">
      <CornerMark />
      <h2 id="collection-title" className="visually-hidden">{portfolioCopy.collectionArchive.hiddenTitle}</h2>
      <CollectionOverview title={collection.name} looks={looks} copy={portfolioCopy.collectionArchive} />
    </section>
  );
}

function LookDetailSection({ pair, index }: { pair: string[]; index: number }) {
  const pairedLooks = pair
    .map((lookId) => looks.find((look) => look.id === lookId))
    .filter((look): look is NonNullable<typeof look> => Boolean(look));

  return (
    <section className="portfolio-section detail-section" aria-label={`${portfolioCopy.lookDetail.ariaLabelPrefix} ${pair.join(' and ')}`}>
      <CornerMark />
      <div className="section-intro section-intro--compact">
        <SectionLabel label={`${portfolioCopy.lookDetail.sectionLabelPrefix} ${pair.join('/')}`} index={String(index).padStart(2, '0')} />
      </div>
      <LookDetailSheet looks={pairedLooks} copy={portfolioCopy} />
    </section>
  );
}

const clo3dFrames = [
  { label: '4/3 VIEW', src: clo3d01 },
  { label: 'FRONT', src: clo3d02 },
  { label: 'SIDE', src: clo3d03 },
  { label: 'BACK', src: clo3d04 },
  { label: '4/3 VIEW', src: clo3d05 },
  { label: 'FRONT', src: clo3d06 },
  { label: 'SIDE', src: clo3d07, compact: true },
  { label: 'BACK', src: clo3d08 },
];

const clo3dModels = [
  {
    id: '01',
    title: 'MODEL 1',
    views: clo3dFrames.slice(0, 4),
  },
  {
    id: '02',
    title: 'MODEL 2',
    views: clo3dFrames.slice(4, 8),
  },
];

function Clo3DModelingSection() {
  return (
    <section className="portfolio-section clo3d-section" aria-labelledby="clo3d-title">
      <CornerMark />
      <div className="section-intro section-intro--compact">
        <SectionLabel label="CLO3D MODELING" index="11" />
        <EditorialHeader
          id="clo3d-title"
          title="CLO3D Modeling"
        />
      </div>
      <div className="clo3d-layout">
        {clo3dModels.map((model) => (
          <article className="clo3d-model-board" key={model.id}>
            <div className="clo3d-model-board__tiles" aria-label={`${model.title} orthographic views`}>
              {model.views.map((view) => (
                <figure
                  className={`clo3d-frame clo3d-frame--placeholder${view.compact ? ' clo3d-frame--compact' : ''}`}
                  key={`${model.id}-${view.label}`}
                >
                  <img src={view.src} alt={`CLO3D frame ${view.label}`} />
                  <figcaption>{view.label}</figcaption>
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default function App() {
  useSectionReveal();

  return (
    <main className="portfolio-app">
      <HeroMoodboardSection />
      <ConceptSystemSection />
      <VideoMoodSection />
      <ResearchAnalysisSection />
      <DyeAlgorithmSection />
      <CollectionOverviewSection />
      <section className="portfolio-section palette-section" aria-label={portfolioCopy.palette.ariaLabel}>
        <CornerMark />
        <SectionLabel label={portfolioCopy.palette.sectionLabel} index={portfolioCopy.palette.sectionIndex} />
        <ColorPalette colors={palette} />
      </section>
      {lookPairs.map((pair, index) => (
        <LookDetailSection pair={pair} index={index + 6} key={pair.join('-')} />
      ))}
      <Clo3DModelingSection />
    </main>
  );
}
