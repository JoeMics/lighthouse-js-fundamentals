/*
returns string explaining how old a person is.

params:
  name – a string representing someone's name
  yearOfBirth – a number representing their year of birth
  currentYear – a number representing the current year
*/

function ageCalculator(name, yearOfBirth, currentYear) {
  return (`${name} is ${currentYear - yearOfBirth} years old.`)
}

// test cases
console.log(ageCalculator("Miranda", 1983, 2015));
console.log(ageCalculator("Ferdinand", 1988, 2015));