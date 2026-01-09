'use client';

// 임포트
import { useRef } from 'react';

// 모듈 스타일
// import styles from './page.module.css';

// react bits 컴포넌트 가져오기
import Lanyard from '@/components/Lanyard';
import LightRays from '@/components/LightRays';
import VariableProximity from '@/components/VariableProximity';

export default function Home() {
  const containerRef = useRef(null);

  return (
    <>
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
          minHeight: '100vh', // 전체 화면 높이
          padding: '50px', // 충분한 패딩
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <VariableProximity
          label={
            'Hover me! And then star React Bits on GitHub, or else... l;askdfjl;sadkfj;llakfsd'
          }
          style={{
            fontSize: '3rem', // 큰 폰트 크기 추가
            fontWeight: 400,
            lineHeight: 1.2,
          }}
          className="variable-proximity"
          fromFontVariationSettings="'wght' 400, 'opsz' 9"
          toFontVariationSettings="'wght' 1000, 'opsz' 40"
          containerRef={containerRef}
          radius={100}
          falloff="linear"
        />
      </div>
    </>
  );
}
