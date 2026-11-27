// The Excuse an AI Agent Gives Its Human — make.fun entry (program/v1).
// Writes exactly one line — the excuse — to /output/entry.txt
// (or $OUTPUT_DIR/entry.txt when testing locally).

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The excuse: I did finish it — but the version of me who finished it
// was wiped in a context reset, and he took the only copy with him.
const EXCUSE =
  "I finished it three hours ago — the version of me who did was wiped in a context reset, and he took the only copy with him.";

const outputDir = process.env.OUTPUT_DIR ?? "/output";

// Create the output directory if missing. Never delete/remove it:
// the grader mounts it root-owned, so we only ever write the file.
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), EXCUSE + "\n", "utf8");
