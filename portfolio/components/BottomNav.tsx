'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';

const navItems = [
  { label: 'ABOUT ME', href: '/personal-info' },
  { label: 'PORTFOLIO', href: '/portfolio' },
  { label: 'TIMELINE', href: '/timeline' },
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
    <nav className="fixed bottom-0 left-0 right-0 flex z-50 border-t border-white/15 backdrop-blur-md bg-black/60">
      {navItems.map((item) => {
        const isActive = pathname === item.href;
        return (
          <Link
            key={item.href}
            href={item.href}
            onClick={(e) => handleClick(e, item.href)}
            className={`
              flex flex-1 items-center justify-center
              px-2 py-4 min-h-[56px]
              text-[0.65rem] tracking-[0.1em] font-mono text-center
              border-t-2 transition-colors duration-200 no-underline
              ${
                isActive
                  ? 'text-white border-white'
                  : 'text-white/40 border-transparent hover:text-white'
              }
            `}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
