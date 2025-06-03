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

> DevSecOpsを始めたいすべての人のためのロードマップ。

## DevSecOpsとは何か、なぜ重要なのか？
DevSecOpsは、ソフトウェア開発ライフサイクル（SDLC）の各フェーズにセキュリティを統合することを目指す文化であり実践です。
開発チーム、セキュリティチーム、運用チーム間のコラボレーションを重視します。
目標は、脆弱性を減らし、より迅速で安全なデプロイメントを保証するために、最初から安全なソフトウェアを構築することです。
このロードマップは、個人や組織がDevSecOpsの実践を導入するのに役立つリソースとツールの厳選されたリストを提供します。

## 📜 目次
- [ロードマップ](#-ロードマップ)
- [ツール](#-ツール)
- [リソース](#リソース)
  * [0. DevSecOps概要](#0-devsecops概要)
  * [1. 設計](#1-設計)
  * [2. 開発](#2-開発)
  * [3. ビルド](#3-ビルド)
  * [4. テスト](#4-テスト)
  * [5. デプロイ](#5-デプロイ)
  * [6. 運用と監視](#6-運用と監視)
- [CICDのセキュリティ](#cicdのセキュリティ)
- [素晴らしいリソース](#素晴らしいリソース)
- [その他のロードマップ](#-その他のロードマップ)
- [まとめ](#-まとめ)
- [貢献者](#貢献者)
- [貢献する](https://github.com/hahwul/DevSecOps/blob/main/CONTRIBUTING.md)

## 📖 このロードマップの使い方
このロードマップは、DevSecOpsの実践を採用または改善しようとしている個人や組織のための包括的なガイドとして設計されています。最大限に活用する方法は次のとおりです。

1.  **基本を理解する：** DevSecOpsが初めての場合は、「DevSecOpsとは何か、なぜ重要なのか？」セクションから始めて、基礎的な理解を深めてください。
2.  **全体像を見る：** メインの**ロードマップ**画像は、DevSecOps内のさまざまな段階と領域の視覚的な概要を示しています。これを使用して自分自身を方向付けてください。
3.  **ツールを探る：** **ツール**セクションでは、さまざまなDevSecOps機能を実装するのに役立つソフトウェアとサービスの厳選されたリストを提供しています。
4.  **リソースを深く掘り下げる：** **リソース**セクションは、DevSecOpsライフサイクル（設計、開発、ビルド、テスト、デプロイ、運用と監視）によって分類されています。各カテゴリには、記事、ガイド、および公式ドキュメントへのリンクが含まれています。特定のニーズや関心のある分野に基づいてこれらを調べることができます。
5.  **CI/CDセキュリティに焦点を当てる：** パイプラインの保護に焦点を当てている場合は、**CICDのセキュリティ**セクションで対象となるリソースを提供しています。
6.  **貢献する：** これはコミュニティ主導の取り組みです。提案がある場合、リンク切れを見つけた場合、または新しいリソースを追加したい場合は、[CONTRIBUTING.md](CONTRIBUTING.md)ガイドをご覧ください。

直線的に進む必要はありません。現在の課題や学習目標に最も関連性の高いセクションに自由にジャンプしてください。

## 💭 ロードマップ
![Roadmap](./DevSecOps.png)

## 🔩 ツール
このプロジェクトには、DevSecOpsの実践を実装するのに役立つツールの厳選されたリストが含まれています。これらのツールは、静的アプリケーションセキュリティテスト（SAST）、動的アプリケーションセキュリティテスト（DAST）、シークレット管理、脅威モデリング、コンポーネント分析など、SDLCのさまざまな段階をカバーしています。

➡️ [**DevSecOpsツールリストを探る**](./tools/README.md)

このリストは、ツールをすばやく見つけて比較し、検索と意思決定にかかる時間を短縮できるように設計されています。

## 📦 リソース
### 0. DevSecOps概要
  - 概要
    1. [DevSecOps in Wikipedia](https://en.wikipedia.org/wiki/DevOps#DevSecOps,_Shifting_Security_Left)
    2. [Zero to DevSecOps (OWASP Meetup)](https://owasp.org/www-chapter-belgium/assets/2019/2019-02-20/Zero-to-DevSecOps-OWASP-Meetup-02-19-19.pdf)
    3. [DevSecOps What Why And How (BlackHat USA-19)](https://i.blackhat.com/USA-19/Thursday/us-19-Shrivastava-DevSecOps-What-Why-And-How.pdf)
    4. [DevSecOps – Security and Test Automation (Mitre)](https://www.mitre.org/sites/default/files/publications/pr-19-0769-devsecops_security_test_automation-briefing.pdf)
    5. [DevSecOps: Making Security Central To Your DevOps Pipeline](https://spacelift.io/blog/what-is-devsecops)
    6. [Strengthen and Scale security using DevSecOps](https://owasp.org/www-pdf-archive/Devsecops-owasp-indonesia.pdf)
    7. [DSOVS (OWASP DevSecOps Verification Standard)](https://owasp.org/www-project-devsecops-verification-standard/)
    8. [What is DevSecOps? (Github)](https://github.com/resources/articles/devops/devsecops)
### 1. 設計
  - 開発ライフサイクル
    1. [SDL(Secure Development Lifecycle) by Microsoft](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
    2. [OWASP's Software Assurance Maturity Model](https://github.com/OWASP/samm)
    3. [Building Security In Maturity Model (BSIMM)](https://www.bsimm.com/framework.html)
    4. [NIST's Secure Software Development Framework](https://csrc.nist.gov/CSRC/media/Publications/white-paper/2019/06/07/mitigating-risk-of-software-vulnerabilities-with-ssdf/draft/documents/ssdf-for-mitigating-risk-of-software-vulns-draft.pdf)
    5. [DevSecOps basics: 9 tips for shifting left (Gitlab)](https://about.gitlab.com/blog/2020/06/23/efficient-devsecops-nine-tips-shift-left/)
    6. [6 Ways to bring security to the speed of DevOps (Gitlab)](https://about.gitlab.com/blog/2019/10/31/speed-security-devops/)
  - 脅威モデル
    1. [What is Threat Modeling / Wikipedia](https://en.wikipedia.org/wiki/Threat_model)
    2. [Threat Modeling by OWASP](https://owasp.org/www-community/Threat_Modeling)
    3. [Application Threat Modeling by OWASP](https://owasp.org/www-community/Application_Threat_Modeling)
    4. [Agile Threat Modeling Toolkit](https://threagile.io)
    5. [OWASP Threat Dragon](https://threatdragon.github.io)
### 2. 開発
  - セキュアコーディング
    1. [Secure coding guide by Apple](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html)
    2. [Secure Coding Guidelines for Java SE](https://www.oracle.com/java/technologies/javase/seccodeguide.html)
    3. [Go-SCP / Go programming language secure coding practices guide](https://github.com/OWASP/Go-SCP)
    4. [Android App security best practices by Google](https://developer.android.com/topic/security/best-practices)
    5. [Securing Rails Applications](https://guides.rubyonrails.org/security.html)
### 3. ビルド
  - SAST(Static Application Security Testing)
    1. [Scan Source Code using Static Application Security Testing (SAST) with SonarQube, Part 1](https://medium.com/nycdev/scan-your-source-code-for-vulnerabilities-using-static-application-security-testing-sast-with-5f8ee1fdf9aa)
    2. [Announcing third-party code-scanning tools: static analysis & developer security training](https://github.blog/2020-10-05-announcing-third-party-code-scanning-tools-static-analysis-and-developer-security-training/)
    3. [SAST levels defined by OWASP](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/CODE-004-Static-Application-Security-Testing-SAST.md)
### 4. テスト
  - DAST(Dynamic Application Security Testing)
    1. [Dynamic Application Security Testing with ZAP and GitHub Actions](https://www.zaproxy.org/blog/2020-05-15-dynamic-application-security-testing-with-zap-and-github-actions/)
    2. [Dynamic Application Security Testing (DAST) in Gitlab](https://docs.gitlab.com/ee/user/application_security/dast/)
    3. [DAST using projectdiscovery Nuclei (github action)](https://github.com/secopslab/nuclei-action)
    4. [ZAPCon 2021-Democratizing ZAP with test automation and domain specific languages](https://youtu.be/jimW-R6_F4U)
    5. [DAST levels defined by OWASP](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-002-Dynamic-Application-Security-Testing-DAST.md)
  - ペネトレーションテスト
    1. [Penetration Testing at DevSecOps Speed](https://securityboulevard.com/2019/04/penetration-testing-at-devsecops-speed/)
### 5. デプロイ
  - セキュリティ強化と設定
    1. [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/)
    2. [DevSecOps in Kubernetes](https://cloudblogs.microsoft.com/opensource/2019/07/22/devsecops-in-kubernetes/)
  - セキュリティスキャン
    1. [Best practices for scanning images (docker)](https://docs.docker.com/develop/scan-images/)
### 6. 運用と監視
  - RASP(Run-time Application Security Protection)
    1. [Runtime Application Self-Protection by rapid7](https://www.rapid7.com/fundamentals/runtime-application-self-protection/)
    2. [Jumpstarting your devsecops - Pipeline with IAST and RASP](https://2018.appsec.eu/presos/DevOps_Jumpstarting-Your-DevSecOps_Jeff-Williams_AppSecEU2018.pdf)
  - セキュリティ監査
  - セキュリティ監視
    1. IAST(Interactive Application Security Testing)
       - [IAST levels defined by OWASP](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-003-Interactive-Application-Securit-Testing-IAST.md)
    2. メトリクス、監視、アラート
  - セキュリティ分析
    1. [Attack Surface Analysis Cheat Sheet by OWASP](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html)

## CICDのセキュリティ
- Github Actions
    1. [Security hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
    2. [Github Actions Security Best Practices](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5)
    3. [GitHub Actions Security Best Practices [cheat sheet included]](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)
- Jenkins
    1. [Securing Jenkins](https://www.jenkins.io/doc/book/security/)
    2. [Securing Jenkins CI Systems by SANS](https://www.sans.org/white-papers/36872/)
    3. [DEPRECATED/chef-jenkins-hardening](https://github.com/dev-sec/chef-jenkins-hardening)

### 素晴らしいリソース
* https://github.com/TaptuIT/awesome-devsecops

## 🚀 その他のロードマップ
| ![](assets/dod.png "DoD logo") | ![](assets/LarryMaccherone.jpg "Larry Maccherone portrait") |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
|   U.S. Department of Defense           | Larry Maccherone                                       |
| [![DevSecOps Security Checklist](https://i.imgur.com/pQXVOzS.png)](https://assets.sqreen.com/whitepapers/devsecops-security-checklist.pdf) | [![GitLab Security DevOps Diagram](https://about.gitlab.com/images/secure/security-diagram.svg)](https://about.gitlab.com/solutions/dev-sec-ops/) |
| The DevSecOps Security Checklist | Gitlab security devops diagram |

## 🙏🏼 まとめ
ロードマップを改善できると思われる場合は、PRを開いて更新を送信し、問題を送信してください。また、今後も改善を続けていきますので、このリポジトリにスターを付けて再訪することをお勧めします。

アイデア元: [Go Developer Roadmap](https://github.com/Alikhll/golang-developer-roadmap)

## 貢献者
![](CONTRIBUTORS.svg "Contributors List")
