+++
title = "ビルド"
description = "プッシュのたびにSAST、SCA、シークレットスキャン。小言はパイプラインに任せよう。"
template = "chapter"
weight = 3

[extra]
phase = "build"
episode = 3
hook = "小言はパイプラインに任せよう。"
has_tools = true
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-ops", pose="gear", bg="gears", alt="パイプラインを調整するOps") }}

{% bubble(who="ops", name="Ops") %}プッシュして。2分後にパイプラインが真実を教えてくれる。{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="caught", alt="シークレットスキャナーに捕まったバグ") }}

{% bubble(who="bug", dir="right", name="バグ") %}シークレットスキャナー?!僕のAPIキーコレクションのこと、誰が教えたの?{% endbubble %}
{% endpanel %}

{% endstrip %}

## このフェーズで起こること

すべてのプッシュは、バグを自動で捕まえるチャンスです。**SAST**はソースから脆弱なパターンを読み取り、**SCA**は依存関係を既知のCVEと突き合わせ、**シークレットスキャン**はコミットしてはいけなかったトークンを狩ります。テスト実行に**IAST**エージェントを載せて、内側からの視界を得るチームもあります。

ビルドシステム自体も攻撃対象面です。CIジョブが乗っ取られれば、あなたの代わりに署名も公開もデプロイもできてしまう。パイプラインは実質的に本番環境。本番と同じように固めましょう。

{% caps() %}
- SAST
- SCA
- シークレット管理
- IAST
{% endcaps %}

## 実践では

すべてのプッシュとプルリクエストで走る、最小限のセキュリティジョブです。

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

まずはデフォルトで始めて、ルールをコードベースに合わせて調整していきましょう。うるさいスキャナーは無視され、静かで正確なスキャナーはチームの一員になります。

{% alert(type="warning", title="ビルドを落とそう") %}警告を出すだけの検出結果は、みんながスクロールで読み飛ばす検出結果です。クリティカルはビルドを落とすようにしましょう。{% endalert %}

## さらに読む

{% resources() %}
- [SonarQubeでソースコードをSASTスキャン](https://medium.com/nycdev/scan-your-source-code-for-vulnerabilities-using-static-application-security-testing-sast-with-5f8ee1fdf9aa)
- [GitHubのサードパーティコードスキャンツール](https://github.blog/2020-10-05-announcing-third-party-code-scanning-tools-static-analysis-and-developer-security-training/)
- [OWASP DSOVSが定義するSASTレベル](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/CODE-004-Static-Application-Security-Testing-SAST.md)
- [GitHub Actionsのセキュリティ強化ガイド](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [GitHub Actionsセキュリティベストプラクティス (Salesforce)](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5)
- [GitHub Actionsセキュリティチートシート (GitGuardian)](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)
- [Securing Jenkins](https://www.jenkins.io/doc/book/security/)
- [SANSによるJenkins CIシステムのセキュリティ](https://www.sans.org/white-papers/36872/)
{% endresources %}
