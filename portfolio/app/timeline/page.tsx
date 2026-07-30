import { Fragment } from 'react';
import SlideDeck from '@/components/deck/SlideDeck';

export default function Timeline() {
  const slides = [
    // 경험 타임라인 + 자격·수상 — 하나의 스크롤 페이지
    <Fragment key="timeline">
      <div className="eyebrow">
        <span className="sec">Experience Timeline</span>
      </div>
      <h1 className="head">2024 → 2026, 하나의 성장선</h1>
      <p className="lead">
        7개 경험 중{' '}
        <b style={{ color: 'var(--accent-ink)' }}>간판 3개</b>가 홈서버 → 기업 →
        클라우드의 축을 이룹니다. (◆ = 간판 3개, 겹치는 활동은 시작일 기준)
      </p>

      <div className="timeline">
        <div className="tl-line">
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
            <div className="d">2025.12–2026.07 · 완료</div>
            <div className="t">카카오 AIaaS</div>
            <div className="r">✅ 하이브리드 클라우드 · MLOps · 운영비 55%↓</div>
          </div>
        </div>
      </div>

      <div className="eyebrow" style={{ marginTop: 10 }}>
        <span className="sec">Certifications &amp; Awards</span>
      </div>
      <p className="lead">
        <b>AWS CCP + SQLD + 리눅스 마스터</b> 조합이 클라우드/인프라 타깃과 직결.
        실무 성과는 <b>최우수상 · 인재상</b>으로 확인. 다음 목표는 <b>CKA / CKAD</b>.
      </p>

      <div className="grid3">
        <div className="cert">
          <div className="cn">AWS CCP</div>
          <div className="cd">2026.01 · AWS</div>
          <div className="cx">Certified Cloud Practitioner — 클라우드 기초·보안</div>
        </div>
        <div className="cert">
          <div className="cn">SQLD</div>
          <div className="cd">2026.03 · K-DATA</div>
          <div className="cx">SQL 개발 — 데이터 모델링·질의</div>
        </div>
        <div className="cert">
          <div className="cn">리눅스 마스터 2급</div>
          <div className="cd">2025.07 · KAIT</div>
          <div className="cx">리눅스 시스템 운영·관리</div>
        </div>
        <div className="cert">
          <div className="cn">AICE Basic</div>
          <div className="cd">2023.09 · KT</div>
          <div className="cx">AutoML 기반 데이터 분석·모델링</div>
        </div>
      </div>

      <div className="award-row">
        <div className="award">
          <div className="aw">🏆 최우수상</div>
          <div className="as">종합설계 · TeamTalk</div>
        </div>
        <div className="award">
          <div className="aw">🏆 인재상</div>
          <div className="as">뉴노멀 · ATD Korea 협력</div>
        </div>
      </div>
    </Fragment>,
  ];

  return <SlideDeck slides={slides} labels={['Timeline']} />;
}
