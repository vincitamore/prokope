---
name: sortes
description: Draw a random lens tuple to decorrelate a review, audit, or ideation pass from the model's default moves. Load BEFORE a repeat review or audit over the same substrate (fan-out reviews, coverage sweeps, recurring audit passes) where successive passes keep finding the same things, OR when brainstorming needs to escape the same handful of default angles. The picker (`bin/pick.ts`) draws N lenses from a catalog with an mtime cooldown so draws rotate, and each consumer ends with a mandatory `not surfaced:` trail line. SKIP for a single first-pass review (the default review dimensions are fine cold) and for one-off lookups. NOT a review harness itself — it feeds one (a code-review workflow, a multi-agent review wave). NOT a density or quality measurement tool: it diverts attention, it does not measure.
---

# sortes — decorrelation by external draw

Named for the *sortes*, the casting of lots. A sampler cannot decorrelate its own draws from within; the source of variety has to stand outside the process being varied. `sortes` is that outside stander: a small random draw over a catalog of attention-lenses, so a review, audit, or ideation pass is forced into corners the model's default prior would skip.

The draw mechanism is lifted from `latentwill/ideonomy-skill` (MIT); the lens catalogs here are original. The diagnosis it treats: the default consensus angle *is* the prior, and asking judgment alone to escape it fixes by will what is structurally a sampling problem. This is the missing external organ. `bin/pick.ts` requires [Bun](https://bun.sh).

## §0 — Self-maintenance

A stale catalog decorrelates toward the wrong corners. Maintain it in the same change that creates the fact:

- **A consumer's `not surfaced:` line names an angle no lens reaches, and it generalizes** → add one new *primitive* lens to the catalog. Promote *down* into primitives, never *up* into saved tuples — a named saved-combination re-installs the default the draw exists to break. This is why there is no `recipes/` directory and never will be.
- **A lens proves it never fires anything real across repeated draws** → it is the weakest candidate at the next revision; cut it. The catalog is a vocabulary of live moves, not an archive.
- **The picker mechanics change** (the Bun or filesystem API, mtime behavior) → re-verify `bin/pick.ts` against the installed surface.
- Dynamic state — which lenses are cooling, past draws, the live lens list — lives in the filesystem (`ls lenses/`, mtimes), not enumerated here. There is no log by design.

**Admission filter for a new lens.** A candidate is admitted only if it is genuinely *primitive* (a single move, not a combination of existing lenses) and *generalizes across substrates* (not tied to one codebase or one problem). While a catalog is still small and under-exercised, a deliberate, bounded add is legitimate on those two criteria alone. Once a catalog is broad and exercised, the same two criteria apply *plus* a real `not surfaced:` gap that exhibited the need — without the exhibit, do not add.

**Write lens bodies in neutral, plain behavioral language** — state the analytic move directly rather than clustering jargon or adversarial-enumeration vocabulary. The analytic content is identical either way, and the plain phrasing costs nothing.

## §1 — The catalogs

Two named sampling spaces, one pick primitive. Do **not** mix them into a default union — review and ideation are different operation-spaces, and shared draws produce wrong-corner variety.

| Space | Directory | How to select |
|-------|-----------|---------------|
| **Review** (default) | `lenses/` | bare `pick.ts` — defect / code-audit attention |
| **Ideation / discovery** | `lenses-ideation/` | `--catalog …/lenses-ideation` — generative / research attention |

- **Review catalog** (`lenses/*.md`): code-review-oriented (error-paths, trust-boundaries, concurrency-interleaving, boundary-values, reversibility, negative-space, structural-correctness, access-control, and more). The live list is `ls lenses/`; per-catalog index in `lenses/README.md`.
- **Ideation catalog** (`lenses-ideation/*.md`): research, mathematics, and design-exploration primitives (construct-the-missing, prior-scope, false-closure, foundation-rewrite, absurd-falsifiable, obstacle-fanout, and more). Live list is `ls lenses-ideation/`; index in `lenses-ideation/README.md`. Do not dump ideation bodies into the default `lenses/` — that dilutes the review draw mass and pollutes both domains.

There is no dual-draw API in `pick.ts`. If a harness wants one review lens and one ideation lens, it invokes `pick.ts` twice with different `--catalog` paths. Composition belongs to the consumer, not to the primitive.

## §2 — Using it

Skill root: `.claude/skills/sortes/` in a project, or `~/.claude/skills/sortes/` for a personal install. Run the picker with Bun from the skill root, or with an absolute path to `pick.ts`.

```bash
bun .claude/skills/sortes/bin/pick.ts             # one draw (names + bodies), live cooldown
bun .claude/skills/sortes/bin/pick.ts --n 5       # bigger draw
bun .claude/skills/sortes/bin/pick.ts --print     # names only
bun .claude/skills/sortes/bin/pick.ts --json      # ok-first envelope, for a workflow to consume
bun .claude/skills/sortes/bin/pick.ts --seed 42   # deterministic, no mtime side-effect (tests / repro)
bun .claude/skills/sortes/bin/pick.ts --catalog .claude/skills/sortes/lenses-ideation  # sibling space

# Deterministic smoke (CLI + unit test drive the shipped pick.ts):
bun .claude/skills/sortes/bin/pick.ts --seed 42 --print
bun .claude/skills/sortes/bin/pick.ts --catalog .claude/skills/sortes/lenses-ideation --seed 42 --print
bun test .claude/skills/sortes/bin/pick.test.ts
```

**Per-catalog default draw size.** The review catalog draws **3** lenses; the ideation catalog draws **7**, matched to a typical multi-arm fan-out (up to 5-7 arms) so a full-width fan-out can give every arm its own forced corner. Explicit `--n` always wins over either default. Within-draw selection is unchanged: uniform among the cold lenses — only the hand size differs, not the dice. One caveat that keeps hands honest: a draw touches the mtime of *every* emitted lens, used or not, so a consumer that draws 7 and works only 3 spuriously cools the other 4 for about an hour. Spread a wide draw across arms, or pass a smaller `--n`.

**Cooldown.** Each non-seeded draw touches the mtime of the files it picked. A roughly one-hour decay weights the next draw against re-picking them, so a multi-draw session rotates across the catalog on its own. The filesystem is the memory — there is no separate state file. A fresh checkout resets everyone's mtime uniformly, degrading gracefully to pure-random, which is the floor, not a failure.

## §3 — The trail contract

Whatever consumes a draw ends its artifact with a `not surfaced:` line naming the angles the draw did **not** reach. No trail, no real draw. The line is both the falsifiability check on the method and the catalog-growth signal: a `not surfaced:` gap that generalizes is the next lens. When independent passes converge on the same absent angle, that convergence is itself evidence a single pass cannot produce.

## §4 — Deploying it in a review

The exhibited-positive use is an N-agent review where each agent gets a distinct draw instead of the same fixed prompt. Pre-register the arms and the pass criteria before dispatch, dedup findings mechanically (by file and line window), verify blind (refuters that do not know which arm produced a finding, gated on an exhibit quote actually being found), and count only confirmed findings.

Identical prompts collapse parallel reviewers onto the same findings — mode collapse is the default, not the exception. Distinct draws cut that overlap and widen the confirmed-finding set at the same time: decorrelation pays, it does not cost. And a shared set of loaded review principles does not prevent the collapse — every arm carrying the same principles still converges. External directed variance is what decorrelates; that is the whole reason this skill exists.

**Feeding a review harness.** When a multi-agent review wave risks collapsing to the same prompt and the same default angles, draw one tuple per arm via `sortes` and inject the lens bodies into each agent's prompt. `sortes` is the anti-collapse *sampler*; the harness that dispatches the agents is the *consumer* of the draw. Do not build a separate review harness inside `sortes`.

**Research and theory campaigns.** Draw from `lenses-ideation` (`--catalog`), not the default review catalog — otherwise arms keep sampling code-defect corners while the work is generative. Same trail contract, same injection pattern.

## Requirements and notes

- **Runtime:** Bun only (`#!/usr/bin/env bun`). No Node rewrite required.
- **Any harness** that can invoke a Bun script can drive the picker; examples here target Claude Code.
- **Windows:** the same Bun invocation from the skill root (or an absolute path to `pick.ts`). The catalog is resolved script-relative, and the cooldown uses file mtimes with no separate state file.
- **Deterministic smoke:** `--seed 42 --print` and `bun test .claude/skills/sortes/bin/pick.test.ts`.

## Credit

Draw mechanism after `latentwill/ideonomy-skill` (MIT / CC-BY). With thanks to Grace Kind (gracekind.net), Patrick Gunkel, and Ed Kennedy.

Companions (bundled in this repository): `prokope` — the goal-loop doctrine that mandates sortes draws on multi-arm research waves · `fabrica` — the multi-agent pipeline harness a draw typically feeds.
