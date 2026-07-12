# Ideation / discovery catalog

Sibling to `../lenses/` (code review). This catalog holds generative research, mathematics, and design-exploration lenses rather than defect lenses, so it is **not** the default pick target. Select it explicitly with `--catalog`:

```bash
bun .claude/skills/sortes/bin/pick.ts --catalog .claude/skills/sortes/lenses-ideation        # defaults to --n 7
bun .claude/skills/sortes/bin/pick.ts --catalog .claude/skills/sortes/lenses-ideation --n 5  # explicit --n wins
```

Admission rules are the same as the review catalog: a new lens must be genuinely **primitive** (a single generative move, not a combination of existing lenses), must **generalize across substrates** (not tied to one problem or field), and must be written in plain behavioral register. No saved combinations. Prefer growth from a real `not surfaced:` gap that a pass exhibited over bulk additions.

## Lenses

1. `absurd-falsifiable` — prefer a weird path that still names a kill criterion over a respectable one that cannot fail.
2. `average-first` — prove the statement on average over its natural family before attacking the single hard instance.
3. `black-box-load` — separate what the work itself proves from load carried by an external theorem, table, or oracle.
4. `change-the-engine` — name the model's generative engine class and build the next attempt from a class not yet tried.
5. `construct-the-missing` — treat a required-but-absent structure as a construction order, not a stop.
6. `coordinate-invention` — invent a new coordinate on the same objects when the current ones hide the joint.
7. `counterexample-first` — before expanding a hopeful construction, hunt the smallest object that would kill it.
8. `deform-to-solvable` — embed the stuck instance in a family reaching a solved endpoint and study the breaking point.
9. `equivalent-forms` — restate the target in the provably equivalent formulation where your tools have the most leverage.
10. `exhibit-threshold` — pre-register what evidence would count as warrant, and what would kill the idea cleanly, before the probe.
11. `extremal-reframe` — turn the question into an optimization and read the extremizer's necessary structure.
12. `false-closure` — catch premature endings dressed as rigor; a real conclusion names the next construction and its test.
13. `find-the-action` — find what acts on the object and decompose the problem along that action.
14. `formal-statement-first` — force the claim into a machine-checkable statement; what resists formalization is usually the gap.
15. `foundation-rewrite` — change a foundational choice when the current frame cannot host the needed object.
16. `generative-minimum` — compress to the smallest axiom or generator set that still regenerates the claims under study.
17. `honest-baseline` — test advantage claims against the strongest relevant competitor, not a straw baseline.
18. `humble-pole` — relocate the problem so the hard object sits at a simple coordinate; change of chart, not dropped load.
19. `inherited-partition` — re-examine the question-space cut inherited from prior work before answering only inside it.
20. `invariance-class` — name the symmetries that leave a proposed signal unchanged; an invariant signal cannot be essential.
21. `local-global-glue` — study the object one place at a time, then treat the gluing obstruction as first-class content.
22. `multiplicative-bridge` — seek an explicit composition law on the objects rather than assuming geometry or labels supply one.
23. `nearest-open-rung` — aim at the lowest genuinely open question about the exact object, as a real step toward the summit.
24. `obstacle-fanout` — treat a blocked path as a request for several new falsifiable vectors, not an ending.
25. `obstruction-anatomy` — mine an impossibility proof's certificate space as a first-class structure.
26. `positivity-certificate` — construct the object whose manifest nonnegativity would settle the claim.
27. `prior-scope` — a closed prior kills a specific attack shape, not a whole quest; name the shape that died and the live remainder.
28. `random-model-first` — prove the target for a random model matching the coarse statistics, then measure where the real object deviates.
29. `range-disjunction` — range the full disjunction of resolution paths and credit only the exhibited ones, not the prior's mode.
30. `selection-from-continuum` — name the rule that selects a discrete set from the continuous family a method only parametrizes.
31. `solved-analogue` — find the neighboring world where the analogue is proven, walk its mechanism back, and name the non-transporting ingredient.
32. `strengthen-to-prove` — a bolder, more uniform claim can carry an induction the special case lacks.
33. `transformative-representation` — when the current system cannot host the object, build the extended system where it is first-class and operable.
34. `transport-vs-essential` — separate renaming and chart transport from genuinely new structure.
35. `two-ways-to-count` — compute one quantity two structurally different ways; the balance between them is the bridge.
36. `warrant-scale` — match claim strength to exhibit strength.
37. `win-either-way` — split on the unknown hypothesis and work both branches; where they overlap, the overlap is unconditional.
38. `win-zone-boundary` — name where the method is exact, where it is blind, and what structure owns the blind sector.
39. `work-backward` — assume the target, descend to the weakest independently-attackable link, and attack it from below.
