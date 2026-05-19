/**
* Using a common theme (pick whatever you like) create the following:
*
* 1. An if/else statement that evaluates to true using a boolean AND
*    comparison operator and logs a message to the console.
* 2. A switch statement with at least 3 cases and a default case that
*    logs a message to the console for each case.
*/
let poisonElixirs = 13;
let healthElixirs = 21;

if (poisonElixirs < healthElixirs === true) {
    console.log("Yay, you've got medicine.");
} else {
    console.log("You're without medicine? It's dangerous to go alone, you know...");
}

/* Task #1 is above and task #2 ia below this comment ;-) */

let weapon = 'Postcards';

switch (weapon) {
    case 'Bow':
        console.log("The hero is Lyn's spirit.")
        break;
    case 'Wooden Fishing Spear':
        console.log("The hero is Ezra.")
        break;
    case 'Silver Broadsword':
        console.log("The hero is the lone swordsman from Deepwood Village...")
        break;
    default:
        console.log("What? Who's this? Somebody new...");
}