// add remove

console.log("-------add remove----")

let arr = [1, 2, 3];

// push
arr.push(4);        // [1,2,3,4]
console.log("After push:", arr);

// pop
arr.pop();   
console.log("After pop:", arr);       // [1,2,3]

// shift
arr.shift();        // [2,3]
console.log("After shift:", arr);

// unshift
arr.unshift(0);     // [0,2,3]
console.log("After unshift:", arr);

// splice (remove/insert)
arr.splice(1, 1);   // remove 1 item → [0,3]
arr.splice(1, 0, 5); // insert → [0,5,3]
console.log("After splice:", arr);


// push()	add to end
// pop()	remove from end
// shift()	remove from start
// unshift()	add to start
// splice()	add/remove anywhere 

// ------------------------------------------------------------------------------------------
// Search / Find

console.log("---Search / Find----")

let brr = [10, 20, 30, 20];

// indexOf → first position
brr.indexOf(20); // 1
console.log("Index of 20:", brr.indexOf(20));

// lastIndexOf → last position
brr.lastIndexOf(20); // 3
console.log("Last index of 20:", brr.lastIndexOf(20));

// includes → true/false
brr.includes(60); // false
console.log("Includes 60:", brr.includes(60));

// find → first match
brr.find(x => x > 8); // 10
console.log("First element > 8:", brr.find(x => x > 8));

// findIndex
brr.findIndex(x => x > 15); // 1
console.log("Index of first element > 15:", brr.findIndex(x => x > 15));

// findLast
brr.findLast(x => x > 15); // 20
console.log("Last element > 15:", brr.findLast(x => x > 15));

// findLastIndex
brr.findLastIndex(x => x > 15); // 3
console.log("Index of last element > 15:", brr.findLastIndex(x => x > 15));


// ------------------------------------------------------------------------------------------

// Loop / Iterate

console.log("---Loop / Iterate----")

let crr = [1, 2, 3];

// forEach → just loop
crr.forEach(x => console.log(x));

// map → modify values
crr.map(x => console.log(x * 2)); // [2,4,6]

// filter → condition
crr.filter(x => console.log(x > 3)); // [2,3]

// reduce → single value
crr.reduce((sum, x) => console.log(sum + x), 0); // 6

// reduceRight
crr.reduceRight((acc, x) => console.log(acc + x), ""); // "321"//

// -----------------------------------------------------------------------

// Check / Condition

console.log("---Check / Condition----")

let nr = [2, 4, 6];

// some → at least one
nr.some(x => console.log(x > 5)); // true

// every → all
nr.every(x => console.log(x % 2 === 0)); // true

//-----------------------------------------------------------------------------
// Transform / Modify

console.log("---Transform / Modify----")

let i = [1, 2, 3];

// slice → copy part
let sliceResult = i.slice(0, 2);
console.log("slice:", sliceResult);
// [1, 2]

// concat → merge arrays
let concatResult = i.concat([4, 5]);
console.log("concat:", concatResult);
// [1, 2, 3, 4, 5]

// flat → remove nesting
let flatResult = [1, [2, 3]].flat();
console.log("flat:", flatResult);
// [1, 2, 3]

// flatMap → map + flatten
let flatMapResult = i.flatMap(x => [x, x * 2]);
console.log("flatMap:", flatMapResult);
// [1, 2, 2, 4, 3, 6]

// fill → replace all values
let fillArr = [1, 2, 3];
fillArr.fill(0);
console.log("fill:", fillArr);
// [0, 0, 0]

// copyWithin → copy values inside same array
let copyArr = [1, 2, 3, 4];
copyArr.copyWithin(1, 0);
console.log("copyWithin:", copyArr);
// [1, 1, 2, 3]

//----------------------------------------------------------

// other methods

console.log("---Other Methods----")

let frr = [3, 1, 2];

// toSorted
frr.toSorted(); // [1,2,3]
console.log("toSorted:", frr.toSorted());

// toReversed
frr.toReversed(); // [2,1,3]
console.log("toReversed:", frr.toReversed());

// toSpliced
frr.toSpliced(1,1); // remove index 1 → [3,2]
console.log("toSpliced:", frr.toSpliced(1,1));

// with → replace value
frr.with(1, 99); // [3,99,2]
console.log("with:", frr.with(1, 99));

// Convert Array ↔ String

let grr = [1, 2, 3];

// join
grr.join("-"); // "1-2-3"
console.log("join:", grr.join("-"));

// toString
grr.toString(); // "1,2,3"
console.log("toString:", grr.toString());

let arrF = ["Hello", "World"];

let text = arrF.join(" ");
console.log("join:", text);

// Output: "Hello World"


// length (property)
let arrO = [1, 2, 3, 4];

console.log("length:", arrO.length);

// Output: 4

