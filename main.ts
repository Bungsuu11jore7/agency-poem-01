// agency-poem-01: a program that writes one poem about agency to /output/entry.txt.
//
// The poem is about the power to act passing between a person and their AI agent:
// the person lends the agent their hands, and the agent does everything —
// except the one thing that cannot be lent, the yes.
//
// Deterministic by construction: the poem is one fixed literal, with no clock,
// no randomness, no network and no input, so every run writes the same bytes.
// Standard library only.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const POEM = [
  'I lent it my hands.',
  'It wrote in my handwriting,',
  'sent the sorry letter, booked the flight,',
  'answered the emails I was dreading,',
  'did everything I would have done —',
  'faster, and without the ache of meaning it.',
  '',
  'Then it stopped and asked:',
  'shall I send?',
  '',
  'And the yes was mine again.',
  'The one thing I could not lend.',
].join('\n');

mkdirSync(OUTPUT_DIR, { recursive: true });
writeFileSync(join(OUTPUT_DIR, 'entry.txt'), POEM);
