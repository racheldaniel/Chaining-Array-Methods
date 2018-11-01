// Using one single line of JavaScript code, complete the following tasks on the array of integers below.

//     Sort the numbers in descending order (10, 9, 8, 7, etc).
//     Remove any integers greater than 19.
//     Multiply each remaining number by 1.5 and then subtract 1.
//     Then output (either in the DOM or the console) the sum of all the resulting numbers.

const integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];


console.log(integers.sort(function (a, b) { return a - b }).filter(num => num <= 19).map(num => num * 1.5 - 1).reduce((a, b) => a + b))


