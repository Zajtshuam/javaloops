// NOTE Continue
// NOTE Description: It's a great way to skip the rest of the loop and restart the loop!

for (let r = 0; r < 8;  r++){
    if ( r == 4) {
        continue; // skips the value 4
    } else {
        console.log(r);
    }
};

// NOTE Pick one from a loop

// let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro", "Potatoes"];

// for (let b = 0; b < veggies.length; b++) {
//     if (veggies[b] !== "Beets" ) {
//         continue;
//     } else { console.log(veggies[b])}
// };
    
// NOTE Break the best way to end the loop

for (let x = 0; x <= 10; x++) {
    if (x == 7)
    {
        break;
    }
    console.log(x);

};


// NOTE array

let veggies = ["Broccoli", "Cauliflower", "Carrots", "Beets", "Cilantro", "Potatoes"];

for (let x = 0; x <= veggies.length; x++) {
    if ( x == 3)
    {
        break;
    
    }
    console.log(veggies[x]);
}



// Write a program that simulates the following ;
// 1. Luggage is loaded into containers as it arrives
// 2. When the weight is full max (40lbs) the container is then loaded into the aircraft
// 3. at the destination the containers are then unloaded from the plane LIFO last in last outerHeight
// 4. finally the luggage is handed back invdividually

// Example:
// input [30,5,6]
// key point loaded into containers: [[30,5 [6]]]
// key point lifo order: [[6]]


