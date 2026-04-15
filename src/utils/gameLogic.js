export function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
  ];

  for (let index = 0; index < lines.length; index++) {
    const [a, b, c] = lines[index];

    //Check if all three are same
    if (
      squares[a] &&
      squares[a] === squares[b] &&
      squares[a] === squares[c]
    ) {
      return {
        player: squares[a],
        line: [a, b, c],
      };
    }
  }
  return null;
}