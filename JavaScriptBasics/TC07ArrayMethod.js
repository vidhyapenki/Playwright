let number = [1,2,3,4,5];
console.log(number);
let newnumber = number.push(4.5,534);
console.log(newnumber)

// ============================================================
// JAVASCRIPT ARRAY METHODS - COMPLETE EXAMPLES
// ============================================================

// ------------------------------------------------------------
// 1. CREATE ARRAYS
// ------------------------------------------------------------

const fruits = ["Apple", "Banana", "Mango", "Orange"];
const numbers = [10, 20, 30, 40, 50];
const mixed = [1, "Hello", true, null, { name: "John" }];

console.log(fruits);


// ============================================================
// 2. ADD / REMOVE ELEMENTS
// ============================================================

// push()
// Adds one or more elements to the END
const arr1 = [1, 2, 3];

arr1.push(4);
console.log(arr1); // [1, 2, 3, 4]

arr1.push(5, 6);
console.log(arr1); // [1, 2, 3, 4, 5, 6]


// pop()
// Removes the LAST element
const arr2 = [1, 2, 3, 4];

const lastElement = arr2.pop();

console.log(lastElement); // 4
console.log(arr2);        // [1, 2, 3]


// unshift()
// Adds elements to the BEGINNING
const arr3 = [2, 3, 4];

arr3.unshift(1);
console.log(arr3); // [1, 2, 3, 4]


// shift()
// Removes the FIRST element
const arr4 = [1, 2, 3, 4];

const firstElement = arr4.shift();

console.log(firstElement); // 1
console.log(arr4);         // [2, 3, 4]


// splice()
// Adds/removes/replaces elements at any position
const arr5 = ["A", "B", "C", "D"];

// Remove 1 element at index 1
arr5.splice(1, 1);

console.log(arr5); // ["A", "C", "D"]

// Add elements at index 1
arr5.splice(1, 0, "B");

console.log(arr5); // ["A", "B", "C", "D"]

// Replace
arr5.splice(1, 2, "X", "Y");

console.log(arr5); // ["A", "X", "Y", "D"]


// ============================================================
// 3. SEARCHING / CHECKING
// ============================================================

// includes()
// Checks whether an element exists
const colors = ["red", "green", "blue"];

console.log(colors.includes("green")); // true
console.log(colors.includes("yellow")); // false


// indexOf()
// Returns first matching index
const nums1 = [10, 20, 30, 20, 40];

console.log(nums1.indexOf(20)); // 1
console.log(nums1.indexOf(100)); // -1


// lastIndexOf()
// Returns last matching index
console.log(nums1.lastIndexOf(20)); // 3


// find()
// Returns the FIRST element matching condition
const users = [
    { id: 1, name: "John", age: 25 },
    { id: 2, name: "Jane", age: 30 },
    { id: 3, name: "Mike", age: 35 }
];

const user = users.find(user => user.age > 28);

console.log(user);
// { id: 2, name: "Jane", age: 30 }


// findIndex()
// Returns index of first matching element
const userIndex = users.findIndex(user => user.age > 28);

console.log(userIndex); // 1


// findLast()
// Returns the LAST matching element
const numbers2 = [5, 10, 15, 20, 25];

const result1 = numbers2.findLast(num => num > 10);

console.log(result1); // 25


// findLastIndex()
// Returns index of LAST matching element
const result2 = numbers2.findLastIndex(num => num > 10);

console.log(result2); // 4


// ============================================================
// 4. LOOPING
// ============================================================

// forEach()
// Executes a function for every element
const fruits2 = ["Apple", "Banana", "Mango"];

fruits2.forEach((fruit, index) => {
    console.log(index, fruit);
});


// ============================================================
// 5. TRANSFORMING ARRAYS
// ============================================================

// map()
// Creates a NEW array by transforming every element
const numbers3 = [1, 2, 3, 4, 5];

const doubled = numbers3.map(num => num * 2);

console.log(doubled);
// [2, 4, 6, 8, 10]


// map() with objects
const names = ["John", "Jane", "Mike"];

const nameObjects = names.map((name, index) => ({
    id: index + 1,
    name: name
}));

console.log(nameObjects);


