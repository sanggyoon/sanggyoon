'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, User, Briefcase, Clock } from 'lucide-react';
import Dock, { DockItemData } from '@/components/Dock';
import { useDeckTheme } from '@/components/DeckTheme';

const navItems = [
  { label: 'HOME', href: '/', icon: <Home size={24} /> },
  { label: 'ABOUT ME', href: '/personal-info', icon: <User size={24} /> },
  { label: 'PORTFOLIO', href: '/portfolio', icon: <Briefcase size={24} /> },
  { label: 'TIMELINE', href: '/timeline', icon: <Clock size={24} /> },
];

export default function DockNav() {
  const pathname = usePathname();
  const router = useRouter();
  const { dark: deckDark } = useDeckTheme();

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

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <Dock
        items={items}
        dark={dark}
        baseItemSize={60}
        magnification={90}
        panelHeight={80}
      />
    </div>
  );
}
