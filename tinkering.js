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
var education = 'no high school diploma';

// set the value of this based on a person's education
var salary = 0;

// your code goes here

/*no high school diploma earned an average of $25, 636 / year,
    a high school diploma earned an average of $35, 256 / year,
    an Associate 's degree earned an average of $41,496/year,
a Bachelor 's degree earned an average of $59,124/year,
a Master 's degree earned an average of $69,732/year,
a Professional degree earned an average of $89, 960 / year,
    and a Doctoral degree earned an average of $84, 396 / year.*/


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