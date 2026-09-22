/**
 * 포트폴리오의 모든 내용. 레이아웃은 components/Slide.tsx가 담당하고,
 * 여기서는 문구만 고치면 된다. 문자열 안의 **굵게** 는 강조로 렌더링된다.
 *
 * 프로젝트 하나는 보통 이 순서로 흐른다:
 *   project(개요) → story(목표·문제 인식) → story(문제 해결 사례 × N) → lessons(교훈·한계)
 */

export type Img = { src: string; alt: string; w: number; h: number };
export type Metric = { value: string; label: string };
export type LinkItem = { label: string; href?: string; value: string };
/** 라벨(목표·문제·원인·조치·결과 …)이 붙은 한 덩어리 */
export type Step = { label: string; points: string[] };
export type Table = { head: string[]; rows: string[][] };

export type Slide =
  | {
      kind: 'cover';
      name: string;
      facts: [string, string][];
      photo: Img;
    }
  | {
      kind: 'agenda';
      title: string;
      items: { no: string; title: string; desc: string }[];
    }
  | {
      kind: 'project';
      no: string;
      title: string;
      summary: string;
      facts: [string, string][];
      /** 서비스가 동작하는 흐름, 한 단계씩 */
      flow?: string[];
      links: LinkItem[];
      image?: Img;
    }
  | {
      kind: 'story';
      section: string;
      title: string;
      steps: Step[];
      table?: Table;
      code?: { caption: string; text: string };
      metrics?: Metric[];
      image?: Img;
      /** 비교용 이미지 여러 장, 본문 아래 나란히 */
      gallery?: Img[];
    }
  | {
      kind: 'lessons';
      section: string;
      title: string;
      lessons: { title: string; body: string }[];
      next?: string[];
    }
  | {
      kind: 'timeline';
      title: string;
      groups: {
        name: string;
        items: { date: string; title: string; note?: string; desc?: string }[];
      }[];
    }
  | { kind: 'contact'; title: string; links: LinkItem[] };

const AIAAS = 'Project 01 · 카카오 AIaaS';
const WANTED = 'Project 02 · Wanted AI Championship';
const TEAMTALK = 'Project 03 · TeamTalk';
const ZG = 'Project 04 · 지존소프트 인턴';
const HOME = 'Project 05 · 홈서버 운영';

