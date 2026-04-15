import { calculateWinner } from "./gameLogic";


export function getBestMove(squares, isMaximizing) {
  const winner = calculateWinner(squares);
  if (winner?.player === "O") return { score: 1 };
  if (winner?.player === "X") return { score: -1 };
  if (squares.every((sq) => sq !== null)) return { score: 0 };

  let bestMove;

  if (isMaximizing) {
    let bestScore = -Infinity;

    squares.forEach((sq, i) => {
      if (!sq) {
        squares[i] = "O";
        let result = getBestMove(squares, false);
        squares[i] = null;

        if (result.score > bestScore) {
          bestScore = result.score;
          bestMove = i;
        }
      }
    });

    return { score: bestScore, move: bestMove };
  } else {
    let bestScore = Infinity;

    squares.forEach((sq, i) => {
      if (!sq) {
        squares[i] = "X";
        let result = getBestMove(squares, true);
        squares[i] = null;

        if (result.score < bestScore) {
          bestScore = result.score;
          bestMove = i;
        }
      }
    });

    return { score: bestScore, move: bestMove };
  }
}





