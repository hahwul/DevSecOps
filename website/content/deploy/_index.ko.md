+++
title = "배포"
description = "기본값부터 하드닝된 호스트와 안전한 설정."
template = "chapter"
weight = 5

[extra]
phase = "deploy"
episode = 5
hook = "문을 열기 전에, 기본값부터 안전하게."
has_tools = false
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-ops", pose="gear", bg="gears", alt="하드닝 체크리스트를 적용하는 Ops") }}

{% bubble(who="ops", name="Ops") %}CIS 프로파일 적용 완료. 디버그 포트 차단. 기본값이 안전해요.{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="caught", alt="모든 문이 잠겨 있어 당황한 버그") }}

{% bubble(who="bug", dir="right", name="버그") %}잠김. 잠김. 이것도 잠김. 대체 누가 이렇게 배포해요?!{% endbubble %}
{% endpanel %}

{% endstrip %}

## 이 단계에서 벌어지는 일

완벽하게 짠 앱도 잘못 설정된 서버 위에서는 무너져요. **하드닝**은 호스트, 클러스터, 런타임이 감이 아니라 벤치마크를 따르게 하는 것. "잠갔다"의 기준을 두고 다투지 않도록 **CIS 벤치마크**가 존재합니다.

**설정**이 나머지 이야기예요. 안전한 기본값, 운영 환경에 디버그 엔드포인트 금지, 이미지에 굽지 않고 런타임에 주입하는 시크릿, 그리고 이 모든 것의 자동화. 손으로 적용한 것은 반드시 어긋나게 되어 있으니까요.

{% caps() %}
- 하드닝
- 설정
{% endcaps %}

## 실전에서는

이미지 안에 실제로 뭐가 들었는지로 릴리스를 막고, 플랫폼은 벤치마크로 점검하세요.

```bash
# 알려진 크리티컬 취약점이 있는 이미지는 배포 거부
trivy image --exit-code 1 --severity HIGH,CRITICAL registry.example.com/shop:1.4.2

# CIS 쿠버네티스 벤치마크로 클러스터 채점
kube-bench run --benchmark cis-1.8
```

두 명령 모두 배포 잡 안에 들어가요. 그게 핵심입니다. 안전한 길과 빠른 길이 같은 파이프라인이어야 하니까요.

## 더 읽어보기

{% resources() %}
- [CIS 벤치마크](https://www.cisecurity.org/cis-benchmarks/)
- [쿠버네티스에서의 DevSecOps (Microsoft)](https://cloudblogs.microsoft.com/opensource/2019/07/22/devsecops-in-kubernetes/)
- [Docker Scout로 하는 이미지 스캔](https://docs.docker.com/scout/)
{% endresources %}
