'use client';
import { useRef } from 'react';

import Lanyard from '@/components/Lanyard';
import LightRays from '@/components/LightRays';
import Shuffle from '@/components/Shuffle';

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

      <div
        ref={containerRef}
        style={{
          position: 'relative',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          paddingBottom: '56px',
          zIndex: 2,
        }}
      >
        <Shuffle
          text="Hello World"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={false}
          triggerOnHover
          respectReducedMotion={true}
          loop={false}
          loopDelay={0}
        />
      </div>
    </div>
  );
}
