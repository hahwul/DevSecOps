+++
title = "マンガで学ぶDevSecOps"
description = "設計、開発、ビルド、テスト、デプロイ、運用。6つのイラストエピソードでDevSecOpsを学び、合わせて使えるツールにも出会えます。"
template = "home"

[extra]
hero_title = "速くリリース。<br>それでも<em>セキュア</em>に。"
hero_sub = "マンガで学ぶDevSecOpsフィールドガイド。ループを巡る6つのエピソードと、それに合うツールたち。"
+++

## プロローグ: バグがリリースされた日

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-dev", pose="typing", bg="window", alt="ノートPCの前で楽しそうにタイピングするDev") }}

{% bubble(who="dev", name="Dev") %}機能できた!今日リリースしちゃおう!{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="sneak", alt="誰にも気づかれずリリースに忍び込むバグ") }}

{% bubble(who="bug", dir="right", name="バグ") %}このリリース、あと1匹入れます?{% endbubble %}
{% endpanel %}

{% endstrip %}

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-sec", pose="point", alt="3週間遅れで欠陥を見つけたSec") }}

{% bubble(who="sec", name="Sec") %}見つけました。本番環境で。3週間も経ってから。{% endbubble %}
{% endpanel %}

{% panel(tint="sec") %}
{{ scene(name="char-ops", pose="monitor", bg="radar", alt="ダッシュボードを見ながらひらめくOps") }}

{% bubble(who="ops", name="Ops") %}セキュリティが1ページ目から一緒だったら?{% endbubble %}
{% endpanel %}

{% endstrip %}

これこそがDevSecOpsの考え方です。セキュリティを最後の検査として迎えるのではなく、開発・セキュリティ・運用がひとつのチームとなって、ライフサイクルの全フェーズを一緒に進みます。

## 1つのループ、6つのエピソード

セキュリティは最後の関門ではありません。最初のスケッチから最後のアラートまで、ループ全体を一緒に走ります。

{{ loop_diagram(caption="各フェーズが1つのエピソード。クリックして読み始めましょう。") }}

## チーム紹介

{% team() %}

{% panel() %}
{% member(char="char-dev", pose="wave", title="Dev") %}作るのが速く、リリースが大好き。スピードと安全は敵ではなく仲間だと学んでいきます。{% endmember %}

{% member(char="char-sec", pose="calm", title="Sec") %}冷静で目が鋭い。本番でパッチを当てるより、ホワイトボードの上で欠陥を消すほうが好きです。{% endmember %}

{% member(char="char-ops", pose="monitor", title="Ops") %}ダッシュボードを守る頼れる存在。明かりはつけたまま、ドアには鍵を、ポケベルは静かに。{% endmember %}
{% endpanel %}

{% panel(tint="warm", halftone=true) %}
{% member(char="char-bug", pose="sneak", title="バグ") %}急いで書いたコードや忘れられた設定に忍び込みます。悪役というより日和見主義。エピソードを追うごとに、チームがバグを早く捕まえていく様子をどうぞ。{% endmember %}
{% endpanel %}

{% endteam %}

## エピソード一覧

{{ episode_rail() }}

{{ finale(title="ループは終わらない。物語も続く。", alt="小さな白旗を振るバグ") }}
