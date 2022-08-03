function hello() { //declare function
    console.log("Hello"); // logging msg on console, function created


} 
hello();// calling function, displays Hello on console

function product(a,b){ // parameters

    return a * b;
}
let x= product(2,6);// values inside are arguments
console.log(x); //12
//when you call a function you pass arguments to that function,
// when you define a function pass parameters