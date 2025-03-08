// Task -4: You have an odd array (array with odd numbers). [1,3,5,7,9]. Now convert this array into an even array (array with even numbers). [2,4,6,8,10]. Do this using for loop & array.map() method. Hints: add one to any odd number and it will become on even number

// using for of loop 
const numbers = [1,3,5,7,9];
let evenNumber = [];
for (const number of numbers){
    const even = number + 1;
    evenNumber.push(even);
}
console.log(evenNumber);


// using Array.map()
const findEven = numbers.map(num => num+1);
console.log(findEven);