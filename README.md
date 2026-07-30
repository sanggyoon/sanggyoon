<div align="center">

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:0F766E,50:43C1B3,100:67E8F9&height=250&section=header&text=Sanggyoon%20Kim&fontSize=62&fontColor=FFFFFF" />

<a href="https://iam.sanggyoon.com"><img src="https://img.shields.io/badge/Portfolio-iam.sanggyoon.com-0F766E?style=for-the-badge&logo=vercel&logoColor=white" /></a>
<a href="https://velog.io/@sanggyoon/posts"><img src="https://img.shields.io/badge/Velog-@sanggyoon-20C997?style=for-the-badge&logo=velog&logoColor=white" /></a>
<a href="https://www.linkedin.com/in/sanggyoon-kim-a5b2a82b7/"><img src="https://img.shields.io/badge/LinkedIn-sanggyoon--kim-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white" /></a>

</div>

---

## 🙋 About Me

<div align="center">

  <a href="https://git.io/typing-svg">
    <img src="https://readme-typing-svg.demolab.com?font=Noto+Sans+KR&weight=600&size=24&pause=1200&center=true&vCenter=true&width=620&height=50&color=43C1B3&lines=%EB%AC%B4%EB%A6%AC%ED%95%B4%EC%84%9C+%EC%8C%93%EC%9D%80+%ED%95%98%EB%A3%A8%EB%B3%B4%EB%8B%A4+%EC%9E%98+%EC%8C%93%EC%9D%80+%ED%95%98%EB%A3%A8" />
  </a>

</div>

- 무리한 속도보다 원리 이해와 완결을 중시하며, 한 번 맡기면 신뢰할 수 있는 개발자를 지향합니다.
- 모르면 직접 만들어 보고, 막히면 근본까지 파고드는 태도로 팀이 안심하고 기댈 수 있는 엔지니어를 목표로 합니다.
- 대학에서 다루지 않는 인프라가 궁금해서 **도메인·공유기·미니 PC를 직접 사서 서버를 세웠습니다.** 웹 퍼블리싱 / 로컬 LLM / 게임 서버 / AI 개인비서(iCloud + Obsidian + Claude Code) 를 그 위에서 굴리는 등 계속 새로운 도전을 시도하고 있습니다.
- 스타트업 인턴으로 **회사 NAS 인프라를 처음부터 구축**하며 OS와 네트워크를 실무로 익혔습니다.
- **카카오엔터프라이즈 클라우드 과정**에서 Kubernetes·CI/CD로 관심 영역을 확장했습니다.

## 📈 숫자로 보는 결과

<div align="center">

|                        | Before → After                    | 어떻게                                                   |
| :--------------------- | :-------------------------------- | :------------------------------------------------------- |
| 💸 **DR 상시 운영비**  | `$110/mo` → **`$49/mo`** _(-55%)_ | NAT GW·EIP 제거, 퍼블릭 서브넷 전환, 인스턴스 다운사이징 |
| 🚀 **부하 한계 (VU)**  | `~700` → **`~3,600`** _(5x)_      | DB 병목 규명 → 라우트 캐싱 → HPA max 상향                |
| ⚡ **응답 지연 (p95)** | `4.5s` → **`0.66s`** _(-85%)_     | 라우트 캐싱 1h + 페이로드 축소                           |
| 🔌 **외부 API 한계**   | `~500` → **`~3,777`** _(7.5x)_    | 인증 결과 캐싱(60s) + PostgREST 풀 10→40                 |
| 🧠 **LLM 응답 시간**   | `5분` → **`3분`** _(-40%)_        | Lazy load + 요청 직렬 큐로 스와핑·자원경쟁 제거          |
| 🩹 **DNS 캐싱 장애**   | `504 전면 차단` → **`재발 0건`**  | Nginx resolver + 변수 기반 proxy_pass (10s 재해석)       |

</div>

<br/>

## 🚧 Projects

### ☁️ [Peakly — 카카오 AIaaS 하이브리드 클라우드](https://github.com/sanggyoon/202605_KakaoCloud_AIaaS)

