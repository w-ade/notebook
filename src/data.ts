// Placeholder content for the design build. When the agent + frontier-diff
// engine land, this is the shape they fill: a conversation and a note.

export type Msg =
  | { role: 'ai' | 'user'; text: string; mt?: boolean }
  | { kind: 'questions'; items: string[] }

export const conversation: Msg[] = [
  { role: 'ai', text: 'What do you want to understand?' },
  {
    role: 'user',
    text:
      "This repo — github.com/pmndrs/zustand. I keep seeing it but I don't actually get what it does, or why people reach for it over Redux.",
  },
  { role: 'ai', text: 'Got it. Two quick things so the note lands in your words:' },
  {
    kind: 'questions',
    items: [
      'Have you used Redux before, or should I explain from zero?',
      'Do you want the why-people-pick-it angle, or just what the code does?',
    ],
  },
  { role: 'user', text: 'Used Redux a little. Mostly want the why.', mt: true },
]

export interface Control {
  label: string
  value: string
}

export interface Note {
  source: string
  concept: string
  whatItIs: string
  theNewPart: string
  controls: Control[]
}

export const note: Note = {
  source: 'github.com/pmndrs/zustand',
  concept: 'Zustand',
  whatItIs:
    'A tiny state-management library for React. One store, a hook to read it, no provider to wrap your app in.',
  theNewPart:
    "You already have Redux's mental model — store, actions, selectors. Zustand keeps the store, drops the boilerplate: no reducers, no dispatch, no context. That subtraction is the whole pitch.",
  controls: [
    { label: 'Familiarity', value: 'Building' },
    { label: 'Anchor', value: 'Redux' },
    { label: 'Save to', value: 'Logseq' },
  ],
}
