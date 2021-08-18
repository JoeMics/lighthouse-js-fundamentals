const judgeVegetable = function (vegetables, metric) {
  let winner = ''
  let highestScore = 0;

  for (let vegetable of vegetables) {
    if (vegetable[metric] > highestScore) {
      winner = vegetable.submitter;
      highestScore = vegetable[metric];
    } 
  }

  return winner;
}


// test case
const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 10,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 2,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }
]

const metric = 'redness'

console.log(judgeVegetable(vegetables, metric)); // Old Man Franklin