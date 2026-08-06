+++
title = "개발"
description = "시큐어 코딩 습관, 코드 서명, 저장소 접근 제어."
template = "chapter"
weight = 2

[extra]
phase = "develop"
episode = 2
hook = "좋은 습관이 영웅적인 수습보다 나아요."
has_tools = false
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-dev", pose="typing", bg="window", alt="사용자 입력을 그대로 쿼리에 붙여 넣는 Dev") }}

{% bubble(who="dev", name="Dev") %}사용자 입력이 쿼리로 바로 들어가네요. 괜찮겠죠?{% endbubble %}
{% endpanel %}

{% panel(tint="sec") %}
{{ scene(name="char-sec", pose="calm", alt="더 안전한 패턴을 알려 주는 Sec") }}

{% bubble(who="sec", dir="right", name="Sec") %}파라미터로 바인딩하세요. 버그는 문자열 이어 붙이기를 사랑하거든요.{% endbubble %}
{% endpanel %}

{% endstrip %}

## 이 단계에서 벌어지는 일

대부분의 취약점은 배포될 때가 아니라 타이핑될 때 태어나요. 개발 단계의 목표는 안전한 길을 곧 가장 편한 길로 만드는 것입니다. 사용하는 언어의 **시큐어 코딩 가이드**를 따르고, 리뷰는 함정 찾기 대신 로직에 집중하게 하세요.

조용하지만 똑같이 중요한 습관이 두 가지 더 있어요. **코드 인증**은 커밋에 서명해서 히스토리가 진짜 작성자를 말하게 하는 것. **저장소 접근 제어**는 최소 권한과 보호 브랜치로, 노트북 한 대가 털려도 `main`을 다시 쓸 수 없게 하는 것이죠.

{% caps() %}
- 시큐어 코딩
- 코드 인증
- 저장소 접근 제어
{% endcaps %}

## 실전에서는

저장소가 작성자에 대해 진실을 말하게 하고, 위험한 푸시는 거절하게 만드세요.

```bash
# 모든 커밋에 서명해서, 히스토리가 진짜 작성자를 말하게 하기
git config --global commit.gpgsign true

# 기본 브랜치 보호: 리뷰 필수, 강제 푸시 차단
gh api -X PUT repos/hahwul/shop/branches/main/protection \
  -F required_pull_request_reviews[required_approving_review_count]=1 \
  -F enforce_admins=true -F allow_force_pushes=false
```

그다음 스택에 맞는 시큐어 코딩 가이드를 골라 리뷰할 때 한 탭 거리에 두세요. Apple부터 Rails까지, 고전들은 아래에 있습니다.

## 더 읽어보기

{% resources() %}
- [Apple 시큐어 코딩 가이드](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html)
- [Java SE 시큐어 코딩 가이드라인](https://www.oracle.com/java/technologies/javase/seccodeguide.html)
- [Go-SCP: Go 시큐어 코딩 프랙티스](https://github.com/OWASP/Go-SCP)
- [Google의 Android 앱 보안 모범 사례](https://developer.android.com/topic/security/best-practices)
- [Securing Rails Applications](https://guides.rubyonrails.org/security.html)
{% endresources %}
