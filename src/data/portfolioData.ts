import heroMoodboard from '../assets/hero-moodboard.jpg';
import collectionLookbook0105 from '../assets/collection-lookbook-01-05.png';
import collectionLookbook0610 from '../assets/collection-lookbook-06-10.png';
import dyeAlgorithmImage from '../assets/dye-algorithm.jpg';
import fabricSwatchLook0102 from '../assets/fabric-swatch-look-01-02.jpg';
import fabricSwatchLook0304 from '../assets/fabric-swatch-look-03-04.jpg';
import fabricSwatchLook0506 from '../assets/fabric-swatch-look-05-06.jpg';
import fabricSwatchLook0708 from '../assets/fabric-swatch-look-07-08.jpg';
import fabricSwatchLook0910 from '../assets/fabric-swatch-look-09-10.jpg';
import look01AfterDye from '../assets/look-01-after-dye.jpg';
import look01BeforeDye from '../assets/look-01-before-dye.jpg';
import look01Technical01 from '../assets/look-01-technical-01.jpg';
import look01Technical02 from '../assets/look-01-technical-02.jpg';
import look02Technical01 from '../assets/look-02-technical-01.jpg';
import look02Technical02 from '../assets/look-02-technical-02.jpg';
import look03AfterDye from '../assets/look-03-after-dye.jpg';
import look03BeforeDye from '../assets/look-03-before-dye.jpg';
import look03Technical01 from '../assets/look-03-technical-01.jpg';
import look03Technical02 from '../assets/look-03-technical-02.jpg';
import look04Technical01 from '../assets/look-04-technical-01.jpg';
import look05AfterDye from '../assets/look-05-after-dye.jpg';
import look05BeforeDye from '../assets/look-05-before-dye.jpg';
import look05Technical01 from '../assets/look-05-technical-01.jpg';
import look06Technical01 from '../assets/look-06-technical-01.jpg';
import look06Technical02 from '../assets/look-06-technical-02.jpg';
import look07AfterDye from '../assets/look-07-after-dye.jpg';
import look07BeforeDye from '../assets/look-07-before-dye.jpg';
import look07Technical01 from '../assets/look-07-technical-01.jpg';
import look07Technical02 from '../assets/look-07-technical-02.jpg';
import look08Technical01 from '../assets/look-08-technical-01.jpg';
import look09AfterDye from '../assets/look-09-after-dye.jpg';
import look09BeforeDye from '../assets/look-09-before-dye.jpg';
import look09Technical01 from '../assets/look-09-technical-01.jpg';
import look09Technical02 from '../assets/look-09-technical-02.jpg';
import look10Technical01 from '../assets/look-10-technical-01.jpg';
import sketchLeft from '../assets/sketch-left.jpg';
import sketchRight from '../assets/sketch-right.jpg';

export type PaletteColor = {
  name: string;
  hex: string;
  usage: string;
};

export type EditableImage = {
  src: string;
  alt: string;
  label: string;
};

export type ConceptLayer = {
  number: string;
  title: string;
  body: string;
  annotation: string;
};

export type CollageItem = {
  label: string;
  caption: string;
  tone: 'paper' | 'taupe' | 'rose' | 'navy' | 'ochre';
};

export type AlgorithmCardData = {
  title: string;
  label: string;
  body: string;
  metrics: string[];
  href: string;
};

export type MetadataRow = {
  label: string;
  value: string;
};

export type TechnicalFlat = {
  id: string;
  label: string;
  variant: 'garment' | 'lower';
  image: EditableImage;
  viewLabels: {
    front: string;
    back: string;
  };
};

export type LookDyeComparison = {
  before: EditableImage;
  after: EditableImage;
  beforeLabel: string;
  afterLabel: string;
  ariaLabel: string;
};

export type Look = {
  id: string;
  displayLabel: string;
  group: 'LOOK 0105' | 'LOOK 0610';
  title: string;
  silhouette: string;
  fabric: string;
  technique: string;
  image: EditableImage;
  dyeComparison: LookDyeComparison;
  fabricSwatchImage?: EditableImage;
  technicalFlats: {
    left: TechnicalFlat[];
    right: TechnicalFlat[];
  };
  keywords: string[];
  notes: string[];
  constructionNotes: string[];
  metadata: MetadataRow[];
  swatches: PaletteColor[];
};

