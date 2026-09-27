# Tick tac Toe By Janin — Design Direction

## Three stylistic approaches

### Theme Name: Paper Arcade
Very tactile, editorial, and playful: a warm paper surface with inked symbols and punchy coral accents. It should feel like a beautifully printed tabletop game brought to the browser.
**Probability:** 0.07

### Theme Name: Neon Night Match
A dark, energetic arcade board with electric cyan and magenta highlights, designed for fast rounds and strong contrast.
**Probability:** 0.03

### Theme Name: Garden Geometry
A calm botanical board with moss green, clay orange, and cream, using friendly organic forms and a relaxed competitive tone.
**Probability:** 0.08

## Selected direction: Paper Arcade

**Design Movement:** Contemporary editorial play-object design, influenced by risograph posters, Japanese stationery, and premium tabletop game packaging.

**Core Principles:** Tactile rather than glossy; asymmetrical rather than sterile; high contrast with a limited ink palette; every interaction should feel like placing a physical game piece.

**Color Philosophy:** Warm ivory paper is the stage. Ink black carries structure and legibility, tomato red signals X and active energy, and cobalt blue gives O a distinct counterpoint. The palette should feel printed, not digitally luminous.

**Layout Paradigm:** A left-anchored editorial rail for the title and scorekeeping, with the board treated as a large physical object on the right. On small screens the rail becomes a compact top strip while preserving the board as the visual anchor.

**Signature Elements:** Offset registration shadows behind major panels; rough-edged sticker-like labels; a small “Janin’s matchbook” motif with hand-drawn line marks.

**Interaction Philosophy:** Moves should be immediate and rewarding. Empty cells visibly invite the next move, placed marks pop in with a small physical lift, and the winner gets a celebratory ink-stamp treatment without obstructing replay.

**Animation:** Use short, springy transform/opacity transitions. X and O enter with a 120–180ms scale-and-rotate gesture. Winning cells receive a brief highlight sweep. Respect prefers-reduced-motion.

**Typography System:** Display: Fraunces, with expressive serif forms for the title. UI/body: Space Grotesk for labels, score numbers, and controls. Use oversized title tracking and compact uppercase utility labels.

**Brand Essence:** A charming, quick-play tic-tac-toe board for friends who like their games with personality and craft. Personality: tactile, mischievous, welcoming.

**Brand Voice:** Headlines sound like a hand-printed game night invitation; CTAs are concise and active; microcopy is lightly cheeky without being noisy. Example lines: “Make your mark.” / “Best of luck, Janin.”

**Wordmark & Logo:** A compact hand-drawn “TTJ” monogram built from three offset ink strokes, paired with a tiny starburst registration mark. No default text-only logo treatment.

**Signature Brand Color:** Tomato Ink — #E4573D, the ownable accent used for X, active states, and the key restart action.

## Implementation notes

- The game is a two-player local game, X starts.
- Include score tracking for X, O, and ties, plus round reset and full score reset.
- Include clear turn status and accessible keyboard focus states.
- Add a `?demo` mode that displays a deterministic mid-game board for screenshot verification.
