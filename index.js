const plantingArea = 78.54;
const neededPlantSpace = 0.8;
let totalPlants = 20;

// A function that takes the number of weeks
// as a parameter, then uses an if/else statement
// to give the correct response on what to do with
// the plants.

function checkPlants (weeks) {
    totalPlants = totalPlants * (2 ** weeks);

    if ((totalPlants * neededPlantSpace) > plantingArea * .80) {
        console.log ("The plants should be pruned so they don't exceed the garden's capacity.");
    } 
    else if ((totalPlants * neededPlantSpace) >= plantingArea * .50 && (totalPlants * neededPlantSpace) <= plantingArea * .80) {
        console.log ("The plants are growing at an acceptable rate and should be monitored.");
    } else {
        console.log ("There is more room in the garden so more plants can be planted");
    }
}

checkPlants(1);
checkPlants(2);
checkPlants(3);

// Reinitialize the plants variable for part 2

console.log("Part 2");
totalPlants = 100;
checkPlants(10);
console.log(`The amount of additional space that would be required is ${(totalPlants * neededPlantSpace) - plantingArea} square meters.`);
console.log(`If the new garden remained circular, the new radius would be ${Math.sqrt((totalPlants * neededPlantSpace) / 3.14)} square meters.`);

// The same function rewritten
// for part 3

function part3CheckPlants (weeks) {
    totalPlants = totalPlants * (2 ** weeks);
    try {
        if ((totalPlants * neededPlantSpace) > plantingArea * .80) {
        console.log ("The plants should be pruned so they don't exceed the garden's capacity.");
        } 
        else if ((totalPlants * neededPlantSpace) >= plantingArea * .50 && (totalPlants * neededPlantSpace) <= plantingArea * .80) {
            console.log ("The plants are growing at an acceptable rate and should be monitored.");
        } else {
            console.log ("There is more room in the garden so more plants can be planted");
        }
    } catch (error) {
        throw "There's not enough space for the plants.";
    }
}