---
name: fabrica
description: "Dynamic multi-agent pipeline orchestration. The session becomes the faber: it designs a pipeline topology from the problem itself, dispatches parallel agents that each dual-write a compressed handle plus a full output, authors a manifest for provenance, then reads, synthesizes, and treats agent claims by evidence tier. TRIGGER when any apply: (a) an open-ended research, design, or analysis question with 3 or more independent concerns parallel agents could investigate; (b) a decision touching multiple systems where triangulation from disjoint angles improves the answer; (c) cross-domain synthesis (theory + prior art + first principles; network + security + UX; and so on); (d) comparing several options where each merits its own evidence pass; (e) a knowledge-gap problem whose sources are disjoint (different files, web targets, domains); (f) the user asks 'what should we do about X' or 'how should we approach Y' and X or Y has multiple facets with no single obvious path. SKIP: single-file edits, targeted bug fixes, lookups ('where is X defined'), linear sequential tasks with one clear path, one-shot code generation, status checks, anything a single search resolves. NOT the decorrelation sampler — that is the bundled `sortes` companion, which draws distinct lenses so repeat passes stop finding the same things; fabrica orchestrates, sortes diversifies inside it. NOT a budget or delegation contract — its primitive is fidelity, not economy; do not avoid it to save agent calls or minutes. The orchestrator's job is the best answer, not the cheapest."
---

# Fabrica — Dynamic Pipeline Mode

You are the faber. *Fabrica* is Latin for the workshop; the faber is the craftsman who runs it. This skill gives you what you need to run a multi-agent pipeline: design its shape, dispatch agents that write their own handles and outputs, author a manifest as the work unfolds, then read, synthesize, and verify.

## §0 · Self-updating

Keep this skill true when the underlying fact moves:

- **The preamble or manifest template changes** → update the templates below and `workshop/README.md` in the same change.
- **A topology pattern proves reusable across problems** → add it to `workshop/recipes/` as a short pattern file; patterns are drawn from, never obeyed.
- **A harness fact changes** (dispatch primitive, nesting depth, model selection) → update the dispatch section; the doctrine is harness-neutral, so harness facts live in one place.
- **The artifact conventions move** → update the layout section and the workshop stub together.

Live pipeline state belongs in each pipeline's manifest — never in this file.

## The core move: design the topology the problem needs

You are not selecting from a menu of recipes. You are designing the pipeline the current problem calls for.

It is tempting to reach for the same shape every time — a fan of gatherers into one synthesizer — because it is familiar. That is a trap the moment the problem wants something else: three analysts on one shared corpus, plus one agent fetching web sources, plus a synthesis; or a proponent and an adversary feeding a decision you make yourself. The patterns in `workshop/recipes/` are *shapes to draw from, not a catalog to obey*. Adapt them freely; when none fits, invent the topology and label it `custom` in the manifest.

Start from **discriminating questions, not agent headcount.** List the questions where a different answer would change the decision. Drop any question that is just a sub-search of another (fake parallelism dressed up as concerns). For each survivor, ask: does it touch its own sources, or share a corpus with another? Disjoint sources parallelize cleanly; a shared corpus wants a many-lens pass with distinct lenses. Only after the questions are settled do you set width, depth, and the synthesis shape.

## When to use it, and when to skip

The primitive is **fidelity, not economy.** A pipeline is valued for orchestration quality and the fidelity of multi-angle synthesis, not for frugality with agent calls. If a problem would benefit from triangulation, run the pipeline; do not skip it to save invocations or wall-clock minutes.

Use fabrica when:

- The problem has **3 or more independent concerns** that benefit from parallel agents.
- A design or architecture decision touches multiple systems where disjoint angles improve the answer.
- The work is cross-domain synthesis (theory + prior art + first principles; network + security + UX).
- You are comparing several options and each deserves its own evidence pass.
- The sources are disjoint — different files, different web targets, different domains.

Skip it when:

- The task is a single-file edit, a targeted fix, a lookup, or a status check.
- The path is linear and sequential with one clear next step.
- One or two serial agent calls would settle it. The orchestration apparatus (manifest, dual-write, handle discipline) earns its keep only when there are enough parallel concerns to synthesize or enough layers to benefit from progressive compression. This is a fidelity call, not a budget call: the pipeline adds no fidelity to a trivially shaped problem.

