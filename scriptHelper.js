// Write your helper functions here!
// require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, image) {
   document.getElementById("missionTarget").innerHTML =
               ` <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name} </li>
                    <li>Diameter: ${diameter} </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance} </li>
                    <li>Number of Moons: ${moons} </li>
                </ol>
                <img src="${image}"> `
   
}

function validateInput(testInput) {
    if (testInput.value === "") {
        return "undefined"
    }
    else if (isNaN(testInput.value)) {
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
        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready.`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot.value} is ready.`;
       if (fuelLevel.value < 10000) {
            document.getElementById("launchStatus").style.color = "red"
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!"
            document.getElementById("fuelStatus").innerHTML = "Fuel too low for launch."
            document.getElementById("faultyItems").style.visibility = "visible"     
        }
       if (cargoLevel.value > 10000) {
            document.getElementById("launchStatus").style.color = "red"
            document.getElementById("launchStatus").innerHTML = "Shuttle not ready for launch!"
            document.getElementById("cargoStatus").innerHTML = "Cargo too heavy for launch."
            document.getElementById("faultyItems").style.visibility = "visible"
        }
        if (fuelLevel.value > 10000 && cargoLevel.value < 10000) {
            document.getElementById("launchStatus").style.color = "green"
            document.getElementById("launchStatus").innerHTML = "Shuttle ready for launch!"
            document.getElementById("fuelStatus").innerHTML = "Fuel level high enough for launch."
            document.getElementById("cargoStatus").innerHTML = "Cargo mass low enough for launch."
            document.getElementById("faultyItems").style.visibility = "visible"
        }
    }
}

async function myFetch() {
    let planetsReturned;
    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json();
        });
    return planetsReturned;
}

function pickPlanet(planets) {
    //Using Math.random(), return one planet from the list with a randomly-selected index.
    //generate random number 1-6 (0-5? index starts at 0)
    //use that number as the index value for the planets array in the JSON file
    
    let randomNuber = Math.floor(Math.random()*5);
    console.log(planets)
    return planets[randomNuber];
}

module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
