// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
}

function validateInput(testInput) {
    console.log(testInput.value);
    console.log(isNaN(testInput.value));
    if (testInput.value === "") {
        console.log("undefined")
        return "undefined"
    }
    else if (isNaN(testInput.value)) {
        console.log("testInput is working")
        return "Not a number"
    } else {
        return "Is a number"
    }
}

function formSubmission(pilot, copilot, fuelLevel, cargoLevel) {
    
    if (validateInput(pilot) === "undefined" || validateInput(copilot) === "undefined" || validateInput(fuelLevel) === "undefined" || validateInput(cargoLevel) === "undefined") {
        alert("All fields must be filled out.")  
    }
    else if (validateInput(pilot) === "Is a number" || validateInput(copilot) === "Is a number") {
        alert("Make sure to enter valid information for each field.")
    } 
    else if (validateInput(fuelLevel) === "Not a number" || validateInput(cargoLevel) === "Not a number") {
        alert("Make sure to enter valid information for each field.")
    } else {
        // make the status for each of the fields updated to what was put in. 
        // this does nothing right now but if I take it out the function stops
    }
}

async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch().then( function(response) {
        });

    return planetsReturned;
}

function pickPlanet(planets) {
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
