(function(){
    "use strict";

    /**
     * TODO:
     * Create an array of 4 people's names and store it in a variable called
     * 'names'.
     */
    let names = ['audi', 'dallas', 'kyle', 'austin'];
    /**
     * TODO:
     * Create a log statement that will log the number of elements in the names
     * array.
     */
    console.log("The length of a string is " + names.length + ' . ' );

    /**
     * TODO:
     * Create log statements that will print each of the names individually by
     * accessing each element's index.
     */
    console.log(name[0]);
    console.log(name[1]);
    console.log(name[2]);
    console.log(name[3]);
    /**
     * TODO:
     * Write some code that uses a for loop to log every item in the names
     * array.
     */
for (var i=0; i < names.length; i++){
    }
    console.log('The name at index' + i + 'is' + names[i]+".")
    /**
     * TODO:
     * Refactor your above code to use a `forEach` loop
     */
    console.log('the names in the name array are: ')
names.forEach(function(name) {
    console.log('\t'+ name);
})
// (\t)=tab
    /**
     * TODO:
     * Create the following three functions, each will accept an array and
     * return an an element from it
     * - first: returns the first item in the array
     * - second: returns the second item in the array
     * - last: returns the last item in the array
     *
     * Example:
     *  > first([1, 2, 3, 4, 5]) // returns 1
     *  > second([1, 2, 3, 4, 5]) // returns 2
     *  > last([1, 2, 3, 4, 5]) // return 5
     */
let elements = [1,2,3,4,5];
let first = function (arr) {
    return arr [0];
}
    let second = function (arr) {
        return arr [1];
    }
    let last = function (arr) {
        return arr[arr.length-1];
    }
    console.log('the first element' + first(elements));
    console.log('the second element' + second(elements));
    console.log('the last element' + last(element));
})();