/*
* Using a common theme (pick whatever you like) demonstrate two of the
* following categories of operators:
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

const scoreA = 0.8

let scoreB = 0.5

//scoreB changes later so that I can get a different output



let passingScoreA = (scoreA + scoreB)/2 > 0.70

let classScoreA = ((scoreA + scoreB)/2) * 100



console.log('First attempt')

console.log('')



console.log('Did class A pass?', passingScoreA)



const scoreC = 1

const scoreD = 0.75



let classScoreB = ((scoreC + scoreD)/2) * 100

let passingScoreB = (scoreC + scoreD)/2 > 0.70

console.log('Did class B pass?', passingScoreB)



let passingSchool = ((classScoreA / 100) * (classScoreB / 100)) > 0.60

let schoolScore = ((classScoreA / 100) * (classScoreB / 100)) * 100



let perfectScore = schoolScore === 1



console.log('Did the school pass?', passingSchool)

console.log('Class A score', classScoreA,'%')

console.log('Class B score', classScoreB,'%')

console.log('School score', schoolScore,'%')



scoreNeeded = (0.60 - (classScoreA / 100) * (classScoreB / 100)) * 100

console.log('They need to make up', scoreNeeded,'%')



console.log('Was it a perfect score?', perfectScore)



let didBothClassesPass = passingScoreA && passingScoreB



let didAnyClassPass = passingScoreA || passingScoreB



console.log('Did both classes pass?', didBothClassesPass)

console.log('Did either class pass?', didAnyClassPass)

console.log(' ')

console.log('Second Attempt')

console.log('(Class A did a little better this time)')

console.log('')



let addedToScoreB = scoreA - scoreB

scoreB = scoreB + addedToScoreB



passingScoreA = (scoreA + scoreB)/2 > 0.70

classScoreA = ((scoreA + scoreB)/2) * 100

classScoreB = ((scoreC + scoreD)/2) * 100

passingScoreB = (scoreC + scoreD)/2 > 0.70

perfectScore = schoolScore === 1

scoreNeeded = (0.60 - (classScoreA / 100) * (classScoreB / 100)) * 100 >= 0

didBothClassesPass = passingScoreA && passingScoreB

didAnyClassPass = passingScoreA || passingScoreB

passingSchool = ((classScoreA / 100) * (classScoreB / 100)) > 0.60

schoolScore = ((classScoreA / 100) * (classScoreB / 100)) * 100





console.log('Did class A pass?', passingScoreA)

console.log('Did the school pass?', passingSchool)

console.log('Class A score', classScoreA,'%')

console.log('Class B score', classScoreB,'%')

console.log('School score', schoolScore,'%')

console.log('They need to make up', scoreNeeded,'%')

console.log('Was it a perfect score?', perfectScore)

console.log('Did both classes pass?', didBothClassesPass)

console.log('Did either class pass?', didAnyClassPass)



// I copy pasted most of it twice to get the same stats each time