import { Fragment } from 'react';
import SlideDeck from '@/components/deck/SlideDeck';

const contacts = (
  <div className="contacts" style={{ alignContent: 'start' }}>
    <a href="mailto:sangreal4262@gmail.com">
      <span className="lb">✉</span> sangreal4262@gmail.com
    </a>
    <a
      href="https://github.com/sanggyoon/202605_KakaoCloud_AIaaS"
      target="_blank"
      rel="noopener"
    >
      <span className="lb">GitHub</span> sanggyoon
    </a>
    <a href="https://velog.io/@sanggyoon/posts" target="_blank" rel="noopener">
      <span className="lb">Blog</span> velog.io/@sanggyoon
    </a>
  </div>
);

export default function Timeline() {
  const slides = [
    // 9. TIMELINE
    <Fragment key="timeline">
      <div className="eyebrow">
        <span className="sec">Experience Timeline</span>
      </div>
      <h1 className="head">2024 → 2026, 하나의 성장선</h1>
      <p className="lead">
        7개 경험 중 <b style={{ color: 'var(--accent-ink)' }}>간판 3개</b>가 홈서버 → 기업 →
        클라우드의 축을 이룹니다.
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
      <p className="note">◆ 표시 = 간판 3개. 시기가 겹치는 활동은 시작일 기준으로 배열.</p>
    </Fragment>,

    // 10. CERTS & AWARDS
    <Fragment key="certs">
      <div className="eyebrow">
        <span className="sec">Certifications &amp; Awards</span>
      </div>
      <h1 className="head">이론은 자격증으로, 실무는 수상으로 검증했습니다</h1>
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
      <p className="note">
        <b>AWS CCP(클라우드) + SQLD(데이터) + 리눅스 마스터(OS 운영)</b> 조합이 클라우드/인프라
        타깃과 직결. 다음 목표는 CKA/CKAD.
      </p>
    </Fragment>,

    // 11. CLOSING
    <Fragment key="closing">
      <div className="thanks">Closing</div>
      <div className="cover-rule" />
      <h1>
        말이 통하는
        <br />
        인프라 개발자가 되겠습니다
      </h1>
      <div className="cols" style={{ alignItems: 'start', marginTop: 6 }}>
        <ul className="pts">
          <li>
            전공자·비전공자 모두에게 <b>쉽게 설명하고, 의도를 정확히 파악</b>하는 개발자.
          </li>
          <li>
            장애 앞에서 <b>침착하게, 근본 원인까지, 재발은 자동화로.</b>
          </li>
        </ul>
        {contacts}
      </div>
      <p className="thanks" style={{ marginTop: 10 }}>
        감사합니다.
      </p>
    </Fragment>,
  ];

  return (
    <SlideDeck
      slides={slides}
      labels={['경험 타임라인', '자격증 수상', 'Closing']}
      variants={['', '', 'closing']}
    />
  );
}
