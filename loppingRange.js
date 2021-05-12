/*Define a function called range

The function takes 3 integer parameters: start, end, and step.
The function should return an array of numbers from start to end counting by step.
For example:

code	output
range(0, 10, 2);	[ 0, 2, 4, 6, 8, 10 ]
range(10, 30, 5);	[ 10, 15, 20, 25, 30 ]
range(-5, 2, 3);	[ -5, -2, 1 ]
The function should return an empty array [] if given incorrect parameters, such as:

start, end, or step being undefined
start being greater than end
step being 0, or negative
Hints
At some point in your code, you may want to use some_array.push(some_value)
You may paste the following code after your function definition to help you verify it works correctly:
console.log(range(0, 10, 2));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));*/



function range(start, end, step) {
    let loopingarray = [];
    if (start === undefined || end === undefined || step === undefined || start > end || step <= 0)
        return loopingarray = [];
    let i = 0;
    for (i = start; i <= end;) {
        loopingarray.push(i);
        i += step;
    }
    return loopingarray;
}
console.log(range(0, 100, 20));
console.log(range(10, 30, 5));
console.log(range(-5, 2, 3));