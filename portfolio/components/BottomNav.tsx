'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { label: 'PERSONAL INFO', href: '/personal-info' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'TIMELINE SUMMARY', href: '/timeline' },
];

export default function BottomNav() {
  const pathname = usePathname();
  const router = useRouter();

  const handleClick = (e: React.MouseEvent, href: string) => {
    if (pathname === href) {
      e.preventDefault();
      router.push('/');
    }
  };

  return (
    <nav
      style={{
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        display: 'flex',
        zIndex: 100,
        borderTop: '1px solid rgba(255,255,255,0.15)',
        backdropFilter: 'blur(12px)',
        backgroundColor: 'rgba(0,0,0,0.6)',
      }}
    >
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            style={{
              flex: 1,
              padding: '16px 8px',
              textAlign: 'center',
              fontSize: '0.7rem',
              fontFamily: 'var(--font-geist-mono)',
              letterSpacing: '0.1em',
              color: isActive ? '#ffffff' : 'rgba(255,255,255,0.4)',
              borderTop: isActive ? '2px solid #ffffff' : '2px solid transparent',
              textDecoration: 'none',
              transition: 'color 0.2s, border-color 0.2s',
            }}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
