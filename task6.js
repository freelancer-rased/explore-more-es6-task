// Task -6: You have an array of objects: 
// const instructor = [
//     {name: 'Nodi', age: 28, position: 'Senior'},
//     {name: 'Akil', age: 26, position: 'Junior'},
//     {name: 'Shobuj', age: 30, position: 'Senior'},
// ]

// Your task is to display the instructor names that has the position senior using filter

const instructor = [
    {name: 'Nodi', age: 28, position: 'Senior'},
    {name: 'Akil', age: 26, position: 'Junior'},
    {name: 'Shobuj', age: 30, position: 'Senior'},
]


const findSenior = instructor.filter(num => num.position === "Senior");
console.log(findSenior)