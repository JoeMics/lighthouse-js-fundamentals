const carPassing = function (cars, speed) {
  cars.push(
    {
      time: Date.now(),
      speed: speed
    }
  )
  
  return cars;
}

// test case
const cars = [
  {
    time: 1568329654807,
    speed: 40,
  },
  {
    time: 1568329821632,
    speed: 42,
  },
  {
    time: 1568331115463,
    speed: 35
  }
]

const speed = 38

console.log(carPassing(cars, speed));

/*return something similar :
[ { time: 1568329654807, speed: 40 },
  { time: 1568329821632, speed: 42 },
  { time: 1568331115463, speed: 35 },
  { time: 1629316426483, speed: 38 } ]
*/