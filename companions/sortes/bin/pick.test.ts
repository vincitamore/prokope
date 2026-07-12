/**
 * Deterministic pick smoke — drives the shipped picker entry point.
 * Run: bun test ./.claude/skills/sortes/bin/pick.test.ts
 */
import { describe, expect, test } from "bun:test";
import { join, dirname } from "path";
import { spawnSync } from "child_process";

const pick = join(dirname(import.meta.path), "pick.ts");

function runPick(args: string[]): { status: number | null; stdout: string; stderr: string } {
  const r = spawnSync("bun", [pick, ...args], { encoding: "utf8" });
  return {
    status: r.status,
    stdout: (r.stdout ?? "").trim(),
    stderr: (r.stderr ?? "").trim(),
  };
}

describe("sortes pick", () => {
  test("seed 42 is deterministic across two runs", () => {
    const a = runPick(["--seed", "42", "--print"]);
    const b = runPick(["--seed", "42", "--print"]);
    expect(a.status).toBe(0);
    expect(b.status).toBe(0);
    expect(a.stdout).toBe(b.stdout);
    expect(a.stdout).toContain("SORTES LENS DRAW");
    const lines = a.stdout
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "));
    expect(lines.length).toBe(3);
  });

  test("different seeds can differ (PRNG non-collapse)", () => {
    // Extremely unlikely identical triple if mulberry32 works; if collision, fail and re-check seeds.
    const a = runPick(["--seed", "1", "--print"]).stdout;
    const b = runPick(["--seed", "99999", "--print"]).stdout;
    expect(a).toContain("SORTES LENS DRAW");
    expect(b).toContain("SORTES LENS DRAW");
    expect(a).not.toBe(b);
  });

  test("--json envelope for seeded draw", () => {
    const r = runPick(["--seed", "42", "--json"]);
    expect(r.status).toBe(0);
    const j = JSON.parse(r.stdout) as {
      ok: boolean;
      picked: unknown[];
      seeded: boolean;
      n: number;
    };
    expect(j.ok).toBe(true);
    expect(j.seeded).toBe(true);
    expect(j.picked.length).toBe(3);
    expect(j.n).toBe(3);
  });

  test("--n 1 draws a single lens", () => {
    const r = runPick(["--seed", "42", "--n", "1", "--print"]);
    expect(r.status).toBe(0);
    const lines = r.stdout
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "));
    expect(lines.length).toBe(1);
  });

  test("invalid --n exits 2", () => {
    const r = runPick(["--n", "foo", "--print"]);
    expect(r.status).toBe(2);
    expect(r.stderr).toContain("Invalid --n");
  });

  test("ideation catalog draws via --catalog and stays deterministic", () => {
    const catalog = join(dirname(import.meta.path), "..", "lenses-ideation");
    const a = runPick(["--seed", "42", "--print", "--catalog", catalog]);
    const b = runPick(["--seed", "42", "--print", "--catalog", catalog]);
    expect(a.status).toBe(0);
    expect(a.stdout).toBe(b.stdout);
    expect(a.stdout).toContain("SORTES LENS DRAW");
    // Ideation catalog defaults to a 7-lens draw (per-catalog default)
    const lines = a.stdout
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "));
    expect(lines.length).toBe(7);
    // Default review catalog must still work and can differ from ideation
    const review = runPick(["--seed", "42", "--print"]).stdout;
    expect(review).not.toBe(a.stdout);
  });

  test("explicit --n overrides the ideation per-catalog default", () => {
    const catalog = join(dirname(import.meta.path), "..", "lenses-ideation");
    const r = runPick(["--seed", "42", "--n", "3", "--print", "--catalog", catalog]);
    expect(r.status).toBe(0);
    const lines = r.stdout
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "));
    expect(lines.length).toBe(3);
  });

  test("review catalog default draw stays 3", () => {
    const r = runPick(["--seed", "42", "--print"]);
    expect(r.status).toBe(0);
    const lines = r.stdout
      .split("\n")
      .map((l) => l.trim())
      .filter((l) => l.startsWith("- "));
    expect(lines.length).toBe(3);
  });
});
