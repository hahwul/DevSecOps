+++
title = "開発"
description = "セキュアコーディングの習慣、コード署名、リポジトリのアクセス制御。"
template = "chapter"
weight = 2

[extra]
phase = "develop"
episode = 2
hook = "良い習慣は、英雄的な火消しに勝る。"
has_tools = false
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-dev", pose="typing", bg="window", alt="ユーザー入力をそのままクエリに貼り付けるDev") }}

{% bubble(who="dev", name="Dev") %}ユーザー入力がそのままクエリへ。たぶん大丈夫?{% endbubble %}
{% endpanel %}

{% panel(tint="sec") %}
{{ scene(name="char-sec", pose="calm", alt="より安全なパターンを教えるSec") }}

{% bubble(who="sec", dir="right", name="Sec") %}パラメータ化して。バグは文字列連結が大好物だから。{% endbubble %}
{% endpanel %}

{% endstrip %}

## このフェーズで起こること

ほとんどの脆弱性は、デプロイされたときではなく、タイプされたときに生まれます。開発フェーズの目標は、安全なやり方をいちばん楽なやり方にすること。使っている言語の**セキュアコーディングガイド**に従い、レビューは罠探しではなくロジックに集中させましょう。

地味ながら同じくらい大事な習慣が2つ。**コード認証**はコミットに署名して、履歴に本当の作者を語らせること。**リポジトリアクセス制御**は最小権限と保護ブランチで、ノートPCが1台漏れても`main`を書き換えられないようにすることです。

{% caps() %}
- セキュアコーディング
- コード認証
- リポジトリアクセス制御
{% endcaps %}

## 実践では

リポジトリに作者の真実を語らせ、危険なプッシュを拒否させましょう。

```bash
# すべてのコミットに署名して、履歴に本当の作者を語らせる
git config --global commit.gpgsign true

# デフォルトブランチを保護: レビュー必須、強制プッシュ禁止
gh api -X PUT repos/hahwul/shop/branches/main/protection \
  -F required_pull_request_reviews[required_approving_review_count]=1 \
  -F enforce_admins=true -F allow_force_pushes=false
```

あとはスタックに合ったセキュアコーディングガイドを選んで、レビュー中はタブ1つ分の距離に置いておくこと。AppleからRailsまで、定番は下にリンクしてあります。

## さらに読む

{% resources() %}
- [Appleセキュアコーディングガイド](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html)
- [Java SEセキュアコーディングガイドライン](https://www.oracle.com/java/technologies/javase/seccodeguide.html)
- [Go-SCP: Goセキュアコーディングプラクティス](https://github.com/OWASP/Go-SCP)
- [GoogleによるAndroidアプリセキュリティのベストプラクティス](https://developer.android.com/topic/security/best-practices)
- [Securing Rails Applications](https://guides.rubyonrails.org/security.html)
{% endresources %}
