import { Fragment } from 'react';
import SlideDeck from '@/components/deck/SlideDeck';
import ArchImage from '@/components/deck/ArchImage';

const colRight = { display: 'flex', flexDirection: 'column' as const, gap: 14 };
const colLeft = { display: 'flex', flexDirection: 'column' as const, gap: 18 };

export default function Portfolio() {
  const slides = [
    // 3. AIaaS ① — 개요 & 아키텍처
    <Fragment key="aiaas1">
      <div className="eyebrow">
        <span className="tag-flag">간판</span>
        <span className="sec">Kakao AIaaS · ①</span> 개요 &amp; 아키텍처
      </div>
      <h1 className="head">좋은 모델만큼, 안정적으로 굴리는 환경이 중요합니다</h1>
      <div className="cols">
        <div style={colLeft}>
          <ul className="pts">
            <li>
              영화 대사·발화를 분석해 <b>감정 곡선(Valence·Arousal)</b>을 만들고, 비슷한 감정 패턴의 영화를 추천.
            </li>
            <li>
              내 역할: <b>기획 제외 전 영역</b>(Infra·BE·DB·ML·DevOps·CI/CD) 1인 주도 · 팀장(4K).
            </li>
            <li>
              <b>KakaoCloud(메인)+AWS(DR)</b> 하이브리드 위 셀프매니지드 Kubernetes.
            </li>
          </ul>
          <div className="metric">
            <span className="num">VM 5</span>
            <span className="cap">셀프매니지드 K8s 노드</span>
          </div>
          <div className="chips">
            <span className="chip">Kubernetes</span>
            <span className="chip">KakaoCloud</span>
            <span className="chip">AWS</span>
            <span className="chip">Ansible</span>
          </div>
        </div>
        <div style={colRight}>
          <div className="diagram">
            <div className="flow wrap" style={{ flexDirection: 'column', gap: 8, minWidth: 0 }}>
              <div className="node hl" style={{ minWidth: '100%' }}>
                <div className="nt">vm1 · Master</div>
                <div className="nl">Ingress · NAT · Bastion</div>
                <div className="nd">Prometheus / Grafana 모니터링</div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <div className="node" style={{ flex: 1 }}>
                  <div className="nt">vm2 · Worker</div>
                  <div className="nl">FE Pod ×2</div>
                </div>
                <div className="node" style={{ flex: 1 }}>
                  <div className="nt">vm3 · Worker</div>
                  <div className="nl">BE Pod ×2</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
                <div className="node" style={{ flex: 1 }}>
                  <div className="nt">vm4 · Data</div>
                  <div className="nl">Supabase</div>
                  <div className="nd">내부 PostgreSQL</div>
                </div>
                <div className="node" style={{ flex: 1 }}>
                  <div className="nt">vm5 · GPU</div>
                  <div className="nl">추론 · ML</div>
                  <div className="nd">GPU Operator</div>
                </div>
              </div>
            </div>
          </div>
          <ArchImage
            src="/images/arch/aiaas-system.png"
            alt="4K 시스템 아키텍처"
            width={1709}
            height={1316}
            caption="실제 시스템 아키텍처 — 클릭하면 확대"
          />
          <ArchImage
            src="/images/arch/aiaas-k8s.png"
            alt="쿠버네티스 아키텍처"
            width={1709}
            height={1316}
            caption="쿠버네티스 클러스터 구성"
          />
        </div>
      </div>
    </Fragment>,

    // 4. AIaaS ② — 하이브리드 클라우드 & DR
    <Fragment key="aiaas2">
      <div className="eyebrow">
        <span className="tag-flag">간판</span>
        <span className="sec">Kakao AIaaS · ②</span> 하이브리드 클라우드 &amp; DR
      </div>
      <h1 className="head">무료 자원은 쓰되, 장애 대비는 코드로 심었습니다</h1>
      <div className="cols">
        <div style={colLeft}>
          <ul className="pts">
            <li>
              KakaoCloud 무료 자원 활용 + <b>안정성은 별개</b>라 판단 → <b>DR을 AWS에</b>.
            </li>
            <li>
              <b>Terraform으로 코드화</b>, <b>Route53 헬스체크로 자동 페일오버</b>.{' '}
              <span className="mut">(Burst는 오버스펙 판단으로 포기)</span>
            </li>
            <li>
              <b>NAT GW·EIP 제거</b>(앱·DB 퍼블릭 전환+SG 강화) + <b>DB 다운사이징</b>.
            </li>
          </ul>
          <div className="metric">
            <span className="num">$110 → $49</span>
            <span className="cap">상시 운영비 · 약 55% 절감</span>
          </div>
          <div className="chips">
            <span className="chip">Terraform</span>
            <span className="chip">Route53</span>
            <span className="chip">AWS DR</span>
          </div>
        </div>
        <div style={colRight}>
          <div className="diagram">
            <table className="cost">
              <thead>
                <tr>
                  <th>항목</th>
                  <th style={{ textAlign: 'right' }}>Before</th>
                  <th style={{ textAlign: 'right' }}>After</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>관리형 NAT GW · EIP</td>
                  <td className="n del">$46</td>
                  <td className="n">제거</td>
                </tr>
                <tr>
                  <td>DB EC2</td>
                  <td className="n">t3.medium</td>
                  <td className="n">t3.small</td>
                </tr>
                <tr>
                  <td>DB 절감분</td>
                  <td className="n del">$19</td>
                  <td className="n">−$19</td>
                </tr>
                <tr className="total">
                  <td>월 상시 운영비</td>
                  <td className="n del">$110</td>
                  <td className="n">$49</td>
                </tr>
              </tbody>
            </table>
            <p className="note" style={{ marginTop: 14 }}>
              트레이드오프도 인지 — 퍼블릭+공인IP라 SG 폭발반경↑ →{' '}
              <b>admin_cidrs /32로 제한</b>, 민감 환경이면 NAT 복원이 정석.
            </p>
          </div>
          <ArchImage
            src="/images/arch/aiaas-cloud.png"
            alt="하이브리드 클라우드 아키텍처"
            width={1709}
            height={1316}
            caption="KakaoCloud ↔ AWS DR 하이브리드 구성"
          />
        </div>
      </div>
    </Fragment>,

    // 5. AIaaS ③ — CI/CD(GitOps) & MLOps
    <Fragment key="aiaas3">
      <div className="eyebrow">
        <span className="tag-flag">간판</span>
        <span className="sec">Kakao AIaaS · ③</span> CI/CD(GitOps) &amp; MLOps
      </div>
      <h1 className="head">Git을 단일 진실 소스로, 배포부터 재학습까지</h1>
      <div className="cols">
        <div style={colLeft}>
          <ul className="pts">
            <li>
              <b>GitOps</b> — GitHub Actions → GHCR → Argo CD. <b>롤백 = git revert</b>.
            </li>
            <li>
              <b>MLOps</b> — Argo Workflow(파싱·전처리·학습·스코어링) → KServe 서빙·재학습 루프.
            </li>
            <li>
              솔직히:{' '}
              <span className="mut">
                트리거는 아직 수동, ML은 부딪히며 배우는 중 — 자동화 완성이 프로젝트 마무리.
              </span>
            </li>
          </ul>
          <div className="metric">
            <span className="num">데이터 25%↑</span>
            <span className="cap">재학습 트리거 기준</span>
          </div>
          <div className="chips">
            <span className="chip">GitHub Actions</span>
            <span className="chip">Argo CD</span>
            <span className="chip">Argo Workflow</span>
            <span className="chip">KServe</span>
          </div>
        </div>
        <div className="diagram" style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div>
            <div className="node-label">Deploy · GitOps</div>
            <div className="flow">
              <div className="node">
                <div className="nl">Push</div>
                <div className="nd">GitHub</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="nl">Build</div>
                <div className="nd">Actions → GHCR</div>
              </div>
              <div className="arrow">→</div>
              <div className="node hl">
                <div className="nl">Sync</div>
                <div className="nd">Argo CD → K8s</div>
              </div>
            </div>
          </div>
          <div>
            <div className="node-label">ML · Continuous Training</div>
            <div className="flow">
              <div className="node">
                <div className="nl">수집</div>
                <div className="nd">cron</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="nl">학습</div>
                <div className="nd">Argo Workflow</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="nl">서빙</div>
                <div className="nd">KServe</div>
              </div>
              <div className="arrow">↺</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>,

    // 6. TeamTalk ① — 개요 & 아키텍처
    <Fragment key="tt1">
      <div className="eyebrow">
        <span className="tag-flag">간판</span>
        <span className="sec">TeamTalk · ①</span> 개요 &amp; 아키텍처
      </div>
      <h1 className="head">오케스트레이터가 누가·언제 답할지 조율합니다</h1>
      <div className="cols">
        <div style={colLeft}>
          <ul className="pts">
            <li>
              역할별 소형 모델(개발·디자인·기획) 중 <b>2개 선택</b> →{' '}
              <b>오케스트레이터가 턴을 조율</b>해 토론하듯 답 생성.
            </li>
            <li>
              내 역할: <b>팀장</b> — 맥미니(M4) 홈서버에{' '}
              <b>Ollama·n8n·Nginx 추론 인프라 직접 구축</b> 및 데이터 플로우 설계.
            </li>
            <li>
              무한 루프 방지:{' '}
              <span className="mut">에이전트당 한 턴 0~1회 응답 → 항상 유한 종료.</span>
            </li>
          </ul>
          <div className="metric">
            <span className="num">M4 · 16GB</span>
            <span className="cap">단일 머신 · 역할 3종 중 2택</span>
          </div>
          <div className="chips">
            <span className="chip">Next.js</span>
            <span className="chip">n8n</span>
            <span className="chip">Ollama</span>
            <span className="chip">Nginx</span>
            <span className="chip">Supabase</span>
            <span className="chip">LoRA</span>
          </div>
        </div>
        <div style={colRight}>
          <div className="diagram">
            <div className="flow" style={{ flexDirection: 'column', gap: 8, minWidth: 0 }}>
              <div className="node" style={{ minWidth: '100%' }}>
                <div className="nt">Frontend</div>
                <div className="nl">Next.js</div>
                <div className="nd">입력 + 역할 2택 → webhook</div>
              </div>
              <div className="arrow" style={{ justifyContent: 'center' }}>
                ↓
              </div>
              <div className="node hl" style={{ minWidth: '100%' }}>
                <div className="nt">Orchestrator</div>
                <div className="nl">n8n</div>
                <div className="nd">누가 · 언제 · 답할지 판단</div>
              </div>
              <div className="arrow" style={{ justifyContent: 'center' }}>
                ↓
              </div>
              <div className="node" style={{ minWidth: '100%' }}>
                <div className="nt">Inference</div>
                <div className="nl">Ollama · 역할 LoRA 모델</div>
                <div className="nd">순차 응답 생성</div>
              </div>
              <div className="arrow" style={{ justifyContent: 'center' }}>
                ↓
              </div>
              <div className="node" style={{ minWidth: '100%' }}>
                <div className="nt">Store</div>
                <div className="nl">Supabase · PostgreSQL</div>
                <div className="nd">저장 → 프론트 표시 (+TTS)</div>
              </div>
            </div>
          </div>
          <ArchImage
            src="/images/arch/teamtalk-system.png"
            alt="TeamTalk 시스템 아키텍처"
            width={3058}
            height={1551}
            caption="실제 시스템 아키텍처 — 클릭하면 확대"
          />
          <ArchImage
            src="/images/arch/teamtalk-n8n.png"
            alt="TeamTalk n8n 워크플로우"
            width={1920}
            height={706}
            caption="n8n 오케스트레이션 워크플로우"
          />
        </div>
      </div>
    </Fragment>,

    // 7. TeamTalk ② — 문제 해결 & 성과
    <Fragment key="tt2">
      <div className="eyebrow">
        <span className="tag-flag">간판</span>
        <span className="sec">TeamTalk · ②</span> 문제 해결 &amp; 성과
      </div>
      <h1 className="head">자원 한계를, 최적화와 판단으로 넘어 완성했습니다</h1>
      <div className="cols">
        <div style={colLeft}>
          <ul className="pts">
            <li>
              <b>성능</b> — 여러 모델 상주로 16GB 초과 → <b>지연 로드 + 직렬 큐</b>로 전환.
            </li>
            <li>
              <b>리더십</b> — 3종 풀 학습 불가 인정 → LoRA 역할 분리로 범위 축소, <b>완성 우선</b>.
            </li>
            <li>
              <b>연결</b> — 단일 머신 한계를 느낀 게{' '}
              <span className="mut">클라우드로 넘어간 직접 계기</span>.
            </li>
          </ul>
          <div className="badges">
            <span className="badge">
              <span className="e">🏆</span> 최우수상
            </span>
            <span className="badge">
              <span className="e">📄</span> 논문 1편 공저
            </span>
          </div>
        </div>
        <div className="diagram" style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="bars">
            <div className="bar-row">
              <span className="bl">Before</span>
              <div className="bar-track">
                <div className="bar-fill before">5분+</div>
              </div>
            </div>
            <div className="bar-row">
              <span className="bl">After</span>
              <div className="bar-track">
                <div className="bar-fill after">약 3분</div>
              </div>
            </div>
          </div>
          <div className="metric" style={{ alignSelf: 'flex-start' }}>
            <span className="num">5분 → 3분</span>
            <span className="cap">응답 지연 · lazy load + 직렬 큐</span>
          </div>
          <p className="note">한계도 인지 — 요청이 몰려 큐가 길어지면 이 최적화의 효과는 줄어듭니다.</p>
        </div>
      </div>
    </Fragment>,

    // 8. 지존소프트 — 504 트러블슈팅 · STAR
    <Fragment key="jizon">
      <div className="eyebrow">
        <span className="tag-flag">간판</span>
        <span className="sec">지존소프트 인턴</span> 504 트러블슈팅 · STAR
      </div>
      <h1 className="head">임시 복구가 아니라, 재발 방지까지가 진짜 해결입니다</h1>
      <div className="cols">
        <div style={colLeft}>
          <div className="star">
            <div className="s">
              <div className="k">S · 상황</div>
              <div className="v">
                서버 물리 이전 직후, 웹훅 요청이 전부 <b>504 Timeout</b>.
              </div>
            </div>
            <div className="s">
              <div className="k">T · 진단</div>
              <div className="v">
                레이어별 격리 — curl 정상 / nslookup 정상 / 그런데 Nginx upstream이 <b>옛 IP</b>.
              </div>
            </div>
            <div className="s">
              <div className="k">A · 원인</div>
              <div className="v">
                Nginx가 <b>proxy_pass 도메인을 시작 시 1회만 해석·캐시</b>.
              </div>
            </div>
            <div className="s">
              <div className="k">R · 해결</div>
              <div className="v">
                재시작 복구 후 <b>resolver로 10초마다 동적 재해석</b> → 재발 자동 차단.
              </div>
            </div>
          </div>
          <div className="chips">
            <span className="chip">NAS</span>
            <span className="chip">DSM</span>
            <span className="chip">Docker</span>
            <span className="chip">Nginx</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <div className="diagram">
            <div className="flow" style={{ flexDirection: 'column', gap: 8, minWidth: 0 }}>
              <div className="node" style={{ minWidth: '100%' }}>
                <div className="nt">임시</div>
                <div className="nl">컨테이너 재시작</div>
                <div className="nd">→ 즉시 복구 (근본 아님)</div>
              </div>
              <div className="arrow" style={{ justifyContent: 'center' }}>
                ↓
              </div>
              <div className="node hl" style={{ minWidth: '100%' }}>
                <div className="nt">근본</div>
                <div className="nl">resolver + 변수 proxy_pass</div>
                <div className="nd">10초 주기 동적 재해석 → 재시작 불필요</div>
              </div>
            </div>
          </div>
          <div className="metric" style={{ alignSelf: 'flex-start' }}>
            <span className="num">504 → 0</span>
            <span className="cap">유일한 기업 실무 · 재발 자동 차단</span>
          </div>
        </div>
      </div>
    </Fragment>,
  ];

  return (
    <SlideDeck
      slides={slides}
      labels={[
        'AIaaS 개요',
        'AIaaS 하이브리드 DR',
        'AIaaS CICD MLOps',
        'TeamTalk 개요',
        'TeamTalk 성과',
        '지존소프트 504',
      ]}
    />
  );
}
