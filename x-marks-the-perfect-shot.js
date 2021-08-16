/* 
recieves N, S, W, E as parameters
returns the position of parade after all moves
*/
function finalPosition(moves) {
  const startPosition = [0, 0];

  for (let move of moves) {
    switch (move) {
    case 'north':
      startPosition[1] += 1;
      break;
    case 'south':
      startPosition[1] -= 1;
      break;
    case 'west':
      startPosition[0] -= 1;
      break;
    case 'east':
      startPosition[0] += 1;
      break;
    }
  }

  return startPosition;
}

//test case
const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  
console.log(finalPosition(moves)); // [-1, 4] 