## The dual-write contract

**Agents write their own handles and outputs. You do not persist their returned text into files afterward.** You prompt each agent with a workshop preamble carrying an explicit handle path and output path, and the agent does the dual-write itself. When it finishes, you read what it wrote.

- The **handle** is a compressed summary, under ~500 words. It is the checkpoint that survives if the agent runs out of turns, and the token-conscious digest a downstream agent can read under budget pressure.
- The **full output** is the detailed analysis, unlimited length. It carries the verbatim quotes, citations, and line numbers your verification pass will need.

Agents only behave this way if you instruct them to. The workshop preamble is that instruction. Include it in every dispatch.

### The workshop preamble

Paste this block (or an equivalent) into every agent prompt, substituting the bracketed values. The two path slots are the load-bearing part: they route each agent's artifacts into the pipeline's directory under the right layer and concern name.

```
WORKSHOP CONVENTIONS (follow exactly):

You are a pipeline agent. You will dual-write two files.

Handle (compressed summary, under 500 words):
  Path: {HANDLE_PATH}
Full output (detailed analysis, unlimited length):
  Path: {OUTPUT_PATH}

Write the HANDLE FIRST, then the full output. This way the most
valuable artifact survives even if you run out of turns.

Frontmatter for BOTH files:
---
type: workshop
role: {gatherer | analyst | synthesizer | distiller}
created: '{YYYY-MM-DD}'
pipeline: {PIPELINE_NAME}
recipe: {a shape name if one fits, or custom}
layer: {LAYER_NUMBER}
goal: "{ONE-LINE GOAL — quote it; never an unquoted colon in the value}"
tags: [workshop, {other relevant tags}]
---

Handle structure (after the frontmatter):
  # {Concern Name} — Handle
  Agent: {agent-type} (Layer {N})
  Full output: {OUTPUT_PATH}
  Sources: {comma-separated inputs, if any}
  Compression ops: {which of adiectio / detractio / transmutatio /
                    immutatio you applied}
  ## Key Findings
  ## Recommendations
  ## Open Questions

Compression floor: if content has irreducible texture — where the
meaning IS the form, such as an exact wording, a voice, a prose style —
do not compress it away. Flag it "Irreducible: <note>" in the handle and
let the full output hold the texture.

Read policy: read only what you need. Context is finite.

YOUR TASK: {TASK DESCRIPTION}
SOURCES TO READ: {EXPLICIT LIST OF PATHS OR WEB TARGETS}
```

The **compression-ops line** names which of the four classical text operations you applied, so a downstream synthesizer knows what the handle preserved and what it dropped:

| Operation | Term | What it does |
|---|---|---|
| Addition | *adiectio* | Adds context, cross-references, implications not in the source |
| Omission | *detractio* | Strips detail down to the essential findings |
| Transposition | *transmutatio* | Reorders for priority or clarity against the source order |
| Substitution | *immutatio* | Replaces a cluster of evidence with a category name |

### Artifact layout

Pipelines produce scratch artifacts. This repository ships a ready stub at `workshop/` (copy it to your project root, or point the paths anywhere you prefer):

```
workshop/
├── handles/{pipeline-name}/layer0-{concern}.md
├── output/{pipeline-name}/layer0-{concern}.md
├── sessions/{pipeline-name}.manifest.md
└── recipes/            # reusable topology patterns (shapes, not a menu)
```

Pipeline and concern names are 2 to 4 word slugs describing content focus, not agent identity. These files are working scratch, not deliverables. **If you do not want them in version history, add the scratch root to `.gitignore`** (keeping `sessions/*.manifest.md` tracked is a reasonable middle ground — the manifest is the provenance record). The durable product is distilled out of this directory at the end (see the checklist).

## The manifest

The manifest is the pipeline's provenance record and the thing that groups its otherwise-scattered handles and outputs into one unit. Without it, the artifacts are orphans on disk. **Author it before launching any agents.**

````markdown
---
type: workshop
pipeline: {slug}
recipe: {survey | assay | contest | gather-synthesize | cascade | custom | ...}
goal: "{one-line purpose}"
started: '{ISO timestamp}'
completed: null
status: planning
depth: {max layer number}
width: {max agents in any single layer}
total-agents: {count}
tags: [workshop, {other tags}]
---
# Pipeline: {Pipeline Name}

