/*
* Using a common theme (pick whatever you like) demonstrate THE OTHER
* two of the following categories of operators:
*
* - Arithmetic Operators (+, -, *, /)
* - Comparison Operators (===, !==, >, <, >=, <=)
* - Logical Operators (&&, ||, !)
* - String Operator (+)
*
* You will need to create variables to hold values and then log some
* sort of output to the console that demonstrates the use of these operators.
*
* Example:
*    let peasantHealth = 50;
*    const wolfDamage = 20;
*    peasantHealth = peasantHealth - wolfDamage;
*    console.log('The peasant has', peasantHealth, 'health left after the wolf attack.');
*/

// Begin writing your code below

let healthElixirs = 27;
let poisonElixirs = 13;
let result = healthElixirs === poisonElixirs;
console.log("Do you have the same number of health elixirs as you do poison elixirs?", result,);

let obtainedSilverBroadsword = false;
let obtainedWoodenSword = true;
let hasThePlayerobtainedBothSwords = obtainedSilverBroadsword && obtainedWoodenSword;
console.log("Did you find both swords?", hasThePlayerobtainedBothSwords,);