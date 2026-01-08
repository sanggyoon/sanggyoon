'use client';

import styles from './page.module.css';
// react bits 컴포넌트 가져오기
import Lanyard from '@/components/Lanyard';
import LightRays from '@/components/LightRays';

export default function Home() {
  return (
    <div className={styles.page}>
      <div style={{ width: '100%', height: '600px', position: 'relative' }}>
        <LightRays
          raysOrigin="top-center"
          raysColor="#00ffff"
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
    </div>
  );
}
