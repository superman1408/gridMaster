import React, { useState } from 'react'
import Board from '../components/board/Board'
import './Game.css' 
import { getBestMove } from '../utils/aimove';



export default function Game() {
  // const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([
    {
      squares: Array(9).fill(null),
      move: null,
    },
  ]);

  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;

  const currentSquare = history[currentMove].squares;

  // function handlePlay(nextSquare, moveIndex) {
  //   // console.log("handle Play function");
  //   const nextHistory = [
  //     ...history.slice(0, currentMove + 1),
  //     { squares: nextSquare, move: moveIndex },
  //   ];
  //   setHistory(nextHistory);
  //   setCurrentMove(nextHistory.length - 1);
  //   // setXIsNext(!xIsNext);
  // }

  function handlePlay(nextSquare, moveIndex) {
    const nextHistory = [
      ...history.slice(0, currentMove + 1),
      { squares: nextSquare, move: moveIndex },
    ];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);

    // 🤖 AI TURN (after player X)
    setTimeout(() => {
      const aiMove = getBestMove(nextSquare.slice(), true).move;

      if (aiMove !== undefined) {
        const aiSquares = nextSquare.slice();
        aiSquares[aiMove] = "O";

        setHistory((prev) => [
          ...prev,
          { squares: aiSquares, move: aiMove },
        ]);

        setCurrentMove((prev) => prev + 1);
      }
    }, 500); // delay for realism
  }


  function jumpTo(nextMove) {
    /*to do */
    setCurrentMove(nextMove);
    // setXIsNext(nextMove % 2 === 0);
  }

  const moves = history.map((step, move) => {
    /* to do here */
    let description;

    if (move === 0) {
      description = "Go to Move game start #";
    } else {
      const index = step.move;

      // convert index to row & col
      const row = Math.floor(index / 3);
      const col = index % 3;

      description = `Go to Move #${move} (${row}, ${col})`;
    }

    if (move === currentMove) {
      return (
        <li key={move}>
          <strong>
            You are at move # {move}
            {move !== 0 && `(${Math.floor(step.move / 3)}, ${step.move % 3})`}
          </strong>
        </li>
      );
    }

    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  );
} 