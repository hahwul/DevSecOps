+++
title = "만화로 배우는 DevSecOps"
description = "설계, 개발, 빌드, 테스트, 배포, 운영. 여섯 개의 일러스트 에피소드로 DevSecOps를 배우고, 어울리는 도구까지 함께 만나 보세요."
template = "home"

[extra]
hero_title = "빠르게 배포해도,<br>보안은 <em>단단하게</em>."
hero_sub = "만화로 배우는 DevSecOps 필드 가이드. 루프를 도는 여섯 개의 에피소드와 어울리는 도구들."
+++

## 프롤로그: 버그가 배포되던 날

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-dev", pose="typing", bg="window", alt="노트북 앞에서 신나게 타이핑하는 Dev") }}

{% bubble(who="dev", name="Dev") %}기능 완성! 오늘 바로 배포할 거예요!{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="sneak", alt="아무도 모르게 릴리스에 숨어드는 버그") }}

{% bubble(who="bug", dir="right", name="버그") %}이번 릴리스에 한 자리 남았나요?{% endbubble %}
{% endpanel %}

{% endstrip %}

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-sec", pose="point", alt="3주 늦게 결함을 찾아낸 Sec") }}

{% bubble(who="sec", name="Sec") %}찾았어요. 운영 환경에서요. 3주나 지나서요.{% endbubble %}
{% endpanel %}

{% panel(tint="sec") %}
{{ scene(name="char-ops", pose="monitor", bg="radar", alt="대시보드를 보다가 아이디어를 떠올린 Ops") }}

{% bubble(who="ops", name="Ops") %}보안이 1페이지부터 함께했다면 어땠을까요?{% endbubble %}
{% endpanel %}

{% endstrip %}

이게 바로 DevSecOps의 핵심이에요. 보안이 마지막 검수로 등장하는 대신, 개발과 보안과 운영이 한 팀이 되어 라이프사이클의 모든 단계를 함께 만들어 갑니다.

## 하나의 루프, 여섯 개의 에피소드

보안은 마지막 관문이 아니에요. 첫 스케치부터 마지막 알림까지, 루프 전체를 함께 달립니다.

{{ loop_diagram(caption="각 단계가 하나의 에피소드예요. 눌러서 읽어 보세요.") }}

## 팀을 소개합니다

{% team() %}

{% panel() %}
{% member(char="char-dev", pose="wave", title="Dev") %}빠르게 만들고 배포를 사랑해요. 속도와 안전이 라이벌이 아니라 한 팀이라는 걸 배워 갑니다.{% endmember %}

{% member(char="char-sec", pose="calm", title="Sec") %}차분하고 눈이 날카로워요. 운영 환경에서 패치하는 것보다 화이트보드에서 결함을 지우는 쪽을 좋아하죠.{% endmember %}

{% member(char="char-ops", pose="monitor", title="Ops") %}대시보드를 지키는 든든한 손. 불은 켜 두고, 문은 잠그고, 호출기는 조용하게 유지합니다.{% endmember %}
{% endpanel %}

{% panel(tint="warm", halftone=true) %}
{% member(char="char-bug", pose="sneak", title="버그") %}서두른 코드와 잊힌 설정에 숨어들어요. 악당이라기보다는 기회주의자죠. 에피소드마다 팀이 버그를 점점 더 일찍 잡는 걸 지켜보세요.{% endmember %}
{% endpanel %}

{% endteam %}

## 에피소드

{{ episode_rail() }}

{{ finale(title="루프는 끝나지 않아요. 이야기도 계속됩니다.", alt="작은 흰 깃발을 흔드는 버그") }}
