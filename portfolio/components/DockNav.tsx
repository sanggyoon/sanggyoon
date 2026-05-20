'use client';

import { usePathname, useRouter } from 'next/navigation';
import { Home, User, Briefcase, Clock } from 'lucide-react';
import Dock, { DockItemData } from '@/components/Dock';

const navItems = [
  { label: 'HOME', href: '/', icon: <Home size={24} /> },
  { label: 'ABOUT ME', href: '/personal-info', icon: <User size={24} /> },
  { label: 'PORTFOLIO', href: '/portfolio', icon: <Briefcase size={24} /> },
  { label: 'TIMELINE', href: '/timeline', icon: <Clock size={24} /> },
];

export default function DockNav() {
  const pathname = usePathname();
  const router = useRouter();

  const items: DockItemData[] = navItems.map((item) => ({
    icon: item.icon,
    label: item.label,
    onClick: () => {
      router.push(item.href);
    },
    className: pathname === item.href ? 'border-white' : '',
  }));

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex justify-center">
      <Dock items={items} baseItemSize={60} magnification={90} panelHeight={80} />
    </div>
  );
}
