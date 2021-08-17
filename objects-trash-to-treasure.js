const smartGarbage = function (trash, bins) {
  bins[trash]++;
  return bins;
}

// test case
console.log(smartGarbage('recycling', { waste: 4, recycling: 2, compost: 5 })); //{ waste: 4, recycling: 3, compost: 5 }