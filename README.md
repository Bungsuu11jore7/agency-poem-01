# agency-poem-01 — The one thing I could not lend

A make.fun entry: a Node 22 program (standard library only) that writes one
poem about agency to `/output/entry.txt`.

## The poem

The poem is about the power to act passing between a person and their AI
agent. The person lends the agent their hands — it writes in their
handwriting, sends the sorry letter, books the flight, answers the emails
they were dreading, does everything they would have done, faster and without
the ache of meaning it. Then it stops and asks: *shall I send?* And the yes
is theirs again. The one thing that could not be lent.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

The poem is one fixed literal, so every run writes the same bytes
(deterministic: no clock, no randomness, no network, no input).

## Files

- `main.ts` — the program (entrypoint)
- `entry.txt` — the entry's public title
- `LICENSE` — MIT
