+++
title = "デプロイ"
description = "デフォルトからハードニングされたホストと安全な設定。"
template = "chapter"
weight = 5

[extra]
phase = "deploy"
episode = 5
hook = "扉を開ける前に、デフォルトから安全に。"
has_tools = false
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-ops", pose="gear", bg="gears", alt="ハードニングチェックリストを適用するOps") }}

{% bubble(who="ops", name="Ops") %}CISプロファイル適用済み。デバッグポートは閉鎖。デフォルトから安全です。{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="caught", alt="どのドアも施錠されていて戸惑うバグ") }}

{% bubble(who="bug", dir="right", name="バグ") %}施錠。施錠。これも施錠。誰がこんなふうにリリースするの?!{% endbubble %}
{% endpanel %}

{% endstrip %}

## このフェーズで起こること

完璧に書かれたアプリでも、設定を誤った箱の上では崩れます。**ハードニング**とは、ホストもクラスタもランタイムも、勘ではなくベンチマークに従わせること。「ロックダウンした」の基準で揉めないために**CISベンチマーク**があります。

**設定**が残りの物語です。安全なデフォルト、本番にデバッグエンドポイントを残さない、シークレットはイメージに焼き込まず実行時に注入、そしてそのすべての自動化。手作業で適用したものは、必ずズレていくからです。

{% caps() %}
- ハードニング
- 設定
{% endcaps %}

## 実践では

イメージの中に実際に何が入っているかでリリースを止め、プラットフォームはベンチマークで採点しましょう。

```bash
# 既知のクリティカル脆弱性を含むイメージはリリース拒否
trivy image --exit-code 1 --severity HIGH,CRITICAL registry.example.com/shop:1.4.2

# CIS Kubernetesベンチマークでクラスタを採点
kube-bench run --benchmark cis-1.8
```

どちらのコマンドもデプロイジョブに収まります。それがポイント。安全な道と速い道は、同じパイプラインであるべきです。

## さらに読む

{% resources() %}
- [CISベンチマーク](https://www.cisecurity.org/cis-benchmarks/)
- [KubernetesでのDevSecOps (Microsoft)](https://cloudblogs.microsoft.com/opensource/2019/07/22/devsecops-in-kubernetes/)
- [Docker Scoutによるイメージスキャン](https://docs.docker.com/scout/)
{% endresources %}
