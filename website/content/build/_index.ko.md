+++
title = "빌드"
description = "푸시할 때마다 SAST, SCA, 시크릿 스캔. 잔소리는 파이프라인에게 맡기세요."
template = "chapter"
weight = 3

[extra]
phase = "build"
episode = 3
hook = "잔소리는 파이프라인에게 맡기세요."
has_tools = true
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-ops", pose="gear", bg="gears", alt="파이프라인을 조율하는 Ops") }}

{% bubble(who="ops", name="Ops") %}푸시하세요. 2분 뒤에 파이프라인이 진실을 말해 줄 거예요.{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="caught", alt="시크릿 스캐너에 걸린 버그") }}

{% bubble(who="bug", dir="right", name="버그") %}시크릿 스캐너라니?! 내 API 키 컬렉션은 누가 알려 줬어요?{% endbubble %}
{% endpanel %}

{% endstrip %}

## 이 단계에서 벌어지는 일

모든 푸시는 버그를 자동으로 잡을 기회예요. **SAST**는 소스에서 취약한 패턴을 읽어 내고, **SCA**는 의존성을 알려진 CVE와 대조하고, **시크릿 스캔**은 커밋되면 안 됐을 토큰을 사냥합니다. 테스트 실행에 **IAST** 에이전트를 붙여 내부 시야를 확보하는 팀도 있어요.

빌드 시스템 자체도 공격 표면이에요. CI 잡이 장악당하면 여러분 대신 서명하고, 게시하고, 배포할 수 있죠. 파이프라인은 사실상 운영 환경이니, 운영 환경처럼 단단하게 지키세요.

{% caps() %}
- SAST
- SCA
- 시크릿 관리
- IAST
{% endcaps %}

## 실전에서는

모든 푸시와 풀 리퀘스트에서 도는 최소한의 보안 잡이에요.

{% raw %}
```yaml
name: security
on: [push, pull_request]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - name: Scan for leaked secrets
        uses: gitleaks/gitleaks-action@v2
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}

      - name: Static analysis
        run: |
          pip install semgrep
          semgrep ci --config auto
```
{% endraw %}

기본 설정으로 시작하고, 규칙은 코드베이스에 맞게 다듬어 가세요. 시끄러운 스캐너는 무시당하지만, 조용하고 정확한 스캐너는 팀의 일원이 됩니다.

{% alert(type="warning", title="빌드를 깨뜨리세요") %}경고만 찍고 지나가는 발견은 모두가 스크롤해서 지나치는 발견이에요. 크리티컬은 빌드를 깨뜨리게 하세요.{% endalert %}

## 더 읽어보기

{% resources() %}
- [SonarQube로 소스 코드 SAST 스캔하기](https://medium.com/nycdev/scan-your-source-code-for-vulnerabilities-using-static-application-security-testing-sast-with-5f8ee1fdf9aa)
- [GitHub의 서드파티 코드 스캐닝 도구](https://github.blog/2020-10-05-announcing-third-party-code-scanning-tools-static-analysis-and-developer-security-training/)
- [OWASP DSOVS가 정의한 SAST 레벨](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/CODE-004-Static-Application-Security-Testing-SAST.md)
- [GitHub Actions 보안 강화 가이드](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [GitHub Actions 보안 모범 사례 (Salesforce)](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5)
- [GitHub Actions 보안 치트 시트 (GitGuardian)](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)
- [Securing Jenkins](https://www.jenkins.io/doc/book/security/)
- [SANS의 Jenkins CI 시스템 보안](https://www.sans.org/white-papers/36872/)
{% endresources %}
