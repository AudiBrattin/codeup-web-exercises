// Create a function named showMultiplicationTable that accepts a number and console.
// logs the multiplication table for that number (just multiply by the numbers 1 through 10)

let showMultiplicationTable = function(num) {
    for (var n = 1; n <= 10; n++) {
        console.log(num + " x " + i + " = " + ( i * num ) );
    }
}





// Use a FOR loop and the code from the previous lessons to generate 10 random numbers
// between 20 and 200 and output to the console whether each number is odd or even. For example:

var randomNumber = Math.floor(Math.random() * 180) + 20;
for (var i = 0; i < 10; i += 10) {
    if (randomNumber % 2 === 0) {
        console.log(randomNumber + " is even");
    } else {
        console.log(randomNumber + " is odd");
    }
//     // randomNumber.push(i); (dont use this)
//
// }



for (let i=1; i<=9; i++) {
    let str = "";
    for (let j=1; j<i; j++ ) {
        str += i;
    }
    console.log(str);
}

for (let i=100; i>0; i-=5) {
    console.log(i);
} }

for (var i = 100; i >= 5; i = i - 5) {
    console.log(i);
}