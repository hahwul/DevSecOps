+++
title = "Test"
description = "DAST and penetration testing against the running app, before anyone else gets to."
template = "chapter"
weight = 4

[extra]
phase = "test"
episode = 4
hook = "Attack yourself before someone else does."
has_tools = true
+++

{% strip(row=true) %}

{% panel(tint="sec") %}
{{ scene(name="char-sec", pose="happy", bg="window", alt="Sec cheerfully starts attacking the staging environment") }}

{% bubble(who="sec", name="Sec") %}Staging is up. Time to attack our own app!{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="caught", alt="The Bug is flushed out of its favorite hiding spot") }}

{% bubble(who="bug", dir="right", name="The Bug") %}You scanned the login page? That was my favorite door!{% endbubble %}
{% endpanel %}

{% endstrip %}

## What happens here

Static analysis reads the code; this phase pokes the running thing. **DAST** sends real requests to a deployed app and watches how it misbehaves, exactly like an attacker with a browser would. **IAST** watches from inside the process while your tests run.

Automation covers the known patterns. **Penetration testing** brings human creativity for the rest: chained logic flaws, odd corners, the things no scanner has a template for. Automatic and manual testing before production is the habit worth keeping.

{% caps() %}
- DAST
- IAST
- Pentest
{% endcaps %}

## In practice

A weekly ZAP baseline scan against staging, straight from CI:

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

The baseline scan is passive and safe to run often. Graduate to the full scan (active attacks) on environments you own, and template-based scanners like Nuclei for the vulnerabilities of the week.

## Keep reading

{% resources() %}
- [DAST with ZAP and GitHub Actions](https://www.zaproxy.org/blog/2020-05-15-dynamic-application-security-testing-with-zap-and-github-actions/)
- [DAST in GitLab](https://docs.gitlab.com/ee/user/application_security/dast/)
- [DAST with Nuclei (GitHub Action)](https://github.com/secopslab/nuclei-action)
- [ZAPCon 2021: Democratizing ZAP](https://www.youtube.com/watch?v=jimW-R6_F4U)
- [DAST Levels Defined by OWASP DSOVS](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-002-Dynamic-Application-Security-Testing-DAST.md)
{% endresources %}
