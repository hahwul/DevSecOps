+++
title = "DevSecOps, the comic"
description = "Learn DevSecOps through six illustrated episodes: Design, Develop, Build, Test, Deploy, and Operate, with the tools to match."
template = "home"

[extra]
hero_title = "Ship fast.<br>Stay <em>secure</em>."
hero_sub = "A comic field guide to DevSecOps: six episodes around the loop, and the tools to match."
+++

## Prologue: the day the Bug shipped

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-dev", pose="typing", bg="window", alt="Dev types happily on a little laptop") }}

{% bubble(who="dev", name="Dev") %}Feature's done. Shipping it today!{% endbubble %}
{% endpanel %}

{% panel() %}
{{ scene(name="char-bug", pose="sneak", alt="The Bug slips into the release unnoticed") }}

{% bubble(who="bug", dir="right", name="The Bug") %}Room for one more in this release?{% endbubble %}
{% endpanel %}

{% endstrip %}

{% strip(row=true) %}

{% panel() %}
{{ scene(name="char-sec", pose="point", alt="Sec points at a finding, three weeks too late") }}

{% bubble(who="sec", name="Sec") %}Found it. In production. Three weeks later.{% endbubble %}
{% endpanel %}

{% panel(tint="sec") %}
{{ scene(name="char-ops", pose="monitor", bg="radar", alt="Ops looks up from the dashboards with an idea") }}

{% bubble(who="ops", name="Ops") %}What if security joined the story on page one?{% endbubble %}
{% endpanel %}

{% endstrip %}

That is the whole idea behind DevSecOps: development, security, and operations working as one team through every phase of the lifecycle, instead of security arriving as a final inspection.

## One loop, six episodes

Security is not a gate at the end. It rides along the entire loop, from the first sketch to the last alert.

{{ loop_diagram(caption="Every phase is an episode. Click one to start reading.") }}

## Meet the team

{% team() %}

{% panel() %}
{% member(char="char-dev", pose="wave", title="Dev") %}Builds fast and loves shipping. Learns along the way that speed and safety are teammates, not rivals.{% endmember %}

{% member(char="char-sec", pose="calm", title="Sec") %}Calm and sharp-eyed. Would much rather erase a flaw from a whiteboard than patch it in production.{% endmember %}

{% member(char="char-ops", pose="monitor", title="Ops") %}Steady hands on the dashboards. Keeps the lights on, the doors locked, and the pager quiet.{% endmember %}
{% endpanel %}

{% panel(tint="warm", halftone=true) %}
{% member(char="char-bug", pose="sneak", title="The Bug") %}Sneaks into rushed code and forgotten configs. Not evil, just opportunistic. Watch the team catch it earlier in every episode.{% endmember %}
{% endpanel %}

{% endteam %}

## The episodes

{{ episode_rail() }}

{{ finale(title="The loop never ends. Neither does the story.", alt="The Bug waves a little white flag") }}
