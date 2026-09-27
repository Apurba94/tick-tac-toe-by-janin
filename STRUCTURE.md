# Structure

The game is intentionally small and framework-light. `client/src/pages/Home.tsx` owns the local match state because the board, status, and score rail are one cohesive interaction surface. The `Mark` type models `X`, `O`, or an empty cell; `getWinner` evaluates the eight possible lines; the round and match reset actions are separate so score persistence is explicit.

The surrounding React shell remains in `client/src/App.tsx`. Global visual tokens and all responsive behavior live in `client/src/index.css`. Generated brand artwork is referenced through the managed `/manus-storage/` URL and is not committed as a local deployment asset.