export const slides: Slide[] = [
  {
    kind: 'cover',
    name: '김상균',
    facts: [
      ['학력', '홍익대학교 소프트웨어융합학과 · 2026 졸업'],
      ['자격', 'AWS CCP · SQLD · 리눅스마스터 2급 · AICE Basic'],
      ['Email', 'sangreal4262@gmail.com'],
      ['GitHub', 'github.com/sanggyoon'],
    ],
    photo: {
      src: '/images/sanggyoon1.png',
      alt: '김상균 프로필 사진',
      w: 1137,
      h: 1513,
    },
  },
  {
    kind: 'story',
    section: 'About',
    title: "'질문은 해답보다 중요하다.' 질문을 위해 움직이는 개발자입니다.",
    steps: [
      {
        label: '시작',
        points: [
          '학교 커리큘럼은 프론트·백엔드·DB까지였고, 인프라·클라우드를 다뤄 볼 기회는 없었습니다.',
          '그래서 **도메인·공유기·미니 PC를 직접 사서 홈서버를 세우고 운영**했습니다. 웹 퍼블리싱, 로컬 LLM, 게임 서버, AI 개인비서(iCloud + Obsidian + Claude)등 다양한 시도를 했습니다.',
        ],
      },
      {
        label: '확장',
        points: [
          '**홈서버** (졸업작품 추론 서버) → **기업 NAS** (스타트업 인턴, 사내 인프라 구축) → **클라우드** (카카오 AIaaS, Kubernetes·하이브리드 DR) 순으로 규모를 넓혀 왔습니다.',
          '단계마다 앞에서 느낀 한계가 다음 단계의 목표가 됐습니다. 단일 머신의 한계와 수동 배포의 불편이 K8s와 GitOps로 이어졌습니다.',
        ],
      },
      {
        label: '일하는 방식',
        points: [
          '좌우명은 **"무리해서 쌓은 하루보다 잘 쌓은 하루"** 입니다. 양보다 방향을 제대로 잡고 끝까지 완결하는 것을 중요하게 생각합니다.',
          '장애는 임시 복구로 끝내지 않고 **재발 방지까지 자동화**하고, 작업은 **문서와 코드(IaC)로 남겨** 다른 사람이 이어받을 수 있게 합니다.',
        ],
      },
    ],
  },
  {
    kind: 'agenda',
    title: '주요 프로젝트',
    items: [
      {
        no: '01',
        title: '카카오 AIaaS · Peakly',
        desc: '하이브리드 클라우드(KakaoCloud + AWS DR) · GitOps · 부하 테스트로 처리 한계 5배',
      },
      {
        no: '02',
        title: 'Wanted AI Championship 2026 · 애정 지방법원',
        desc: '4인 팀의 인프라·백엔드·DB 담당 · 공개 포트 없는 배포 · 동시 제출·만료·권한을 DB가 보장',
      },
      {
        no: '03',
        title: '종합설계 · TeamTalk',
        desc: '홈서버 한 대로 멀티 에이전트 추론 인프라 구축 · 응답 5분 → 3분 · 메타버스SW아카데미 최우수상',
      },
      {
        no: '04',
        title: '지존소프트 인턴',
        desc: 'NAS 사내 인프라 구축 · 504 장애를 Nginx DNS 캐싱까지 추적하고 재발 방지',
      },
      {
        no: '05',
        title: '홈서버 운영 · 기술 블로그',
        desc: '컨테이너 28개 운영 · 보안 강화 · 모니터링 CPU 60%→1% · GPU 온디맨드 운용',
      },
    ],
  },

  // ── Project 01 · 카카오 AIaaS ─────────────────────────────
  {
    kind: 'project',
    no: AIAAS,
    title: '감정 곡선으로 영화를 추천하는 서비스를 하이브리드 클라우드에 운영',
    summary:
      '장르·배우 같은 메타데이터가 아니라, AI가 대사를 분석해 만든 **감정 곡선이 비슷한 영화**를 추천합니다. 4인 팀 **팀장**으로 인프라·백엔드·DB·ML·DevOps를 맡았고, 팀원들은 기획·데이터 라벨링·디자인과 와이어프레임을 맡았습니다.',
    facts: [
      ['과정', '카카오엔터프라이즈 AIaaS 4기 · 2025.12 – 2026.07 (1000시간)'],
      ['역할', '팀장 · 인프라 · 백엔드 · DB · ML · DevOps'],
      ['팀원', '기획 · 데이터 라벨링 · 디자인/와이어프레임'],
      ['클라우드', 'KakaoCloud(메인) + AWS(DR)'],
      [
        '스택',
        'Kubernetes(k3s) · Terraform · Ansible · GitHub Actions · Argo CD · Argo Workflow · Prometheus · Grafana · Loki · k6',
      ],
    ],
    links: [
      {
        label: '서비스',
        value: 'peakly.sanggyoon.com',
        href: 'https://peakly.sanggyoon.com/',
      },
      {
        label: 'GitHub',
        value: '202605_KakaoCloud_AIaaS',
        href: 'https://github.com/sanggyoon/202605_KakaoCloud_AIaaS',
      },
    ],
    image: {
      src: '/images/arch/aiaas-screenshot-1.png',
      alt: 'Peakly 대시보드',
      w: 3248,
      h: 2122,
    },
  },
  {
    kind: 'story',
    section: AIAAS,
    title: '목표와 문제 인식',
    steps: [
      {
        label: '목표',
        points: [
          '추천 서비스를 **데모가 아니라 실제로 운영 가능한 수준**으로 클라우드에 올린다.',
          '배포와 모델 학습을 사람이 손으로 하지 않도록 **파이프라인으로 자동화**한다.',
        ],
      },
      {
        label: '문제 인식',
        points: [
          '**주어진 자원이 고정 스펙 VM 5대**였습니다. 매니지드 K8s(EKS 등)를 쓸 수 없어 클러스터를 직접 구성해야 했습니다.',
          'KakaoCloud는 무료로 지원받은 자원이라 최대한 활용하되, **단일 환경만으로는 장애에 안정적으로 대응하기 어렵다**고 판단했습니다.',
          '이전 프로젝트(TeamTalk)에서 **단일 머신의 한계와 SSH + git pull 수동 배포의 불편**을 겪었습니다.',
          '기획·라벨링·디자인은 팀원이, 기술 구현은 제가 맡는 구조라 **기술 지식이 한 사람에게 몰렸습니다.** 다른 사람도 재현할 수 있는 형태로 남길 필요가 있었습니다.',
        ],
      },
      {
        label: '접근',
        points: [
          '셀프매니지드 Kubernetes(k3s) · KakaoCloud 메인 + **AWS DR** 하이브리드 · **GitOps** 배포 · **Terraform/Ansible** 코드화 · 부하 테스트로 한계 검증.',
        ],
      },
    ],
  },
  {
    kind: 'story',
    section: AIAAS,
    title: 'VM 5대 위에 직접 구성한 Kubernetes(k3s)',
    steps: [
      {
        label: '구성',
        points: [
          '**Control Plane(VM1)**: API 서버·스케줄러·데이터스토어 + 인그레스 + 모니터링.',
          '**Worker**: FE·BE 레플리카를 **서로 다른 워커에 분산**, **HPA** 로 자동 확장.',
          '**GPU 노드**: GPU Operator로 드라이버·디바이스 플러그인 관리, AI 추론 서비스와 ML 파이프라인 전용.',
          '**Data 노드(VM4)**: Supabase(PostgreSQL)·Loki를 StatefulSet + PV로 운영.',
        ],
      },
      {
        label: '판단',
        points: [
          '매니지드를 쓸 수 없어 **경량 배포판 k3s** 로 직접 구성. 마스터 1대라 데이터스토어는 기본 **SQLite**, 인그레스는 Traefik을 끄고 Ingress-Nginx.',
          '서비스 트래픽은 GPU를 쓰지 않아, 스케줄링 규칙 대신 **ML 워크로드를 GPU 노드에 물리적으로 분리**했습니다.',
          '노드 구성과 환경 변수는 **Ansible** 로 코드화해 재구성할 수 있게 했습니다.',
        ],
      },
    ],
    image: {
      src: '/images/arch/aiaas-k3s.jpg',
      alt: 'k3s 클러스터 구성도',
      w: 2278,
      h: 1755,
    },
  },
  {
    kind: 'story',
    section: AIAAS,
    title: 'KakaoCloud 장애에 대비한 AWS DR',
    steps: [
      {
        label: '검토',
        points: [
          '처음에는 부하가 몰릴 때 AWS로 확장하는 **Burst** 구성도 검토했지만, **서비스 규모에 비해 과하다는 피드백**에 동의해 **DR(재해 복구)** 에 집중했습니다.',
        ],
      },
      {
        label: '조치',
        points: [
          '**Terraform** 으로 AWS에 서비스 유지에 필요한 **최소 구성(FE·BE·DB)** 을 코드화. 클라우드 자원 생성은 Terraform, 그 위의 구성은 Ansible로 역할을 나눴습니다.',
          '서비스 DB는 AWS로 **논리 복제(Logical Replication)** 해 데이터를 따라가게 했습니다.',
          '네임서버를 가비아에서 **Route53** 으로 옮기고, **헬스체크가 KakaoCloud 장애를 감지하면 AWS로 자동 페일오버**되도록 구성했습니다.',
        ],
      },
      {
        label: '결과',
        points: [
          '페일오버를 직접 테스트해 AWS로 트래픽이 넘어가는 것을 확인했습니다.',
          '다만 **페일오버 소요 시간은 측정하지 않았고, RTO·RPO도 수치로 정의하지 않았습니다.** 실질적인 복구 시간은 헬스체크 주기와 인스턴스 기동 시간이 결정합니다.',
        ],
      },
    ],
    image: {
      src: '/images/arch/aiaas-cloud.png',
      alt: 'KakaoCloud + AWS 하이브리드 구성도',
      w: 1709,
      h: 1316,
    },
  },
  {
    kind: 'story',
    section: AIAAS,
    title: 'DR 상시 운영비 월 $110 → $49',
    steps: [
      {
        label: '문제',
        points: [
          'DR 환경은 평소에 거의 쓰이지 않는데도, 구현해 보니 **상시 운영비가 월 약 $110** 로 예상됐습니다. 비용 대부분은 관리형 NAT Gateway였습니다.',
        ],
      },
      {
        label: '조치',
        points: [
          '**관리형 NAT Gateway·EIP 제거 (−$46/월)**: 앱·DB를 퍼블릭 서브넷으로 옮기고 공인 IP를 붙여 아웃바운드를 대체.',
          '**DB 인스턴스 t3.medium → t3.small (−$19/월)**: DR 대기 상태에 맞게 다운사이징.',
          '대신 **보안 그룹으로 인바운드를 최소화**: 앱(3000)은 ALB에서만, DB(5432)는 앱에서만, WireGuard(51820)는 KakaoCloud IP에서만 허용. **SSH는 열지 않고 SSM으로 접근**, IMDSv2 강제.',
        ],
      },
      {
        label: '트레이드오프',
        points: [
          '퍼블릭 서브넷 구조라 **보안 그룹을 잘못 설정하면 영향 범위가 커집니다.** 관리자 CIDR은 본인 IP /32로 좁혔고, 민감한 환경이라면 NAT를 복원하는 것이 정석이라고 판단합니다.',
        ],
      },
    ],
    metrics: [
      { value: '$49', label: '월 상시 운영비 (기존 $110)' },
      { value: '−55%', label: 'DR 비용 절감' },
    ],
  },
  {
    kind: 'story',
    section: AIAAS,
    title: 'Git을 단일 진실 소스로 — GitOps 배포',
    steps: [
      {
        label: '문제',
        points: [
          '이전 프로젝트에서는 서버에 SSH로 접속해 git pull로 배포했습니다. **반복적이고 실수 여지가 크며, 누가 무엇을 배포했는지 남지 않았습니다.**',
        ],
      },
      {
        label: '흐름',
        points: [
          '코드 push → **GitHub Actions** 가 변경을 감지해 이미지 빌드 → **GHCR** 에 등록 → 새 이미지 태그를 매니페스트에 커밋 → **Argo CD** 가 변경을 감지해 클러스터에 동기화.',
          'Argo CD는 일반 매니페스트를 관리하고, Argo Workflow만 Helm 차트로 관리합니다.',
        ],
      },
      {
        label: '결과',
        points: [
          '배포 이력이 곧 Git 이력이 되어, **롤백은 커밋을 되돌리는 것**으로 끝납니다.',
          '클러스터 상태가 Git에 선언된 상태와 계속 일치하도록 유지됩니다.',
        ],
      },
    ],
    image: {
      src: '/images/arch/aiaas-system.png',
      alt: '서비스 · CI/CD 구성도',
      w: 1709,
      h: 1316,
    },
  },
  {
    kind: 'story',
    section: AIAAS,
    title: '감정 곡선 추천 모델과 ML 파이프라인',
    steps: [
      {
        label: '모델',
        points: [
          '① **LLM이 장면마다 대사를 보고 라벨링** → ② **RoBERTa** 로 Valence(긍·부정)·Arousal(각성도)를 회귀 예측 → ③ 영화별 감정 타임라인을 스케일링·스무딩·임베딩 → ④ **코사인 유사도** 로 곡선이 비슷한 영화 추천.',
        ],
      },
      {
        label: '파이프라인',
        points: [
          '백엔드 cron으로 데이터를 수집하고, **Argo Workflow** 에서 파싱 → 전처리 → 학습 → 스코어링을 한 번에 실행합니다.',
          '재학습 기준은 **새 라벨 데이터가 기존 대비 25% 늘었을 때**로 설계했습니다. 감정 라벨은 정답과 비교하기 어려워, 성능 지표보다 단순하고 명확한 데이터 증가량을 택했습니다.',
        ],
      },
      {
        label: '판단',
        points: [
          'Redis 캐시를 검토했지만, 서비스가 단순하고 이미지·정적 자원은 외부 CDN이 더 빨라 **오히려 오버헤드라고 판단해 넣지 않았습니다.**',
        ],
      },
      {
        label: '한계',
        points: [
          '현재 파이프라인 트리거는 수동이고, **KServe 서빙 → 모니터링 → 자동 재학습** 루프는 다음 단계로 남아 있습니다.',
          'LLM 라벨의 품질 검증과 자막이 없는 신작(콜드 스타트) 대응도 남은 과제입니다.',
        ],
      },
    ],
  },
  {
    kind: 'story',
    section: AIAAS,
    title: '부하 테스트 ① — 안전하게 한계를 찾는 방법부터',
    steps: [
      {
        label: '목표',
        points: [
          '실제 트래픽이 몰렸을 때 **어디서 먼저 무너지는지**를 추측이 아니라 데이터로 확인한다.',
        ],
      },
      {
        label: '설계',
        points: [
          '서비스 클러스터와 **분리된 VPC·VM에 k6** 를 두어 부하 생성기가 서비스 자원을 먹지 않게 했습니다.',
          'VU를 **점진적으로 올리고**, p95 3초 또는 에러율 5%를 넘으면 **자동 중단**하도록 안전장치를 걸었습니다.',
          '응답 지연을 **FE 페이지 · DB 조회 · BE 처리 경로별로 나눠 계측**하고, Grafana·Loki로 HPA 확장과 노드 CPU를 실시간으로 봤습니다.',
        ],
      },
      {
        label: '1차 결과',
        points: [
          '500 VU에서 **p95 2.12초, 에러율 0%** 로 안정적이었습니다.',
          'HPA가 **FE 2 → 6개, BE 1 → 4개** 로 확장됐다가 부하가 끝나면 복귀하는 것을 확인했습니다.',
        ],
      },
    ],
    metrics: [
      { value: '2.12s', label: '500 VU p95' },
      { value: '0%', label: '에러율' },
    ],
  },
  {
    kind: 'story',
    section: AIAAS,
    title: '부하 테스트 ② — 병목을 옮기며 한계를 5배로',
    steps: [
      {
        label: '과정',
        points: [
          '붕괴점을 직접 찾아가며, **천장 하나를 없애면 다음 천장이 어디로 옮겨가는지**를 단계별로 확인했습니다.',
        ],
      },
    ],
    table: {
      head: ['단계', '발견한 병목', '조치', '결과'],
      rows: [
        [
          '1',
          '~713 VU에서 **단일 DB 노드 CPU 100%**. 자동 확장되는 앱이 아니라 DB가 천장',
          '라우트 캐싱(1h) + 페이로드 축소',
          '한계 ~700 → **2000+ VU**, p95 4.5s → **0.66s**, DB CPU 100% → **20%**',
        ],
        [
          '2',
          'FE HPA 최대치(8)에 도달',
          'FE HPA max 8 → 16',
          '붕괴점 **~3600 VU** (초기 대비 약 5배). 천장이 app 워커 노드로 이동 → 노드 증설안 도출',
        ],
        [
          '3',
          '외부 스코어 API: 인증 처리와 DB 커넥션',
          '인증 결과 캐싱(60s) + PostgREST 커넥션 풀 10 → 40',
          '한계 ~500 → **~3777 VU** (약 7배)',
        ],
      ],
    },
    metrics: [
      { value: '~5×', label: '서비스 처리 한계 (700 → 3600 VU)' },
      { value: '0.66s', label: 'p95 응답 (기존 4.5s)' },
      { value: '~7×', label: '스코어 API 한계 (500 → 3777 VU)' },
    ],
  },
  {
    kind: 'story',
    section: AIAAS,
    title: '부하 테스트 ③ — 그래프로 본 천장의 이동',
    steps: [
      {
        label: '캐싱 전',
        points: [
          'FE 레플리카는 2 → 6개로 늘었지만, **DB 노드(10.1.5.10) CPU가 100%에 붙어** 버렸습니다. 앱 노드는 40% 안팎으로 여유가 있었습니다.',
          '앱을 더 늘려도 소용없고, **DB가 천장**이라는 뜻이었습니다.',
        ],
      },
      {
        label: '캐싱 후',
        points: [
          'DB 노드 CPU는 **20%대로 내려갔고**, FE 레플리카가 HPA 최대치인 **16개까지** 늘었습니다.',
          '이번에는 **앱 노드 두 대(10.1.3.10 · 10.1.4.10)가 100%** 에 가까워졌고, 자리를 못 잡은 **Pending 파드가 5개** 생겼습니다.',
        ],
      },
      {
        label: '결론',
        points: [
          '천장이 DB에서 **app 워커 노드의 용량**으로 옮겨 갔습니다. 다음 개선은 설정이 아니라 **노드 증설**이라는 근거가 됐습니다.',
        ],
      },
    ],
    gallery: [
      {
        src: '/images/arch/aiaas-loadtest-before.png',
        alt: '캐싱 개선 전 — DB 노드 CPU 100%',
        w: 2434,
        h: 1484,
      },
      {
        src: '/images/arch/aiaas-loadtest-after.png',
        alt: '캐싱 개선 후 — 앱 노드 포화, Pending 5',
        w: 2428,
        h: 1492,
      },
    ],
  },
  {
    kind: 'lessons',
    section: AIAAS,
    title: '배운 것과 남은 과제',
    lessons: [
      {
        title: '병목은 계측으로 찾는다',
        body: '앱 티어를 아무리 늘려도 단일 DB 노드가 천장이었습니다. 경로별로 나눠 재지 않았다면 엉뚱한 곳을 확장했을 것입니다.',
      },
      {
        title: '측정 도구도 의심한다',
        body: '부하 도구가 캐시를 우회하면 개선 효과가 측정되지 않고, 부하 생성기 자체의 한계(ulimit)를 서비스 한계로 오인할 수 있다는 것을 진단 과정에서 확인했습니다.',
      },
      {
        title: '비용도 설계 변수다',
        body: '관리형 서비스의 편의와 비용, 보안 사이의 트레이드오프를 수치로 비교하고, 선택하지 않은 대안(NAT 복원)까지 문서로 남겼습니다.',
      },
      {
        title: '모르는 영역은 부딪히며 배운다',
        body: '인프라·DevOps와 달리 ML 도메인 지식이 부족해 MLOps 구상이 여러 번 바뀌었습니다. 파이프라인 자동화까지 마무리하며 전체 흐름을 익혔습니다.',
      },
    ],
    next: [
      'RTO·RPO 목표를 수치로 정의하고 페일오버 시간을 측정',
      'app 워커 노드 증설로 다음 천장(~3600 VU) 해소',
      'KServe 서빙 + 모니터링 기반 자동 재학습 루프',
    ],
  },

  // ── Project 02 · Wanted AI Championship ─────────────────
  {
    kind: 'project',
    no: WANTED,
    title: '서운함을 귀여운 고소장으로, 링크 하나로 전하는 서비스',
    summary:
      '연인에게 서운했던 일을 AI와 이야기하면 **장난스러운 고소장**으로 정리해 링크로 보내고, 상대가 같은 링크에서 **사과하거나 맞고소**합니다. 로그인이 없고 결과는 7일 뒤 파기됩니다. 4인 팀에서 **인프라·백엔드·DB** 를 맡았습니다.',
    facts: [
      ['행사', 'Wanted AI Championship 2026 · 2026.09 (3주) · 평가 진행 중'],
      [
        '팀',
        '기획·AI 1 · 디자인·프론트 1 · QA 1 · **인프라·백엔드·DB 1 (본인)**',
      ],
      [
        '맡은 일',
        '배포 파이프라인 · DB 스키마·마이그레이션 · 사건(링크) API · 링크 흐름 프론트 연결',
      ],
      [
        '스택',
        'FastAPI · psycopg 3 · Supabase(PostgreSQL) · Next.js · Docker Compose · GitHub Actions · GHCR · Tailscale',
      ],
    ],
    flow: [
      'A가 AI 중재자와 대화 → 고소장 확정 → **링크 발급**',
      'B가 같은 링크로 열람 → 사과문 작성 **또는** AI와 대화해 맞고소',
      '맞고소면 서버가 양측 카드로 **중재 정리** 생성',
      '두 사람이 같은 링크에서 결과를 보고, **7일 뒤 자동 파기**',
    ],
    links: [
      {
        label: '서비스',
        value: 'wanted.sanggyoon.com',
        href: 'https://wanted.sanggyoon.com/',
      },
      {
        label: 'GitHub',
        value: '202609_wantedHackathon',
        href: 'https://github.com/sanggyoon/202609_wantedHackathon',
      },
    ],
    image: {
      src: '/images/arch/wanted-hero.png',
      alt: '애정 지방법원 — 카카오톡 링크 미리보기',
      w: 1488,
      h: 1080,
    },
  },
  {
    kind: 'story',
    section: WANTED,
    title: '공개 포트 없이 배포하는 파이프라인',
    steps: [
      {
        label: '설계',
        points: [
          'PR마다 CI(ruff · import · unittest / lint · build) → main 머지 시 클라우드 러너가 이미지를 빌드해 **GHCR** 에 올리고 서버는 받아서 띄우기만 합니다.',
          '서버 SSH 포트를 인터넷에 열지 않고, 러너를 **Tailscale ephemeral 노드**로 잠시 tailnet에 붙여 접속합니다. 배포 전용 키를 따로 발급했고, GHCR은 PAT 대신 워크플로우 `GITHUB_TOKEN` 으로 인증했습니다.',
          '3주만 운영할 프로젝트라 Argo CD 같은 GitOps 도구 대신 **SSH + Docker Compose** 로 단순하게 갔습니다.',
        ],
      },
    ],
    image: {
      src: '/images/arch/wanted-actions.png',
      alt: 'GitHub Actions — CI·CD 실행 이력 (총 92회)',
      w: 3024,
      h: 1658,
    },
  },
  {
    kind: 'story',
    section: WANTED,
    title: '운영 사고에서 재발 방지까지 — 서버를 main의 거울로',
    steps: [
      {
        label: '사고',
        points: [
          '배포는 성공했는데 운영 AI가 규칙 기반 폴백으로 돌고 사건 API가 503. 원인은 두 겹이었습니다. ① Compose의 치환용 `.env` 와 컨테이너 주입용 `env_file` 을 혼동 ② 수동 재기동 때 `pull` 을 빼먹어 **옛 이미지가 뜸**.',
          '응답 문구로 원인을 갈랐습니다. FastAPI 기본 `Not Found` 면 라우트가 없는 옛 이미지, 우리 코드의 `Case not found` 면 DB까지 정상, `Storage unavailable` 이면 DB 주소 없음.',
        ],
      },
      {
        label: '재발 방지',
        points: [
          '뿌리는 **서버 설정이 레포와 조용히 어긋날 수 있는 구조**였습니다. 배포 스크립트가 `git reset --hard origin/main` 으로 서버를 강제 동기화하고, 서버마다 다른 값은 `.env` 로만 두게 했습니다. 배포 후 실제로 뜬 이미지를 로그에 남깁니다.',
        ],
      },
    ],
  },
  {
    kind: 'story',
    section: WANTED,
    title: '동시 제출 · 만료 · 권한을 DB와 서버가 보장',
    steps: [
      {
        label: '동시 제출',
        points: [
          '모든 쓰기가 **상태 조건부 UPDATE** 를 먼저 실행합니다. 이 UPDATE의 행 락 때문에 동시에 온 두 번째 요청은 바뀐 상태를 보고 0행을 얻고 409를 받습니다. 사과문·카드는 `case_id` PK·UNIQUE로 DB가 한 번 더 막습니다.',
          '맞고소는 카드·리포트·상태 전이를 한 트랜잭션으로 묶고, **LLM 호출은 트랜잭션 밖에서 먼저** 해 실패 시 아무것도 남지 않게 했습니다.',
        ],
      },
      {
        label: '만료',
        points: [
          '**pg_cron이 매시 삭제**하고, 그 사이 최대 1시간은 조회·쓰기 양쪽의 lazy 검사가 막습니다. 쓰기까지 막지 않으면 삭제된 사건에 답변이 들어와 되살아납니다.',
          '잡이 멈춰도 사용자 눈엔 정상으로 보이는 실패라, 실행 이력을 직접 조회해 **매시 succeeded** 를 확인했습니다.',
        ],
      },
      {
        label: '권한',
        points: [
          '로그인 없이 링크용 `public_token` 과 A 전용 `writer_token` 을 발급하고 서버는 **SHA-256 해시만** 저장합니다. B에게는 토큰을 요구하지 않습니다. 요구하면 "링크 하나로 전달"이 깨집니다.',
          'RLS는 켜고 정책은 0개. 프론트에 anon 키가 노출돼도 데이터가 새지 않습니다.',
        ],
      },
    ],
    table: {
      head: ['실DB 동시 제출 (스레드 8개)', '200', '409', '저장된 행'],
      rows: [
        ['A 고소장', '1', '7', '카드 1장'],
        ['응답 방식 선택 (사과·맞고소 섞어서)', '1', '7', '한쪽으로만 확정'],
        ['사과문', '1', '7', '사과문 1장'],
      ],
    },
  },
  {
    kind: 'lessons',
    section: WANTED,
    title: '배운 것',
    lessons: [
      {
        title: '적용 여부는 이력으로 판단한다',
        body: 'Supabase 자동 마이그레이션이 무료 플랜에서 동작하지 않아 이틀간 한 번도 적용되지 않았는데, 기본 제공 확장 덕에 적용된 것처럼 보였습니다. 결과물이 아니라 적용 이력 테이블로 확인합니다.',
      },
      {
        title: '목이 아니라 실DB로 검증한다',
        body: '단위 테스트는 통과했지만, 실제 Postgres에 올리자 nullable 컬럼 때문에 조회가 500이 나는 버그가 나왔습니다. CI에 테스트 실행도 없어서 추가했습니다.',
      },
      {
        title: '오류 문구를 다르게 설계한다',
        body: '"라우트 없음", "사건 없음", "저장소 없음"을 서로 다른 문구로 둔 덕분에 운영 사고의 원인을 응답 하나로 갈랐습니다.',
      },
      {
        title: '받쳐 주는 역할은 문서로 남긴다',
        body: '인프라·DB·API 계약은 모든 팀원이 기대는 부분이라, 설계 문서를 구현과 대조해 고치며 같은 카드를 세 곳이 다르게 쓰던 문제와 감정 목록 유실 버그를 찾았습니다.',
      },
    ],
  },

  // ── Project 03 · TeamTalk ───────────────────────────────
  {
    kind: 'project',
    no: TEAMTALK,
    title: '역할이 나뉜 AI 에이전트들이 토론하듯 답하는 서비스',
    summary:
      '범용 대형 LLM을 한 번 호출하는 대신, **개발자·디자이너·기획자 역할의 소형 모델들을 협업**시켜 적은 비용으로 다각적인 답을 만듭니다. 4인 팀 **팀장**으로 추론 인프라와 데이터 흐름을 설계·구축했습니다.',
    facts: [
      ['기간', '2025.01 – 2025.12 · 졸업작품 (메타버스SW아카데미 연계)'],
      ['성과', '메타버스SW아카데미 **최우수상** · 논문 1편 공저'],
      ['인프라', 'Mac mini M4 16GB 홈서버 한 대 (온프레미스)'],
      [
        '스택',
        'Ollama · n8n · Nginx · Docker · Supabase(PostgreSQL) · FastAPI · Next.js · LoRA',
      ],
    ],
    flow: [
      '사용자가 질문하고 역할 에이전트 2개를 고른다',
      'Next.js → webhook → **n8n**',
      '**오케스트레이터 모델**이 누가·언제 답할지, 답할지 말지를 결정',
      '**Ollama** 의 역할별 모델이 순서대로 답변 생성',
      '**Supabase(PostgreSQL)** 에 저장 → 화면에 표시',
    ],
    links: [
      {
        label: 'GitHub v1',
        value: 'ABORA v1',
        href: 'https://github.com/sanggyoon/202503-ABORA-multi_agent_system_v1',
      },
      {
        label: 'GitHub v2',
        value: 'ABORA v2',
        href: 'https://github.com/sanggyoon/202509-ABORA-multi_agent_system_v2',
      },
      {
        label: '논문',
        value: 'PDF',
        href: 'https://selab.hongik.ac.kr/selab/data/papers/IAAI%EA%B9%80%EC%83%81%EA%B7%A0.pdf',
      },
    ],
    image: {
      src: '/images/arch/teamtalk-screenshot-1.png',
      alt: 'TeamTalk 대화 화면',
      w: 604,
      h: 373,
    },
  },
  {
    kind: 'story',
    section: TEAMTALK,
    title: '목표와 문제 인식',
    steps: [
      {
        label: '목표',
        points: [
          '범용 대형 모델은 비용이 크고 한 관점에 치우치기 쉽습니다. **역할별 소형 모델의 협업**으로 저비용·다각적인 답을 만든다.',
          '기획 당시 막 주목받기 시작한 **에이전트 간 오케스트레이션**을 먼저 직접 구현해 본다.',
        ],
      },
      {
        label: '제약',
        points: [
          '추론 서버는 **Mac mini M4 16GB 한 대**. 7~8B 모델 여러 개를 이 안에서 돌려야 했습니다.',
          '기간 1년, 4명. 모델 학습과 서비스 구현을 모두 이 안에서 끝내야 했습니다.',
        ],
      },
      {
        label: '설계 과제',
        points: [
          '에이전트들이 **끝없이 대화를 이어가지 않고** 항상 끝나야 한다.',
          '한정된 메모리에서 **여러 모델이 충돌 없이** 답해야 한다.',
          '프론트 → 오케스트레이션 → 모델 → DB로 이어지는 **데이터 흐름이 일관**되어야 한다.',
        ],
      },
    ],
  },
  {
    kind: 'story',
    section: TEAMTALK,
    title: '오케스트레이터가 대화의 순서를 정한다',
    steps: [
      {
        label: '구조',
        points: [
          '역할별 소형 모델(**Qwen·Llama·Mistral, 7~8B**)과 별도의 **오케스트레이터 모델**을 두고, n8n 워크플로우의 분기 지점에서 오케스트레이터가 턴을 판단합니다.',
          '각 에이전트는 **사용자 입력 + 다른 에이전트의 직전 답변**을 함께 받아 답합니다. 두 에이전트가 토론하듯 답하기도, 한쪽만 답하기도 합니다.',
        ],
      },
      {
        label: '종료 보장',
        points: [
          '선택된 각 에이전트는 **한 턴에 최소 0회, 최대 1회만** 답하도록 제한해 대화가 무한히 돌지 않게 했습니다.',
        ],
      },
      {
        label: '도구 선택',
        points: [
          'MS AutoGen을 먼저 검토했지만 학습 비용이 커서 기간 안에 끝내기 어렵다고 봤습니다.',
          '**n8n** 은 GUI로 흐름을 빠르게 구성하고, webhook으로 프론트와 바로 통신하며, 로컬 Ollama와 직접 연동되고, 셀프호스팅이 가능했습니다. 요구사항이 기본 기능만으로 충분해 **제약 안에서 가장 합리적인 선택**이었습니다.',
        ],
      },
    ],
    image: {
      src: '/images/arch/teamtalk-n8n.png',
      alt: 'n8n 오케스트레이션 워크플로우',
      w: 1920,
      h: 706,
    },
  },
  {
    kind: 'story',
    section: TEAMTALK,
    title: '홈서버 한 대에 올린 추론 인프라',
    steps: [
      {
        label: '구성',
        points: [
          '도메인 → DNS → 홈서버. **Nginx가 443/80을 받아 TLS를 종료하고 FE/BE로 분기**합니다.',
          '**Ollama**(모델 서빙) · **n8n**(오케스트레이션) · **Supabase**(PostgreSQL)를 컨테이너로 같은 서버에 두고, n8n은 내장 DB 노드로 외부 노출 없이 DB에 접근합니다.',
          '모노리식이던 v1을 **v2에서 프론트/백엔드 분리 구조**로 재정비했습니다.',
        ],
      },
      {
        label: '트러블슈팅',
        points: [
          '배포 후 프론트 요청이 막히는 문제가 있었습니다. 원인은 **CORS preflight(OPTIONS)** 였고, 개발(localhost)과 배포(도메인) 환경의 origin 차이 때문이었습니다. 이때 CORS·프록시 헤더 동작을 제대로 이해했습니다.',
        ],
      },
      {
        label: '한계',
        points: [
          'CI/CD 없이 **SSH로 접속해 git pull로 수동 배포**했고, 보안 설정도 최소한이었습니다. 이 불편과 부족함이 다음 프로젝트에서 GitOps와 보안 그룹 설계로 이어졌습니다.',
        ],
      },
    ],
    image: {
      src: '/images/arch/teamtalk-system.png',
      alt: 'TeamTalk 컨테이너 구성도',
      w: 3058,
      h: 1551,
    },
  },
  {
    kind: 'story',
    section: TEAMTALK,
    title: 'LLM 응답 5분 → 3분, 약 40% 단축',
    steps: [
      {
        label: '문제',
        points: [
          '질문 하나에 응답이 **5분 이상** 걸려 서비스로 쓰기 어려운 상태였습니다.',
        ],
      },
      {
        label: '원인',
        points: [
          '**메모리 초과**: 여러 모델을 동시에 메모리에 올려 두자 16GB를 넘었고, 부족분을 SSD로 스와핑하면서 전체가 급격히 느려졌습니다.',
          '**자원 경쟁**: 여러 모델이 동시에 추론하며 CPU·메모리를 두고 경쟁해, 동시 처리가 오히려 지연을 키웠습니다.',
        ],
      },
      {
        label: '조치',
        points: [
          '**지연 로드(lazy load)**: 모든 모델을 상주시키지 않고 차례가 온 모델만 메모리에 올려 스와핑을 없앴습니다. 첫 호출의 로딩 지연은 감수했습니다.',
          '**직렬 큐**: **n8n 워크플로우 안에** 큐를 구현해 요청을 하나씩 순서대로 처리했습니다. 각 추론이 자원을 온전히 쓰게 되어 처리 시간도 예측 가능해졌습니다.',
        ],
      },
      {
        label: '한계',
        points: [
          '요청이 몰려 큐가 길어지면 대기 시간이 쌓입니다. 근본 해결은 **수평 확장과 추론 서버 분리**이고, 이 한계를 체감한 것이 클라우드로 관심을 옮긴 직접적인 계기였습니다.',
        ],
      },
    ],
    metrics: [
      { value: '3분', label: '응답 시간 (기존 5분+)' },
      { value: '−40%', label: '응답 시간 단축' },
    ],
  },
  {
    kind: 'story',
    section: TEAMTALK,
    title: '팀장으로서 내린 결정 — 전체 학습 대신 LoRA',
    steps: [
      {
        label: '상황',
        points: [
          '처음에는 세 역할 모델을 모두 **전체 파인튜닝**할 계획이었지만, 기간과 컴퓨팅 자원으로는 끝낼 수 없다고 판단했습니다.',
        ],
      },
      {
        label: '결정',
        points: [
          '**LoRA로 역할만 분리 학습**하는 수준으로 범위를 줄였습니다. 학습은 별도 NVIDIA GPU에서 진행했습니다.',
          '이상적인 설계를 붙잡고 미완성으로 끝나기보다, **가진 자원 안에서 끝까지 결과를 내는 쪽**을 택했습니다.',
        ],
      },
      {
        label: '측정 결과',
        points: [
          '베이스 모델 대비 지표 변화는 대부분 **1% 미만**으로, 뚜렷한 품질 개선은 없었습니다.',
          '오히려 **같은 단어를 반복하는 경향**이 나타났습니다. 학습 데이터와 학습 횟수가 부족해 생긴 **과적합 징후**로 분석했습니다.',
        ],
      },
      {
        label: '이후 조치',
        points: [
          '모델 성능을 억지로 끌어올리는 대신, 프로젝트의 핵심을 **오케스트레이션 구조와 추론 인프라**로 다시 잡고 거기에 남은 시간을 썼습니다.',
          'LoRA 결과는 숨기지 않고 **한계와 원인, 개선 방향(데이터 양·다양성 확보, 학습 스텝 조정, 반복 억제 파라미터)** 까지 결과 정리에 담았습니다.',
          '그 결과 서비스를 끝까지 완성해 **메타버스SW아카데미 최우수상**을 받았고, 기획·아키텍처·결과 정리가 **논문 1편**에 반영되어 공저자로 등재됐습니다.',
        ],
      },
    ],
  },
  {
    kind: 'lessons',
    section: TEAMTALK,
    title: '배운 것과 남은 과제',
    lessons: [
      {
        title: '제약 안에서 완결하는 것',
        body: '학부 프로젝트의 목표는 최고 성능이 아니라 개념 검증과 완성이라고 봤습니다. 범위를 줄이는 결정이 데모와 논문까지 가는 길을 만들었습니다.',
      },
      {
        title: '자원의 한계는 구조로 푼다',
        body: '메모리가 부족할 때 동시성을 늘리는 것이 오히려 느려진다는 것을 겪고, 로드 방식과 처리 순서를 바꾸는 것으로 해결했습니다.',
      },
      {
        title: '단일 머신의 끝을 봤다',
        body: '수평 확장이 안 되는 구조, 수동 배포, 최소한의 보안. 이 세 가지가 다음 프로젝트에서 Kubernetes·GitOps·보안 그룹 설계로 이어졌습니다.',
      },
    ],
    next: [
      '학습 데이터 양·다양성 확보 후 LoRA 재학습, 반복 억제 파라미터 조정',
      '추론 서버 분리와 수평 확장으로 큐 대기 해소',
    ],
  },

  // ── Project 04 · 지존소프트 ─────────────────────────────
  {
    kind: 'project',
    no: ZG,
    title: 'NAS 위에 스타트업의 사내 인프라를 새로 세우다',
    summary:
      'LLM + 컴퓨터 비전으로 고객마다 다른 견적서를 하나의 양식으로 정리하고 품목을 매칭하는 물류 IT 스타트업입니다. 개발부 인턴으로 **Synology NAS(DSM) 위에 인프라를 직접 구축·운영**했습니다.',
    facts: [
      ['기간', '2025.09 – 2025.10'],
      ['역할', '개발부 인턴 · 인프라 구축 담당'],
      [
        '구축',
        '메일 서버(SMTP) · Supabase 구축과 데이터 수집·관리 · 웹 서비스 배포',
      ],
      [
        '구조',
        'DSM 역방향 프록시(도메인 ↔ 서비스, CNAME) → 컨테이너 Nginx(세부 라우팅) 2단 구조',
      ],
      [
        '보조',
        '회사 홈페이지 프론트, 견적서 처리 n8n 워크플로우 이슈 대응, 결제 백엔드 설계·테스트',
      ],
      ['스택', 'Synology DSM · Docker · Nginx · Supabase(PostgreSQL) · n8n'],
    ],
    links: [],
  },
  {
    kind: 'story',
    section: ZG,
    title: '504 장애 ① — 레이어를 하나씩 격리해 원인 찾기',
    steps: [
      {
        label: '상황',
        points: [
          '베타 서비스 운영 중, 어느 날부터 **웹훅 POST 요청이 전부 504 Gateway Timeout** 으로 실패했습니다.',
          '직전에 있었던 변경은 **백엔드 서버(n8n을 서빙하는 Mac Studio)의 물리적 위치 이전** 하나였습니다. 옮기면서 서버 IP가 바뀌었습니다.',
        ],
      },
    ],
    table: {
      head: ['가설', '확인 방법', '결과'],
      rows: [
        [
          '백엔드(n8n) 서버가 죽었다',
          'NAS에서 n8n으로 직접 curl',
          '**정상 응답** → 서버는 살아 있음',
        ],
        [
          'DNS가 깨졌다',
          'Nginx 컨테이너 안에서 nslookup',
          '**새 IP로 정상 해석** → DNS도 정상',
        ],
        [
          'Nginx가 엉뚱한 곳에 연결한다',
          'Nginx 에러 로그의 upstream 주소 확인',
          '**이전 서버의 옛 IP** 로 연결 시도 → 30초 타임아웃',
        ],
      ],
    },
    code: {
      caption: '근본 원인',
      text: 'Nginx는 proxy_pass에 도메인을 적으면 시작할 때 DNS를 한 번만 해석해 IP를 고정한다.\n서버 IP가 바뀌어도 재시작 전까지 옛 IP를 계속 쓴다. curl은 매번 새로 해석하기 때문에 성공했다.',
    },
  },
  {
    kind: 'story',
    section: ZG,
    title: '504 장애 ② — 임시 복구에서 끝내지 않기',
    steps: [
      {
        label: '즉시 조치',
        points: [
          'Nginx 컨테이너를 재시작해 새 IP를 다시 해석하게 하여 **서비스를 즉시 복구**했습니다.',
        ],
      },
      {
        label: '재발 방지',
        points: [
          '재시작은 다음에 IP가 바뀌면 똑같이 터지는 임시방편이라, Nginx `resolver` + **변수 기반** `proxy_pass` 로 바꿔 **10초마다 도메인을 다시 해석**하도록 했습니다.',
          '주기적인 DNS 조회 비용이 조금 생기지만, 서버 위치가 바뀔 수 있는 환경에서는 안정성이 더 중요하다고 판단했습니다.',
        ],
      },
      {
        label: '결과',
        points: [
          '업스트림 IP가 바뀌어도 **사람 개입 없이 자동 반영**되고, 이후 **같은 원인의 장애 0건**.',
          '원인과 조치를 문서로 정리해 사내에 공유했습니다.',
        ],
      },
    ],
    code: {
      caption: '설정 요지 — 구조 설명용 예시 (실제 설정 파일은 남아 있지 않음)',
      text: '# 변경 전: 시작 시 1회 해석 후 고정\nproxy_pass http://n8n.example.com;\n\n# 변경 후: 변수로 넘기면 요청 시점에 resolver로 재해석\nresolver <DNS 서버> valid=10s;\nset $n8n_upstream http://n8n.example.com;\nproxy_pass $n8n_upstream;',
    },
  },
  {
    kind: 'lessons',
    section: ZG,
    title: '배운 것',
    lessons: [
      {
        title: '레이어별로 격리해서 좁힌다',
        body: '"서버가 죽었나, DNS인가, 프록시인가"를 하나씩 독립적으로 확인하고, 로그를 결정적 단서로 삼는 디버깅 방식을 익혔습니다.',
      },
      {
        title: '작은 변경이 멀리 있는 서비스를 무너뜨린다',
        body: '서버 위치를 옮기는 단순한 작업이 프록시 뒤의 모든 요청을 막았습니다. 변경의 영향 범위를 먼저 생각하는 습관이 생겼습니다.',
      },
      {
        title: '운영은 남이 이어받을 수 있어야 한다',
        body: '개인 서버와 달리 기업에서는 예측하기 어려운 포트를 쓰고 반드시 문서로 남겨야 했습니다. 인턴을 마칠 때 코드와 구성·트러블슈팅 문서를 인수인계했습니다.',
      },
    ],
  },

  // ── Project 05 · 홈서버 운영 (기술 블로그) ─────────────
  {
    kind: 'project',
    no: HOME,
    title: '집에 서버를 두고, 겪은 문제를 기록으로 남기다',
    summary:
      '학교에서 다루지 않는 인프라를 직접 운영해 보려고 홈서버를 세웠습니다. 서비스 이전, 장애, 보안, 모니터링, GPU 운용까지 **부딪힌 문제를 "현상 → 원인 추적 → 조치 → 재발 방지" 순서로 블로그에 기록**하고 있습니다.',
    facts: [
      ['기간', '2026.01 – 현재 · 블로그 9편'],
      [
        '상시 서버',
        'GMKtec K16 미니PC (Ryzen 7 7735HS · 32GB) · Ubuntu · 컨테이너 28개 (2026.09 기준, 수시로 추가·삭제)',
      ],
      ['GPU', 'OcuLink eGPU — 평소엔 분리, AI 작업 때만 연결'],
      [
        '서비스',
        '리버스 프록시(자동 TLS) · 웹사이트 · 셀프호스팅 Supabase · 게임 서버 · NAS(Samba) · 로컬 LLM(Ollama) · 이미지 생성(ComfyUI)',
      ],
      [
        '운영 도구',
        'Docker Compose · Tailscale · Netdata · Portainer · fail2ban',
      ],
    ],
    flow: [
      '**Mac mini M4** 로 시작 (졸업작품 추론 서버)',
      'ARM이라 x86 게임 서버는 에뮬레이션, CUDA 없음, RAM 증설 불가 → 한계',
      '**x86 미니PC + 필요할 때만 붙이는 eGPU** 로 재구성',
      '"무거운 GPU 작업은 필요할 때만, 나머지는 저전력으로 상시" 로 역할 분리',
    ],
    links: [
      {
        label: 'Blog',
        value: 'velog.io/@sanggyoon',
        href: 'https://velog.io/@sanggyoon/posts',
      },
    ],
    image: {
      src: '/images/arch/homeserver-portainer.png',
      alt: 'Portainer 컨테이너 목록 (28개 중 일부)',
      w: 3024,
      h: 1654,
    },
  },
  {
    kind: 'story',
    section: HOME,
    title: 'ARM → x86, 서비스 이전 (당시 컨테이너 19개)',
    steps: [
      {
        label: '목표',
        points: [
          'Mac mini에서 돌던 서비스(프록시·웹사이트·Supabase·웹앱·게임 서버)를 **데이터 손실 없이** 새 서버로 옮긴다.',
        ],
      },
      {
        label: '과정',
        points: [
          '**이미지는 옮기지 않고 새로 빌드**: arm64 → amd64라 소스와 설정만 옮기고 새 서버에서 다시 빌드했습니다.',
          '**DB는 물리 볼륨으로 복원**: 데이터 폴더의 `PG_VERSION`(17)이 새 이미지와 같은지 먼저 확인한 뒤 붙였고, Supabase 컨테이너 11개가 모두 healthy로 올라왔습니다.',
          '**DNS를 바꾸기 전에 검증**: `curl --resolve` 로 도메인 요청을 새 서버로 강제로 보내 웹 4개(200)·API(401, 정상)를 확인했습니다.',
          '**컷오버는 포트포워딩만**: 공인 IP가 같아 DNS는 그대로 두고 공유기 포워딩 대상만 바꿨습니다. 쓰지 않는 22(SSH)·5900(VNC) 포워딩은 이때 닫았습니다.',
        ],
      },
      {
        label: '문제',
        points: [
          '컷오버 후 TLS 에러. 로그를 보니 인증서 자동 발급이 **컷오버 전에 옛 서버로 가서 실패**했고, 도구는 **1시간 재시도 대기** 상태였습니다. 재시작으로 5개 도메인 인증서를 1~2분 만에 발급했습니다.',
        ],
      },
      {
        label: '마무리',
        points: [
          '옛 서버를 지우기 전, 이사 짐(스냅샷) 이후 **옛 서버에 새로 쌓인 데이터가 없는지** 확인했습니다.',
          '재부팅 후 Docker·컨테이너·Tailscale·Samba·디스크 마운트가 **자동으로 복구되는지** 검증했습니다.',
        ],
      },
    ],
  },
  {
    kind: 'story',
    section: HOME,
    title: '이전 후 게임 서버 접속 불가 — 범인은 저장된 옛 주소',
    steps: [
      {
        label: '상황',
        points: [
          '이전 후 3시간 플레이하고 옛 서버를 껐는데, 정전 재부팅 뒤 **접속 타임아웃**. IP를 직접 치면 접속되지만 **3시간 기록이 없었습니다.**',
        ],
      },
    ],
    table: {
      head: ['의심', '확인', '결과'],
      rows: [
        ['정전으로 서버 IP가 바뀜', '공유기 DHCP 고정 예약', '그대로. 정상'],
        ['포트포워딩이 풀림', '포워딩 규칙', '새 서버로 정상'],
        ['방화벽 · VPN', '방화벽 규칙, Tailscale 상태', '원인 아님'],
        [
          '**실제로 어디에 연결하나**',
          '접속 순간 `netstat` 로 소켓 확인',
          '**꺼진 옛 서버 IP로 SYN_SENT**',
        ],
      ],
    },
    code: {
      caption: '원인과 조치',
      text: '게임 클라이언트의 서버 목록에 "이름"은 도메인, "주소"는 옛 서버의 내부 IP로 저장돼 있었다.\n→ 3시간 동안 사실은 옛 서버에서 플레이했고, 옛 서버를 끄자 연결이 끊긴 것.\n→ 주소를 새 서버로 수정. 집 안에서는 공유기가 NAT 루프백을 지원하지 않아 내부 IP를, 밖에서는 도메인을 쓰도록 정리.',
    },
  },
  {
    kind: 'story',
    section: HOME,
    title: '서버 보안 강화 — 비밀번호 하나로 전부 뚫리는 구조를 끊다',
    steps: [
      {
        label: '문제',
        points: [
          'NAS(SMB) 비밀번호가 **리눅스 계정 비밀번호와 동일**했고, SSH는 비밀번호 로그인이 열려 있었습니다. SMB가 뚫리면 SSH로 서버 전체가 뚫리는 구조였고, 로그인 실패를 막는 장치도 없었습니다.',
        ],
      },
      {
        label: '조치',
        points: [
          '① **SSH 키 인증 강제** (가장 치명적인 경로부터) ② **fail2ban** 으로 SSH·SMB 브루트포스 자동 차단 ③ **SMB 암호화 강제**.',
        ],
      },
      {
        label: '실수와 복구',
        points: [
          '`authorized_keys` 에 키가 있는 걸 보고 키 인증을 켰는데, 그 키는 **CI 배포용 키**였고 제 개인 키가 아니었습니다. 세션이 끊기면 잠기는 상황이라 **즉시 롤백** → 개인 키 생성·등록 → 새 터미널에서 로그인 확인 → 재적용했습니다.',
        ],
      },
      {
        label: '디버깅',
        points: [
          'fail2ban에 SMB 필터가 없어 직접 작성. Samba 인증 감사 로그를 켜고 실제 실패 로그로 정규식을 맞췄습니다.',
          '그래도 매칭이 안 돼 **fail2ban 소스 코드를 읽어**, 날짜 부분을 잘라낸 뒤 매칭한다는 내부 동작을 확인하고 정규식을 고쳤습니다. 실제 로그인 실패를 만들어 끝까지 검증했습니다.',
        ],
      },
    ],
  },
  {
    kind: 'story',
    section: HOME,
    title: '모니터링 도구가 CPU를 먹고 있었다 — dockerd 64% → 1%',
    steps: [
      {
        label: '증상',
        points: [
          'GPU는 쉬는데 팬 소음이 컸습니다. `dockerd` 와 `containerd` 가 **각각 CPU 60%대** 를 24시간 쓰고 있었습니다.',
        ],
      },
      {
        label: '진단',
        points: [
          '추측하지 않고 두 단계로 좁혔습니다. ① Netdata를 잠시 멈추고 CPU 변화를 측정 → ② Netdata 안의 docker 수집기만 끄고 재측정.',
          '원인: docker 수집기가 **1초마다 컨테이너 28개를 하나씩 조회**하며 Docker 데몬에 요청을 계속 밀어 넣고 있었습니다.',
        ],
      },
      {
        label: '조치',
        points: [
          'docker 수집기만 끄고, 설정 파일을 볼륨이 아닌 서비스 폴더에 고정해 **재생성해도 설정이 유지**되게 했습니다.',
          '잃는 것도 확인: 컨테이너별 차트 700개는 cgroup에서 직접 읽어 **그대로 유지**, 사라진 요약 차트는 Portainer로 대체.',
        ],
      },
    ],
    table: {
      head: ['측정', 'dockerd', 'containerd'],
      rows: [
        ['Netdata 동작 중', '64%', '65%'],
        ['Netdata 정지', '1.8%', '1.2%'],
        ['docker 수집기만 OFF', '**3%**', '**2%**'],
        ['조치 후 (최종)', '**1%**', '**1%**'],
      ],
    },
  },
  {
    kind: 'story',
    section: HOME,
    title: 'GPU 하나를 여러 서비스가 나눠 쓰기',
    steps: [
      {
        label: '문제',
        points: [
          '로컬 LLM(Ollama)과 이미지 생성(ComfyUI)이 GPU 메모리를 격리 없이 공유했습니다. 번갈아 쓰면 한쪽이 메모리를 반납하기 전에 다른 쪽이 올라와 **경합으로 수십 배 느려질 수 있었습니다.**',
        ],
      },
      {
        label: '측정',
        points: [
          '"반납 타이머를 0으로 하면 매번 다시 로드해야 해서 손해"라는 가정을 **직접 재 봤습니다.** 재로딩 비용은 ComfyUI 약 8초, Ollama 약 10초로 작았습니다.',
          '예전에 기록한 "Ollama 로드 44초"는 **경합 상태에서 잰 잘못된 값**이었음을 발견하고 정정했습니다.',
        ],
      },
      {
        label: '조치',
        points: [
          '두 서비스 모두 **작업이 끝나면 즉시 GPU 메모리를 반납**하도록 변경 → 경합 위험 제거, 대신 매번 8~10초 로딩은 감수.',
          'eGPU는 평소 떼어 두기 위해 **재부팅 없는 분리/연결 스크립트** 를 만들었습니다. 서비스 정지 → 잔여 프로세스 확인 → 드라이버를 의존성 역순으로 해제 → 장치 제거 순서를 지키고, **드라이버 해제에 실패하면 장치를 건드리지 않고 중단**합니다.',
          '다시 연결할 때는 전체 PCI 재검색 대신 **해당 포트만** 재검색해 NVMe·랜카드 등 다른 장치에 영향을 주지 않게 했습니다.',
        ],
      },
    ],
    table: {
      head: ['재로딩 비용', '콜드', '웜'],
      rows: [
        ['ComfyUI (20-step 생성 전체)', '252.0초', '244.2초'],
        ['Ollama (load_duration)', '10.2초', '0.001초'],
      ],
    },
  },
  {
    kind: 'lessons',
    section: HOME,
    title: '배운 것',
    lessons: [
      {
        title: '설정을 추측하지 말고 실제를 본다',
        body: '방화벽·VPN을 차례로 의심하는 동안 원인에 다가가지 못했고, netstat 한 줄이 답을 줬습니다. "어디로 가야 하나"보다 "지금 실제로 어디로 가고 있나"를 먼저 봅니다.',
      },
      {
        title: '"완료"는 확인해야 완료다',
        body: '키가 있다고 내 키는 아니었고, "설치 완료"라는 답에도 패키지는 없었습니다. 설정을 바꾸면 파일을 다시 열어 보고, 적용했으면 실제로 동작하는지 검증합니다.',
      },
      {
        title: '측정이 틀렸으면 기록을 고친다',
        body: 'GPU 로드 시간처럼 잘못 잰 값을 근거로 판단할 뻔한 일이 있었습니다. 틀린 결론도 지우지 않고, 왜 틀렸는지와 함께 정정해 남깁니다.',
      },
      {
        title: '이전은 끄기 전에 검증한다',
        body: '옛 서버가 켜져 있어 문제가 숨었습니다. 이제는 옛 서버의 서비스만 먼저 멈추고, 새 서버 로그에 실제 접속이 찍히는지 확인한 뒤 끕니다.',
      },
    ],
  },

  {
    kind: 'timeline',
    title: '경험 · 자격',
    groups: [
      {
        name: '경험',
        items: [
          {
            date: '2026.09',
            title: 'Wanted AI Championship 2026',
            note: '평가 진행 중',
            desc: '감정 전달 서비스 문철빵. 4인 팀에서 인프라·백엔드·DB 담당',
          },
          {
            date: '2025.12 – 2026.07',
            title: '카카오엔터프라이즈 AIaaS 4기',
            note: '팀장',
            desc: '감정 곡선 영화 추천 Peakly를 KakaoCloud + AWS DR 하이브리드 k3s 클러스터에 운영',
          },
          {
            date: '2025.09 – 2025.10',
            title: '지존소프트 개발부 인턴',
            desc: 'NAS 사내 인프라 구축, 504 장애 원인 추적과 재발 방지',
          },
          {
            date: '2025.04 – 2025.11',
            title: '뉴노멀 · ATD Korea 협력',
            note: '팀장 · 인재상',
            desc: '기업의 대기 측정 데이터 시각화. 기업 요구로 바닐라 JS만 써서 컴포넌트 단위로 직접 구조화',
          },
          {
            date: '2025.01 – 2025.12',
            title: '종합설계 TeamTalk',
            note: '팀장 · 메타버스SW아카데미 최우수상',
            desc: '홈서버 한 대로 멀티 에이전트 추론 인프라 구축, 논문 1편 공저',
          },
          {
            date: '2024.06 – 2024.09',
            title: '국립전파연구원 청년인턴',
            desc: 'OA 사무 보조, AI에 익숙하지 않은 공무원 대상 AI 사용법 강의',
          },
          {
            date: '2024.03 – 2024.05',
            title: '교내 자기주도 학습동아리',
            desc: '신입생용 전공 강의 추천 웹(React). 멘토 없이 단계·주간 목표를 설계하고 실천',
          },
          {
            date: '2024.01 – 2024.12',
            title: "메타버스SW아카데미 · MZ's Web",
            desc: '코드 리뷰 SNS 첫 풀사이클. EJS → React 재구성, Express 백엔드와 MySQL 설계',
          },
        ],
      },
      {
        name: '자격',
        items: [
          { date: '2026.07', title: '리눅스마스터 2급' },
          { date: '2026.03', title: 'SQLD' },
          { date: '2026.01', title: 'AWS Certified Cloud Practitioner' },
          { date: '2023.09', title: 'AICE Basic' },
        ],
      },
    ],
  },
  {
    kind: 'contact',
    title: '연락처',
    links: [
      {
        label: 'Email',
        value: 'sangreal4262@gmail.com',
        href: 'mailto:sangreal4262@gmail.com',
      },
      {
        label: 'GitHub',
        value: 'github.com/sanggyoon',
        href: 'https://github.com/sanggyoon',
      },
      {
        label: 'Blog',
        value: 'velog.io/@sanggyoon',
        href: 'https://velog.io/@sanggyoon/posts',
      },
      {
        label: 'LinkedIn',
        value: 'sanggyoon-kim',
        href: 'https://www.linkedin.com/in/sanggyoon-kim-a5b2a82b7/',
      },
    ],
  },
];
