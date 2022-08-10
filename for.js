//initializer: starting value
//condition: run this code if true )return true/false)
//iteration: adds on to the initial value to continue the loop
// NOTE Description: the for loop is the most common loop that used and is typically used to run a chunk of code

// NOTE Syntax
for (initializer; condition; iteration) {
    //chunk code
}

// NOTE Examples
// initializer:
//condition:
//iteration: 

for (let i = 0; i <= 5; i++) {
    console.log(i);
};

let dbz = ["Goku", "Vegeta", "Mr.Popo", "Tien", "Master Roshi"];

for (let j = 0; j < dbz.length; j++) {
console.log(dbz[j]);

};


// NOTE  starts with t

let fruits = ["Apple", "Orange", "Tomato", "Watermelon", "Jackfruit", "Tamarindo", "Kiwi", 
"Peach"]

for (let k = 0; k < fruits.length; k++) {
    if (fruits[k][0] == "T") {
        console.log(fruits[k]);

        if (fruits[k].startsWith("T")){
            console.log(fruits[k]);
        }
    }

};

// NOTE Print out only one specific item string

let cycle10 = ["Michael", "Serafin", "Laquita", "Hiba", "Arelis", "Cesar", 
"Taizon", "Austin", "Noe", "Bencee", "Mejindra", "Sequona", "Torrontaye", "Christian",
"Derick", "Rashaun", "Alejandro"];

for (let c = 0; c < cycle10.length; c++) {
    // if (cycle10[c].startsWith("Austin")) {
    //     console.log(cycle10(c));
    // }

    if (cycle[c] == "Austin") {
        console.log(cycle10[c]);
    }
}

// NOTE method two: print out only one specific item done with indexing


let cycl10 = ["Michael", "Serafin", "Laquita", "Hiba", "Arelis", "Cesar", 
"Taizon", "Austin", "Noe", "Bencee", "Mejindra", "Sequona", "Torrontaye", "Christian",
"Derick", "Rashaun", "Alejandro"];

for (let b = 0; b < cycl10.length; b++) { 
    if ( b === 7) {
        console.log(cycl10[b]);
    }
};


// NOTE infinite loop decrement

// for ( let m = 5; m < 10 m--){
//     console.log(m);
// };


let input = [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30]

for (let s = 0; s <= input.length; s++){
    if (input == 30,5,6) {
        console.log(input[s]);
    }
}


          










