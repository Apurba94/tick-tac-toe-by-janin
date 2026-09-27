# Tick tac Toe by Janin

A two-player local tic-tac-toe game with a tactile "Paper Arcade" design:
warm ivory paper, Fraunces display type, tomato-red X and cobalt-blue O.

- X always starts; turns alternate after each valid move.
- All eight winning lines and ties are detected; the winning line is highlighted.
- A finished round accepts no more moves, and each result is scored once.
- The matchbook tracks X wins, O wins and ties across rounds.
  **Play again** keeps the score; **Reset match** clears it.
- Responsive square board with accessible cell labels, from desktop down to narrow phones.

## Run it

Requires Node.js 20+ and pnpm 10 (`npm install -g pnpm`).

```bash
pnpm install
pnpm dev        # development server on http://localhost:3000
```

Production build:

```bash
pnpm build      # client into dist/public, server into dist/index.js
pnpm start      # serves the built game on $PORT (default 3000)
```

`pnpm check` runs the TypeScript checks.

### Optional analytics

Set `VITE_ANALYTICS_ENDPOINT` and `VITE_ANALYTICS_WEBSITE_ID` at build time to
load an Umami analytics script. Without them no analytics code is loaded.

## Project layout

```
client/            React 19 + Vite + Tailwind 4 front end
  src/pages/Home.tsx   the game: board, turn logic, scoring
  public/              static assets (TTJ monogram)
server/index.ts    small Express server for the production build
```

## Credits

Created by **Janin A Apurba**. Released under the [MIT License](LICENSE).
