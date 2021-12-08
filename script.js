// Write your JavaScript code here!

// const { validateInput, formSubmission } = require("./scriptHelper");

window.addEventListener("load", function() {
    //this script adds an event when you hit the button "Submit", this event should:
    //1)Check that all boxes have info added to them
    //2}Not accept the default values using preventDefault()
    //3)Ensure the input is the correct Value type.
    //4) !!!! uses the formSubmission() function !!!
    //5) if the criteria are not met it stops the page from moving on 
    //6) if they are met it updates the faultyItems list (this is done inside the formSubmission() function I think)
    
    const pilot = document.querySelector("input[name=pilotName]");
    const copilot = document.querySelector("input[name=copilotName");
    const fuelLevel = document.querySelector("input[name=fuelLevel]");
    const cargoLevel = document.querySelector("input[name=cargoMass]");

    let form = document.querySelector("form");
    document.addEventListener("submit", function(event) {
        event.preventDefault()
        formSubmission(pilot, copilot, fuelLevel, cargoLevel)
    })
        
        


        //formSubmission updates the li items if everything passes
        //next if the cargo mass or fuel level are outside acceptable parameters they should be made visible with a message that they are
        //not at acceptable levels. 
        //in this case shuttle status should be red and read "Shuttle not ready for launch"
        //if everything passes launch status should turn to green and read "Shuttle is ready for launch"    
    
    
    
    
    

    






//    let listedPlanets;
//    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
//    let listedPlanetsResponse;
//    listedPlanetsResponse.then(function (result) {
//        listedPlanets = result;
//        console.log(listedPlanets);
//    }).then(function () {
//        console.log(listedPlanets);
//        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
//    })
   
});