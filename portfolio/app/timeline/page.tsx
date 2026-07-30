import { Fragment } from 'react';
import SlideDeck from '@/components/deck/SlideDeck';

export default function Timeline() {
  const slides = [
    // 하나의 연속 타임라인 (경험 · 자격 통합, 연대순)
    <Fragment key="timeline">
      <div className="eyebrow">
        <span className="sec">Timeline</span>
      </div>
      <h1 className="head">2023 → 2026</h1>
      <div className="timeline">
        <div className="tl-line">
          <div className="tl">
            <div className="d">2023.09</div>
            <div className="t">AICE Basic</div>
            <div className="r">자격증 · KT</div>
          </div>
          <div className="tl">
            <div className="d">2024.01–12</div>
            <div className="t">메타버스SW · MZ&apos;s Web</div>
            <div className="r">첫 풀사이클 · 코드리뷰 SNS</div>
          </div>
          <div className="tl">
            <div className="d">2024.03–05</div>
            <div className="t">자기주도 동아리</div>
            <div className="r">전공추천 웹 · 능동성</div>
          </div>
          <div className="tl">
            <div className="d">2024.06–09</div>
            <div className="t">국립전파연구원 인턴</div>
            <div className="r">공공기관 · AI 사용법 강의</div>
          </div>
          <div className="tl flag">
            <div className="d">2025.01–12</div>
            <div className="t">종합설계 · TeamTalk</div>
            <div className="r">🏆 최우수상 + 논문 공저</div>
          </div>
          <div className="tl">
            <div className="d">2025.04–11</div>
            <div className="t">뉴노멀 · ATD</div>
            <div className="r">🏆 인재상 · 대기오염 시각화</div>
          </div>
          <div className="tl flag">
            <div className="d">2025.09–10</div>
            <div className="t">지존소프트 인턴</div>
            <div className="r">NAS/DSM · 504 트러블슈팅</div>
          </div>
          <div className="tl flag">
            <div className="d">2025.12–2026.07</div>
            <div className="t">카카오 AIaaS</div>
            <div className="r">하이브리드 클라우드 · MLOps · 운영비 55%↓</div>
          </div>
          <div className="tl">
            <div className="d">2026.01</div>
            <div className="t">AWS CCP</div>
            <div className="r">자격증 · AWS</div>
          </div>
          <div className="tl">
            <div className="d">2026.03</div>
            <div className="t">SQLD</div>
            <div className="r">자격증 · K-DATA</div>
          </div>
          <div className="tl">
            <div className="d">2026.07</div>
            <div className="t">리눅스 마스터 2급</div>
            <div className="r">자격증 · KAIT</div>
          </div>
        </div>
      </div>
    </Fragment>,
  ];

  return <SlideDeck slides={slides} labels={['Timeline']} />;
}
