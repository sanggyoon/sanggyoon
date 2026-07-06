'use client';
import { motion } from 'motion/react';
import { usePathname } from 'next/navigation';

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  // Fade only — no transform. A translate-based entrance can strand a
  // partial transform if the animation is interrupted (e.g. React
  // StrictMode's dev double-mount), which would offset full-height pages
  // and reveal the black body behind the light slide deck.
  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.35, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {children}
    </motion.div>
  );
}
