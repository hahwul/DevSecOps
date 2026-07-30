+++
title = "Design"
description = "Threat modeling and a secure SDLC: security starts before the first commit."
template = "chapter"
weight = 1

[extra]
phase = "design"
episode = 1
hook = "Every safe system starts as a drawing."
has_tools = true
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-sec", pose="point", bg="board", alt="Sec points at the architecture sketch on the whiteboard") }}

{% bubble(who="sec", name="Sec") %}Before we write a line of code: what could go wrong here?{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="sneak", bg="board", alt="The Bug is already hiding inside the diagram") }}

{% bubble(who="bug", dir="right", name="The Bug") %}Shh. I was planning to live in that login box.{% endbubble %}
{% endpanel %}

{% endstrip %}

## What happens here

Design is where a fix costs a pencil stroke instead of an incident report. The software and business design should consider security from the very first sketch: which data matters, who touches it, and what an attacker would try first.

Two habits carry this phase. A **secure development lifecycle** (Microsoft SDL, OWASP SAMM, BSIMM, NIST SSDF) gives the team a repeatable set of security activities for every release. **Threat modeling** takes one afternoon with the architecture diagram and asks four questions: what are we building, what can go wrong, what will we do about it, and did we do a good job?

{% caps() %}
- Secure SDLC
- Threat Modeling
{% endcaps %}

## In practice

You do not need special software to start: a whiteboard and the four questions go a long way. When you want the model to live next to the code, describe it as code. This is [pytm](https://github.com/izar/pytm), where the diagram and the threat list are generated from a few lines of Python:

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

Run it and you get a data flow diagram plus a list of likely threats to review with the team. Prefer drawing over typing? [OWASP Threat Dragon](https://threatdragon.github.io) and [Threagile](https://threagile.io) cover the same ground.

{% alert(type="tip", title="Shift left") %}The earlier a flaw is found, the cheaper it is to fix. Design is as far left as it gets.{% endalert %}

## Keep reading

{% resources() %}
- [Microsoft Secure Development Lifecycle](https://www.microsoft.com/en-us/securityengineering/sdl/practices)
- [OWASP Software Assurance Maturity Model](https://github.com/OWASP/samm)
- [Building Security In Maturity Model (BSIMM)](https://www.bsimm.com/framework.html)
- [NIST Secure Software Development Framework](https://csrc.nist.gov/CSRC/media/Publications/white-paper/2019/06/07/mitigating-risk-of-software-vulnerabilities-with-ssdf/draft/documents/ssdf-for-mitigating-risk-of-software-vulns-draft.pdf)
- [DevSecOps basics: 9 tips for shifting left (GitLab)](https://about.gitlab.com/blog/2020/06/23/efficient-devsecops-nine-tips-shift-left/)
- [Threat Modeling by OWASP](https://owasp.org/www-community/Threat_Modeling)
- [Application Threat Modeling by OWASP](https://owasp.org/www-community/Application_Threat_Modeling)
- [What is Threat Modeling (Wikipedia)](https://en.wikipedia.org/wiki/Threat_model)
{% endresources %}
