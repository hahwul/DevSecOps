+++
title = "設計"
description = "脅威モデリングとセキュアSDLC。セキュリティは最初のコミットの前に始まります。"
template = "chapter"
weight = 1

[extra]
phase = "design"
episode = 1
hook = "安全なシステムは、みんな1枚の図から始まる。"
has_tools = true
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-sec", pose="point", bg="board", alt="ホワイトボードのアーキテクチャ図を指すSec") }}

{% bubble(who="sec", name="Sec") %}コードを書く前に聞かせて。ここで何が起こりうる?{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="sneak", bg="board", alt="すでに図の中に隠れているバグ") }}

{% bubble(who="bug", dir="right", name="バグ") %}シーッ。あのログインボックスに住むつもりだったのに。{% endbubble %}
{% endpanel %}

{% endstrip %}

## このフェーズで起こること

設計は、修正のコストがインシデントレポートではなく鉛筆のひと筆で済むフェーズです。ソフトウェアとビジネスの設計は、最初のスケッチからセキュリティを考えるべきです。どのデータが重要か、誰が触るのか、攻撃者ならまずどこを狙うか。

このフェーズを支える習慣は2つ。**セキュア開発ライフサイクル**(Microsoft SDL、OWASP SAMM、BSIMM、NIST SSDF)は、リリースごとに繰り返せるセキュリティ活動のセットをチームに与えます。**脅威モデリング**は、アーキテクチャ図を囲んで半日、4つの質問を投げかけること。何を作っているのか、何が起こりうるのか、どう対処するのか、そしてうまくやれたか?

{% caps() %}
- セキュアSDLC
- 脅威モデリング
{% endcaps %}

## 実践では

始めるのに特別なソフトは要りません。ホワイトボードと4つの質問で、かなり遠くまで行けます。モデルをコードの隣に置きたくなったら、コードで記述しましょう。これは[pytm](https://github.com/izar/pytm)。数行のPythonから図と脅威リストが生成されます。

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

実行すると、データフロー図と、チームでレビューすべき脅威の候補リストが得られます。タイピングより描くほうが好きなら、[OWASP Threat Dragon](https://threatdragon.github.io)と[Threagile](https://threagile.io)が同じ役割を果たします。

{% alert(type="tip", title="シフトレフト") %}欠陥は早く見つけるほど安く直せます。設計は、行ける限りいちばん左です。{% endalert %}

## さらに読む

{% resources() %}
- [Microsoftセキュア開発ライフサイクル](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
- [OWASP Software Assurance Maturity Model](https://github.com/OWASP/samm)
- [Building Security In Maturity Model (BSIMM)](https://www.bsimm.com/framework.html)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/CSRC/media/Publications/white-paper/2019/06/07/mitigating-risk-of-software-vulnerabilities-with-ssdf/draft/documents/ssdf-for-mitigating-risk-of-software-vulns-draft.pdf)
- [DevSecOpsの基本: シフトレフトの9つのヒント (GitLab)](https://about.gitlab.com/blog/2020/06/23/efficient-devsecops-nine-tips-shift-left/)
- [OWASP脅威モデリング](https://owasp.org/www-community/Threat_Modeling)
- [OWASPアプリケーション脅威モデリング](https://owasp.org/www-community/Application_Threat_Modeling)
- [脅威モデリングとは (Wikipedia)](https://en.wikipedia.org/wiki/Threat_model)
{% endresources %}
