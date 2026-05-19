/**
* Using a common theme (pick whatever you like) create the following:
* 
* 1. An if statement that evaluates to true and logs a message to the console.
* 2. An if/else statement that evaluates to false and logs a message to the console.
*/

// Begin writing your code below

let runnerOnFirstBase = true
let runnerOnSecondBase = true
let runnerOnThirdBase = false
let age = 10
const ageGroup = age >= 9
const coachesAgreed = true
const infieldFlyRuleExist = ageGroup && coachesAgreed

  console.log('Is there the infield fly rule?', infieldFlyRuleExist)
let firstAndSecond =  runnerOnFirstBase && runnerOnSecondBase

if (firstAndSecond && runnerOnThirdBase) {
    console.log('Bases Loaded')
}

console.log('Fly ball is hit is the batter automatically out?')

if (runnerOnFirstBase && runnerOnSecondBase) { 
    console.log('Infield Fly rule is active, he is out')}
