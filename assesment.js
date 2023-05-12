
//question 1 answer

alert("this program compares if sum or difference of two numbers is 8")

let value1 = prompt("Enter a number: ");
let value2 = parseInt(value1);
let value3 = prompt("Enter a number: ");
let value4 = parseInt(value3);
alert(`The numbers are ${value1} and ${value3}`)

if (value2 === 8 || value4 === 8) {
    console.log("One of your values is 8");
} else if (value2 + value4 === 8 || value2 - value4 === 8) {
    console.log("Either the sum or difference of the two numbers is equal to 8");
} else {
    console.log("This program can't deal with that!");
}




// question 2 answer

let number1 = prompt("enter a number to be converted to hours and minutes")
let number2 = parseInt(number1)

function num_convert() {
    let hours = Math.floor(number2 / 60);
    let minutes = number2 % 60;
    return hours + "hours" + ":" + minutes + "minutes";
}

let hallo = num_convert(number2)
console.log(hallo)



//question 3 answer



let tati = [41, 42, 43, 44, 45, 46, 47, 48];
let tita = [];
let first_element = tati[0];
let last_element = tati[tati.length - 1];

tita.push(first_element, last_element);

console.log(tati)
console.log(tita)



//question 4 answer
let angle = prompt("Enter the angle to check its type:");
let angle1 = Number(angle);

if (angle1 > 0 && angle1 < 90) {
    console.log("Type of the angle is ACUTE");
} else if (angle1 === 90) {
    console.log("Type of the angle is RIGHT ANGLED");
} else if (angle1 > 90 && angle1 < 180) {
    console.log("Type of the angle is OBTUSE");
} else if (angle1 === 180) {
    console.log("Type of the angle is STRAIGHT ANGLE");
} else {
    console.log("Out of context");
}


// switch (true) {
//     case (angle1 > 0 && angle1 <= 90):
//         console.log("Type of the angle is ACUTE")
//     case (angle1 === 90):
//         console.log("Type of the angle is RIGHT ANGLED")
//     case (angle1 > 90 && angle1 <= 180):
//         console.log("Type of the angle is OBTUSE")

//     case (angle1 === 180):
//         console.log("Type of the angle is STRAIGHT ANGLE")

// }


//////////question 5 answer

let sum = 5 + 5 + "5";

console.log(sum);


/// the answer is 105 because 5 and 5 are added first to be 10
/// then the sum is concatenated with 10 as the last type of "5 " is a string