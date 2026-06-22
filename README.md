# notebook

An agent that explains whatever you feed it — a GitHub repo, a concept, a skill — in *your own terms*, and writes it into an accumulating notebook it learns from. The value isn't the explanation; it's the **accumulating shared memory**: each new thing is explained against what you already understand, so the notebook gets smarter the more you feed it.

## Status

Early design canvas. `index.html` is a single self-contained prototype of the interface — no build step, open it in a browser.

## The shape

A fixed-size desktop window that **switches views** rather than growing panels:

- **Agent** — the conversation. Drop something in, answer a couple of clarifying questions so the note lands in your words.
- **Notebook** — the note taking shape. Three sections:
  - **Source** — what you fed in.
  - **Breakdown** — the plain-English read. The concept name sits in the header; *"The new part"* is the known-vs-new frontier (what you already understand vs the net-new edge).
  - **Connections** — links to related concepts.
- **Constellation** *(planned)* — the whole accumulating memory as one graph, reached from the globe.

## Motion

Agent ↔ Notebook switches with a horizontal slide; the Constellation gets a zoom (altitude change); the moment a concept is named into a note gets a shared-element morph. All transform/opacity, ~0.42s, decelerating.

## Theming

Light/dark via the [`light-dark`](https://github.com/w-ade/light-dark-skill) system — semantic role-named variables, a toggle, no-flash first paint.
