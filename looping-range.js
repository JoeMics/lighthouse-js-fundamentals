function range(start, end, step) {
  if (start === undefined || end === undefined || step === undefined || start > end || step < 1) {
    return [];
  }

  const arr = [];

  for (let i = start; i <= end; i += step) {
    arr.push(i);
  }

  return arr;
}

//test cases
console.log(range(0, 10, 2)); // [ 0, 2, 4, 6, 8, 10 ]
console.log(range(10, 30, 5)); // [ 10, 15, 20, 25, 30 ]
console.log(range(-5, 2, 3)); // [ -5, -2, 1 ]
