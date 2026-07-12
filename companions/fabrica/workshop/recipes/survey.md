# Recipe: survey

Wide and shallow before narrow and deep: many small mappers across a large unknown territory, producing a map that tells you where depth is worth buying.

```
Wave 1:   mapper A (region α) ─┐
          mapper B (region β) ─┼──►  map synthesis  ──►  Wave 2: deep dives on the
          mapper C (region γ) ─┘                          regions the map flagged
```

**When it fits:** the territory is too large to read (a big codebase, a document corpus, a product surface) and the real question is *where to look* — depth-first would gamble the budget on a guess.

**Design notes:**

- Partition the territory so every mapper owns an **exclusive region** (by directory, by module, by chapter) — overlap wastes width, gaps hide surprises. State the partition in the manifest.
- Mapper briefs are deliberately shallow: inventory, characterize, flag anomalies — explicitly *not* "analyze deeply." The depth budget is spent in wave 2, on flagged regions only.
- The map synthesis ranks regions by surprise and load-bearing-ness, and names what wave 2 should ask each one.
- Waves are the natural cadence here: read the map before committing the dives.

**Failure mode to watch:** mappers that silently deep-dive one interesting corner and skim the rest of their region. The brief must make coverage the deliverable — "every subdirectory appears in your output, even if one line."
