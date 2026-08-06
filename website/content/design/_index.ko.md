+++
title = "설계"
description = "위협 모델링과 시큐어 SDLC. 보안은 첫 커밋 전에 시작됩니다."
template = "chapter"
weight = 1

[extra]
phase = "design"
episode = 1
hook = "안전한 시스템은 모두 그림에서 시작해요."
has_tools = true
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-sec", pose="point", bg="board", alt="화이트보드의 아키텍처 스케치를 가리키는 Sec") }}

{% bubble(who="sec", name="Sec") %}코드를 쓰기 전에 먼저 물어봐요. 여기서 뭐가 잘못될 수 있을까요?{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="sneak", bg="board", alt="이미 다이어그램 속에 숨어 있는 버그") }}

{% bubble(who="bug", dir="right", name="버그") %}쉿. 저 로그인 박스에 살려고 했는데.{% endbubble %}
{% endpanel %}

{% endstrip %}

## 이 단계에서 벌어지는 일

설계는 수정 비용이 인시던트 리포트가 아니라 연필 한 획인 단계예요. 소프트웨어와 비즈니스 설계는 첫 스케치부터 보안을 고려해야 합니다. 어떤 데이터가 중요한지, 누가 만지는지, 공격자라면 무엇부터 노릴지를요.

이 단계를 지탱하는 습관은 두 가지예요. **시큐어 개발 라이프사이클**(Microsoft SDL, OWASP SAMM, BSIMM, NIST SSDF)은 릴리스마다 반복할 수 있는 보안 활동 목록을 팀에 쥐여 줍니다. **위협 모델링**은 아키텍처 다이어그램을 놓고 오후 한나절 동안 네 가지 질문을 던지는 일이죠. 무엇을 만들고 있나, 무엇이 잘못될 수 있나, 그래서 어떻게 할 건가, 그리고 잘 해냈나?

{% caps() %}
- 시큐어 SDLC
- 위협 모델링
{% endcaps %}

## 실전에서는

시작하는 데 특별한 도구는 필요 없어요. 화이트보드와 네 가지 질문이면 충분히 멀리 갑니다. 모델을 코드 옆에 두고 싶다면 코드로 기술하세요. 아래는 [pytm](https://github.com/izar/pytm)이에요. 파이썬 몇 줄로 다이어그램과 위협 목록이 만들어집니다.

```python
from pytm import TM, Server, Datastore, Dataflow, Boundary, Actor

tm = TM("Checkout service")
internet = Boundary("Internet")
user = Actor("Customer", inBoundary=internet)
web = Server("Web frontend")
db = Datastore("Orders DB")

Dataflow(user, web, "Place order (HTTPS)")
Dataflow(web, db, "Store order (TLS, least privilege)")

tm.process()
```

실행하면 데이터 흐름 다이어그램과 함께 팀과 검토할 만한 위협 목록이 나와요. 타이핑보다 그리는 게 좋다면 [OWASP Threat Dragon](https://threatdragon.github.io)과 [Threagile](https://threagile.io)이 같은 역할을 해 줍니다.

{% alert(type="tip", title="시프트 레프트") %}결함은 일찍 찾을수록 고치는 비용이 싸져요. 설계는 갈 수 있는 가장 왼쪽입니다.{% endalert %}

## 더 읽어보기

{% resources() %}
- [Microsoft 시큐어 개발 라이프사이클](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
- [OWASP Software Assurance Maturity Model](https://github.com/OWASP/samm)
- [Building Security In Maturity Model (BSIMM)](https://www.bsimm.com/framework.html)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/CSRC/media/Publications/white-paper/2019/06/07/mitigating-risk-of-software-vulnerabilities-with-ssdf/draft/documents/ssdf-for-mitigating-risk-of-software-vulns-draft.pdf)
- [DevSecOps 기초: 시프트 레프트 팁 9가지 (GitLab)](https://about.gitlab.com/blog/2020/06/23/efficient-devsecops-nine-tips-shift-left/)
- [OWASP 위협 모델링](https://owasp.org/www-community/Threat_Modeling)
- [OWASP 애플리케이션 위협 모델링](https://owasp.org/www-community/Application_Threat_Modeling)
- [위협 모델링이란 (Wikipedia)](https://en.wikipedia.org/wiki/Threat_model)
{% endresources %}
