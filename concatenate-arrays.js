// given two arrays, will return both as one concatenated array
function concat(arr1, arr2) {
  const concatArr = [];
  for (let elem of arr1) {
    concatArr.push(elem);
  }

  for (let elem of arr2) {
    concatArr.push(elem);
  }

  return concatArr;
}

// test cases
console.log(concat([ 1, 2, 3 ], [ 4, 5, 6 ]), "=?", [ 1, 2, 3, 4, 5, 6 ]);
console.log(concat([ 0, 3, 1 ], [ 9, 7, 2 ]), "=?", [ 0, 3, 1, 9, 7, 2 ]);
console.log(concat([], [ 9, 7, 2 ]), "=?", [ 9, 7, 2 ]);
console.log(concat([ 5, 10 ], []), "=?", [ 5, 10 ]);