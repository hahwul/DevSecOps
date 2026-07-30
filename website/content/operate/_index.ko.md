+++
title = "운영"
description = "RASP, 감사, 모니터링, 패치. 배포는 지켜보기의 시작입니다."
template = "chapter"
weight = 6

[extra]
phase = "operate"
episode = 6
hook = "배포는 지켜보기의 시작이에요."
has_tools = true
+++

{% strip(row=true) %}

{% panel(tint="sec") %}
{{ scene(name="char-ops", pose="monitor", bg="radar", alt="초록색 대시보드와 무장된 알림을 지켜보는 Ops") }}

{% bubble(who="ops", name="Ops") %}대시보드 초록불. 알림 무장 완료. RASP 근무 중.{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="caught", alt="몇 초 만에 알림에 걸린 버그") }}

{% bubble(who="bug", dir="right", name="버그") %}의존성 하나 건드렸을 뿐인데! 알림이 어떻게 몇 초 만에 울려요?{% endbubble %}
{% endpanel %}

{% endstrip %}

## 이 단계에서 벌어지는 일

운영 환경은 이야기가 계속되는 곳이에요. **RASP**는 애플리케이션 안에 타고 들어가 런타임에 공격을 막습니다. **모니터링**은 로그와 메트릭을 누군가 실제로 보는 알림으로 바꾸고, 정기적인 **감사**는 통제 장치가 여전히 현실과 맞는지 물어요.

그리고 **패치**가 있죠. 보안에서 제일 화려하지 않은 초능력이요. 새 CVE는 매일 쏟아지고, 이기는 팀은 그저 빨리 업데이트하는 팀입니다. 무엇이 어디서 돌고 있는지 아는 컴포넌트 분석이 그걸 도와줘요.

{% caps() %}
- RASP
- 감사
- 모니터링
- 패치
{% endcaps %}

## 실전에서는

릴리스 때만이 아니라, 일정에 맞춰 계속 질문을 던지세요.

```bash
# 매일 밤: CIS 기준으로 클라우드 계정 감사
prowler aws --compliance cis_2.0_aws

# 매일 밤: 새로 공개된 CVE에 대해 라이브 이미지 재스캔
trivy image --scanners vuln registry.example.com/shop:live
```

SBOM을 Dependency-Track 같은 컴포넌트 분석 플랫폼에 흘려 두면, 새 CVE가 떨어진 아침에 "우리가 돌리는 것 중에 영향받는 게 있나?"라는 질문이 저절로 답을 얻습니다.

{% alert(type="tip", title="루프를 닫으세요") %}운영하며 배운 것들(공격 패턴, 시끄러운 알림, 몰랐던 의존성)이 다음 에피소드의 설계 입력이 돼요. 그래서 루프인 거죠.{% endalert %}

## 더 읽어보기

{% resources() %}
- [Runtime Application Self-Protection (Rapid7)](https://www.rapid7.com/fundamentals/runtime-application-self-protection/)
- [IAST와 RASP로 시작하는 DevSecOps 파이프라인](https://2018.appsec.eu/presos/DevOps_Jumpstarting-Your-DevSecOps_Jeff-Williams_AppSecEU2018.pdf)
- [OWASP DSOVS가 정의한 IAST 레벨](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-003-Interactive-Application-Security-Testing-IAST.md)
- [공격 표면 분석 치트 시트 (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html)
{% endresources %}
