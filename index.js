// returnFirstTwoDrivers function
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
};

// returnLastTwoDrivers function
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(-2);
};

// selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

// createFareMultiplier function
function createFareMultiplier(multiplier) {
    return function (fare) {
        return fare * multiplier;
    };
}

// fareDoubler function
const fareDoubler = createFareMultiplier(2);

// fareTripler function
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers function
function selectDifferentDrivers(drivers, selectorFunction) {
    return selectorFunction(drivers);
}
