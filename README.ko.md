<h1 align="center">
  <br>
  <a href=""><img src="https://user-images.githubusercontent.com/13212227/99404580-2374f000-292f-11eb-9348-284f24cca88c.png" alt="" width="500px;"></a>
  <br>
  <img src="https://img.shields.io/badge/PRs-welcome-blue">
  <img src="https://img.shields.io/github/last-commit/hahwul/DevSecOps">
  <img src="https://github.com/hahwul/DevSecOps/workflows/CodeQL/badge.svg">
  <img src="https://api.codacy.com/project/badge/Grade/e5fd334a431848dcb6ecdb3784fb5dfb">
  <a href="https://twitter.com/intent/follow?screen_name=hahwul"><img src="https://img.shields.io/twitter/follow/hahwul?style=flat&logo=twitter"></a>
  <a href="https://github.com/hahwul"><img src="https://img.shields.io/github/stars/hahwul?style=flat&logo=github"></a>
</h1>

<p align="center">
  <a href="./README.md">English</a> •
  <a href="./README.ko.md">한국어</a> •
  <a href="./README.jp.md">日本語</a>
</p>

> DevSecOps를 원하는 모든 사람을 위한 로드맵입니다.

## DevSecOps란 무엇이며 왜 중요할까요?
DevSecOps는 소프트웨어 개발 수명 주기(SDLC)의 모든 단계에 보안을 통합하는 것을 목표로 하는 문화이자 관행입니다.
개발, 보안 및 운영 팀 간의 협업을 강조합니다.
목표는 처음부터 안전한 소프트웨어를 구축하고, 취약점을 줄이며, 더 빠르고 안전한 배포를 보장하는 것입니다.
이 로드맵은 개인과 조직이 DevSecOps 관행을 구현하는 데 도움이 되는 엄선된 리소스와 도구 목록을 제공합니다.

