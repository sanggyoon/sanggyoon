import Image from 'next/image';
import type { Img, LinkItem, Metric, Slide as SlideData, Step, Table } from '@/content/slides';
import Rich from './Rich';

function Figure({ image }: { image: Img }) {
  // 클릭하면 원본을 새 탭에서 연다 — 구성도는 확대해서 봐야 읽히기 때문
  return (
    <a className="figure" href={image.src} target="_blank" rel="noopener" title="원본 크기로 보기">
      <Image
        src={image.src}
        alt={image.alt}
        width={image.w}
        height={image.h}
        sizes="(max-width: 900px) 100vw, 55vw"
        // 다음 장으로 넘겼을 때 바로 보이도록 숨은 슬라이드의 이미지도 미리 받는다
        loading="eager"
      />
      <span className="figure-cap">{image.alt} · 클릭하면 원본</span>
    </a>
  );
}

function Metrics({ items }: { items: Metric[] }) {
  return (
    <dl className="metrics">
      {items.map((m) => (
        <div key={m.label} className="metric">
          <dt>{m.label}</dt>
          <dd>{m.value}</dd>
        </div>
      ))}
    </dl>
  );
}

function Facts({ rows }: { rows: [string, string][] }) {
  return (
    <dl className="facts">
      {rows.map(([k, v]) => (
        <div key={k}>
          <dt>{k}</dt>
          <dd>
            <Rich text={v} />
          </dd>
        </div>
      ))}
    </dl>
  );
}

function Links({ items }: { items: LinkItem[] }) {
  if (!items.length) return null;
  return (
    <ul className="links">
      {items.map((l) => (
        <li key={l.label}>
          <span className="link-label">{l.label}</span>
          {l.href ? (
            <a href={l.href} target={l.href.startsWith('mailto:') ? undefined : '_blank'} rel="noopener">
              {l.value} ↗
            </a>
          ) : (
            <span>{l.value}</span>
          )}
        </li>
      ))}
    </ul>
  );
}

function Steps({ steps }: { steps: Step[] }) {
  return (
    <dl className="steps">
      {steps.map((st) => (
        <div key={st.label}>
          <dt>{st.label}</dt>
          <dd>
            <ul className="points">
              {st.points.map((p) => (
                <li key={p}>
                  <Rich text={p} />
                </li>
              ))}
            </ul>
          </dd>
        </div>
      ))}
    </dl>
  );
}

function DataTable({ table }: { table: Table }) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            {table.head.map((h) => (
              <th key={h} scope="col">
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {table.rows.map((row, i) => (
            <tr key={i}>
              {row.map((cell, j) => (
                <td key={j}>
                  <Rich text={cell} />
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function Flow({ steps }: { steps: string[] }) {
  return (
    <div className="flow">
      <h3>동작 흐름</h3>
      <ol>
        {steps.map((st) => (
          <li key={st}>
            <Rich text={st} />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default function Slide({ slide, first }: { slide: SlideData; first?: boolean }) {
  switch (slide.kind) {
    case 'cover':
      return (
        <div className="layout split cover">
          <div>
            <h1 className="name">{slide.name}</h1>
            <Facts rows={slide.facts} />
          </div>
          <div className="photo">
            <Image
              src={slide.photo.src}
              alt={slide.photo.alt}
              width={slide.photo.w}
              height={slide.photo.h}
              sizes="(max-width: 900px) 50vw, 30vw"
              priority={first}
            />
          </div>
        </div>
      );

    case 'agenda':
      return (
        <div className="layout">
          <h2 className="title">{slide.title}</h2>
          <ol className="agenda">
            {slide.items.map((it) => (
              <li key={it.no}>
                <span className="agenda-no">{it.no}</span>
                <div>
                  <p className="agenda-title">{it.title}</p>
                  <p className="agenda-desc">{it.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      );

    case 'project':
      return (
        <div className={`layout${slide.image || slide.flow ? ' split' : ''}`}>
          <div>
            <p className="eyebrow">{slide.no}</p>
            <h2 className="title">{slide.title}</h2>
            <p className="lead">
              <Rich text={slide.summary} />
            </p>
            <Facts rows={slide.facts} />
            <Links items={slide.links} />
          </div>
          {(slide.image || slide.flow) && (
            <div>
              {slide.image && <Figure image={slide.image} />}
              {slide.flow && <Flow steps={slide.flow} />}
            </div>
          )}
        </div>
      );

    case 'story': {
      const body = (
        <>
          <Steps steps={slide.steps} />
          {slide.table && <DataTable table={slide.table} />}
          {slide.code && (
            <figure className="code">
              <figcaption>{slide.code.caption}</figcaption>
              <pre>{slide.code.text}</pre>
            </figure>
          )}
          {slide.gallery && (
            <div className="gallery">
              {slide.gallery.map((img) => (
                <Figure key={img.src} image={img} />
              ))}
            </div>
          )}
        </>
      );
      return (
        <div className={`layout${slide.image ? ' split' : ''}`}>
          <div>
            <p className="eyebrow">{slide.section}</p>
            <h2 className="title">{slide.title}</h2>
            {body}
            {slide.metrics && !slide.image && <Metrics items={slide.metrics} />}
          </div>
          {slide.image && (
            <div>
              <Figure image={slide.image} />
              {slide.metrics && <Metrics items={slide.metrics} />}
            </div>
          )}
        </div>
      );
    }

    case 'lessons':
      return (
        <div className="layout">
          <p className="eyebrow">{slide.section}</p>
          <h2 className="title">{slide.title}</h2>
          <div className="cards">
            {slide.lessons.map((l) => (
              <div key={l.title} className="card">
                <h3>{l.title}</h3>
                <p>
                  <Rich text={l.body} />
                </p>
              </div>
            ))}
          </div>
          {slide.next && (
            <div className="next">
              <h3>남은 과제</h3>
              <ul className="points">
                {slide.next.map((n) => (
                  <li key={n}>
                    <Rich text={n} />
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );

    case 'timeline':
      return (
        <div className="layout">
          <h2 className="title">{slide.title}</h2>
          <div className="timeline">
            {slide.groups.map((g) => (
              <section key={g.name}>
                <h3>{g.name}</h3>
                <ul>
                  {g.items.map((it) => (
                    <li key={it.title}>
                      <span className="tl-date">{it.date}</span>
                      <span className="tl-title">
                        {it.title}
                        {it.note && <span className="tl-note"> · {it.note}</span>}
                        {it.desc && <span className="tl-desc">{it.desc}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      );

    case 'contact':
      return (
        <div className="layout">
          <h2 className="title">{slide.title}</h2>
          <Links items={slide.links} />
        </div>
      );
  }
}
