# Recipe: contest

A structured adversarial pair (or panel) feeding a decision the orchestrator makes. The shape for "should we do X?" when advocacy and attack both deserve full effort.

```
Layer 0:  proponent (best case FOR, steelmanned)   ─┐
          adversary (best case AGAINST, no strawmen) ─┼──►  you decide
          [optional: neutral fact-finder]            ─┘
```

**When it fits:** a consequential either/or decision; option comparisons where each candidate merits its own evidence pass (one proponent per option); any claim that would otherwise be ratified on one agent's confident say-so.

**Design notes:**

- Both sides read the **same sources**; the asymmetry is the brief, not the evidence. The adversary's prompt should demand refutation with exhibits, not vibes ("name the concrete input or state under which this fails").
- Keep the verdict at the orchestrator. The agents argue; you weigh — a Layer 1 "judge" agent is only worth adding when there are many parallel contests to score consistently.
- For verification contests (is this finding real?), run refuters blind: they see the claim and the sources, not which arm produced it.

**Failure mode to watch:** a token adversary — an attack pass that concedes politely. If the adversary found nothing, that is a finding only when the prompt demonstrably demanded a real attack.
