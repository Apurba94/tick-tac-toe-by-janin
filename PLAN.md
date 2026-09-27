# Build Plan

## Main build

- Two-player local Tic-Tac-Toe on a 3x3 board.
- X starts; turns alternate after each valid move.
- Detect all eight win lines and ties.
- Highlight winning cells and show a replay action.
- Track X wins, O wins, and ties across rounds.
- Reset match clears scores; new round preserves scores.

## Risk slices

1. **State correctness:** ensure a finished round cannot accept more moves and score increments only once.
2. **Responsive board:** preserve a square board and accessible controls across desktop and narrow mobile widths.
3. **Visual verification:** confirm the empty state, demo state, active-turn state, and finished state read clearly.

## Verification criteria

- `pnpm check` passes with no TypeScript errors.
- `pnpm build` produces a production bundle.
- Main screen shows the branded Paper Arcade composition.
- `/?demo` shows deterministic placed marks for screenshot QA.
- Keyboard focus is visible on each cell; reduced motion is respected.
