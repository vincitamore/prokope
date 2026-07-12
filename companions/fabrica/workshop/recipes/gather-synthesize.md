# Recipe: gather-synthesize

The default two-layer shape for questions whose sources are **disjoint** — different files, different systems, different web targets, different domains.

```
Layer 0:  gatherer A (sources α)  ─┐
          gatherer B (sources β)  ─┼──►  Layer 1: synthesizer
          gatherer C (sources γ)  ─┘
```

**When it fits:** 3+ independent concerns, each with its own source basin; the value is in the cross-source triangulation the synthesis performs.

**Design notes:**

- Each gatherer gets the workshop preamble, `role: gatherer`, `layer: 0`, and an **explicit source list** — gatherers read what they are told to read.
- The synthesizer gets `role: synthesizer`, `layer: 1`, and the Layer 0 **output paths** (not contents). Cap its fan-in at ~5-8 sources; insert intermediate synthesizers past that.
- Tell the synthesizer what the synthesis is *for*: combine findings, reconcile divergent views, or produce a final artifact — each is a different prompt.

**Failure mode to watch:** fake parallelism — gatherer concerns that are really sub-searches of one another. If two gatherers would read mostly the same files, merge them or switch to the assay shape.
