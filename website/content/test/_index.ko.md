+++
title = "테스트"
description = "실행 중인 앱을 겨냥한 DAST와 모의해킹. 누군가 하기 전에 우리가 먼저."
template = "chapter"
weight = 4

[extra]
phase = "test"
episode = 4
hook = "누군가 공격하기 전에, 스스로를 공격하세요."
has_tools = true
+++

{% strip(row=true) %}

{% panel(tint="sec") %}
{{ scene(name="char-sec", pose="happy", bg="window", alt="신나서 스테이징 공격을 시작하는 Sec") }}

{% bubble(who="sec", name="Sec") %}스테이징 떴어요. 우리 앱, 우리가 먼저 공격할 시간!{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="caught", alt="제일 아끼던 은신처에서 쫓겨난 버그") }}

{% bubble(who="bug", dir="right", name="버그") %}로그인 페이지를 스캔했다고요? 거기 내가 제일 아끼는 문이었는데!{% endbubble %}
{% endpanel %}

{% endstrip %}

## 이 단계에서 벌어지는 일

정적 분석이 코드를 읽는다면, 이 단계는 실제로 돌아가는 것을 찔러 봐요. **DAST**는 배포된 앱에 진짜 요청을 보내고 어떻게 잘못 반응하는지 지켜봅니다. 브라우저를 든 공격자와 똑같이요. **IAST**는 테스트가 도는 동안 프로세스 안쪽에서 지켜봅니다.

자동화는 알려진 패턴을 커버해요. 나머지는 **모의해킹**이 가진 인간의 창의력이 채웁니다. 연결된 로직 결함, 이상한 구석, 어떤 스캐너에도 템플릿이 없는 것들요. 운영 배포 전에 자동과 수동 테스트를 함께 돌리는 습관이 남는 장사입니다.

{% caps() %}
- DAST
- IAST
- 모의해킹
{% endcaps %}

## 실전에서는

CI에서 바로 도는, 매주 월요일 스테이징 대상 ZAP 베이스라인 스캔이에요.

```yaml
name: dast
on:
  schedule:
    - cron: "0 3 * * 1"

jobs:
  zap:
    runs-on: ubuntu-latest
    steps:
      - name: ZAP baseline scan
        uses: zaproxy/action-baseline@v0.14.0
        with:
          target: https://staging.example.com
```

베이스라인 스캔은 수동적이라 자주 돌려도 안전해요. 능동 공격이 포함된 풀 스캔은 직접 소유한 환경에서, 그 주의 신규 취약점은 Nuclei 같은 템플릿 기반 스캐너로 졸업해 가세요.

## 더 읽어보기

{% resources() %}
- [ZAP과 GitHub Actions로 하는 DAST](https://www.zaproxy.org/blog/2020-05-15-dynamic-application-security-testing-with-zap-and-github-actions/)
- [GitLab의 DAST](https://docs.gitlab.com/ee/user/application_security/dast/)
- [Nuclei로 하는 DAST (GitHub Action)](https://github.com/secopslab/nuclei-action)
- [ZAPCon 2021: ZAP의 대중화](https://www.youtube.com/watch?v=jimW-R6_F4U)
- [OWASP DSOVS가 정의한 DAST 레벨](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-002-Dynamic-Application-Security-Testing-DAST.md)
{% endresources %}
