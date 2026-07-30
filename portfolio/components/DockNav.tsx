'use client';

import { usePathname, useRouter } from 'next/navigation';
import {
  Home,
  User,
  Briefcase,
  Clock,
  Mail,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import Dock, { DockItemData } from '@/components/Dock';
import { useDeckTheme } from '@/components/DeckTheme';
import { useDeckNav } from '@/components/DeckNav';

const navItems = [
  { label: 'HOME', href: '/', icon: <Home size={24} /> },
  { label: 'ABOUT ME', href: '/personal-info', icon: <User size={24} /> },
  { label: 'PORTFOLIO', href: '/portfolio', icon: <Briefcase size={24} /> },
  { label: 'TIMELINE', href: '/timeline', icon: <Clock size={24} /> },
  { label: 'CONTACT', href: '/contact', icon: <Mail size={24} /> },
];

export default function DockNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { dark: deckDark } = useDeckTheme();
  const { index, total, go } = useDeckNav();

  // Home ('/') has a dark background and no deck theme toggle, so the dock
  // always reads dark there; deck pages follow the deck's own light/dark toggle.
  const dark = pathname === '/' ? true : deckDark;
  const activeBorder = dark ? '!border-white' : '!border-[#0F766E]';

  const items: DockItemData[] = navItems.map((item) => ({
    icon: item.icon,
    label: item.label,
    onClick: () => {
      router.push(item.href);
    },
    className: pathname === item.href ? activeBorder : '',
  }));

  // Slide controls only make sense on a multi-slide deck page.
  const showDeckNav = pathname !== '/' && total > 1;

  const arrowCls = `flex h-12 w-12 items-center justify-center rounded-xl border-2 shadow-md backdrop-blur-md transition-colors disabled:cursor-default disabled:opacity-35 ${
    dark
      ? 'bg-[#141D1B]/60 border-[#28322F] text-[#E8EFEC] enabled:hover:border-[#43C1B3] enabled:hover:text-[#6FD3C7]'
      : 'bg-[#FFFFFF]/70 border-[#DBE2E0] text-[#141C22] enabled:hover:border-[#0F766E] enabled:hover:text-[#0A5952]'
  }`;

  const dotOn = dark ? 'bg-[#43C1B3]' : 'bg-[#0F766E]';
  const dotOff = dark ? 'bg-[#3A4744]' : 'bg-[#C4CCC9]';

  return (
    <div className="pointer-events-none fixed bottom-0 left-0 right-0 z-50 flex flex-col items-center gap-3 pb-3">
      {showDeckNav && (
        <div
          className={`pointer-events-auto flex items-center gap-1.5 rounded-full border px-3 py-1.5 backdrop-blur-md transition-colors ${
            dark
              ? 'border-[#28322F] bg-[#0E1513]/60'
              : 'border-[#DBE2E0] bg-[#F4F6F5]/70'
          }`}
          aria-label="슬라이드 이동"
        >
          {Array.from({ length: total }).map((_, k) => (
            <button
              key={k}
              type="button"
              aria-label={`${k + 1}번 슬라이드`}
              aria-current={k === index ? 'true' : undefined}
              onClick={() => go(k)}
              className={`rounded-full transition-all ${
                k === index ? `h-2.5 w-2.5 ${dotOn}` : `h-2 w-2 ${dotOff}`
              }`}
            />
          ))}
        </div>
      )}

      <div className="pointer-events-auto flex items-center justify-center gap-2">
        {showDeckNav && (
          <button
            type="button"
            aria-label="이전 슬라이드"
            onClick={() => go(index - 1)}
            disabled={index === 0}
            className={arrowCls}
          >
            <ChevronLeft size={22} />
          </button>
        )}

        <Dock
          items={items}
          dark={dark}
          baseItemSize={58}
          magnification={80}
          panelHeight={92}
        />

        {showDeckNav && (
          <button
            type="button"
            aria-label="다음 슬라이드"
            onClick={() => go(index + 1)}
            disabled={index === total - 1}
            className={arrowCls}
          >
            <ChevronRight size={22} />
          </button>
        )}
      </div>
    </div>
  );
}
