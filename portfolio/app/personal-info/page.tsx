import { Fragment } from 'react';
import SlideDeck from '@/components/deck/SlideDeck';

const contacts = (
  <div className="contacts">
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

export default function PersonalInfo() {
  const slides = [
    // 1. COVER
    <Fragment key="cover">
      <div className="kick">Portfolio · 2026</div>
      <div className="cover-rule" />
      <h1>
        말이 통하는
        <br />
        인프라 개발자
      </h1>
      <p className="sub">
        외운 CS를 손으로 증명하고, 전공자·비전공자 누구와도 말이 통하게 일합니다.
      </p>
      <div className="who">
        <span className="nm">김상균</span>
        <span className="role">Cloud / Infra Engineer</span>
      </div>
      {contacts}
    </Fragment>,

    // 2. ABOUT ME
    <Fragment key="about">
      <div className="eyebrow">
        <span className="sec">About Me</span>
      </div>
      <h1 className="head">홈서버에서 클라우드까지, 손으로 부딪혀 왔습니다</h1>
      <div className="cols">
        <div>
          <ul className="pts">
            <li>
              학교 커리큘럼(프론트·백·DB) 밖의 <b>인프라·클라우드를 스스로 찾아</b> 익혔습니다.
            </li>
            <li>
              졸업작품 홈서버·인턴 NAS에서 <b>암기했던 OS·네트워크·프로토콜을 체감</b>했습니다.
            </li>
            <li>
              그 확신이 <b>카카오 AIaaS의 클라우드·K8s</b>로 이어졌습니다.
            </li>
          </ul>
          <p className="note" style={{ marginTop: 18 }}>
            ISTJ · 정서 안정 — <b>장애 상황에서도 침착</b>하게 대응하는 기질.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="diagram">
            <div className="growth">
              <div className="step">
                <div className="n">01 · 개인</div>
                <div className="t">홈서버</div>
                <div className="s">맥미니 · 직접 구축</div>
              </div>
              <div className="arrow" style={{ flex: 0 }}>
                →
              </div>
              <div className="step">
                <div className="n">02 · 기업 실무</div>
                <div className="t">NAS</div>
                <div className="s">DSM · 운영·장애</div>
              </div>
              <div className="arrow" style={{ flex: 0 }}>
                →
              </div>
              <div className="step">
                <div className="n">03 · 스케일업</div>
                <div className="t">클라우드</div>
                <div className="s">K8s · 하이브리드</div>
              </div>
            </div>
          </div>
          <div className="chips">
            <span className="chip">실행력</span>
            <span className="chip">근본원인·재발 자동화</span>
            <span className="chip">문서화·IaC</span>
          </div>
        </div>
      </div>
    </Fragment>,
  ];

  return (
    <SlideDeck
      slides={slides}
      labels={['표지', 'About Me']}
      variants={['cover', '']}
    />
  );
}
