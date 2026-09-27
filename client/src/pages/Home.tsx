// Paper Arcade design: tactile editorial tabletop-game layout, Fraunces display type, Space Grotesk UI, ivory paper, tomato ink, cobalt counterpoint.
import { useEffect, useMemo, useState } from "react";

type Mark = "X" | "O" | null;
type Scores = { X: number; O: number; ties: number };

const WIN_LINES = [
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  [0, 4, 8], [2, 4, 6],
];

function getWinner(board: Mark[]) {
  for (const [a, b, c] of WIN_LINES) {
    if (board[a] && board[a] === board[b] && board[a] === board[c]) return { winner: board[a], line: [a, b, c] };
  }
  return { winner: null, line: [] as number[] };
}

export default function Home() {
  const demo = new URLSearchParams(window.location.search).has("demo");
  const [board, setBoard] = useState<Mark[]>(demo ? ["X", null, "O", null, "O", null, null, "X", null] : Array(9).fill(null));
  const [turn, setTurn] = useState<Exclude<Mark, null>>(demo ? "X" : "X");
  const [scores, setScores] = useState<Scores>({ X: 0, O: 0, ties: 0 });
  const [round, setRound] = useState(1);
  const result = useMemo(() => getWinner(board), [board]);
  const finished = Boolean(result.winner) || board.every(Boolean);

  useEffect(() => {
    if (!finished) return;
    if (result.winner) setScores((current) => ({ ...current, [result.winner as "X" | "O"]: current[result.winner as "X" | "O"] + 1 }));
    else setScores((current) => ({ ...current, ties: current.ties + 1 }));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finished]);

  const resetRound = () => {
    setBoard(Array(9).fill(null));
    setTurn("X");
    setRound((value) => value + 1);
  };

  const resetMatch = () => {
    setScores({ X: 0, O: 0, ties: 0 });
    setRound(1);
    setBoard(Array(9).fill(null));
    setTurn("X");
  };

  const play = (index: number) => {
    if (board[index] || finished) return;
    const next = [...board];
    next[index] = turn;
    setBoard(next);
    if (!getWinner(next).winner && !next.every(Boolean)) setTurn(turn === "X" ? "O" : "X");
  };

  const status = result.winner ? `${result.winner} takes the round` : board.every(Boolean) ? "A clean tie" : `${turn}’s turn — make your mark`;

  return (
    <main className="game-shell">
      <div className="paper-grain" aria-hidden="true" />
      <section className="editorial-rail">
        <div className="brand-lockup">
          <img className="brand-mark" src="/ttj-monogram.svg" alt="TTJ monogram" />
          <span className="eyebrow">A Janin original · 002</span>
        </div>
        <div className="title-block">
          <p className="kicker">Two players · one little board</p>
          <h1>Tick tac<br /><em>Toe</em></h1>
          <p className="byline">By Janin</p>
        </div>
        <div className="score-card" aria-label="Match score">
          <div className="score-heading"><span>Matchbook</span><span>Round {String(round).padStart(2, "0")}</span></div>
          <div className="scores">
            <div className="score score-x"><span className="score-symbol">X</span><strong>{scores.X}</strong><small>Player one</small></div>
            <div className="score-divider" aria-hidden="true" />
            <div className="score score-ties"><span className="tie-symbol">—</span><strong>{scores.ties}</strong><small>Ties</small></div>
            <div className="score-divider" aria-hidden="true" />
            <div className="score score-o"><span className="score-symbol">O</span><strong>{scores.O}</strong><small>Player two</small></div>
          </div>
        </div>
        <button className="reset-match" onClick={resetMatch}>Reset match <span>↗</span></button>
        <p className="footer-note">First to three? Maybe.<br />Mostly, just have fun.</p>
      </section>

      <section className="board-stage">
        <div className="stage-topline"><span>Local match / X starts</span><span>↘</span></div>
        <div className="board-wrap">
          <div className="board-shadow" aria-hidden="true" />
          <div className="board" role="grid" aria-label="Tic tac toe board">
            {board.map((mark, index) => {
              const isWinning = result.line.includes(index);
              return <button key={index} className={`cell ${mark ? `mark-${mark.toLowerCase()}` : ""} ${isWinning ? "winning" : ""}`} onClick={() => play(index)} aria-label={mark ? `Cell ${index + 1}: ${mark}` : `Cell ${index + 1}: empty`} role="gridcell">
                {mark && <span className="mark">{mark}</span>}
              </button>;
            })}
          </div>
        </div>
        <div className={`status-stamp ${finished ? "is-finished" : ""}`} aria-live="polite">
          <span className="stamp-dot" />
          <span>{status}</span>
        </div>
        <div className="board-actions">
          <button className="new-round" onClick={resetRound}>{finished ? "Play again" : "New round"}<span>↗</span></button>
          <p>Tip: tap any empty square<br />to place your piece.</p>
        </div>
      </section>
    </main>
  );
}