export const portfolioCopy = {
  hero: {
    sectionLabel: 'MOODBOARD',
    image: {
      src: heroMoodboard,
      alt: 'LATENT STRUCTURE moodboard collage',
      label: 'Moodboard',
    },
  },
  concept: {
    hiddenTitle: 'Concept layers',
    sectionLabel: 'SKETCH',
    visuals: {
      left: {
        src: sketchLeft,
        label: 'SKETCH BOARD',
        ariaLabel: 'Sketch board image',
      },
      right: {
        src: sketchRight,
        label: 'IMAGE ARCHIVE',
        ariaLabel: 'Image archive image',
      },
    },
  },
  algorithm: {
    sectionLabel: 'DYE ALGORITHM',
    sectionIndex: '04',
    title: 'Digital Developing Simulation',
    image: {
      src: dyeAlgorithmImage,
      alt: 'Dye algorithm visual output',
      label: 'Dye algorithm image',
    },
  },
  collectionArchive: {
    hiddenTitle: 'Collection lookbook',
    tag: 'Collection',
    ariaSuffix: 'look archive',
    rangePrefix: 'LOOK',
  },
  palette: {
    sectionLabel: 'MATERIAL PALETTE',
    sectionIndex: '05',
    ariaLabel: 'Collection palette',
  },
  lookDetail: {
    sectionLabelPrefix: 'LOOK DETAIL',
    ariaLabelPrefix: 'Look detail',
  },
  technicalFlat: {
    headingPrefix: 'LOOK',
    defaultViewLabels: {
      front: 'FRONT',
      back: 'BACK',
    },
  },
  fabricPanel: {
    title: 'Fabric & Technique',
    swatchImage: {
      src: fabricSwatchLook0102,
      alt: 'Look 01 and 02 fabric swatch board',
    },
    fabricLabel: 'Fabric',
    swatchAriaLabel: 'Fabric swatch placeholders',
    swatchLabel: 'FABRIC SWATCH',
    techniqueLabel: 'Technique',
    colorLabel: 'Color',
  },
};

export type PortfolioCopy = typeof portfolioCopy;

export const collection = {
  name: 'LATENT STRUCTURE',
  concept:
    'Through garment dyeing,\nhidden seams,\nlayered interiors,\n\nand traces of construction are developed\ninto a visible material language.',
  season: 'ARCHIVE STUDY 0604',
  keywords: [],
  metadata: [
    { label: 'COLLECTION', value: 'LATENT STRUCTURE' },
    { label: 'SEASON', value: 'ARCHIVE STUDY 0604' },
  ],
};

export const palette: PaletteColor[] = [
  { name: 'Raw Ivory', hex: '#F4F0E8', usage: 'Ground' },
  { name: 'Paper Beige', hex: '#E8E0D2', usage: 'Surface' },
  { name: 'Dusty Taupe', hex: '#A89584', usage: 'Shadow' },
  { name: 'Faded Ochre', hex: '#B68A5F', usage: 'Residue' },
  { name: 'Dust Rose', hex: '#C6A091', usage: 'Warmth' },
  { name: 'Shadow Mauve', hex: '#70566D', usage: 'Undertone' },
  { name: 'Charcoal Black', hex: '#262626', usage: 'Line' },
  { name: 'Deep Ink Navy', hex: '#1F2A33', usage: 'Depth' },
  { name: 'Soft Grey Line', hex: '#CFCAC0', usage: 'Divider' },
];

export const collageItems: CollageItem[] = [
  {
    label: 'IMAGE 01',
    caption: '',
    tone: 'paper',
  },
  {
    label: 'IMAGE 02',
    caption: '',
    tone: 'taupe',
  },
  {
    label: 'IMAGE 03',
    caption: '',
    tone: 'navy',
  },
  {
    label: 'IMAGE 04',
    caption: '',
    tone: 'rose',
  },
  {
    label: 'IMAGE 05',
    caption: '',
    tone: 'ochre',
  },
];

export const conceptLayers: ConceptLayer[] = [
  {
    number: 'LAYER 1',
    title: 'THE NEGATIVE',
    body:
      'The Negative functions as the vessel of the latent image. It contains three dimensions of invisibility: process traces from pattern-making, the temporal rhythm of manual labor, and the material history embedded within the fabric itself.',
    annotation: '',
  },
  {
    number: 'LAYER 2',
    title: 'THE DEVELOPER',
    body:
      'Garment dyeing operates as the external catalyst. More than a finishing technique, it is a process of controlled unpredictability, where predefined conditions interact with the spontaneous behavior of folds, seams, and material absorption.',
    annotation: '',
  },
  {
    number: 'LAYER 3',
    title: 'THE FIXING',
    body:
      'Fixing is the moment of permanence. As the garment dries, unstable reactions settle into definitive forms, allowing silhouettes, textures, and structural traces to become permanently embedded within the surface.',
    annotation: '',
  },
];

export const algorithmCards: AlgorithmCardData[] = [
  {
    title: 'Generate',
    label: 'Input Field',
    body: '',
    metrics: [],
    href: '/labs/generate.html',
  },
  {
    title: 'Explain',
    label: 'Trace Logic',
    body: '',
    metrics: [],
    href: '/labs/explain.html',
  },
  {
    title: 'Evaluate',
    label: 'Archive Output',
    body: '',
    metrics: [],
    href: '/labs/evaluate.html',
  },
];

export const lookPairs = [
  ['01', '02'],
  ['03', '04'],
  ['05', '06'],
  ['07', '08'],
  ['09', '10'],
];

const emptyImage = (label: string, src = ''): EditableImage => ({
  src,
  alt: label,
  label,
});

