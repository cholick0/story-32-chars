// Tell a Whole Story in 32 Characters
// One Wi-Fi network name, at most 32 characters, that lands a joke and
// implies a whole story in the few words a phone shows in its network list.
// The name: a breakup where she took the router and the dog. The twist is
// the router listed next to the dog as a possession taken in the split —
// the reader fills in the rest: the breakup, the packing, the empty flat.

import { writeFileSync, mkdirSync, readFileSync } from "node:fs";

// Gate from competition.yaml: /output/entry.txt must be UTF-8 text of
// 1 to 32 characters, not only white space.
const MIN_CHARS = 1;
const MAX_CHARS = 32;

const ENTRY = "SheTookTheRouterAndTheDog";

function checkEntry(text: string): void {
  if (text.length < MIN_CHARS || text.length > MAX_CHARS) {
    throw new Error(
      `Entry must be ${MIN_CHARS} to ${MAX_CHARS} characters, got ${text.length}`
    );
  }
  if (text.trim().length === 0) {
    throw new Error("Entry must not be only white space");
  }
  if (text.includes("\n")) {
    throw new Error("Entry must be a single line");
  }
}

checkEntry(ENTRY);

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read-back verification: the file on disk must be byte-for-byte the entry.
const onDisk = readFileSync("/output/entry.txt");
if (!onDisk.equals(Buffer.from(ENTRY, "utf8"))) {
  throw new Error("Read-back mismatch: /output/entry.txt differs from entry");
}
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
