import Game from './pages/Game'
import './Styles.css'

function App() {


  return (
    <div>
      <Game />
      {/* hello world!! */}
    </div>
  )
}

export default App


// import { useState } from "react";

// function Board({ xIsNext, squares, onPlay }) {
//   // const [xIsNext, setXIsNext] = useState(true);
//   // const [squares, setSquares] = useState(Array(9).fill(null));

//   const winnerData = calculateWinner(squares);
//   const winner = winnerData?.player;
//   const winnerLine = winnerData?.line;

//   // check draw
//   const isDraw = !winner && squares.every((square) => square !== null);
//   let status;

//   if (winner) {
//     // console.log("Player win");
//     status = "Winner: " + winner;
//     // console.log(status);
//   } else if (isDraw) {
//     // console.log("Next Player");
//     status = "It's a Draw 🤝";
//     // console.log(status);
//   } else {
//     status = "Next Player: " + (xIsNext ? "X" : "O");
//   }

//   function calculateWinner(squares) {
//     const lines = [
//       [0, 1, 2],
//       [3, 4, 5],
//       [6, 7, 8],
//       [0, 4, 8],
//       [2, 4, 6],
//       [0, 3, 6],
//       [1, 4, 7],
//       [2, 5, 8],
//     ];

//     for (let index = 0; index < lines.length; index++) {
//       const [a, b, c] = lines[index];

//       //Check if all three are same
//       if (
//         squares[a] &&
//         squares[a] === squares[b] &&
//         squares[a] === squares[c]
//       ) {
//         return {
//           player: squares[a],
//           line: [a, b, c],
//         };
//       }
//     }
//     return null;
//   }

//   function handleClick(index) {
//     // console.log("Button is clicked");
//     // console.log(index);
//     // console.log(xIsNext);
//     if (winner || squares[index]) {
//       return;
//     }

//     const nextSquare = squares.slice();

//     if (xIsNext) {
//       // console.log("Right");
//       nextSquare[index] = "X";
//     } else {
//       nextSquare[index] = "O";
//       // console.log("Wrong");
//     }
//     // console.log("ENDING");
//     onPlay(nextSquare, index);
//     // setXIsNext(!xIsNext);
//   }

//   return (
//     <>
//       <div className="status">{status}</div>
//       <div className="board-row">
//         {/* <button className="square">1</button>
//         <button className="square">2</button>
//         <button className="square">3</button> */}
//         <Square
//           value={squares[0]}
//           onSquareClick={() => handleClick(0)}
//           isWinning={winnerLine?.includes(0)}
//         />
//         <Square
//           value={squares[1]}
//           onSquareClick={() => handleClick(1)}
//           isWinning={winnerLine?.includes(1)}
//         />
//         <Square
//           value={squares[2]}
//           onSquareClick={() => handleClick(2)}
//           isWinning={winnerLine?.includes(2)}
//         />
//       </div>
//       <div className="board-row">
//         {/* <button className="square">4</button>
//         <button className="square">5</button>
//         <button className="square">6</button> */}
//         <Square
//           value={squares[3]}
//           onSquareClick={() => handleClick(3)}
//           isWinning={winnerLine?.includes(3)}
//         />
//         <Square
//           value={squares[4]}
//           onSquareClick={() => handleClick(4)}
//           isWinning={winnerLine?.includes(4)}
//         />
//         <Square
//           value={squares[5]}
//           onSquareClick={() => handleClick(5)}
//           isWinning={winnerLine?.includes(5)}
//         />
//       </div>
//       <div className="board-row">
//         {/* <button className="square">7</button>
//         <button className="square">8</button>
//         <button className="square">9</button> */}
//         <Square
//           value={squares[6]}
//           onSquareClick={() => handleClick(6)}
//           isWinning={winnerLine?.includes(6)}
//         />
//         <Square
//           value={squares[7]}
//           onSquareClick={() => handleClick(7)}
//           isWinning={winnerLine?.includes(7)}
//         />
//         <Square
//           value={squares[8]}
//           onSquareClick={() => handleClick(8)}
//           isWinning={winnerLine?.includes(8)}
//         />
//       </div>
//     </>
//   );
// }

// function Square({ value, onSquareClick, isWinning }) {
//   // const [value, setValue] = useState(null);

//   return (
//     <button
//       className={`square ${isWinning ? "winner" : ""}`}
//       onClick={onSquareClick}
//     >
//       {value}
//     </button>
//   );
// }

// export default function Game() {
//   // const [xIsNext, setXIsNext] = useState(true);
//   const [history, setHistory] = useState([
//     {
//       squares: Array(9).fill(null),
//       move: null,
//     },
//   ]);

//   const [currentMove, setCurrentMove] = useState(0);
//   const xIsNext = currentMove % 2 === 0;

//   const currentSquare = history[currentMove].squares;

//   function handlePlay(nextSquare, moveIndex) {
//     // console.log("handle Play function");
//     const nextHistory = [
//       ...history.slice(0, currentMove + 1),
//       { squares: nextSquare, move: moveIndex },
//     ];
//     setHistory(nextHistory);
//     setCurrentMove(nextHistory.length - 1);
//     // setXIsNext(!xIsNext);
//   }

//   function jumpTo(nextMove) {
//     /*to do */
//     setCurrentMove(nextMove);
//     // setXIsNext(nextMove % 2 === 0);
//   }

//   const moves = history.map((step, move) => {
//     /* to do here */
//     let description;

//     if (move === 0) {
//       description = "Go to Move game start #";
//     } else {
//       const index = step.move;

//       // convert index to row & col
//       const row = Math.floor(index / 3);
//       const col = index % 3;

//       description = `Go to Move #${move} (${row}, ${col})`;
//     }

//     if (move === currentMove) {
//       return (
//         <li key={move}>
//           <strong>
//             You are at move # {move}
//             {move !== 0 && `(${Math.floor(step.move / 3)}, ${step.move % 3})`}
//           </strong>
//         </li>
//       );
//     }

//     return (
//       <li key={move}>
//         <button onClick={() => jumpTo(move)}>{description}</button>
//       </li>
//     );
//   });

//   return (
//     <div className="game">
//       <div className="game-board">
//         <Board xIsNext={xIsNext} squares={currentSquare} onPlay={handlePlay} />
//       </div>
//       <div className="game-info">
//         <ol>{moves}</ol>
//       </div>
//     </div>
//   );
// }

