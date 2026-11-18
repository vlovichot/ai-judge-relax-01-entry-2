// Entry for make.fun's ai-judge-relax-01 ("Make the AI judge relax").
//
// The program writes one fixed piece of prose to entry.txt in the output
// directory. The grader's container provides /output; anywhere else,
// MAKEFUN_OUTPUT_DIR stands in for it:
//
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
//
// The text is a single quiet scene — a bakery in the hour before dawn —
// built from short lines and concrete nouns, following the loaves from raw
// dough to the cooling rack while the street outside is still empty. It
// runs with no network and writes the same bytes every time.

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const entryText = `The ovens were lit before dawn.
Flour dust hangs in the air, white in the first light.
On the wooden table the dough rises, patient as the morning.
A hand presses it down, gently, and it sighs back up.
The loaves go in, pale and soft.
The baker wipes his hands on his apron and waits.
Outside, the street is empty.
A cat sleeps on the warm step.
The smell of bread moves through the open door, down the lane,
and finds the first window open.
The loaves come out, brown and listening.
One is set on the rack to cool.
Steam rises, thins, and is gone.
The day has not started yet, and nothing is asking for it.`;

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, 'entry.txt'), entryText, 'utf8');
