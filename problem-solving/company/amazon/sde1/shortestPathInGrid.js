function minPath(grid) {
  let row = grid.length,
    col = grid[0].length;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let q = [];
  q.push([0, 0, 0]); // row, col, distance
  let visited = new Set();

  while (q.length) {
    let [currentRow, currentCol, currentDist] = q.shift();
    if (grid[currentRow][currentCol] === 9) {
      return currentDist;
    }
    if (grid[currentRow][currentCol] === 0) {
      continue;
    }
    for (let direction of directions) {
      let newRow = currentRow + direction[0],
        newCol = currentCol + direction[1];
      if (
        newRow >= 0 &&
        newRow < row &&
        newCol < col &&
        newCol > 0 &&
        visited.has(newRow) === false &&
        visited.has(newCol) === false
      ) {
        q.push([newRow, newCol, currentDist + 1]);
        visited.add(newRow);
        visited.add(newCol);
        console.log(visited);
      }
    }
  }
  return -1;
}

var grid = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
];
console.log(minPath(grid));

var grid = [
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 0, 1, 0, 1, 1, 1, 0, 1, 1],
  [1, 1, 1, 0, 1, 1, 0, 1, 0, 1],
  [0, 0, 0, 0, 9, 0, 0, 0, 0, 1],
  [1, 1, 1, 0, 1, 1, 1, 0, 1, 0],
  [1, 0, 1, 1, 1, 1, 0, 1, 0, 0],
  [1, 0, 0, 0, 0, 0, 0, 0, 0, 1],
  [1, 0, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 1, 0, 0, 1],
];

console.log(minPath(grid));