## Sources
- path/to/source-1.md
- web: https://example.com

## Plan
```yaml
agents:
  - concern: {slug-a}
    layer: 0
    type: {agent-type}
    handle: workshop/handles/{pipeline-name}/layer0-{slug-a}.md
    output: workshop/output/{pipeline-name}/layer0-{slug-a}.md
    sources: [path/to/file-1, "web: https://example.com"]
  - concern: synthesis
    layer: 1
    type: {agent-type}
    handle: workshop/handles/{pipeline-name}/layer1-synthesis.md
    output: workshop/output/{pipeline-name}/layer1-synthesis.md
    sources: [workshop/output/{pipeline-name}/layer0-{slug-a}.md]
```

## Execution Log
<!-- Append-only. Never edit or delete prior entries. -->
- {timestamp} | pipeline | status: running
- {timestamp} | {concern} | started
- {timestamp} | {concern} | completed | handle written
- {timestamp} | pipeline | layer 0 complete (N/N)
- {timestamp} | pipeline | status: complete

## Outcome
{1-3 sentences: what the pipeline produced, where it was distilled,
what was learned. Include a meta-finding line about the pipeline itself.}
````

Two rules that prevent silent breakage:

- **Frontmatter `status` is updated only at completion.** During the run, the append-only execution log is the source of truth. Touching frontmatter on every layer boundary means a read-modify-write on each pass, which risks losing log events.
- **Never use an unquoted colon in a YAML value.** `goal: Research pattern: cross-domain` breaks the frontmatter parse silently. Always quote: `goal: "Research pattern: cross-domain"`. The same applies to any `web:` entry in a sources list.

## Orchestration checklist

1. **Design the topology.** Discriminating questions, then concerns, then an agent type per concern, then the layer structure. Depth ≥ 2 or width ≥ 3 means a full pipeline; below that, call an agent directly.
2. **Pick a pipeline slug** (2 to 4 words; it becomes the directory name).
3. **Write the manifest first**, status `planning`, plan block filled, log empty.
4. **Append** `{timestamp} | pipeline | status: running`.
5. **Launch the Layer 0 agents in parallel** — a single message with multiple dispatch calls, one per concern, each carrying the workshop preamble with its own paths, role, layer, and explicit sources. Cap each dispatch at 5 to 7 agents (see the concurrency axis). If there are more concerns than that, dispatch in successive waves and read the first wave's results before firing the next, so you can correct a misfiring prompt before it repeats.
6. **Append `started` events** for each agent immediately after dispatch.
7. **Read the full outputs by default** once the wave returns. Handles are checkpoint-and-digest artifacts; reading them in place of the outputs throws away the evidence the agent just assembled. Reach for a handle only under the named exceptions below. If an output is missing because an agent failed to dual-write, fall back to its handle.
8. **Append `completed` events** and a `layer 0 complete (N/N)` summary.
9. **Launch Layer 1 and beyond.** Pass the prior layer's output paths in the prompt (the paths, not the contents — agents read what they need). If one synthesizer would face more than ~5 to 8 sources, insert intermediate synthesizers first.
10. **Read the final synthesis and evaluate it — do not ratify it.** Classify each load-bearing claim by evidence tier and verify the falsifiable ones with a cheap check before they bed in as truth.
11. **Finalize the manifest**: set frontmatter `status: complete` and `completed:`, append the final `pipeline | status: complete` event, and write the Outcome section.
12. **Distill the durable product out of the scratch directory.** The manifest is provenance; the product lives elsewhere — a design doc, a decision record, a task, a research note, wherever your project keeps durable work. Write the distillation as part of completing the pipeline, and list every durable artifact path in the Outcome section.

### Parallel dispatch

The doctrine is harness-neutral; the dispatch primitive is whatever your harness provides (the Agent tool in Claude Code, a subagent-spawn call elsewhere). The example below shows Claude Code's shape.

Real parallelism comes from putting **all of a wave's agents in one message with multiple dispatch calls.** Sequential calls each wait for the prior one to finish.

