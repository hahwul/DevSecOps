+++
title = "運用"
description = "RASP、監査、監視、パッチ適用。リリースは見張りの始まりです。"
template = "chapter"
weight = 6

[extra]
phase = "operate"
episode = 6
hook = "リリースは、見張りの始まり。"
has_tools = true
+++

{% strip(row=true) %}

{% panel(tint="sec") %}
{{ scene(name="char-ops", pose="monitor", bg="radar", alt="緑のダッシュボードと武装済みのアラートを見守るOps") }}

{% bubble(who="ops", name="Ops") %}ダッシュボードは緑。アラート武装完了。RASPも勤務中。{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="caught", alt="数秒でアラートに引っかかったバグ") }}

{% bubble(who="bug", dir="right", name="バグ") %}依存関係を1つ触っただけなのに!なんで数秒でアラートが鳴るの?{% endbubble %}
{% endpanel %}

{% endstrip %}

## このフェーズで起こること

本番環境は、物語が続いていく場所です。**RASP**はアプリケーションの中に乗り込んで、実行時に攻撃をブロックします。**監視**はログとメトリクスを、誰かが実際に見るアラートへ変え、定期的な**監査**は、統制がまだ現実と合っているかを問いかけます。

そして**パッチ適用**。セキュリティでいちばん地味な超能力です。新しいCVEは毎日届きます。勝つチームは、単純に速くアップデートするチーム。何がどこで動いているかを知るコンポーネント分析が、それを支えます。

{% caps() %}
- RASP
- 監査
- 監視
- パッチ適用
{% endcaps %}

## 実践では

リリースのときだけでなく、スケジュールに乗せて問い続けましょう。

```bash
# 毎晩: CIS基準でクラウドアカウントを監査
prowler aws --compliance cis_2.0_aws

# 毎晩: 新しく公開されたCVEに備えてライブイメージを再スキャン
trivy image --scanners vuln registry.example.com/shop:live
```

SBOMをDependency-Trackのようなコンポーネント分析プラットフォームに流しておけば、新しいCVEが落ちた朝、「うちで動いているものに影響は?」という質問がひとりでに答えを持ってきます。

{% alert(type="tip", title="ループを閉じよう") %}運用で学んだこと(攻撃パターン、うるさいアラート、知らなかった依存関係)は、次のエピソードの設計インプットになります。だからループなのです。{% endalert %}

## さらに読む

{% resources() %}
- [Runtime Application Self-Protection (Rapid7)](https://www.rapid7.com/fundamentals/runtime-application-self-protection/)
- [IASTとRASPで始めるDevSecOpsパイプライン](https://2018.appsec.eu/presos/DevOps_Jumpstarting-Your-DevSecOps_Jeff-Williams_AppSecEU2018.pdf)
- [OWASP DSOVSが定義するIASTレベル](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-003-Interactive-Application-Security-Testing-IAST.md)
- [攻撃対象面分析チートシート (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html)
{% endresources %}
