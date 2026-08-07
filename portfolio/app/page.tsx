'use client';

import Lanyard from '@/components/Lanyard';
import LightRays from '@/components/LightRays';

export default function Home() {
  return (
    <div style={{ position: 'relative', height: '100dvh', overflow: 'hidden' }}>
      <LightRays
        raysOrigin="top-center"
        raysColor="#ffffffff"
        raysSpeed={1.5}
        lightSpread={0.8}
        rayLength={1.2}
        followMouse={true}
        mouseInfluence={0.1}
        noiseAmount={0.1}
        distortion={0.05}
        className="custom-rays"
      />
      <Lanyard position={[0, 0, 20]} gravity={[0, -40, 0]} />

      {/* How to drive the decks. Pure CSS breakpoints (no JS) so the right
          line is server-rendered and never flashes the wrong one. */}
      <p className="pointer-events-none absolute bottom-24 left-1/2 z-40 -translate-x-1/2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-center font-mono text-[0.68rem] leading-relaxed tracking-[0.08em] text-white/50 backdrop-blur-sm sm:bottom-32 sm:text-[0.72rem]">
        <span className="hidden sm:inline">
          아래 <span className="text-white/80">좌우 버튼</span>으로 장표를 넘길 수 있습니다
        </span>
        <span className="sm:hidden">
          화면을 <span className="text-white/80">좌우로 스와이프</span>해 장표를 넘길 수 있습니다
        </span>
      </p>
    </div>
  );
}
