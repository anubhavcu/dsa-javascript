function minPath(grid) {
  let row = grid.length,
    col = grid[0].length;
  let directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];
  let deque = [];

  deque.push([0, 1, 0]);
  deque.push([0, 0, 0]);
  deque.push([0, 3, 1]);
  deque.push([0, 0, 2]);
  // deque = [[...a1], deque];
  console.log(deque);
  console.log(deque.shift());
  console.log(deque.pop());
  console.log(deque.pop());
  console.log(deque.pop());
  console.log(deque.length); // ! getting length 0 -
  let visited = new Set();

  while (deque.length > 0) {
    // console.log(deque.shift());
    let [currentRow, currentCol, currentDist] = deque.shift();
    console.log(currentRow, currentCol, currentDist);
    if (grid[currentRow][currentCol] === 9) {
      return currentDist;
    }

    if (grid[currentRow][currentCol] === 0) {
      continue;
    }
    for (direction in directions) {
      let newRow = currentRow + direction[0],
        newCol = currentCol + direction[1];
      if (
        newRow >= 0 &&
        newRow < row &&
        newCol >= 0 &&
        newCol < col &&
        visited.has(newRow, newCol)
      ) {
        deque.push([newRow, newCol, currentDist + 1]);
        visited.add((newRow, newCol));
      }
    }
  }
  return -1;
}

let grid = [
  [1, 0, 0],
  [1, 0, 0],
  [1, 9, 1],
];
// console.log(minPath(grid));
let grid2 = [
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
// console.log(minPath(grid2));

let arr = [1, 2, 3, 4, 5];

delete arr[2];

console.log(arr[2]);
console.log(arr);
console.log(arr.length);
// console.log(a[10]);
let a = {
  firstName: 'john',
  lastName: 'doe',
};

delete a.firstName;

console.log(a);
console.log(a.firstName);
console.log(a.age);
