# prokope

An agent skill for engineering long-horizon goal loops — goals that outlive any single session, context window, or model, and have to survive on the strength of their written architecture. It works in any harness that loads skill folders ([Claude Code](https://claude.com/claude-code), Grok Build, and kin); the doctrine itself is harness-neutral.

*Prokopē* (Greek προκοπή): progress as continuous advancement — the climb, not the arrival. When an agent works a hard goal across days of autonomous sessions, two different things can die independently: **honesty** (claiming a summit that wasn't reached) and **pressure** (the search quietly going soft while every claim stays technically true). This skill is a doctrine for keeping both alive: how to write a goal brief a fresh session can pick up cold, which working surfaces carry the state, how to detect the characteristic collapse modes of long campaigns, and when to end a session and re-arm rather than keep pumping a saturated context.

## The core ideas

- **Dual success modes.** True success (the falsifiable domain predicate the goal exists for) and continuable handoff (surfaces updated, tip ordered) are different things, and only the first completes the goal. Most long-campaign failure is the second quietly impersonating the first.
- **Honesty is not altitude.** A campaign can stay perfectly honest — every claim scoped, nothing oversold — while its falsification rate collapses and one generative idea gets re-skinned under fresh vocabulary for hours. Instrument claim honesty and search pressure as separate axes.
- **State lives in surfaces, not context windows.** An append-only search log, a status ledger with standing blocks, executable exhibits, and a re-postable goal brief together make the goal survivable across any session boundary.
- **Re-arm beats marathon.** Procedural discipline — falsification pressure, draw hygiene, genuine variety — decays with context depth even while claim honesty holds. The fix is operational: checkpoint, end the session, re-post the brief into a fresh one.
- **Compactification survival.** Context windows compact mid-flight, and anything load-bearing that lives only in chat is already lost. The skill carries the boundary protocols: named tips written before any boundary, an ordered orientation packet for cold re-entry, and a standing refusal to treat the summary as warrant — the summary is not a surface.
- **A collapse catalog.** Count-collapse, volume-without-altitude, kill-pressure death, false decorrelation, one-engine costume, elevation by packaging, tip lag — named failure modes with symptoms and prescriptions.

## What's in the box

```
prokope/
├── SKILL.md                 the goal-loop doctrine (this is the skill)
├── references/              collapse catalog · pressure-health signals ·
│                            compactification-survival protocols
├── templates/               goal-brief template · re-postable goal-prompt block
└── companions/
    ├── sortes/              decorrelation sampler — draws attention-lenses from
    │                        two catalogs (code-review + research ideation) so
    │                        repeated passes escape the model's default angles
    └── fabrica/             dynamic multi-agent pipeline orchestration —
        └── workshop/        topology design, dual-write artifacts, manifests,
                             plus a ready scratch-directory stub with recipes
```

The companions are standalone skills bundled here because the goal-loop doctrine composes with them: sortes is mandatory on multi-arm research waves, fabrica handles wide parallel investigation inside a goal (its `workshop/` stub is the scratch layout its pipelines write into). A fourth companion, [ISDA](https://github.com/vincitamore/ISDA) (semantic-density analysis, used for telos checkpoints), lives in its own repository, as does [oeconomia](https://github.com/vincitamore/oeconomia) (the delegation-economy contract for orchestrator sessions — not required by prokope, but a natural sibling).

## Install

Claude Code shown; for another harness, substitute its skills directory (e.g. `.grok/skills/` for Grok Build) — the folders are harness-agnostic.

```bash
# the main skill (personal, all projects)
git clone https://github.com/vincitamore/prokope.git ~/.claude/skills/prokope

# companions — copy (or symlink) each into your skills directory
cp -r ~/.claude/skills/prokope/companions/sortes ~/.claude/skills/sortes
cp -r ~/.claude/skills/prokope/companions/fabrica ~/.claude/skills/fabrica
```

Per-project installs work the same way against `.claude/skills/`. The sortes picker requires [Bun](https://bun.sh). Path examples throughout the skills use the Claude Code layout; adapt them once to your harness and they hold.

## Calibrate it to your goals

The mechanisms are general; the constants are local. The skill classifies goals into four classes (open constructive research, assay/survey, ship, ordinary multi-session) and scopes its strictest doctrine to the first. Restart cadences, falsification-rate thresholds, and iteration budgets are heuristics to be set per goal in the brief — the skill tells you which signals to instrument instead of handing you universal numbers.
