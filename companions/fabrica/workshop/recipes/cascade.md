# Recipe: cascade

The full multi-layer wave pipeline: wide evidence-gathering in successive waves, intermediate synthesis to keep every fan-in inside its fidelity envelope, an adversarial verification pass on the claims that will bear weight, and a final synthesis the orchestrator evaluates rather than ratifies. The shape for large questions — a whole-system audit, a domain survey feeding a design decision, any problem where the concern count runs past one dispatch wave.

```
Layer 0:  wave 1: gatherers A-E   ─┐
          wave 2: gatherers F-J   ─┼─►  Layer 1: intermediate synths (fan-in ≤7 each)
          wave 3: gatherers K-N   ─┘         │
                                             ▼
          Layer 2: verification arms ◄─ claims extracted from Layer 1
          (one refuter per load-bearing claim, blind, exhibit-gated)
                                             │
                                             ▼
          Layer 3: final synthesis (fan-in: intermediate synths + verdicts)
```

**When it fits:** more concerns than one wave can carry (8+); the output will drive a real decision, so unverified claims are a liability; the sources span multiple basins (files + web + logs) that no single agent should straddle.

**Design notes:**

- **Waves, not a mega-batch.** Dispatch Layer 0 in batches of 5-7 and read each wave before firing the next — early returns expose a misfiring prompt while there is still time to fix it for the remaining waves. Adjust later-wave briefs freely; record the adjustment in the manifest log.
- **Intermediate synthesizers are load-bearing, not bureaucratic.** One synthesizer over 14 gatherers flattens everything it reads; three over 4-5 each preserve the source character the final pass needs. Group by affinity (same subsystem, same question family), not by dispatch order.
- **The verification layer takes claims, not documents.** Extract the specific load-bearing claims from the intermediate syntheses — the ones the final decision will rest on — and give each to a refuter that does not know which arm produced it, with instructions to attack it against the sources and a hard gate: a verdict only counts if it quotes the exhibit it stands on. Claims that fail come out of the final synthesis or go in flagged as contested.
- **Skip-layer hatch:** the final synthesizer may read Layer 0 full outputs directly where an intermediate pass compressed away evidence the conclusion needs.
- **Distill at the end.** The final synthesis is still scratch; the durable artifact (decision record, design doc, report) is written out of the workshop directory, and the manifest's Outcome names it.

**Failure modes to watch:** synthesis-of-synthesis drift — by Layer 3, claims can float free of their exhibits, which is exactly what the verification layer and the skip-layer hatch exist to catch; and layer inflation — if the problem fits in one wave and one synthesis, this recipe is overhead, so fall back to `gather-synthesize`.
