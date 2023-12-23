#!/usr/bin/node
myArray = [ '4', '6', '2', '8', '10'];
const sorted_array = myArray.sort((a, b) => b - a);
console.log(sorted_array);
const sliced_array = myArray.slice(0)
const new_array = sliced_array.map(row => (parseInt(row) + 1));

console.log(sliced_array);
console.log("new_array   " + new_array);