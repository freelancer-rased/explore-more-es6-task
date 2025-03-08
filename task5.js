// Task -5: You are given an array say: [33,50,79,78,90,101,30]. Now return/get all the elements which are divisible by 10 using array.filter()method. Now do the same task of question 2. but do this using array.find method. Then compare the out of question 2 & question 3

const numbers = [33, 50, 79, 78, 90, 101, 30];
const divisible = numbers.filter((num) => num % 10 === 0);
console.log(divisible);

const divisibleForFind = numbers.find((num) => num % 10 === 0);
console.log(divisibleForFind);