## 📜 목차
- [로드맵](#-로드맵)
- [도구](#-도구)
- [리소스](#리소스)
  * [0. DevSecOps 개요](#0-devsecops-개요)
  * [1. 설계](#1-설계)
  * [2. 개발](#2-개발)
  * [3. 빌드](#3-빌드)
  * [4. 테스트](#4-테스트)
  * [5. 배포](#5-배포)
  * [6. 운영 및 모니터링](#6-운영-및-모니터링)
- [CICD 보안](#cicd-보안)
- [Awesome resources](#awesome-resources)
- [다른 로드맵](#-다른-로드맵)
- [마무리](#-마무리)
- [기여자](#기여자)
- [기여하기](https://github.com/hahwul/DevSecOps/blob/main/CONTRIBUTING.md)

## 📖 이 로드맵 사용 방법
이 로드맵은 DevSecOps 관행을 채택하거나 개선하려는 개인 및 조직을 위한 포괄적인 가이드로 설계되었습니다. 최대한 활용하는 방법은 다음과 같습니다.

1.  **기본 사항 이해:** DevSecOps를 처음 사용하는 경우 "DevSecOps란 무엇이며 왜 중요한가요?" 섹션부터 시작하여 기본 사항을 이해하십시오.
2.  **큰 그림 보기:** 기본 **로드맵** 이미지는 DevSecOps 내의 다양한 단계와 영역에 대한 시각적 개요를 제공합니다. 이를 사용하여 방향을 잡으십시오.
3.  **도구 탐색:** **도구** 섹션에서는 다양한 DevSecOps 기능을 구현하는 데 도움이 되는 엄선된 소프트웨어 및 서비스 목록을 제공합니다.
4.  **리소스 살펴보기:** **리소스** 섹션은 DevSecOps 수명 주기(설계, 개발, 빌드, 테스트, 배포, 운영 및 모니터링)별로 분류되어 있습니다. 각 범주에는 기사, 가이드 및 공식 문서에 대한 링크가 포함되어 있습니다. 특정 요구 사항이나 관심 분야에 따라 이러한 항목을 탐색할 수 있습니다.
5.  **CI/CD 보안에 집중:** 파이프라인 보안에 중점을 둔다면 **CICD 보안** 섹션에서 대상 리소스를 제공합니다.
6.  **기여:** 이것은 커뮤니티 중심의 노력입니다. 제안 사항이 있거나, 깨진 링크를 발견하거나, 새로운 리소스를 추가하려면 [CONTRIBUTING.md](CONTRIBUTING.md) 가이드를 참조하십시오.

선형적으로 진행할 필요는 없습니다. 현재 과제나 학습 목표와 가장 관련성이 높은 섹션으로 자유롭게 이동하십시오.

## 💭 로드맵
![Roadmap](./DevSecOps.png)

## 🔩 도구
이 프로젝트에는 DevSecOps 관행을 구현하는 데 도움이 되는 엄선된 도구 목록이 포함되어 있습니다. 이러한 도구는 SAST(Static Application Security Testing), DAST(Dynamic Application Security Testing), 비밀 관리, 위협 모델링, 구성 요소 분석 등 SDLC의 다양한 단계를 다룹니다.

➡️ [**DevSecOps 도구 목록 살펴보기**](./tools/README.md)

이 목록은 도구를 빠르게 찾고 비교하여 검색 및 의사 결정에 소요되는 시간을 줄이는 데 도움이 되도록 설계되었습니다.

## 📦 리소스
### 0. DevSecOps 개요
  - 개요
    1. [DevSecOps in Wikipedia](https://en.wikipedia.org/wiki/DevOps#DevSecOps,_Shifting_Security_Left)
    2. [Zero to DevSecOps (OWASP Meetup)](https://owasp.org/www-chapter-belgium/assets/2019/2019-02-20/Zero-to-DevSecOps-OWASP-Meetup-02-19-19.pdf)
    3. [DevSecOps What Why And How (BlackHat USA-19)](https://i.blackhat.com/USA-19/Thursday/us-19-Shrivastava-DevSecOps-What-Why-And-How.pdf)
    4. [DevSecOps – Security and Test Automation (Mitre)](https://www.mitre.org/sites/default/files/publications/pr-19-0769-devsecops_security_test_automation-briefing.pdf)
    5. [DevSecOps: Making Security Central To Your DevOps Pipeline](https://spacelift.io/blog/what-is-devsecops)
    6. [Strengthen and Scale security using DevSecOps](https://owasp.org/www-pdf-archive/Devsecops-owasp-indonesia.pdf)
    7. [DSOVS (OWASP DevSecOps Verification Standard)](https://owasp.org/www-project-devsecops-verification-standard/)
    8. [What is DevSecOps? (Github)](https://github.com/resources/articles/devops/devsecops)
### 1. 설계
  - 개발 수명 주기
    1. [SDL(Secure Development Lifecycle) by Microsoft](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
    2. [OWASP's Software Assurance Maturity Model](https://github.com/OWASP/samm)
    3. [Building Security In Maturity Model (BSIMM)](https://www.bsimm.com/framework.html)
    4. [NIST's Secure Software Development Framework](https://csrc.nist.gov/CSRC/media/Publications/white-paper/2019/06/07/mitigating-risk-of-software-vulnerabilities-with-ssdf/draft/documents/ssdf-for-mitigating-risk-of-software-vulns-draft.pdf)
    5. [DevSecOps basics: 9 tips for shifting left (Gitlab)](https://about.gitlab.com/blog/2020/06/23/efficient-devsecops-nine-tips-shift-left/)
    6. [6 Ways to bring security to the speed of DevOps (Gitlab)](https://about.gitlab.com/blog/2019/10/31/speed-security-devops/)
  - 위협 모델
    1. [What is Threat Modeling / Wikipedia](https://en.wikipedia.org/wiki/Threat_model)
    2. [Threat Modeling by OWASP](https://owasp.org/www-community/Threat_Modeling)
    3. [Application Threat Modeling by OWASP](https://owasp.org/www-community/Application_Threat_Modeling)
    4. [Agile Threat Modeling Toolkit](https://threagile.io)
    5. [OWASP Threat Dragon](https://threatdragon.github.io)
### 2. 개발
  - 보안 코딩
    1. [Secure coding guide by Apple](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html)
    2. [Secure Coding Guidelines for Java SE](https://www.oracle.com/java/technologies/javase/seccodeguide.html)
    3. [Go-SCP / Go programming language secure coding practices guide](https://github.com/OWASP/Go-SCP)
    4. [Android App security best practices by Google](https://developer.android.com/topic/security/best-practices)
    5. [Securing Rails Applications](https://guides.rubyonrails.org/security.html)
### 3. 빌드
  - SAST(Static Application Security Testing)
    1. [Scan Source Code using Static Application Security Testing (SAST) with SonarQube, Part 1](https://medium.com/nycdev/scan-your-source-code-for-vulnerabilities-using-static-application-security-testing-sast-with-5f8ee1fdf9aa)
    2. [Announcing third-party code scanning tools: static analysis & developer security training](https://github.blog/2020-10-05-announcing-third-party-code-scanning-tools-static-analysis-and-developer-security-training/)
    3. [SAST levels defined by OWASP](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/CODE-004-Static-Application-Security-Testing-SAST.md)
### 4. 테스트
  - DAST(Dynamic Application Security Testing)
    1. [Dynamic Application Security Testing with ZAP and GitHub Actions](https://www.zaproxy.org/blog/2020-05-15-dynamic-application-security-testing-with-zap-and-github-actions/)
    2. [Dynamic Application Security Testing (DAST) in Gitlab](https://docs.gitlab.com/ee/user/application_security/dast/)
    3. [DAST using projectdiscovery Nuclei (github action)](https://github.com/secopslab/nuclei-action)
    4. [ZAPCon 2021-Democratizing ZAP with test automation and domain specific languages](https://youtu.be/jimW-R6_F4U)
    5. [DAST levels defined by OWASP](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-002-Dynamic-Application-Security-Testing-DAST.md)
  - 침투 테스트
    1. [Penetration Testing at DevSecOps Speed](https://securityboulevard.com/2019/04/penetration-testing-at-devsecops-speed/)
### 5. 배포
  - 보안 강화 및 구성
    1. [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/)
    2. [DevSecOps in Kubernetes](https://cloudblogs.microsoft.com/opensource/2019/07/22/devsecops-in-kubernetes/)
  - 보안 스캐닝
    1. [Best practices for scanning images (docker)](https://docs.docker.com/develop/scan-images/)
### 6. 운영 및 모니터링
  - RASP(Run-time Application Security Protection)
    1. [Runtime Application Self-Protection by rapid7](https://www.rapid7.com/fundamentals/runtime-application-self-protection/)
    2. [Jumpstarting your devsecops - Pipeline with IAST and RASP](https://2018.appsec.eu/presos/DevOps_Jumpstarting-Your-DevSecOps_Jeff-Williams_AppSecEU2018.pdf)
  - 보안 감사
  - 보안 모니터
    1. IAST(Interactive Application Security Testing)
       - [IAST levels defined by OWASP](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-003-Interactive-Application-Security-Testing-IAST.md)
    2. 지표, 모니터링, 알림
  - 보안 분석
    1. [Attack Surface Analysis Cheat Sheet by OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html)

## CICD 보안
- Github Actions
    1. [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
    2. [Github Actions Security Best Practices](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5)
    3. [GitHub Actions Security Best Practices [cheat sheet included]](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)
- Jenkins
    1. [Securing Jenkins](https://www.jenkins.io/doc/book/security/)
    2. [Securing Jenkins CI Systems by SANS](https://www.sans.org/white-papers/36872/)
    3. [DEPRECATED/chef-jenkins-hardening](https://github.com/dev-sec/chef-jenkins-hardening)

### Awesome Resources
* https://github.com/TaptuIT/awesome-devsecops

## 🚀 다른 로드맵
| ![](assets/dod.png "DoD logo") | ![](assets/LarryMaccherone.jpg "Larry Maccherone portrait") |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|   U.S. Department of Defense           | Larry Maccherone                                       |
| [![DevSecOps Security Checklist](https://i.imgur.com/pQXVOzS.png)](https://assets.sqreen.com/whitepapers/devsecops-security-checklist.pdf) | [![GitLab Security DevOps Diagram](https://about.gitlab.com/images/secure/security-diagram.svg)](https://about.gitlab.com/solutions/dev-sec-ops/) |
| The DevSecOps Security Checklist | Gitlab security devops diagram |

## 🙏🏼 마무리
로드맵을 개선할 수 있다고 생각되면 언제든지 PR을 열어 업데이트하고 문제를 제출하십시오. 또한 이 로드맵을 계속 개선할 것이므로 이 저장소를 즐겨찾기에 추가하여 다시 방문할 수 있습니다.

아이디어 출처: [Go Developer Roadmap](https://github.com/Alikhll/golang-developer-roadmap)

## 기여자
![](CONTRIBUTORS.svg "Contributors List")
