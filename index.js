// Code your solution in this file!

const returnFirstTwoDrivers = function(driverArray){ 
    return driverArray.slice(0,2)
}

const returnLastTwoDrivers = function(driverArray){ 
    return driverArray.slice(-2)
}


const selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

function createFareMultiplier(int){
     let innerFunction = function(fare){return fare * int}
     return innerFunction
};



function fareDoubler(fare){
    const returnedFunction = createFareMultiplier(2)
    return returnedFunction(fare)
};

function fareTripler(fare){
    const returnedFunction = createFareMultiplier(3)
    return returnedFunction(fare)
};

function selectDifferentDrivers(driverArray,driverFunction){
  return driverFunction(driverArray)
};