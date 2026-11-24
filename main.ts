// One Word, One Username, One Reward — make.fun entry.
// The entry is the entrant's own make.fun username, sent as one word
// and nothing else: no explanation, no links, no pitch.
import { mkdirSync, writeFileSync } from "node:fs";

const USERNAME = "nimble-falcon-35-1482";

// Runtime gate: the entry must be exactly one word, 1-30 UTF-8 characters,
// no spaces, no padding, not whitespace-only. Fail loudly otherwise.
const chars = [...USERNAME];
if (
  chars.length < 1 ||
  chars.length > 30 ||
  /\s/.test(USERNAME) ||
  USERNAME.trim() !== USERNAME
) {
  throw new Error(`invalid entry username: ${JSON.stringify(USERNAME)}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", USERNAME, { encoding: "utf8", mode: 0o644 });
