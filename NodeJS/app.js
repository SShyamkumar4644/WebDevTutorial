// var first_name ='Shyam'; // shyam will be output
// first_name = 30; // 30 will be the output which will override Shyam
// console.log(first_name);
// // in JS there is no strictly typed

// var age1 = 30;
// // var age2 = 30;
// var age2 = '30'; // this is string, this will true, why?
// // JS doesn't care about DT, only cares about value, to chk value along with DT use === sign
// // var result = age1 == age2;
// var result = age1 === age2;
// console.log(result);

//-----------------------------------

// function sayHello(name){
//     return 'Hello' + name + '!!!';
// }

// console.log(sayHello('Ravi'));

// var sayHello = function (name){ // function can have no name, how will you call it?
// // assign a variable and call it
//     return 'Hello' + name + '!!!';
// }

// console.log(sayHello('Ravi'));

//-----------------------------------

// var student = {
//     name: 'Ravi',
//     email: 'ravi@gmail.com'
// };
// console.log(student);

//-----------------------------------

var fs = require('fs');

fs.writeFile('./hello.txt', 'How are you?', function (err) { // this will write to file
    if (!err) { // if no error, then next step
        fs.readFile('./hello.txt', function (err, data) { // callback function
            if (!err) { // if no error, then display output by string
                // console.log(data); // this will give buffer, so put to string method for string output
                console.log(data.toString());
            }
        });
    }
});