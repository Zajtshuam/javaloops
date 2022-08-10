//intializer: starting value
//condition: run this code if true )return true/false)
//iteration: adds on to the intial value to continue the loop
// NOTE Description the most simple looping statemnt in javascript loops through a chunk of code as long the code is true


// NOTE syntax:

let i = 0; // intializer 

while (condition) {
    // chunk of code 
    i++; // iteration post
    ++i; // pre
}

// NOTE 
// true/success
let j = 0;

while (j <= 5) {
    console.log(j);
    j++; //5
    console.log("Current val: " + j);
}

//false/fail  

let k = 0; //intializer

while (k > 5) {
    console.log(k);
    k++;
}