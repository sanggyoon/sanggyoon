import { Fragment } from 'react';
import Image from 'next/image';
import SlideDeck from '@/components/deck/SlideDeck';

const facts = (
  <dl className="facts">
    <div className="fact">
      <dt>생년월일</dt>
      <dd>1999.05.18</dd>
    </div>
    <div className="fact">
      <dt>학력</dt>
      <dd>홍익대학교 소프트웨어융합학과 · 2026 졸업</dd>
    </div>
    <div className="fact">
      <dt>MBTI</dt>
      <dd>ISTJ</dd>
    </div>
  </dl>
);

export default function PersonalInfo() {
  const slides = [
    // 1. COVER — 좌: 소개 / 우: 사진
    <Fragment key="cover">
      <div className="split">
        <div className="split-text">
          <div className="kick">About Me · 2026</div>
          <div className="cover-rule" />
          <h1>호기심부터 시작하는 개발자</h1>
          {/* <p className="sub">
            대학에서 다루지 않는 것도 직접 만들어 보며 배우는 인프라
            개발자입니다.
          </p> */}
          <div className="who">
            <span className="nm">김상균</span>
            <span className="role">Cloud / Infra Engineer</span>
          </div>
          {facts}
        </div>
        <div className="split-visual">
          <div className="cover-photo">
            <Image
              src="/images/sanggyoon1.png"
              alt="김상균 프로필 사진"
              width={1137}
              height={1513}
              priority
              sizes="(max-width: 760px) 60vw, 34vw"
            />
          </div>
        </div>
      </div>
    </Fragment>,

    // 2. 호기심 · 경험 — 좌: 서사 / 우: 성장 다이어그램
    <Fragment key="curiosity">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">About Me</span> · 호기심
          </div>
          <h1 className="head">모르면, 직접 만들어 봅니다</h1>
          <p className="lead">
            대학에서 다루지 않는 인프라를 직접 탐구하려고 도메인 · 공유기 · 미니
            PC를 사서 서버를 세우고 운영해 왔습니다.
          </p>
          <ul className="pts">
            <li>
              <b>개인 서버</b>로 웹 퍼블리싱 · 로컬 LLM · 게임 서버 ·{' '}
              <span className="mut">iCloud + Obsidian + Claude</span> 기반 AI
              개인비서까지 계속 실험 중.
            </li>
            <li>
              <b>스타트업 인턴</b>으로 회사 NAS 인프라를 구축하며 OS·네트워크를
              실무로 익힘.
            </li>
            <li>
              <b>카카오엔터프라이즈 클라우드 과정</b>에서 Kubernetes·CI/CD로
              관심 영역을 확장.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <div className="diagram">
            <div className="node-label">직접 쌓아온 인프라 여정</div>
            <div className="growth">
              <div className="step">
                <div className="n">01 · 개인</div>
                <div className="t">홈서버</div>
                <div className="s">미니 PC · 직접 구축·운영</div>
              </div>
              <div className="arrow" style={{ flex: 0 }}>
                →
              </div>
              <div className="step">
                <div className="n">02 · 기업 실무</div>
                <div className="t">NAS</div>
                <div className="s">DSM · OS·네트워크</div>
              </div>
              <div className="arrow" style={{ flex: 0 }}>
                →
              </div>
              <div className="step">
                <div className="n">03 · 스케일업</div>
                <div className="t">클라우드</div>
                <div className="s">K8s · CI/CD</div>
              </div>
            </div>
          </div>
          <div className="chips">
            <span className="chip">웹 퍼블리싱</span>
            <span className="chip">로컬 LLM</span>
            <span className="chip">게임 서버</span>
            <span className="chip">AI 개인비서</span>
          </div>
        </div>
      </div>
    </Fragment>,

    // 3. 좌우명 · 지향점 — 좌: 좌우명 / 우: 가치 흐름
    <Fragment key="motto">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">About Me</span> · 좌우명
          </div>
          <blockquote className="motto">
            무리해서 쌓은 하루보다
            <br />잘 쌓은 하루
          </blockquote>
          <p className="motto-body">
            무리한 속도보다 <b>원리 이해와 완결</b>을 중시합니다. 급하게 낸
            코드는 얼마 못 가 다시 손봐야 했지만,{' '}
            <b>원리를 이해하고 넘어간 것들은 오래 남았습니다.</b> 모르면 직접
            만들어 보고, 막히면 근본까지 파고드는 태도로{' '}
            <b>한 번 맡기면 팀이 안심하고 기댈 수 있는 인프라 개발자</b>를
            지향합니다.
          </p>
        </div>
        <div className="split-visual">
          <div className="diagram">
            <div className="node-label">일하는 방식</div>
            <div className="flow">
              <div className="node hl">
                <div className="nt">Principle</div>
                <div className="nl">원리 이해</div>
                <div className="nd">왜 이렇게 동작하는지부터</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="nt">Completion</div>
                <div className="nl">제대로 완결</div>
                <div className="nd">끝까지 마무리·문서화</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="nt">Trust</div>
                <div className="nl">신뢰</div>
                <div className="nd">한 번 맡기면 믿는 인프라</div>
              </div>
            </div>
          </div>
          <p className="note">
            팀이 안심하고 기댈 수 있는 엔지니어가 되는 것이 목표입니다.
          </p>
        </div>
      </div>
    </Fragment>,
  ];

  return (
    <SlideDeck
      slides={slides}
      labels={['표지', '호기심·경험', '좌우명']}
      variants={['cover', '', '']}
    />
  );
}
