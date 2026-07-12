# Review catalog

The default sampling space: code-review and audit attention lenses. A bare `pick.ts` draws from this directory. Each lens names one defect-finding angle in plain behavioral language, so a review pass drawn from here is pushed toward corners the model's default prior would skip.

```bash
bun .claude/skills/sortes/bin/pick.ts            # draws 3 review lenses
bun .claude/skills/sortes/bin/pick.ts --print    # names only
```

Admission rules: a new lens must be genuinely **primitive** (a single review move, not a combination of existing lenses), must **generalize across substrates** (not tied to one codebase), and must be written in plain behavioral register. No saved combinations. Prefer growth from a real `not surfaced:` gap that a pass exhibited over speculative additions, and cut any lens that repeatedly fires nothing real.

## Lenses

1. `access-control` — whether each operation confirms who is asking and that they are allowed, before it acts.
2. `api-contract-drift` — divergence between the declared contract and actual behavior: types, comments, and docs out of step with the code.
3. `boundary-values` — the edges of every range: empty, one, max, off-by-one, degenerate shapes.
4. `cardinality` — 0/1/N assumptions: code written for exactly-one that will meet none or many.
5. `concurrency-interleaving` — shared state under interleaved execution: races, atomicity assumptions, check-then-act gaps.
6. `configuration-reality` — config read but not applied, applied but not read, or dead: flags nothing checks, env vars shadowed by hardcodes.
7. `cyclicity` — loops and cycles: recursion without a decreasing measure, graph walks without visited-sets, self-triggering events.
8. `default-values` — what a default silently commits you to: unsafe fallbacks, empty-object defaults, absence hidden behind a value.
9. `dependency-direction` — coupling that flows the wrong way: low layers importing high, siblings reaching into internals, cycles.
10. `duplication-drift` — near-copies that have diverged or will: forked logic, parallel switches, copy-pasted validation.
11. `error-paths` — every failure branch; the code's real surface is the union of its failure paths, not just the happy one.
12. `idempotency-retry` — what double-fires: retries around non-idempotent operations, at-least-once delivery meeting exactly-once assumptions.
13. `mutation-visibility` — hidden side effects: functions mutating their inputs, shared references escaping, caches going stale.
14. `naming-truth` — names that lie: getX that mutates, isX returning non-boolean, save that only stages.
15. `negative-space` — what the code conspicuously does not do; empty cells in the operation grid read as predictions, not blanks.
16. `observability` — whether failure is visible: silent catches, missing instrumentation, logs that omit the discriminating datum.
17. `permission-least` — capability held wider or longer than needed: broad tokens, world-readable files, admin paths reachable from user flows.
18. `resource-lifetime` — acquisition/release symmetry: handles, sockets, locks, watchers, temp files, child processes.
19. `resource-pressure` — behavior under slow, full, and large: missing timeouts, unbounded buffers and queues, quadratic growth.
20. `reversibility` — what cannot be undone: destructive writes, migrations, sends, deletes, and the missing rollback around them.
21. `state-completeness` — state machines, explicit or accidental: unhandled states, illegal transitions, orphan flags.
22. `structural-correctness` — whether the shape is right for every operation it must support over time, not just the cases exercised now.
23. `symmetry` — paired operations that must mirror: encode/decode, open/close, serialize/parse, subscribe/unsubscribe.
24. `temporal-ordering` — order-of-events assumptions: init-before-use, check-then-use windows, startup/shutdown races.
25. `trust-boundaries` — where unvalidated data crosses into trusted operations: parsers, interpolations, paths, spawns.
26. `units-and-encodings` — quantity and representation mismatches: ms vs s, bytes vs chars, UTC vs local, paths vs URLs.