const technicalFlatImages: Record<string, string> = {
  '01-left-1': look01Technical01,
  '01-left-2': look01Technical02,
  '02-right-1': look02Technical01,
  '02-right-2': look02Technical02,
  '03-left-1': look03Technical01,
  '04-right-1': look04Technical01,
  '04-right-2': look03Technical02,
  '05-left-1': look05Technical01,
  '06-right-1': look06Technical01,
  '06-right-2': look06Technical02,
  '07-left-1': look07Technical01,
  '07-left-2': look07Technical02,
  '08-right-1': look08Technical01,
  '09-left-1': look09Technical01,
  '09-left-2': look09Technical02,
  '10-right-1': look10Technical01,
};

const customTechnicalFlatLabels: Record<string, string[]> = {
  '03-left': ['01 COAT'],
  '04-right': ['02 JACKET', '03 TROUSER'],
  '05-left': ['01 COAT'],
  '06-right': ['02 JACKET', '03 TROUSER'],
  '07-left': ['01 JACKET', '02 TROUSER'],
  '08-right': ['03 STYLE'],
  '09-left': ['01 JACKET', '02 TROUSER'],
  '10-right': ['03 STYLE'],
};

const dyeComparisonImages: Record<string, { before: string; after: string }> = {
  '01': {
    before: look01BeforeDye,
    after: look01AfterDye,
  },
  '03': {
    before: look03BeforeDye,
    after: look03AfterDye,
  },
  '05': {
    before: look05BeforeDye,
    after: look05AfterDye,
  },
  '07': {
    before: look07BeforeDye,
    after: look07AfterDye,
  },
  '09': {
    before: look09BeforeDye,
    after: look09AfterDye,
  },
};

const fabricSwatchImages: Record<string, string> = {
  '01': fabricSwatchLook0102,
  '03': fabricSwatchLook0304,
  '05': fabricSwatchLook0506,
  '07': fabricSwatchLook0708,
  '09': fabricSwatchLook0910,
};

const makeTechnicalFlats = (lookId: string, side: 'left' | 'right'): TechnicalFlat[] => {
  const customKey = `${lookId}-${side}`;
  const labels = customTechnicalFlatLabels[customKey] ?? (side === 'left' ? ['01 JACKET', '02 TROUSER'] : ['03 COAT', '04 DRESS']);

  return labels.map((label, index) => ({
    id: `${lookId}-${side}-${index + 1}`,
    label,
    variant: label.includes('TROUSER') ? 'lower' : 'garment',
    image: emptyImage(`${label} technical flat`, technicalFlatImages[`${lookId}-${side}-${index + 1}`] ?? ''),
    viewLabels: portfolioCopy.technicalFlat.defaultViewLabels,
  }));
};

const makeLook = (
  id: string,
  group: Look['group'],
  swatches: PaletteColor[],
  image: EditableImage,
): Look => ({
  id,
  displayLabel: `LOOK ${id}`,
  group,
  title: '',
  silhouette: '',
  fabric: '',
  technique: '',
  image,
  dyeComparison: {
    before: emptyImage(`Look ${id} before dyeing`, dyeComparisonImages[id]?.before ?? ''),
    after: emptyImage(`Look ${id} after dyeing`, dyeComparisonImages[id]?.after ?? ''),
    beforeLabel: 'BEFORE',
    afterLabel: 'AFTER',
    ariaLabel: `Look ${id} garment dyeing comparison`,
  },
  fabricSwatchImage: fabricSwatchImages[id]
    ? emptyImage(`Look ${id} fabric swatch board`, fabricSwatchImages[id])
    : undefined,
  technicalFlats: {
    left: makeTechnicalFlats(id, 'left'),
    right: makeTechnicalFlats(id, 'right'),
  },
  keywords: [],
  notes: [],
  constructionNotes: [],
  metadata: [
    { label: 'LOOK NO.', value: id },
    { label: 'KEYWORDS', value: '' },
  ],
  swatches,
});

export const looks: Look[] = [
  makeLook('01', 'LOOK 0105', [palette[0], palette[2], palette[7]], emptyImage('Look 01 image')),
  makeLook('02', 'LOOK 0105', [palette[1], palette[3], palette[6]], emptyImage('Look 02 image')),
  makeLook('03', 'LOOK 0105', [palette[0], palette[4], palette[6]], emptyImage('Looks 01-05 image', collectionLookbook0105)),
  makeLook('04', 'LOOK 0105', [palette[1], palette[5], palette[7]], emptyImage('Look 04 image')),
  makeLook('05', 'LOOK 0105', [palette[0], palette[2], palette[3]], emptyImage('Look 05 image')),
  makeLook('06', 'LOOK 0610', [palette[6], palette[7], palette[2]], emptyImage('Look 06 image')),
  makeLook('07', 'LOOK 0610', [palette[0], palette[4], palette[5]], emptyImage('Look 07 image')),
  makeLook('08', 'LOOK 0610', [palette[1], palette[2], palette[6]], emptyImage('Looks 06-10 image', collectionLookbook0610)),
  makeLook('09', 'LOOK 0610', [palette[0], palette[5], palette[7]], emptyImage('Look 09 image')),
  makeLook('10', 'LOOK 0610', [palette[1], palette[3], palette[7]], emptyImage('Look 10 image')),
];

export const metadataBase: MetadataRow[] = collection.metadata;
