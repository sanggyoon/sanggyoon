import { Fragment } from 'react';
import SlideDeck from '@/components/deck/SlideDeck';
import ArchImage from '@/components/deck/ArchImage';
import { GithubIcon } from '@/components/deck/BrandIcons';

export default function Portfolio() {
  const slides = [
    // ────────────────────────────────────────────────────────────
    // PROJECT 01 · Kakao AIaaS (Peakly)
    // ────────────────────────────────────────────────────────────

    // 01-1 · 개요
    <Fragment key="aiaas-overview">
      <div className="split">
        <div className="split-text">
          <div className="proj-index">Project 01 · Kakao AIaaS</div>
          <h1 className="head">
            감정 곡선으로 영화를 추천하는 하이브리드 클라우드 AI 서비스
          </h1>
          <p className="proj-tagline">
            영화의 클라이맥스·감정 곡선을 분석해 비슷한 결의 영화를 추천하는
            서비스 <b>Peakly</b>. 4인 팀 <b>팀장</b>으로 기획을 제외한
            인프라·프론트·백엔드·DB·ML·DevOps <b>전 영역을 주도</b>했습니다.
          </p>
          <div className="chips">
            <span className="chip">Kubernetes (k3s)</span>
            <span className="chip">KakaoCloud</span>
            <span className="chip">AWS</span>
            <span className="chip">Terraform</span>
            <span className="chip">Argo CD</span>
            <span className="chip">GitHub Actions</span>
            <span className="chip">Grafana · Loki</span>
            <span className="chip">k6</span>
          </div>
          <div className="proj-links">
            <a
              className="ghbtn"
              href="https://peakly.sanggyoon.com/"
              target="_blank"
              rel="noopener"
            >
              🌐 peakly.sanggyoon.com <span className="ex">↗</span>
            </a>
            <a
              className="ghbtn"
              href="https://github.com/sanggyoon/202605_KakaoCloud_AIaaS"
              target="_blank"
              rel="noopener"
            >
              <GithubIcon size={18} /> 202605_KakaoCloud_AIaaS{' '}
              <span className="ex">↗</span>
            </a>
          </div>
        </div>
        <div className="split-visual">
          <ArchImage
            src="/images/arch/aiaas-screenshot-2.png"
            alt="Peakly 서비스 대시보드"
            width={3248}
            height={2122}
            caption="Peakly — 감정 기반 영화 추천 대시보드"
          />
        </div>
      </div>
    </Fragment>,

    // 01-2 · 하이브리드 클라우드
    <Fragment key="aiaas-hybrid">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">Kakao AIaaS</span> · 하이브리드 클라우드
          </div>
          <h1 className="head">KakaoCloud를 메인으로, AWS를 DR로</h1>
          <ul className="pts">
            <li>
              제공받은 <b>KakaoCloud</b>를 메인 환경으로, <b>VM 5대 기반 셀프매니지드
              Kubernetes(k3s)</b>로 서비스 운영.
            </li>
            <li>
              정해진 인스턴스에만 머물지 않고 <b>AWS를 DR 환경</b>으로 활용해
              안정적인 서비스를 구성.
            </li>
            <li>
              <b>Route53 헬스체크 기반 자동 페일오버</b>로 장애 시 트래픽을 DR로
              전환.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <ArchImage
            src="/images/arch/aiaas-cloud.png"
            alt="하이브리드 클라우드 · VPC 구성도"
            width={1709}
            height={1316}
            caption="KakaoCloud(메인) + AWS(DR) 멀티 클라우드 구성"
          />
        </div>
      </div>
    </Fragment>,

    // 01-3 · 시스템 · K8s 구성
    <Fragment key="aiaas-system">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">Kakao AIaaS</span> · 시스템 구성
          </div>
          <h1 className="head">Ingress부터 ML·DB까지, K8s 위에서</h1>
          <ul className="pts">
            <li>
              <b>Ingress(Nginx)</b> → FE(Next·React) · BE(FastAPI·uvicorn) ·
              ML(PyTorch) · <b>AI/SVC DB(PostgreSQL)</b>로 이어지는 서비스 구성.
            </li>
            <li>
              <b>Prometheus · Grafana · Loki</b>로 관측하고, <b>HPA</b>로 FE·BE를
              부하에 따라 자동 확장.
            </li>
            <li>
              GitOps 파이프라인(<span className="mut">GitHub Actions → GHCR →
              Argo CD</span>)으로 선언적 배포·롤백.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <ArchImage
            src="/images/arch/aiaas-system.png"
            alt="AIaaS 시스템 구성도"
            width={1709}
            height={1316}
            caption="Ingress · FE · BE · ML · DB · 모니터링 시스템 구성"
          />
        </div>
      </div>
    </Fragment>,

    // 01-4 · DR 비용 최적화 · 자동화
    <Fragment key="aiaas-dr">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">Kakao AIaaS</span> · DR 최적화·자동화
          </div>
          <h1 className="head">DR 비용은 55% 낮추고, 페일오버는 자동으로</h1>
          <ul className="pts">
            <li>
              DR 환경에서 관리형 <b>NAT Gateway·EIP 제거</b>, 앱·DB를 퍼블릭
              서브넷+공인 IP로 전환하고 <b>Security Group으로 인바운드 최소화</b>.
            </li>
            <li>
              DB 인스턴스를 <b>t3.medium → t3.small</b>로 다운사이징.
            </li>
            <li>
              <b>Terraform</b>으로 AWS DR 인프라를 코드화, 네임서버를
              가비아 → <b>Route53</b>으로 이관 후 <b>헬스체크 기반 자동
              페일오버</b>를 구현·테스트.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <div className="metric-row">
            <div className="metric">
              <div className="num">$49</div>
              <div className="cap">월 상시 운영비 (기존 $110)</div>
            </div>
            <div className="metric">
              <div className="num">−55%</div>
              <div className="cap">DR 상시 운영비 절감</div>
            </div>
            <div className="metric">
              <div className="num">자동</div>
              <div className="cap">Route53 헬스체크 페일오버</div>
            </div>
          </div>
          <p className="note">
            상시 비용을 줄이면서도 헬스체크 기반 자동 전환으로 가용성은 유지.
          </p>
        </div>
      </div>
    </Fragment>,

    // 01-5 · 부하 테스트
    <Fragment key="aiaas-load">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">Kakao AIaaS</span> · 부하 테스트
          </div>
          <h1 className="head">병목을 데이터로 규명하고 한계를 5배까지</h1>
          <ul className="pts">
            <li>
              별도 VPC·VM에 <b>k6</b>를 구성해 실서비스 영향 없이 점진 램프업
              (<span className="mut">p95 3s·에러율 5% 초과 시 자동 중단</span>).
            </li>
            <li>
              경로별(FE·DB·BE) 분리 계측 + Grafana·Loki로 HPA·CPU 실시간 관찰.
            </li>
            <li>
              <b>병목 규명:</b> ~713 VU에서 <b>단일 DB 노드 CPU 100% 포화</b>가
              천장임을 입증.
            </li>
            <li>
              <b>캐시 개선</b>(라우트 캐싱 1h + 페이로드 축소)으로 DB 천장 제거 →
              한계 ~700 → <b>2000+ VU</b>.
            </li>
            <li>
              FE <b>HPA max 8→16</b> 상향으로 붕괴점 <b>~3600 VU</b>(초기 대비
              ~5배), 천장이 app 노드로 이동함을 확인.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <div className="diagram">
            <div className="node-label">한계 이동 (붕괴점 VU)</div>
            <div className="growth">
              <div className="step">
                <div className="n">1차 · 기본</div>
                <div className="t">~700 VU</div>
                <div className="s">단일 DB 천장</div>
              </div>
              <div className="step">
                <div className="n">2차 · 캐시 개선</div>
                <div className="t">2000+ VU</div>
                <div className="s">DB 천장 제거</div>
              </div>
              <div className="step">
                <div className="n">3차 · HPA 상향</div>
                <div className="t">~3600 VU</div>
                <div className="s">app 노드로 이동</div>
              </div>
            </div>
          </div>
          <div className="metric-row">
            <div className="metric">
              <div className="num">0.66s</div>
              <div className="cap">p95 응답 (기존 4.5s)</div>
            </div>
            <div className="metric">
              <div className="num">20%</div>
              <div className="cap">DB CPU (기존 100%)</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>,

    // ────────────────────────────────────────────────────────────
    // PROJECT 02 · TeamTalk (ABORA)
    // ────────────────────────────────────────────────────────────

    // 02-1 · 개요
    <Fragment key="teamtalk-overview">
      <div className="split">
        <div className="split-text">
          <div className="proj-index">Project 02 · TeamTalk (ABORA)</div>
          <h1 className="head">
            역할이 나뉜 멀티 AI 에이전트가 협업하는 대화 서비스
          </h1>
          <p className="proj-tagline">
            4인 팀 <b>팀장</b>으로 인프라·백엔드 중심 풀스택 담당. 멀티 AI
            에이전트 상호작용 서비스(ABORA)를 <b>v1 설계 후 v2로 재설계·고도화</b>
            했습니다. <b>🏆 최우수상 · 논문 공저</b>.
          </p>
          <div className="chips">
            <span className="chip">Ollama</span>
            <span className="chip">n8n</span>
            <span className="chip">FastAPI</span>
            <span className="chip">Nginx</span>
            <span className="chip">Supabase · PostgreSQL</span>
            <span className="chip">Next · Three · React</span>
            <span className="chip">LoRA</span>
          </div>
          <div className="proj-links">
            <a
              className="ghbtn"
              href="https://github.com/sanggyoon/202503-ABORA-multi_agent_system_v1"
              target="_blank"
              rel="noopener"
            >
              <GithubIcon size={18} /> ABORA v1 <span className="ex">↗</span>
            </a>
            <a
              className="ghbtn"
              href="https://github.com/sanggyoon/202509-ABORA-multi_agent_system_v2"
              target="_blank"
              rel="noopener"
            >
              <GithubIcon size={18} /> ABORA v2 <span className="ex">↗</span>
            </a>
            <a
              className="ghbtn"
              href="https://selab.hongik.ac.kr/selab/data/papers/IAAI%EA%B9%80%EC%83%81%EA%B7%A0.pdf"
              target="_blank"
              rel="noopener"
            >
              📄 논문 (PDF) <span className="ex">↗</span>
            </a>
          </div>
        </div>
        <div className="split-visual">
          <ArchImage
            src="/images/arch/teamtalk-screenshot-1.png"
            alt="TeamTalk 대화 화면"
            width={604}
            height={373}
            caption="역할별 에이전트가 참여하는 대화 화면"
          />
        </div>
      </div>
    </Fragment>,

    // 02-2 · 아키텍처
    <Fragment key="teamtalk-arch">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">TeamTalk</span> · 아키텍처
          </div>
          <h1 className="head">역할별 소형 모델 + 오케스트레이터</h1>
          <ul className="pts">
            <li>
              역할별 <b>소형 모델(Qwen·Llama·Mistral, 7~8B)</b> + 오케스트레이터
              구조를 <b>n8n</b>으로 구성.
            </li>
            <li>
              모노리식 프로토타입(v1) → <b>프론트/백엔드 분리 구조(v2)</b>로
              재정비, 프론트→백엔드→DB 저장까지 일관된 데이터 흐름.
            </li>
            <li>
              <b>Mac mini 홈서버(M4·16GB)</b>에 Ollama·n8n·Nginx로 온프레미스
              추론 환경 구성.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <ArchImage
            src="/images/arch/teamtalk-system.png"
            alt="TeamTalk 컨테이너 시스템 구성도"
            width={3058}
            height={1551}
            caption="컨테이너 기반 온프레미스 추론 · 서비스 구성"
          />
        </div>
      </div>
    </Fragment>,

    // 02-3 · n8n 오케스트레이션
    <Fragment key="teamtalk-n8n">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">TeamTalk</span> · 오케스트레이션
          </div>
          <h1 className="head">누가 언제 응답할지, n8n이 조율합니다</h1>
          <ul className="pts">
            <li>
              사용자 입력에 대해 <b>어떤 역할 모델이 언제 응답할지</b>{' '}
              라우팅·조율하는 협업 파이프라인을 설계.
            </li>
            <li>
              planner · designer · developer 역할 에이전트를 스위치로 분기하고,{' '}
              <b>Postgres 메모리</b>로 대화 맥락을 유지.
            </li>
            <li>
              로컬 LLM 상주 서빙 + <b>리버스 프록시(Nginx)</b> 기반 요청 처리.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <ArchImage
            src="/images/arch/teamtalk-n8n.png"
            alt="n8n 오케스트레이션 워크플로우"
            width={1920}
            height={706}
            caption="n8n 협업 파이프라인 — 역할별 에이전트 라우팅"
          />
        </div>
      </div>
    </Fragment>,

    // 02-4 · 성능 최적화
    <Fragment key="teamtalk-perf">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">TeamTalk</span> · 성능 최적화
          </div>
          <h1 className="head">응답 5분 → 3분, 약 40% 단축</h1>
          <ul className="pts">
            <li>
              <b>원인 ① 메모리 초과:</b> 소형 모델 다수 동시 상주로 16GB 부족 →
              SSD 스와핑으로 급격히 느려짐.
            </li>
            <li>
              <b>원인 ② 자원 충돌:</b> 여러 모델 동시 추론으로 CPU·메모리 경쟁,
              동시 처리가 오히려 지연.
            </li>
            <li>
              <b>대응 ① 지연 로드:</b> 차례가 온 모델만 메모리에 적재해 스와핑
              제거 (<span className="mut">첫 호출 로딩 지연은 감수</span>).
            </li>
            <li>
              <b>대응 ② 직렬 큐:</b> 요청을 순서대로 처리해 자원을 온전히 점유,
              응답 시간을 예측 가능하게.
            </li>
            <li>
              리소스 제약 대응: 전체 파인튜닝 대신 <b>LoRA 기반 역할 분리 학습</b>.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <div className="metric-row">
            <div className="metric">
              <div className="num">3분</div>
              <div className="cap">응답 시간 (기존 5분+)</div>
            </div>
            <div className="metric">
              <div className="num">−40%</div>
              <div className="cap">응답 시간 단축</div>
            </div>
            <div className="metric">
              <div className="num">16GB</div>
              <div className="cap">단일 노드 · Mac mini M4</div>
            </div>
          </div>
          <div className="diagram">
            <div className="node-label">최적화 기법</div>
            <div className="flow">
              <div className="node">
                <div className="nt">Load</div>
                <div className="nl">지연 로드</div>
                <div className="nd">스와핑 제거</div>
              </div>
              <div className="arrow">+</div>
              <div className="node">
                <div className="nt">Queue</div>
                <div className="nl">직렬 큐</div>
                <div className="nd">자원 온전 점유</div>
              </div>
              <div className="arrow">→</div>
              <div className="node hl">
                <div className="nt">Result</div>
                <div className="nl">3분</div>
                <div className="nd">예측 가능한 응답</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>,

    // ────────────────────────────────────────────────────────────
    // PROJECT 03 · 지존소프트 인턴
    // ────────────────────────────────────────────────────────────

    // 03-1 · 개요
    <Fragment key="zg-overview">
      <div className="split">
        <div className="split-text">
          <div className="proj-index">Project 03 · 지존소프트 인턴</div>
          <h1 className="head">NAS 위에 사내 인프라를 새로 세웠습니다</h1>
          <p className="proj-tagline">
            개발부 인턴으로 참여해, <b>Synology NAS(DSM)</b>에 메일 서버(SMTP) ·
            Supabase · 웹 서비스 배포 등 <b>인프라를 신규 구축</b>했습니다.
          </p>
          <div className="chips">
            <span className="chip">Synology DSM</span>
            <span className="chip">SMTP</span>
            <span className="chip">Supabase</span>
            <span className="chip">Nginx</span>
            <span className="chip">Docker</span>
          </div>
        </div>
        <div className="split-visual">
          <div className="diagram">
            <div className="node-label">NAS 신규 구축 (Synology DSM)</div>
            <div className="flow wrap">
              <div className="node hl">
                <div className="nt">Host</div>
                <div className="nl">Synology NAS</div>
                <div className="nd">DSM</div>
              </div>
              <div className="arrow">→</div>
              <div className="node">
                <div className="nt">Mail</div>
                <div className="nl">메일 서버</div>
                <div className="nd">SMTP</div>
              </div>
              <div className="node">
                <div className="nt">Data</div>
                <div className="nl">Supabase</div>
                <div className="nd">PostgreSQL</div>
              </div>
              <div className="node">
                <div className="nt">Web</div>
                <div className="nl">웹 서비스</div>
                <div className="nd">배포</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>,

    // 03-2 · 504 장애 상황·분석
    <Fragment key="zg-incident">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">지존소프트</span> · 트러블슈팅
          </div>
          <h1 className="head">베타 운영 중 웹 요청이 전부 504</h1>
          <ul className="pts">
            <li>
              <b>상황:</b> 백엔드 서버 이전(하드웨어 물리적 위치 변경) 직후 웹
              요청이 모두 <b>504</b>로 차단.
            </li>
            <li>
              <b>분석:</b> 레이어별로 각 엔드포인트부터 추적
              (<span className="mut">클라이언트→서버, 서버→클라이언트</span>).
            </li>
            <li>
              <b>원인:</b> Nginx가 시작 시 해석한 <b>이전 서버 IP를 계속 참조하는
              DNS 캐싱</b>.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <div className="diagram">
            <div className="node-label">요청 경로 · 병목 지점</div>
            <div className="flow">
              <div className="node">
                <div className="nt">Client</div>
                <div className="nl">클라이언트</div>
                <div className="nd">웹 요청</div>
              </div>
              <div className="arrow">→</div>
              <div className="node hl">
                <div className="nt">Nginx</div>
                <div className="nl">DNS 캐싱</div>
                <div className="nd">옛 IP 계속 참조</div>
              </div>
              <div className="arrow">✗</div>
              <div className="node">
                <div className="nt">Backend</div>
                <div className="nl">이전된 서버</div>
                <div className="nd">새 IP</div>
              </div>
            </div>
          </div>
          <div className="metric-row">
            <div className="metric">
              <div className="num">504</div>
              <div className="cap">웹 요청 전면 차단</div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>,

    // 03-3 · 조치·결과
    <Fragment key="zg-fix">
      <div className="split">
        <div className="split-text">
          <div className="eyebrow">
            <span className="sec">지존소프트</span> · 조치·결과
          </div>
          <h1 className="head">10초마다 재해석, 재발은 0건</h1>
          <ul className="pts">
            <li>
              <b>즉시 복구:</b> 컨테이너 재시작으로 서비스 우선 정상화.
            </li>
            <li>
              <b>근본 조치:</b> Nginx <b>resolver</b> + 변수 기반{' '}
              <b>proxy_pass</b>를 적용해 <b>10초마다 도메인을 재해석</b>.
            </li>
            <li>
              <b>결과:</b> 서버 IP 변경 시 사람 개입 없이 자동 반영, 이후{' '}
              <b>동일 원인 장애 0건</b>. 문서화하여 사내 커뮤니티에 저장.
            </li>
          </ul>
        </div>
        <div className="split-visual">
          <div className="metric-row">
            <div className="metric">
              <div className="num">10초</div>
              <div className="cap">도메인 재해석 주기</div>
            </div>
            <div className="metric">
              <div className="num">0건</div>
              <div className="cap">이후 동일 원인 장애</div>
            </div>
            <div className="metric">
              <div className="num">무중단</div>
              <div className="cap">IP 변경 자동 반영</div>
            </div>
          </div>
          <p className="note">
            일회성 복구에서 끝내지 않고, 사람이 개입하지 않아도 되는 구조로
            바꿔 재발을 원천 차단.
          </p>
        </div>
      </div>
    </Fragment>,
  ];

  return (
    <SlideDeck
      slides={slides}
      labels={[
        'AIaaS · 개요',
        'AIaaS · 하이브리드 클라우드',
        'AIaaS · 시스템 구성',
        'AIaaS · DR 최적화',
        'AIaaS · 부하 테스트',
        'TeamTalk · 개요',
        'TeamTalk · 아키텍처',
        'TeamTalk · n8n',
        'TeamTalk · 성능 최적화',
        '지존소프트 · 개요',
        '지존소프트 · 504 장애',
        '지존소프트 · 조치·결과',
      ]}
    />
  );
}
