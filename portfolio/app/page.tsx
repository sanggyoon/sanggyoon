'use client';
import { useRef } from 'react';

import Lanyard from '@/components/Lanyard';
import LightRays from '@/components/LightRays';

export default function Home() {
  const containerRef = useRef(null);

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
    </div>
  );
}
