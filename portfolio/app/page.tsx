import Deck from '@/components/Deck';
import Slide from '@/components/Slide';
import { slides } from '@/content/slides';

function label(s: (typeof slides)[number]) {
  if (s.kind === 'story' || s.kind === 'lessons') return s.section;
  if (s.kind === 'project') return s.no;
  if (s.kind === 'cover') return s.name;
  return s.title;
}

function title(s: (typeof slides)[number]) {
  if (s.kind === 'cover') return `표지 · ${s.name}`;
  if (s.kind === 'project') return `개요 — ${s.title}`;
  return s.title;
}

export default function Home() {
  return (
    <Deck
      slides={slides.map((s, i) => <Slide key={i} slide={s} first={i === 0} />)}
      labels={slides.map(label)}
      titles={slides.map(title)}
    />
  );
}