// flat()
// Flattens nested arrays
const nested = [1, [2, 3], [4, 5]];

console.log(nested.flat());
// [1, 2, 3, 4, 5]


// flat() with depth
const deeplyNested = [1, [2, [3, [4]]]];

console.log(deeplyNested.flat(2));
// [1, 2, 3, [4]]

console.log(deeplyNested.flat(Infinity));
// [1, 2, 3, 4]


// flatMap()
// map() + flat(1)
const sentences = ["Hello World", "JavaScript Array"];

const words = sentences.flatMap(sentence => sentence.split(" "));

console.log(words);
// ["Hello", "World", "JavaScript", "Array"]


// ============================================================
// 6. FILTERING
// ============================================================

// filter()
// Creates a NEW array containing matching elements
const numbers4 = [10, 15, 20, 25, 30];

const evenNumbers = numbers4.filter(num => num % 2 === 0);

console.log(evenNumbers);
// [10, 20, 30]


// Filter objects
const employees = [
    { name: "John", salary: 50000 },
    { name: "Jane", salary: 80000 },
    { name: "Mike", salary: 60000 }
];

const highSalaryEmployees =
    employees.filter(employee => employee.salary > 55000);

console.log(highSalaryEmployees);


// ============================================================
// 7. TESTING CONDITIONS
// ============================================================

// some()
// Returns true if AT LEAST ONE element matches
const numbers5 = [1, 3, 5, 8, 9];

console.log(numbers5.some(num => num % 2 === 0));
// true


// every()
// Returns true if ALL elements match
console.log(numbers5.every(num => num > 0));
// true

console.log(numbers5.every(num => num % 2 === 0));
// false


// ============================================================
// 8. REDUCE
// ============================================================

// reduce()
// Reduces an array into a SINGLE value

const numbers6 = [10, 20, 30, 40];

const total = numbers6.reduce((sum, num) => {
    return sum + num;
}, 0);

console.log(total);
// 100


// reduce() - find maximum
const numbers7 = [10, 50, 20, 90, 30];

const max = numbers7.reduce((maximum, num) => {
    return num > maximum ? num : maximum;
}, numbers7[0]);

console.log(max);
// 90


// reduce() - count occurrences
const fruits3 = ["apple", "banana", "apple", "orange", "banana", "apple"];

const fruitCount = fruits3.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});

console.log(fruitCount);
// { apple: 3, banana: 2, orange: 1 }


// ============================================================
// 9. REDUCE RIGHT
// ============================================================

// reduceRight()
// Same concept as reduce(), but starts from RIGHT
const letters = ["A", "B", "C", "D"];

const reversedString = letters.reduceRight(
    (result, letter) => result + letter,
    ""
);

console.log(reversedString);
// "DCBA"


// ============================================================
// 10. SORTING
// ============================================================

// sort()
// Sorts the array IN PLACE
const names2 = ["Charlie", "Alice", "Bob"];

names2.sort();

console.log(names2);
// ["Alice", "Bob", "Charlie"]


// Numeric sort
const numbers8 = [100, 5, 25, 10, 50];

numbers8.sort((a, b) => a - b);

console.log(numbers8);
// [5, 10, 25, 50, 100]


// Descending
numbers8.sort((a, b) => b - a);

console.log(numbers8);
// [100, 50, 25, 10, 5]


// Sort objects
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Phone", price: 500 },
    { name: "Tablet", price: 700 }
];

products.sort((a, b) => a.price - b.price);

console.log(products);


// toSorted()
// Creates a NEW sorted array without modifying original
const original = [30, 10, 20];

const sorted = original.toSorted((a, b) => a - b);

console.log(original); // [30, 10, 20]
console.log(sorted);   // [10, 20, 30]


// ============================================================
// 11. REVERSE
// ============================================================

// reverse()
// Reverses array IN PLACE
const numbers9 = [1, 2, 3, 4];

numbers9.reverse();

console.log(numbers9);
// [4, 3, 2, 1]


// toReversed()
// Creates a NEW reversed array
const original2 = [1, 2, 3];

const reversed = original2.toReversed();

console.log(original2); // [1, 2, 3]
console.log(reversed);  // [3, 2, 1]


