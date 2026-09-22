'use client';

import { useEffect, useRef, useState } from 'react';

export type TocEntry = { index: number; section: string; title: string };

type Group = { section: string; items: TocEntry[] };

/** 연속된 같은 섹션의 장을 한 묶음으로 */
function groupBySection(entries: TocEntry[]): Group[] {
  const groups: Group[] = [];
  for (const e of entries) {
    const last = groups[groups.length - 1];
    if (last && last.section === e.section) last.items.push(e);
    else groups.push({ section: e.section, items: [e] });
  }
  return groups;
}

type Props = {
  id: string;
  entries: TocEntry[];
  current: number;
  onSelect: (index: number) => void;
  onClose: () => void;
};

/**
 * 하단에서 올라오는 전체 목차. 섹션이 여러 장이면 아코디언으로 접고,
 * 현재 장이 속한 섹션만 펼친 채로 연다. 한 장짜리 섹션은 바로 항목으로 보인다.
 */
export default function Toc({ id, entries, current, onSelect, onClose }: Props) {
  const groups = groupBySection(entries);
  const currentSection = entries[current]?.section;
  const [open, setOpen] = useState<Set<string>>(() => new Set(currentSection ? [currentSection] : []));
  const currentRef = useRef<HTMLButtonElement>(null);

  // 열리면 현재 장으로 포커스·스크롤, Esc로 닫기
  useEffect(() => {
    const el = currentRef.current;
    el?.focus({ preventScroll: true });
    // 속한 섹션 제목이 보이도록 묶음 맨 위부터 맞추고, 현재 장이 가려지면 다시 맞춘다
    el?.closest('.toc-group')?.scrollIntoView({ block: 'start' });
    el?.scrollIntoView({ block: 'nearest' });
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  const toggle = (section: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(section)) next.delete(section);
      else next.add(section);
      return next;
    });

  const item = (e: TocEntry, withSection: boolean) => (
    <li key={e.index}>
      <button
        type="button"
        className="toc-item"
        ref={e.index === current ? currentRef : undefined}
        aria-current={e.index === current ? 'page' : undefined}
        onClick={() => onSelect(e.index)}
      >
        <span className="toc-no">{e.index + 1}</span>
        <span className="toc-title">
          {withSection && !e.title.includes(e.section) && <span className="toc-section-inline">{e.section} · </span>}
          {e.title}
        </span>
      </button>
    </li>
  );

  return (
    <>
      <div className="toc-backdrop" onClick={onClose} aria-hidden="true" />
      <div id={id} className="toc" role="dialog" aria-modal="true" aria-label="전체 목차">
        <div className="toc-head">
          <h2>전체 목차</h2>
          <button type="button" className="toc-close" onClick={onClose} aria-label="목차 닫기">
            ✕
          </button>
        </div>
        <ul className="toc-list">
          {groups.map((g) => {
            if (g.items.length === 1) return item(g.items[0], true);
            const expanded = open.has(g.section);
            const panelId = `${id}-${g.items[0].index}`;
            const active = g.section === currentSection;
            return (
              <li key={g.section} className="toc-group">
                <button
                  type="button"
                  className={`toc-group-head${active ? ' active' : ''}`}
                  aria-expanded={expanded}
                  aria-controls={panelId}
                  onClick={() => toggle(g.section)}
                >
                  <span className="toc-chevron" aria-hidden="true">
                    {expanded ? '▾' : '▸'}
                  </span>
                  <span className="toc-group-title">{g.section}</span>
                  <span className="toc-group-range">
                    {g.items[0].index + 1}–{g.items[g.items.length - 1].index + 1}
                  </span>
                </button>
                {expanded && <ul id={panelId}>{g.items.map((e) => item(e, false))}</ul>}
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