> `4인 팀 팀장` · 인프라 · 프론트 · 백엔드 · DB · ML · DevOps 전 영역 주도
> ** 🌐 백업된 서비스 운영 중** — [`peakly.sanggyoon.com`](https://peakly.sanggyoon.com)

KakaoCloud VM 5대 위에 **셀프매니지드 k3s**로 서비스를 운영하고, AWS를 **DR 환경**으로 Terraform 코드화했습니다.
Route53 헬스체크 기반 자동 페일오버를 구현·검증했고, GitHub Actions → GHCR → **Argo CD GitOps**로 선언적 배포/롤백을 구성했습니다.

부하 테스트는 **별도 VPC에 k6를 격리**해 실서비스 영향 없이 진행했고, p95 3s·에러율 5% 초과 시 자동 중단하는 안전장치를 뒀습니다.
붕괴점을 직접 탐색해 **천장이 앱 티어가 아니라 단일 DB 노드(CPU 100%)임을 데이터로 확정** → 캐싱으로 제거 → 천장이 워커 노드로 이동하는 것까지 추적했습니다.

<sub>💡 부하 도구가 캐시를 우회하면 개선 효과가 측정되지 않는다는 점, 부하 생성기 자체 한계(ulimit)를 서비스 천장으로 오인하면 안 된다는 점을 진단 과정에서 규명했습니다.</sub>

---

### 🧠 ABORA — 멀티 AI 에이전트 상호작용 (종합설계 TeamTalk)

> `4인 팀 팀장` · 인프라/백엔드 중심 풀스택 · **논문 1편 공저자 등재**
> [`v1 (프로토타입)`](https://github.com/sanggyoon/202503-ABORA-multi_agent_system_v1) · [`v2 (재설계)`](https://github.com/sanggyoon/202509-ABORA-multi_agent_system_v2)

역할별 소형 모델(Qwen / Llama / Mistral, 7~8B)과 오케스트레이터를 **n8n으로 협업 파이프라인화**했습니다.
**Mac mini(M4·16GB) 홈서버**에 Ollama + Nginx로 온프레미스 추론 환경을 직접 구축하고, 모노리식 v1을 프론트/백엔드 분리 구조 v2로 재설계했습니다.

응답 5분의 원인을 **메모리 초과(SSD 스와핑)** 와 **동시 추론 자원 경쟁** 두 가지로 분리해 규명하고,
`지연 로드`(첫 호출 로딩 지연은 트레이드오프로 수용) + `요청 직렬 큐`로 **3분까지 단축**했습니다.

---

### 🩺 지존소프트 인턴 — NAS 인프라 구축 & 504 장애 대응

> `개발부 인턴` · Synology DSM 위 SMTP 메일 서버 · Supabase · 웹 서비스 배포 신규 구축

서버 물리 이전 직후 웹 요청이 **전부 504로 차단**된 장애를 클라이언트↔서버 양방향 레이어별로 추적,
**Nginx가 기동 시점의 IP를 계속 참조하는 DNS 캐싱**이 원인임을 밝혔습니다.
컨테이너 재시작으로 즉시 복구한 뒤, `resolver` + 변수 기반 `proxy_pass`로 10초마다 도메인을 재해석하도록 바꿔 **사람 개입 없이 자동 반영**되게 만들고 사내 커뮤니티에 문서화했습니다.

<br/>

## 🗓️ Timeline & Certifications

| 시점              | 경험 / 자격증                             |    구분     |
| :---------------- | :---------------------------------------- | :---------: |
| 2023.09           | AICE-Basic 취득                           |  📜 자격증  |
| 2024.01 ~ 2024.12 | 메타버스SW (MZsWeb 2~3기, ~640h)          |   🙌 활동   |
| 2024.03 ~ 2024.05 | 교내 자기주도 학습 동아리                 |   🙌 활동   |
| 2024.06 ~ 2024.09 | 국립전파연구원 인턴                       |   💼 인턴   |
| 2025.01 ~ 2025.12 | 종합설계 TeamTalk (졸업작품·**최우수상**) | 🚀 프로젝트 |
| 2025.04 ~ 2025.11 | 뉴노멀 ATD (인재상)                       |   🙌 활동   |
| 2025.09 ~ 2025.10 | 지존소프트 인턴                           |   💼 인턴   |
| 2025.12 ~ 2026.07 | 카카오 AIaaS — Peakly                     | 🚀 프로젝트 |
| 2026.01           | AWS Certified Cloud Practitioner 취득     |  📜 자격증  |
| 2026.03           | SQLD 취득                                 |  📜 자격증  |
| 2026.07           | 리눅스마스터 2급 취득                     |  📜 자격증  |

<br/>

## 📊 GitHub Stats

<div align="center">

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sanggyoon&theme=github_dark" />
    <img width="700" src="https://github-profile-summary-cards.vercel.app/api/cards/profile-details?username=sanggyoon&theme=default" />
  </picture>

  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=sanggyoon&theme=github_dark" />
    <img height="200" src="https://github-profile-summary-cards.vercel.app/api/cards/repos-per-language?username=sanggyoon&theme=default" />
  </picture>
  <picture>
    <source media="(prefers-color-scheme: dark)" srcset="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=sanggyoon&theme=github_dark" />
    <img height="200" src="https://github-profile-summary-cards.vercel.app/api/cards/most-commit-language?username=sanggyoon&theme=default" />
  </picture>

<br/><br/>

  <a href="https://www.gitanimals.org/en_US?utm_medium=image&utm_source=sanggyoon&utm_content=line">
    <img src="https://render.gitanimals.org/lines/sanggyoon?pet-id=813608454775719018" width="854" height="200" />
  </a>

</div>

<div align="center">

  <br/>

**더 자세한 이야기는 포트폴리오에 정리해 두었습니다 →** [**iam.sanggyoon.com**](https://iam.sanggyoon.com)

<sub>💬 KakaoTalk ID · <code>tkdrbs518</code></sub>

<sub>📧 E-Mail · <code>sangreal4262@gmail.com</code></sub>

  <img src="https://capsule-render.vercel.app/api?type=waving&color=0:67E8F9,50:43C1B3,100:0F766E&height=140&section=footer" />

</div>
