+++
title = "Develop"
description = "Secure coding habits, signed code, and controlled access to the repository."
template = "chapter"
weight = 2

[extra]
phase = "develop"
episode = 2
hook = "Good habits beat heroic fixes."
has_tools = false
+++

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-dev", pose="typing", bg="window", alt="Dev pastes user input straight into a query") }}

{% bubble(who="dev", name="Dev") %}User input goes straight into the query. Probably fine?{% endbubble %}
{% endpanel %}

{% panel(tint="sec") %}
{{ scene(name="char-sec", pose="calm", alt="Sec suggests the safer pattern") }}

{% bubble(who="sec", dir="right", name="Sec") %}Parameterize it. The Bug loves string concatenation.{% endbubble %}
{% endpanel %}

{% endstrip %}

## What happens here

Most vulnerabilities are typed, not deployed. The Develop phase is about making the safe way the easy way: follow the **secure coding guide** for your language, and let reviews focus on logic instead of footguns.

Two quieter habits matter just as much. **Code authentication** means signed commits, so the history says who really wrote what. **Repository access control** means least privilege and protected branches, so one leaked laptop cannot rewrite `main`.

{% caps() %}
- Secure Coding
- Code Authentication
- Repository Access Control
{% endcaps %}

## In practice

Make the repository tell the truth about its authors and refuse risky pushes:

```bash
# Sign every commit, so the history says who really wrote it
git config --global commit.gpgsign true

# Protect the default branch: reviews required, force pushes blocked
gh api -X PUT repos/hahwul/shop/branches/main/protection \
  -F required_pull_request_reviews[required_approving_review_count]=1 \
  -F enforce_admins=true -F allow_force_pushes=false
```

Then pick the secure coding guide that matches your stack and keep it one tab away during review. The classics are linked below, from Apple to Rails.

## Keep reading

{% resources() %}
- [Secure Coding Guide by Apple](https://developer.apple.com/library/archive/documentation/Security/Conceptual/SecureCodingGuide/Introduction.html)
- [Secure Coding Guidelines for Java SE](https://www.oracle.com/java/technologies/javase/seccodeguide.html)
- [Go-SCP: Go Secure Coding Practices](https://github.com/OWASP/Go-SCP)
- [Android App Security Best Practices by Google](https://developer.android.com/topic/security/best-practices)
- [Securing Rails Applications](https://guides.rubyonrails.org/security.html)
{% endresources %}
