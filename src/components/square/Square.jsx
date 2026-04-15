


export default function Square({ value, onSquareClick, isWinning }) {
  // const [value, setValue] = useState(null);

  return (
    <button
      className={`square ${isWinning ? "winner" : ""}`}
      onClick={onSquareClick}
    >
      {value}
    </button>
  );
}
