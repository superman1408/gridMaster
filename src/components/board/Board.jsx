import React from "react";
import Square from "../square/Square";
import "./Board.css";
import { calculateWinner } from "../../utils/gameLogic";


export default function Board({ xIsNext, squares, onPlay }) {
  // const [xIsNext, setXIsNext] = useState(true);
  // const [squares, setSquares] = useState(Array(9).fill(null));

  const winnerData = calculateWinner(squares);
  const winner = winnerData?.player;
  const winnerLine = winnerData?.line;

  // check draw
  const isDraw = !winner && squares.every((square) => square !== null);
  let status;

  if (winner) {
    // console.log("Player win");
    status = "Winner: " + winner;
    // console.log(status);
  } else if (isDraw) {
    // console.log("Next Player");
    status = "It's a Draw 🤝";
    // console.log(status);
  } else {
    status = "Next Player: " + (xIsNext ? "X" : "O");
  }



  // calculateWinner(squares)

  function handleClick(index) {
    // console.log("Button is clicked");
    // console.log(index);
    // console.log(xIsNext);
    if (winner || squares[index]) {
      return;
    }

    const nextSquare = squares.slice();

    if (xIsNext) {
      // console.log("Right");
      nextSquare[index] = "X";
    } else {
      nextSquare[index] = "O";
      // console.log("Wrong");
    }
    // console.log("ENDING");
    onPlay(nextSquare, index);
    // setXIsNext(!xIsNext);
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {/* <button className="square">1</button>
        <button className="square">2</button>
        <button className="square">3</button> */}
        <Square
          value={squares[0]}
          onSquareClick={() => handleClick(0)}
          isWinning={winnerLine?.includes(0)}
        />
        <Square
          value={squares[1]}
          onSquareClick={() => handleClick(1)}
          isWinning={winnerLine?.includes(1)}
        />
        <Square
          value={squares[2]}
          onSquareClick={() => handleClick(2)}
          isWinning={winnerLine?.includes(2)}
        />
      </div>
      <div className="board-row">
        {/* <button className="square">4</button>
        <button className="square">5</button>
        <button className="square">6</button> */}
        <Square
          value={squares[3]}
          onSquareClick={() => handleClick(3)}
          isWinning={winnerLine?.includes(3)}
        />
        <Square
          value={squares[4]}
          onSquareClick={() => handleClick(4)}
          isWinning={winnerLine?.includes(4)}
        />
        <Square
          value={squares[5]}
          onSquareClick={() => handleClick(5)}
          isWinning={winnerLine?.includes(5)}
        />
      </div>
      <div className="board-row">
        {/* <button className="square">7</button>
        <button className="square">8</button>
        <button className="square">9</button> */}
        <Square
          value={squares[6]}
          onSquareClick={() => handleClick(6)}
          isWinning={winnerLine?.includes(6)}
        />
        <Square
          value={squares[7]}
          onSquareClick={() => handleClick(7)}
          isWinning={winnerLine?.includes(7)}
        />
        <Square
          value={squares[8]}
          onSquareClick={() => handleClick(8)}
          isWinning={winnerLine?.includes(8)}
        />
      </div>
    </>
  );
}