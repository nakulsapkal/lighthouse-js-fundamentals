/*const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

// Write a for loop that prints out the contents of ingredients:

// Write any loop (while or for) that prints out the contents of ingredients backwards:
Write a loop under each comment in the file.
Under the first, write a while loop that prints out each item of ingredients.
Under the second, write a for loop that does the same thing.
And under the third, write any loop, while or for that prints out each item of ingredients but backwards (that is, the first should be "bananas" and the last "eggs").*/


const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:
console.log("While loop display:");
let i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    i++;
}

// Write a for loop that prints out the contents of ingredients:
console.log("\n\nFor loop display:");
for (let index = 0; index < ingredients.length; index++) {
    console.log(ingredients[index]);
}

// Write any loop (while or for) that prints out the contents of ingredients backwards:
console.log("\n\nReverse of array items display usinf any loop:");
for (let index = ingredients.length - 1; index >= 0; index--) {
    console.log(ingredients[index]);
}

console.log("\n\nUsing reverse method on array:", ingredients.reverse());


console.log("\n\nFor Each Loop :");
ingredients.forEach(items => {
    console.log(items);
});