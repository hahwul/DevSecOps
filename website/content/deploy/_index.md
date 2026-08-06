+++
title = "Deploy"
description = "Hardened hosts and safe configuration by default, before the doors open."
template = "chapter"
weight = 5

[extra]
phase = "deploy"
episode = 5
hook = "Safe by default, before the doors open."
has_tools = false
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-ops", pose="gear", bg="gears", alt="Ops applies the hardening checklist") }}

{% bubble(who="ops", name="Ops") %}CIS profile applied. Debug ports closed. Defaults are safe.{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="caught", alt="The Bug finds every door locked") }}

{% bubble(who="bug", dir="right", name="The Bug") %}Locked. Locked. Also locked. Who ships like this?!{% endbubble %}
{% endpanel %}

{% endstrip %}

## What happens here

A perfectly written app can still ship on a badly configured box. **Hardening** means the host, cluster, and runtime follow a benchmark instead of gut feeling; the **CIS Benchmarks** exist so nobody has to argue about what "locked down" means.

**Configuration** is the rest of the story: secure defaults, no debug endpoints in production, secrets injected at runtime instead of baked into images, and automation for all of it, because anything applied by hand will drift.

{% caps() %}
- Hardening
- Configuration
{% endcaps %}

## In practice

Gate the release on what is actually inside the image, then check the platform against a benchmark:

```bash
# Refuse to ship images with known critical vulnerabilities
trivy image --exit-code 1 --severity HIGH,CRITICAL registry.example.com/shop:1.4.2

# Score the cluster against the CIS Kubernetes benchmark
kube-bench run --benchmark cis-1.8
```

Both commands fit in a deploy job, which is the point: the safe path and the fast path should be the same pipeline.

## Keep reading

{% resources() %}
- [CIS Benchmarks](https://www.cisecurity.org/cis-benchmarks/)
- [DevSecOps in Kubernetes (Microsoft)](https://cloudblogs.microsoft.com/opensource/2019/07/22/devsecops-in-kubernetes/)
- [Image Scanning with Docker Scout](https://docs.docker.com/scout/)
{% endresources %}
