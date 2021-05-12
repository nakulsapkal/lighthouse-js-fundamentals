/*function multiply(a, b) {
    return a * b;
}

const result = multiply(5 * 5, 15 % 3);

console.log(result);

console.log(false && false);*/

////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz - Checking Your Balance (3-5)
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `balance`, `checkBalance`, `isActive`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should produce the expected output
 * 4. Your code should not be empty
 * 5. BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED. 
 */

// change the values of `balance`, `checkBalance`, and `isActive` to test your code
/*var balance = 10.20102;
var checkBalance = true;
var isActive = true;

// your code goes here


if (checkBalance === false) {
    console.log("Thank you. Have a nice day!");
} else {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $" + balance.toFixed(2) + ".");
    } else if (isActive === false) {
        console.log("Your account is no longer active.");
    } else if (balance === 0) {
        console.log("Your account is empty.");
    } else {
        console.log("Your balance ios negative. Please contact bank");
    }

}*/

////////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Ice Cream (3-6)
 *
 * Write a single if statement that logs out the message:
 * 
 * "I'd like two scoops of __________ ice cream in a __________ with __________."
 * 
 * ...only if:
 *   - flavor is "vanilla" or "chocolate"
 *   - vessel is "cone" or "bowl"
 *   - toppings is "sprinkles" or "peanuts"
 *
 * We're only testing the if statement and your boolean operators. 
 * It's okay if the output string doesn't match exactly.
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `flavor`, `vessel`, and `toppings`
 * 2. Your code should have an `if` statement
 * 3. Your code should use logical expressions
 * 4. Your code should work with 
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=vanilla`, `vessel=bowl`, and `toppings=peanuts`
 * 
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=cone`, and `toppings=peanuts`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=sprinkles`
 *  - `flavor=chocolate`, `vessel=bowl`, and `toppings=peanuts`
 *   
 * 5. Your code should NOT log (print) anything when 
 *  - the flavor is something other than "vanilla" or "chocolate"
 *  - the vessel is something other than "cone" or "bowl"
 *  - the toppings is something other than "sprinkles" or "peanuts"
 * 
 * 6. Your code should not be empty
 */

// change the values of `flavor`, `vessel`, and `toppings` to test your code
/*var flavor = "nuts";
var vessel = "cone";
var toppings = "sprinkles";

// Add your code here
if ((flavor === "vanilla" || flavor === "chocolate") &&
    (vessel === "cone" || vessel === "bowl") &&
    (toppings === "sprinkles" || toppings === "peanuts")) {
    console.log("I\'d like two scoops of " + flavor + " ice cream in a " + vessel + " with " + toppings + ".");
}*/



////////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: What do I Wear? (3-7)
 *
 * Using if/else statements, create a series of logical expressions that logs the size of a t-shirt based on the measurements of:
 *   - shirtWidth
 *   - shirtLength
 *   - shirtSleeve
 *
 * Use the chart above to print out one of the following correct values:
 *   - S, M, L, XL, 2XL, or 3XL
 */

/*
 * QUIZ REQUIREMENTS
 * 1. Your code should have the variables `shirtWidth`, `shirtLength`, and `shirtSleeve`
 * 2. Your code should include an `if...else` conditional statement
 * 3. Your code should use logical expressions
 * 4. Your code should produce the expected output
 * 6. Your code should not be empty
 * 7. BE CAREFUL ABOUT THE EXACT CHARACTERS TO BE PRINTED.
 */


// change the values of `shirtWidth`, `shirtLength`, and `shirtSleeve` to test your code
//var shirtWidth = 23;
//var shirtLength = 30;
//var shirtSleeve = 8.71;

/*
 * To gain confidence, check your code for the following combination of [shirtWidth, shirtLength, shirtSleeve, expectedSize]:
 * [18, 28, 8.13, 'S']
 * [19.99, 28.99, 8.379, 'S']
 * [20, 29, 8.38, 'M']
 * [22, 30, 8.63, 'L']
 * [24, 31, 8.88, 'XL']
 * [26, 33, 9.63, '2XL']
 * [27.99, 33.99, 10.129, '2XL']
 * [28, 34, 10.13, '3XL']
 * [18, 29, 8.47, 'NA']
 */

// WRITE YOUR CODE HERE
/*
if ((shirtWidth > 17.99 && shirtWidth < 20) && (shirtLength > 27.99 && shirtLength < 29) && (shirtSleeve > 8.12 && shirtSleeve < 8.38)) {
    console.log("S");
} else if ((shirtWidth > 19.99 && shirtWidth < 22) && (shirtLength > 28.99 && shirtLength < 30) && (shirtSleeve > 8.37 && shirtSleeve < 8.63)) {
    console.log("M");
} else if ((shirtWidth > 21.99 && shirtWidth < 24) && (shirtLength > 29.99 && shirtLength < 31) && (shirtSleeve > 8.62 && shirtSleeve < 8.87)) {
    console.log("L");
} else if ((shirtWidth > 23.99 && shirtWidth < 26) && (shirtLength > 30.99 && shirtLength < 33) && (shirtSleeve > 8.87 && shirtSleeve < 9.63)) {
    console.log("XL");
} else if ((shirtWidth > 25.99 && shirtWidth < 28) && (shirtLength > 32.99 && shirtLength < 34) && (shirtSleeve > 9.62 && shirtSleeve < 10.13)) {
    console.log("2XL");
} else if ((shirtWidth > 27.99) && (shirtLength > 33.99) && (shirtSleeve > 10.129)) {
    console.log("3XL");
} else {
    console.log("NA");
}*/



///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `eatsPlants`, `eatsAnimals`
 * - Your code should include ternary statements. Do not use if....else statement. 
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
//var eatsPlants = false;
//var eatsAnimals = null;

/*
 * Test your code agaist the followig possible input/output combinations of (`eatsPlants`, `eatsAnimals`, expected output):
 * - (true, true, omnivore)
 * - (false, true, carnivore)
 * - (true, false, herbivore)
 * - (false, false, undefined)
 */

//var category = eatsPlants ? (eatsAnimals ? "omnivore" : "herbivore") : (eatsAnimals ? "carnivore" : "undefined");

//console.log(category);




///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Back to School (3-9)
 *
 * Write a switch statement to set the average salary of a person based on their type of completed education.
 *
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `education`, and `salary`
 * - Your code should include a switch statement
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

// change the value of `education` to test your code
//var education = 'no high school diploma';

// set the value of this based on a person's education
//var salary = 0;

// your code goes here

/*no high school diploma earned an average of $25, 636 / year,
    a high school diploma earned an average of $35, 256 / year,
    an Associate 's degree earned an average of $41,496/year,
a Bachelor 's degree earned an average of $59,124/year,
a Master 's degree earned an average of $69,732/year,
a Professional degree earned an average of $89, 960 / year,
    and a Doctoral degree earned an average of $84, 396 / year.*/

/*
switch (education) {
    case "no high school diploma":
        salary = 25636;
        break;

    case "a high school diploma":
        salary = 35256;
        break;

    case "an Associate's degree":
        salary = 41496;
        break;

    case "a Bachelor's degree":
        salary = 59124;
        break;

    case "a Master's degree":
        salary = 69732;
        break;

    case "a Professional degree":
        salary = 89960;
        break;

    case "a Doctoral degree":
        salary = 84396;
        break;

    default:
        break;
}
console.log("In 2015, a person with " + education + " earned an average of $" + salary.toLocaleString("en-US") + "/year.");
*/





///////////////////////////////////////////////////////////////////////////////////////////////////////
/*const whichSchool = function(age) {

    if (age < 13) {
        console.log("Elementary School");
    } else if (age < 19 && age >= 13) {
        console.log("Secondary School");
    } else {
        console.log("Lighthouse Labs");
    }
    return 0;
}

whichSchool(15);*/







///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: JuliaJames (4-1)
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

/*var x = 1;

while (x <= 20) {
    // check divisibility
    if ((x % 3 === 0) && (x % 5 === 0)) { console.log("JuliaJames"); } else if (x % 3 === 0) { console.log("Julia"); } else if (x % 5 == 0) { console.log("James"); } else { console.log("Number Not Divisible By 3 Or 5: " + x); }
    x++;
    // print Julia, James, or JuliaJames
    // increment x
}*/








///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: 99 Bottles of Juice (4-2)
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

//99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around...

/*var num = 99;
while (num > 0) {
    if (num > 2)
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    else if (num === 2)
        console.log(num + " bottles of juice on the wall! " + num + " bottles of juice! Take one down, pass it around... " + (num - 1) + " bottle of juice on the wall!");
    else if (num === 1)
        console.log(num + " bottle of juice on the wall! " + num + " bottle of juice! Take one down, pass it around... " + (num - 1) + " bottles of juice on the wall!");
    num--;

    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}*/








///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */

/*let x = 60;

while (x >= 0) {

    if (x === 50) {
        console.log("Orbiter transfers from ground to internal power");
    } else if (x === 31) {
        console.log("Ground launch sequencer is go for auto sequence start");
    } else if (x === 16) {
        console.log("Activate launch pad sound suppression system");
    } else if (x === 10) {
        console.log("Activate main engine hydrogen burnoff system");
    } else if (x === 6) {
        console.log("Main engine start");
    } else if (x === 0) {
        console.log("Solid rocket booster ignition and liftoff!");
    } else {
        console.log("(T -" + x + " seconds)");
    }
    x--;
}*/







///////////////////////////////////////////////////////////////////////////////////////////////////////
/*function Biodata(name, age, weight) {
    let bio = "My name is " + name + ", my age is " + age + " and my weight " + weight + ".";

    return bio;
}

console.log(Biodata("Nakul", "31", -90));*/








///////////////////////////////////////////////////////////////////////////////////////////////////////
/*let stars = function(length) {
    let lines = "";
    for (let i = 1; i <= length; i++) {
        lines += "* ";
    }
    lines += '\n';
    return lines;
}

let print = "";
let traingle = function(height) {
    for (let i = 1; i <= height; i++) {
        print += stars(i);
    }
    return print;
}

console.log(traingle(5));*/









///////////////////////////////////////////////////////////////////////////////////////////////////////
/*var favoriteMovie = function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
};

// Function declaration that has two parameters: a function for displaying
// a message, along with a name of a movie
function movies(messageFunction, name) {
    messageFunction(name);
}

// Call the movies function, pass in the favoriteMovie function and name of movie
movies(favoriteMovie, "Finding Nemo");*/








///////////////////////////////////////////////////////////////////////////////////////////////////////
/*function movies(messageFunction, name) {
    messageFunction(name);
}

// call the movies function, pass in the function and name of movie
movies(function displayFavorite(movieName) {
    console.log("My favorite movie is " + movieName);
}, "Finding Nemo");*/






///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Laugh (5-4)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `laugh`
 * - Your code should include an anonymous function expression stored in the variable `laugh`
 * - Your anonymous function expression should take one argument
 * - Your anonymous function expression should return the correct number of `hahaha`\'s
 */

/*let sound = "";

var laugh = function(laughTimes) {
    for (let i = 0; i < laughTimes; i++) {
        sound += "ha";
    }
    sound += "!";
    return sound;
}

console.log(laugh(15));*/







///////////////////////////////////////////////////////////////////////////////////////////////////////

/*
 * Programming Quiz: Cry (5-5)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `cry`
 * - Your code should include a named function expression stored in the variable `cry`
 * - Your code should call the function expression using the variable name, not the function name
 * - Your function expression should return the expected output
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


// your code goes here

/*let cry = function crying() {
    console.log("boohoo!");
}

cry();*/









///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: Inline Functions (5-6)
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have an `emotions()` function
 * - Your code should call the `emotions()` function
 * - Your `emotions()` function call should have an inline function expression passed as the second parameter
 * - Your function expression should return the expected output
 */


// your code goes here
// Call the emotions() function with two arguments
// Argument 1 - "happy" string
// Argument 2 - an inline function expression

/*let myFunc = function(hahaTimes) {

    let sound = "";
    for (let i = 0; i < hahaTimes; i++) {
        sound += "ha";
    }
    return sound += "!";
}*/

// don't change this code
// emotions() function definition
/*function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
}

var kilo;

emotions("happy", kilo = function(hahaTimes) {

    let sound = "";
    for (let i = 0; i < hahaTimes; i++) {
        sound += "ha";
    }
    return sound += "!";
});
*/








///////////////////////////////////////////////////////////////////////////////////////////////////////
/*
 * Programming Quiz: I Got Bills (6-9)
 *
 * Use the .map() method to take the bills array below and create a second array
 * of numbers called totals. The totals array should contains each amount from the
 * bills array but with a 15% tip added. Log the totals array to the console.
 *
 * For example, the first two entries in the totals array would be:
 *
 * [57.76, 21.99, ... ]
 *
 * Things to note:
 *  - each entry in the totals array must be a number
 *  - each number must have an accuracy of two decimal points
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have the variables `bills` and `totals`
 * - Your `bills` array should call the `map()` method and store the return of `map()` in the `totals` array
 * - Your `totals` array should be an array of numbers
 * - Your code should print the `totals` array to the console
 * - The output must be as described above. 
 */

/*var bills = [50.23, 19.12, 34.01,
    100.11, 12.15, 9.90, 29.11, 12.99,
    10.00, 99.22, 102.20, 100.10, 6.77, 2.22
];


let total = bills.map(function(bill) {
    bill *= 1.15;
    bill = bill.toFixed(2);
    bill = Number(bill);
    return bill;
});

console.log(total);*/


/*
 * Programming Quiz: Nested Numbers (6-10)
 * QUIZ REQUIREMENTS
 *   - The `numbers` variable is an array of arrays.
 *   - Use a nested `for` loop to cycle through `numbers`.
 *   - Convert each even number to the string "even"
 *   - Convert each odd number to the string "odd"
 */


var numbers = [
    [243, 12, 23, 12, 45, 45, 78, 66, 223, 3],
    [34, 2, 1, 553, 23, 4, 66, 23, 4, 55],
    [67, 56, 45, 553, 44, 55, 5, 428, 452, 3],
    [12, 31, 55, 445, 79, 44, 674, 224, 4, 21],
    [4, 2, 3, 52, 13, 51, 44, 1, 67, 5],
    [5, 65, 4, 5, 5, 6, 5, 43, 23, 4424],
    [74, 532, 6, 7, 35, 17, 89, 43, 43, 66],
    [53, 6, 89, 10, 23, 52, 111, 44, 109, 80],
    [67, 6, 53, 537, 2, 168, 16, 2, 1, 8],
    [76, 7, 9, 6, 3, 73, 77, 100, 56, 100]
];

// your code goes here
for (let row = 0; row < numbers.length; row++) {
    for (let col = 0; col < numbers[row].length; col++) {

        if (numbers[row][col] % 2 === 0)
            numbers[row][col] = "even";
        else
            numbers[row][col] = "odd";
    }
}

console.log(numbers);