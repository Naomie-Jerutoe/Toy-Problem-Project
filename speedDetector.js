// Declare constant variables for speed limit and the exceeding speed for every 5km/s.
const speedLimit = 70;
const exceedingSpeed = 5; 

// Declare a function that will detect speed.
function speedDetector(){
    // Prompt the user to input the speed of the car.
    const speed = prompt('Input the speed', '');

    // Condition that checks the speed and prints OK if speed is less than 70.
    if (speed <= speedLimit){
        alert ('OK');
    } else {
    // Declare a variable called demeritPoints and assign the value based on the calculation.
    const demeritPoints = Math.floor((speed - speedLimit) / exceedingSpeed);
    // Condition that checks the demeritPoints and prints "License Suspended" if it's more than 12.
        if (demeritPoints >= 12){
            alert ('License suspended');
            }
        // Prints out the demerit Points. 
        else {
            alert (`Your have ${demeritPoints} demerit points!`);
        }
    }
}
// invoke the function.
// speedDetector();