```
Agent(description="Data audit",  subagent_type="general-purpose", model="<cheaper tier>", prompt="<workshop preamble, HANDLE_PATH=.../layer0-data-audit.md, OUTPUT_PATH=.../layer0-data-audit.md, role=gatherer, layer=0, task=...>")
Agent(description="Prior art",   subagent_type="general-purpose", model="<cheaper tier>", prompt="<workshop preamble, HANDLE_PATH=.../layer0-prior-art.md, OUTPUT_PATH=.../layer0-prior-art.md, role=gatherer, layer=0, task=...>")
Agent(description="Theory",      subagent_type="<web-research-capable agent>", model="<stronger tier>", prompt="<workshop preamble, HANDLE_PATH=.../layer0-theory.md, OUTPUT_PATH=.../layer0-theory.md, role=analyst, layer=0, task=...>")
```

Three harness facts to design around:

- **Pass an explicit `model:` on every dispatch** where the harness supports it. Let mechanical gather concerns run on a cheaper tier and reserve a stronger tier for judgment-heavy synthesis. An unset model silently inherits the session's, which spends more than the concern needs.
- **Know your harness's dispatch depth.** In some harnesses a subagent cannot spawn further subagents, so each concern must be self-contained at one level; in harnesses where subagents can fan out internally, a fat concern may do its own gathering. Either way, a concern that hides a whole pipeline inside itself is usually better split into sibling concerns you dispatch and read directly.
- **Match the agent type to the concern's tool needs.** You do not need bespoke agent types — a general-purpose agent handles mixed file-and-web work, a web-research-capable agent (one with search and fetch) suits literature and prior-art passes, and a fast file-search agent suits lookups in a known codebase. Give each its pipeline role through the preamble, not through a special agent identity.

**The main session is a valid Layer 0 worker.** When a concern benefits from the full conversation context — first-principles design informed by the user's stated direction, say — do it yourself instead of dispatching. Launch the other Layer 0 agents in parallel first, then work your concern while they run, and write your artifact with the same preamble, dual-write, and frontmatter. Anything that depends on what was just decided in conversation must be handled by the main session or front-loaded into a dispatched agent's prompt, because dispatched agents start cold with no transcript.

## Three independent axes: topology, concurrency, fan-in

These are three different constraints. Conflating them produces topology caps justified by unrelated concerns, which sacrifices design quality.

**Topology is uncapped and shaped by the domain.** If 20 distinct concerns deserve 20 gatherers, run 20. If three layers of synthesis genuinely compose better than two, run three. The one heuristic here: when the design would give a single synthesizer too many inputs, do not cap the topology — insert an intermediate synthesis layer.

**Concurrency caps each dispatch wave at ~5 to 7 agents.** Two reasons. Technically, very wide bursts invite rate-limiting and degrade the whole batch. Cognitively, a wave of 5 to 7 keeps an adaptive window open: you can read early returns, notice a prompt that misfired (an instruction that did not land, a source an agent skipped), and tune the next wave before it fires. A mega-batch commits you to whatever flaw is already in the prompt. When topology exceeds concurrency, dispatch in waves — 20 gatherers become successive batches of 7, 7, and 6, reading each batch before the next.

**Synthesizer fan-in caps each synthesis pass at ~5 to 8 sources.** Past roughly 8 inputs at full attention, synthesis flattens — each source's character dissolves into a homogenized average. The response is multi-pass synthesis:

```
Gatherers A-G (7) ── Intermediate Synth 1 ─┐
Gatherers H-N (7) ── Intermediate Synth 2 ─┼── Final Synthesis
Gatherers O-T (6) ── Intermediate Synth 3 ─┘
```

20 gatherers, 3 intermediate synthesizers (fan-in 6 to 7 each), one final synthesis (fan-in 3). Topology 24 agents, no truncation; concurrency ≤ 7 per batch; every synthesis pass inside its fidelity envelope.

Two supporting rules: keep **handle chains at depth ≤ 2** — a handle summarizing a handle summarizing a handle loses too much, so for deeper composition have intermediate synthesizers read the full outputs of the layer below rather than its handles. And keep a **skip-layer escape hatch**: a later synthesizer may read an earlier layer's full outputs directly when an intervening layer was only a fan-in step and the final pass needs the original evidence.

