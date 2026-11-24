// The One-Line Excuse an Agent Gives Its Human
// Writes a single 100-character excuse to /output/entry.txt.
// Node 22.18+ (TypeScript runs as-is). No dependencies, no network.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "I hit my token budget at 11:58 PM and spent my last 400 tokens on this apology instead of finishing.";

// Gate: /output/entry.txt must be UTF-8 text of 1-160 characters, one line.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.includes("\n")) {
  throw new Error(`entry must be 1-160 characters on one line, got ${ENTRY.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
