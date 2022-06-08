// Code your solution in this file!
let drivers = ['Antonia', 'Nuru', 'Amari','Mo'];
const returnFirstTwoDrivers = function(){
  return (drivers.slice(0,2))
}
const returnLastTwoDrivers = function(){
  return (drivers.slice(-2))
}
let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(multiplier){
  return function (fare) {
    return fare *multiplier
  }
}
//createFareMultiplier(4);
function fareDoubler(fare){
    const totalFare = createFareMultiplier(2);
    return totalFare(fare);
}
function fareTripler(fare){
    const totalFare = createFareMultiplier(3);
    return totalFare(fare);
}

function selectDifferentDrivers(arrayOfDrivers, func){
    return func(arrayOfDrivers);
}


