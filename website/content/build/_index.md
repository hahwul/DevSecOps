+++
title = "Build"
description = "SAST, SCA, and secret scanning on every push: let the pipeline do the nagging."
template = "chapter"
weight = 3

[extra]
phase = "build"
episode = 3
hook = "Let the pipeline do the nagging."
has_tools = true
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-ops", pose="gear", bg="gears", alt="Ops tunes the pipeline") }}

{% bubble(who="ops", name="Ops") %}Push it. The pipeline will tell us the truth in two minutes.{% endbubble %}
{% endpanel %}

{% panel(tint="warm") %}
{{ scene(name="char-bug", pose="caught", alt="The Bug is caught by the secret scanner") }}

{% bubble(who="bug", dir="right", name="The Bug") %}A secret scanner?! Who told them about my API key collection?{% endbubble %}
{% endpanel %}

{% endstrip %}

## What happens here

Every push is a chance to catch the Bug automatically. **SAST** reads your source for vulnerable patterns, **SCA** checks your dependencies against known CVEs, and **secret scanning** hunts for tokens that were never meant to be committed. Some teams add **IAST** agents to their test runs for coverage from the inside.

The build system itself is part of the attack surface: a compromised CI job can sign, publish, and deploy on your behalf. Harden the pipeline like production, because it effectively is.

{% caps() %}
- SAST
- SCA
- Secret Management
- IAST
{% endcaps %}

## In practice

A minimal security job that runs on every push and pull request:

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

Start with the defaults, then tune the rules to your codebase. A noisy scanner gets ignored; a quiet, accurate one becomes part of the team.

{% alert(type="warning", title="Fail the build") %}A finding that only prints a warning is a finding everyone scrolls past. Make criticals break the build.{% endalert %}

## Keep reading

{% resources() %}
- [Scan Source Code with SAST and SonarQube](https://medium.com/nycdev/scan-your-source-code-for-vulnerabilities-using-static-application-security-testing-sast-with-5f8ee1fdf9aa)
- [Third-party Code Scanning Tools on GitHub](https://github.blog/2020-10-05-announcing-third-party-code-scanning-tools-static-analysis-and-developer-security-training/)
- [SAST Levels Defined by OWASP DSOVS](https://github.com/OWASP/www-project-devsecops-verification-standard/blob/main/document/CODE-004-Static-Application-Security-Testing-SAST.md)
- [Security Hardening for GitHub Actions](https://docs.github.com/en/actions/security-guides/security-hardening-for-github-actions)
- [GitHub Actions Security Best Practices (Salesforce)](https://engineering.salesforce.com/github-actions-security-best-practices-b8f9df5c75f5)
- [GitHub Actions Security Cheat Sheet (GitGuardian)](https://blog.gitguardian.com/github-actions-security-cheat-sheet/)
- [Securing Jenkins](https://www.jenkins.io/doc/book/security/)
- [Securing Jenkins CI Systems (SANS)](https://www.sans.org/white-papers/36872/)
{% endresources %}