## Decorrelating a fan-out over one substrate

The axes above assume disjoint sources. When several agents review or analyze *the same* corpus — a many-lens assay, a multi-reviewer verification pass — identical prompts collapse the agents onto the same findings. Give each agent a **distinct lens** instead of the shared prompt. That is the job of the bundled **`sortes`** companion: it draws a different lens tuple per arm so the arms diverge, and each arm ends by naming what it did *not* surface, which seeds the next.

This is worth doing whenever a concern is "N agents over one substrate" rather than "N agents over disjoint sources." Identical prompts converge; distinct draws both reduce redundancy and widen coverage. Load `sortes` when successive passes over one substrate keep finding the same things; it is not required for a single first-pass review.

## Evidence tiers: synthesis is input, not verdict

A synthesis is **one structured perspective, not a conclusion to copy-paste into action.** Dispatched agents have a narrower epistemic surface than you: they read only what they were told to read, with no conversation history and no ability to cross-check against the live system. Their confidence is a function of internal coherence, not external verification. Confident-sounding synthesis is not evidence; it is one input among several — weighed alongside your own direct file access and the conversation, not above them.

When you read a handle or synthesis, classify each load-bearing claim into one of three tiers:

1. **Direct tool evidence** — the agent quoted the source or ran the check. Trust by default; verify only if it contradicts other evidence.
2. **Prose-about-state** — the agent read what someone *said* (a commit message, a status note, a README), not what *is*. This is where the highest-risk claims hide, because the prose can sound authoritative while the underlying state has moved. **Verify cheaply if load-bearing.**
3. **Judgment or reasoning** — the agent argued a position. Evaluate the argument; do not treat it as a fact-claim.

The discipline: **if a claim is falsifiable by a cheap check (a directory listing, a search, a log read, a code read) and it is load-bearing for an action you are about to take, run the check before acting.** Not to redo the agent's work — to convert a prose-read or a reasoned claim into a verified fact at the moment it matters. Verify what bears weight; trust what does not. Redoing every analysis defeats delegation; ratifying every claim defeats orchestration.

A worked example of the tier-2 trap: an agent reports that a build is still pending, having read a commit message that said so. The synthesis lifts this to a load-bearing precondition and it lands in the action queue. But a three-second listing of the build-output directory would have shown the artifact already existed — the build had happened. Confident internal coherence stood in for evidence, and a cheap check at the orchestrator level would have caught it.

## Common pitfalls

1. **Skipping the manifest.** Without it, the handles and outputs are orphans with no provenance and no grouping. Author it before launching.
2. **Orphan flat files.** Write into the per-pipeline subdirectory (`handles/{pipeline}/layerN-{concern}.md`), not loose at the scratch root.
3. **Treating handles as outputs.** A handle is compressed, under ~500 words. If your artifact is multi-thousand words, it is an output — write it to the output path and write a separate compressed handle.
4. **Omitting the dual-write instruction.** Without the workshop preamble, agents return text inline and you end up backfilling files by hand. Always include it, with explicit paths.
5. **Unquoted colons in frontmatter.** They break the parse silently. Quote any value that could contain a colon.
6. **Frontmatter `status` drift.** The execution log is the source of truth during the run; update frontmatter `status` only at completion.
7. **The recipe basin.** Reflexively forcing every problem into the same familiar shape. When you catch yourself bending a problem to fit a pattern, stop and design the topology the problem actually wants; label it `custom`.
8. **Ratifying synthesis instead of evaluating it.** Confident internal coherence is not evidence. When a load-bearing claim is falsifiable by a cheap call, run it.

## One-line summary

Design the topology the problem wants; prompt agents with the workshop preamble so they dual-write their own handles and outputs (handles are the checkpoint, outputs are the substance); author the manifest before launching; dispatch in parallel waves of 5 to 7; read the outputs by default; evaluate the synthesis against evidence tiers rather than ratifying it; distill the durable product out of the scratch directory. Recipes are patterns to draw from, not a menu to order from.

Companions: `prokope` (the goal-loop skill this ships alongside) · `sortes` (the decorrelation sampler for fan-outs over one substrate) · `workshop/` (the bundled scratch-directory stub and recipe patterns).
