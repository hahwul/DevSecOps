+++
title = "Operate"
description = "RASP, audits, monitoring, and patching: shipping is the beginning of the watch."
template = "chapter"
weight = 6

[extra]
phase = "operate"
episode = 6
hook = "Shipping is the beginning of the watch."
has_tools = true
+++

{% strip(row=true) %}

{% panel(tint="sec") %}
{{ scene(name="char-ops", pose="monitor", bg="radar", alt="Ops watches green dashboards with alerts armed") }}

{% bubble(who="ops", name="Ops") %}Dashboards green. Alerts armed. RASP on duty.{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="caught", alt="The Bug trips an alert within seconds") }}

{% bubble(who="bug", dir="right", name="The Bug") %}I touched one dependency! How did the alert fire in seconds?{% endbubble %}
{% endpanel %}

{% endstrip %}

## What happens here

Production is where the story keeps going. **RASP** rides inside the application and blocks attacks at runtime. **Monitoring** turns logs and metrics into alerts someone actually sees, and regular **audits** ask whether the controls still match reality.

Then there is **patching**, the least glamorous superpower in security. New CVEs land every day; the teams that win are simply the ones that update fast, helped by component analysis that knows what is running where.

{% caps() %}
- RASP
- Audit
- Monitoring
- Patching
{% endcaps %}

## In practice

Keep asking questions on a schedule, not just at release time:

```bash
# Nightly: audit the cloud account against CIS
prowler aws --compliance cis_2.0_aws

# Nightly: rescan the live image for newly published CVEs
trivy image --scanners vuln registry.example.com/shop:live
```

Feed your SBOMs to a component-analysis platform like Dependency-Track and the "is anything we run affected?" question answers itself the morning a new CVE drops.

{% alert(type="tip", title="Close the loop") %}What you learn while operating (attack patterns, noisy alerts, surprise dependencies) is next episode's design input. That is why it is a loop.{% endalert %}

## Keep reading

{% resources() %}
- [Runtime Application Self-Protection (Rapid7)](https://www.rapid7.com/fundamentals/runtime-application-self-protection/)
- [Jumpstarting Your DevSecOps Pipeline with IAST and RASP](https://2018.appsec.eu/presos/DevOps_Jumpstarting-Your-DevSecOps_Jeff-Williams_AppSecEU2018.pdf)
- [IAST Levels Defined by OWASP DSOVS](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/TEST-003-Interactive-Application-Security-Testing-IAST.md)
- [Attack Surface Analysis Cheat Sheet (OWASP)](https://cheatsheetseries.owasp.org/cheatsheets/Attack_Surface_Analysis_Cheat_Sheet.html)
{% endresources %}
