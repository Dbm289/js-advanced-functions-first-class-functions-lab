// Code your solution in this file!
const returnFirstTwoDrivers = function (arr) {
    return arr.slice(0, 2);
}

const returnLastTwoDrivers = function (arr) {
    return arr.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (argument) {
    return function (int) {
        return argument * int
    }
}

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3)

const selectDifferentDrivers = function (driverArr, returnFirstTwoDrivers) {
    return returnFirstTwoDrivers(driverArr)
}