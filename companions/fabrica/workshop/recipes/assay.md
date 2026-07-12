# Recipe: assay

Many analysts over **one shared corpus**, each with a distinct lens. The shape for "what is really in this thing?" — a codebase audit, a document review, a dataset interrogation.

```
Layer 0:  analyst (lens 1) ─┐
          analyst (lens 2) ─┼──►  Layer 1: synthesizer (reconciles, dedups, ranks)
          analyst (lens 3) ─┘
              (all reading the SAME sources)
```

**When it fits:** the sources overlap heavily but the *questions* differ; the value is coverage breadth over one substrate.

**Design notes:**

- **Distinct lenses are the whole recipe.** Identical prompts collapse the arms onto the same findings — draw one lens tuple per arm with the `sortes` companion instead of hand-assigning, and have each arm end with a `not surfaced:` line naming what its lens did not reach.
- Each analyst carries `role: analyst` and the same source list; the lens travels in the prompt body.
- The synthesizer's first job is mechanical dedup (same file, same line window) before any ranking; report per-arm exclusives — they measure whether the lenses actually diverged.

**Failure mode to watch:** outcome-shape convergence — the arms' *lens names* differ but their findings all take the same template. If that happens, the decorrelation failed; force a deliberately falsifying arm or re-draw.
