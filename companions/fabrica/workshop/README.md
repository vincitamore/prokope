# workshop/

The scratch directory for fabrica pipelines. Copy this stub to your project root (or point the pipeline paths anywhere you prefer — the layout is a convention, not a requirement).

```
workshop/
├── handles/{pipeline-name}/     compressed per-agent summaries (<500 words each)
├── output/{pipeline-name}/      full per-agent outputs (unlimited length)
├── sessions/                    one manifest per pipeline — the provenance record
└── recipes/                     reusable topology patterns (shapes, not a menu)
```

## The contract

- Every dispatched agent **dual-writes**: a handle into `handles/{pipeline}/layerN-{concern}.md` and a full output into `output/{pipeline}/layerN-{concern}.md`, handle first. The handle is the checkpoint and digest; the output carries the evidence.
- Every pipeline has **one manifest** in `sessions/{pipeline}.manifest.md`, authored *before* any agent launches. It groups the artifacts, carries the plan, and keeps an append-only execution log. Without it the artifacts are orphans.
- Pipeline and concern names are 2-4 word slugs describing **content focus**, not agent identity (`auth-flow-audit`, `prior-art`, `failure-modes` — not `agent-3`).
- Everything here is **working scratch, not deliverable**. The durable product is distilled out at pipeline completion, to wherever your project keeps durable work; the manifest's Outcome section lists what was distilled and where.

## Version control

If you do not want scratch in history, gitignore the working dirs but keep the manifests — they are the provenance record:

```gitignore
workshop/handles/
workshop/output/
workshop/sessions/*
!workshop/sessions/*.manifest.md
```

## Recipes

`recipes/` holds topology patterns that have proven reusable: `gather-synthesize` (disjoint sources → one synthesis), `assay` (many lenses over one shared corpus), `contest` (structured adversarial pair), `survey` (wide shallow map before committing depth), `cascade` (the full multi-layer wave pipeline — waves of gatherers → intermediate synths → verification arms → final synthesis). Draw from them, adapt them, or ignore them — when a problem wants a shape none of them describe, design it and label the manifest `recipe: custom`. A custom shape that proves itself across problems earns a new recipe file here.
