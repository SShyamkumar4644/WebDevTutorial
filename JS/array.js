let shopping=[];/* shopping is a variable which has multiple values in a array format */
shopping=['paintbrush','colorPalette','canvas'];
console.log(shopping);
/* to display the value access an array elemnt, in console at inspacr elemnt
console.log(shopping[1]); */

//EXAMPLE //
let numbers=[];
numbers=[1,3,2,5,7,4];
console.log(numbers[0] + numbers[1]); //4 will be printed 
console.log(numbers.sort());
numbers.push(6); //push and elemnt to the array
console.log(numbers);

//EXAMPLE: arrays can diff DT in variables in one array
let mix=[];
mix=['one', 1,'two', 2];
console.log(mix); 
// typeof mix[0] is string and typeof mix is object