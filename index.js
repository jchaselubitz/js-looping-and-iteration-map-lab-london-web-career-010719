// Code your solution in this file.

function lowerCaseDrivers(drivers) {
    return drivers.map(function(driver){
        return driver.toLowerCase()
    })
}

function nameToAttributes(drivers) {
    let newDriverArray = []
    newDriverArray = drivers.map(function (driver){
        let holderArray = driver.split(" ")
        return Object.assign({}, {firstName: holderArray[0], lastName: holderArray[1]})
    })
    return newDriverArray
}

// function attributesToPhrase(drivers) {
//     return drivers.map(function(driver) {
//       return `${driver.name} is from ${driver.hometown}`;
//     });
//   }

function attributesToPhrase(drivers) {
    return drivers.map(function (driver) {
        return `${driver.name} is from ${driver.hometown}`
    })
}


// let driverArray = driver.split(" ")
//         for (const driver of driverArray){
//             Object.assign({}, {name: driver[1]})
//             newDriverArray.push(name))
//         }
//         driverArray[0]
//         driverArray[1]

// const newDriverArray = []
// for (const driver of drivers){
//    newDriverArray.push(callback(driver))