// ============================================================
// 12. COPY / SLICE
// ============================================================

// slice()
// Extracts part of an array WITHOUT modifying original
const numbers10 = [10, 20, 30, 40, 50];

const portion = numbers10.slice(1, 4);

console.log(portion);
// [20, 30, 40]

console.log(numbers10);
// [10, 20, 30, 40, 50]


// Copy entire array
const copy = numbers10.slice();

console.log(copy);


// ============================================================
// 13. CONCATENATION
// ============================================================

// concat()
// Combines arrays into a NEW array
const a = [1, 2];
const b = [3, 4];

const combined = a.concat(b);

console.log(combined);
// [1, 2, 3, 4]


const combined2 = a.concat(b, [5, 6]);

console.log(combined2);
// [1, 2, 3, 4, 5, 6]


// ============================================================
// 14. JOIN / STRING CONVERSION
// ============================================================

// join()
// Converts array into a string
const fruits4 = ["Apple", "Banana", "Mango"];

console.log(fruits4.join());
// "Apple,Banana,Mango"

console.log(fruits4.join(" - "));
// "Apple - Banana - Mango"


// toString()
console.log(fruits4.toString());
// "Apple,Banana,Mango"


// ============================================================
// 15. FILL
// ============================================================

// fill()
// Replaces elements with a value
const arr6 = [1, 2, 3, 4, 5];

arr6.fill(0);

console.log(arr6);
// [0, 0, 0, 0, 0]


// fill(value, start, end)
const arr7 = [1, 2, 3, 4, 5];

arr7.fill(100, 1, 4);

console.log(arr7);
// [1, 100, 100, 100, 5]


// ============================================================
// 16. COPYWITHIN
// ============================================================

// copyWithin()
// Copies part of an array to another position
const arr8 = [1, 2, 3, 4, 5];

arr8.copyWithin(0, 3);

console.log(arr8);
// [4, 5, 3, 4, 5]


// ============================================================
// 17. ARRAY ITERATORS
// ============================================================

const numbers11 = [10, 20, 30];


// keys()
// Returns iterator containing indexes
for (const key of numbers11.keys()) {
    console.log(key);
}
// 0
// 1
// 2


// values()
// Returns iterator containing values
for (const value of numbers11.values()) {
    console.log(value);
}
// 10
// 20
// 30


// entries()
// Returns [index, value]
for (const [index, value] of numbers11.entries()) {
    console.log(index, value);
}


// ============================================================
// 18. ARRAY FROM
// ============================================================

// Array.from()
// Converts iterable/array-like objects into arrays

const text = "HELLO";

const characters = Array.from(text);

console.log(characters);
// ["H", "E", "L", "L", "O"]


// Array.from() with map
const squares = Array.from(
    [1, 2, 3, 4],
    num => num * num
);

console.log(squares);
// [1, 4, 9, 16]


// ============================================================
// 19. ARRAY.OF
// ============================================================

// Array.of()
// Creates an array from arguments

const arr9 = Array.of(10, 20, 30);

console.log(arr9);
// [10, 20, 30]


// Difference between Array() and Array.of()
console.log(Array(3));
// [empty × 3]

console.log(Array.of(3));
// [3]


// ============================================================
// 20. ARRAY.ISARRAY
// ============================================================

// Array.isArray()
// Checks whether a value is an array

console.log(Array.isArray([1, 2, 3]));
// true

console.log(Array.isArray("Hello"));
// false

console.log(Array.isArray({}));
// false


// ============================================================
// 21. AT
// ============================================================

// at()
// Gets an element using an index
const numbers12 = [10, 20, 30, 40, 50];

console.log(numbers12.at(0));
// 10

console.log(numbers12.at(-1));
// 50

console.log(numbers12.at(-2));
// 40


// ============================================================
// 22. WITH
// ============================================================

// with()
// Creates a NEW array with one element replaced
const numbers13 = [10, 20, 30];

const changed = numbers13.with(1, 200);

console.log(numbers13);
// [10, 20, 30]

console.log(changed);
// [10, 200, 30]


// ============================================================
// 23. TO SPLICED
// ============================================================

// toSpliced()
// Like splice(), but does NOT modify original array
const numbers14 = [1, 2, 3, 4];

