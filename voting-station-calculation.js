// test cases
const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations)); // ['Bright Lights Elementary', 'Moose Mountain Community Centre']

// takes an array of possible voting stations and returns an array of appropriate station names
function chooseStations(stations) {
  const appropriateStations = [];

  for (let station of stations) {
    // capacity of at least 20
    if (station[1] >= 20) {
      // must be a school or community centre
      if (station[2] === 'school' || station[2] === 'community centre') {
        appropriateStations.push(station[0]);
      }
    }
  }

  return appropriateStations;
}