+++
title = "テスト"
description = "動いているアプリへのDASTとペンテスト。誰かにやられる前に、自分たちで。"
template = "chapter"
weight = 4

[extra]
phase = "test"
episode = 4
hook = "誰かに攻撃される前に、自分を攻撃しよう。"
has_tools = true
+++

{% strip(row=true) %}

{% panel(tint="sec") %}
{{ scene(name="char-sec", pose="happy", bg="window", alt="楽しそうにステージングへの攻撃を始めるSec") }}

{% bubble(who="sec", name="Sec") %}ステージングが起動しました。自分たちのアプリを攻撃する時間です!{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="caught", alt="お気に入りの隠れ家から追い出されたバグ") }}

{% bubble(who="bug", dir="right", name="バグ") %}ログインページをスキャンしたの?あそこ、僕のお気に入りのドアだったのに!{% endbubble %}
{% endpanel %}

{% endstrip %}

## このフェーズで起こること

静的解析はコードを読みますが、このフェーズは動いているものをつつきます。**DAST**はデプロイ済みのアプリに本物のリクエストを送り、どう誤動作するかを観察します。ブラウザを持った攻撃者とまったく同じやり方で。**IAST**はテストが走る間、プロセスの内側から見張ります。

自動化がカバーするのは既知のパターン。残りは**ペネトレーションテスト**が持つ人間の創造力の出番です。連鎖するロジックの欠陥、妙な隅っこ、どのスキャナーにもテンプレートがないもの。本番の前に自動と手動のテストを両方回す習慣が効きます。

{% caps() %}
- DAST
- IAST
- ペンテスト
{% endcaps %}

## 実践では

CIからそのまま動く、毎週月曜のステージング向けZAPベースラインスキャンです。

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

ベースラインスキャンはパッシブなので、頻繁に回しても安全です。アクティブ攻撃を含むフルスキャンは自分の環境で、今週の新しい脆弱性はNucleiのようなテンプレートベースのスキャナーで、と段階を上げていきましょう。

## さらに読む

{% resources() %}
- [ZAPとGitHub ActionsでDAST](https://www.zaproxy.org/blog/2020-05-15-dynamic-application-security-testing-with-zap-and-github-actions/)
- [GitLabのDAST](https://docs.gitlab.com/ee/user/application_security/dast/)
- [NucleiでDAST (GitHub Action)](https://github.com/secopslab/nuclei-action)
- [ZAPCon 2021: ZAPの民主化](https://www.youtube.com/watch?v=jimW-R6_F4U)
- [OWASP DSOVSが定義するDASTレベル](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-002-Dynamic-Application-Security-Testing-DAST.md)
{% endresources %}