const newNumbers = numbers14.toSpliced(1, 2, 99, 100);

console.log(numbers14);
// [1, 2, 3, 4]

console.log(newNumbers);
// [1, 99, 100, 4]


// ============================================================
// 24. GROUPING ARRAYS
// ============================================================

// Object.groupBy()
// Groups objects based on a condition
const people = [
    { name: "John", age: 20 },
    { name: "Jane", age: 30 },
    { name: "Mike", age: 20 },
    { name: "Sarah", age: 30 }
];

const groupedPeople = Object.groupBy(
    people,
    person => person.age
);

console.log(groupedPeople);


// ============================================================
// 25. CHAINING ARRAY METHODS
// ============================================================

// A very common real-world pattern

const students = [
    { name: "John", marks: 85 },
    { name: "Jane", marks: 45 },
    { name: "Mike", marks: 75 },
    { name: "Sarah", marks: 35 }
];

const passedStudents = students
    .filter(student => student.marks >= 50)
    .map(student => student.name)
    .sort();

console.log(passedStudents);

// ["John", "Mike"]


// ============================================================
// 26. PRACTICAL EXAMPLE
// ============================================================

const orders = [
    { id: 1, product: "Laptop", price: 1000, status: "completed" },
    { id: 2, product: "Phone", price: 500, status: "pending" },
    { id: 3, product: "Tablet", price: 700, status: "completed" },
    { id: 4, product: "Monitor", price: 300, status: "cancelled" }
];


// Get completed orders
const completedOrders = orders.filter(
    order => order.status === "completed"
);

console.log(completedOrders);


// Get product names
const productNames = orders.map(
    order => order.product
);

console.log(productNames);


// Calculate total completed order value
const completedTotal = orders
    .filter(order => order.status === "completed")
    .reduce((total, order) => total + order.price, 0);

console.log(completedTotal);
// 1700


// Check if any order costs more than 900
const expensiveOrder = orders.some(
    order => order.price > 900
);

console.log(expensiveOrder);
// true


// Check whether every order has a product name
const validOrders = orders.every(
    order => order.product
);

console.log(validOrders);
// true


// Find a specific order
const foundOrder = orders.find(
    order => order.id === 2
);

console.log(foundOrder);


// ============================================================
// QUICK REFERENCE
// ============================================================

/*

ADDING / REMOVING
-----------------
push()          -> Add to end
pop()           -> Remove from end
unshift()       -> Add to beginning
shift()         -> Remove from beginning
splice()        -> Add/remove/replace anywhere
toSpliced()     -> Non-mutating version of splice()


SEARCHING
---------
includes()      -> Check if value exists
indexOf()       -> Find first index
lastIndexOf()   -> Find last index
find()          -> Find first matching element
findIndex()     -> Find first matching index
findLast()      -> Find last matching element
findLastIndex() -> Find last matching index


ITERATION / TRANSFORMATION
--------------------------
forEach()       -> Loop through array
map()           -> Transform every element
filter()        -> Keep matching elements
flat()          -> Flatten nested arrays
flatMap()       -> map() + flat()


TESTING
-------
some()          -> At least one matches
every()         -> All match


REDUCTION
---------
reduce()        -> Reduce left-to-right
reduceRight()   -> Reduce right-to-left


SORTING / ORDER
---------------
sort()           -> Sort in place
toSorted()       -> Return sorted copy
reverse()        -> Reverse in place
toReversed()     -> Return reversed copy


COPYING / COMBINING
-------------------
slice()          -> Extract/copy portion
concat()         -> Combine arrays
with()           -> Replace element without mutation


STRING
------
join()           -> Array -> String
toString()       -> Array -> String


OTHER
-----
fill()           -> Fill elements
copyWithin()     -> Copy elements internally
at()             -> Access by index, supports negative index
keys()            -> Iterator of indexes
values()          -> Iterator of values
entries()         -> Iterator of [index, value]

STATIC METHODS
--------------
Array.from()     -> Create array from iterable/array-like
Array.of()       -> Create array from arguments
Array.isArray()  -> Check if value is an array

MODERN GROUPING
---------------
Object.groupBy() -> Group objects by a key

*/