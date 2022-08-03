let number=[];
number=[1,2,1,2,3,2,3,1];
if(number[0]==number[2]) {
    console.log('Correct'); // displays correct
}

//IF ELSE EXAMPLE
if(number[0]==number[4]) {
    console.log('Correct');
}
else{
    console.log('Wrong, try again'); // Displays wrong
}

//examples
if(number[0]==number[2] && number[2]==number[6]) { // AND operator both true need to be
    console.log("Correct");
}
else{
    console.log('Wrong, try again'); // Displays wrong
}

if(number[0]==number[2] || number[2]==number[6]) { // OR operator both true need to be
    console.log("Correct");
}
else{
    console.log('Wrong, try again'); // Displays wrong
}