//1. Reverse a String
console.log("---- 1. Reverse String ----");

let str1 = "JavaScript";

let reversed = str1.split("").reverse().join("");

console.log("Output:", reversed);
// tpircSavaJ

// 2. Check Even or Odd
console.log("---- 2. Even or Odd ----");

let num = 25;

if (num % 2 === 0) {
  console.log("Even");
} else {
  console.log("Odd");
}
// Odd
// 3. Find Largest Number
console.log("---- 3. Largest Number ----");

let a = 10, b = 25, c = 15;

let largest = Math.max(a, b, c);

console.log("Largest:", largest);
// 25
// 4. Count Vowels
console.log("----4.Count Vowels ----");

let str2 = "Automation";
let count = 0;

for (let ch of str2.toLowerCase()) {
  if ("aeiou".includes(ch)) {
    count++;
  }
}

console.log("Vowels:", count);
// 6
// 5. Check Palindrome
console.log("---- 5. Palindrome ----");

let str3 = "madam";

let rev = str3.split("").reverse().join("");

if (str3 === rev) {
  console.log("5. Palindrome");
} else {
  console.log("Not a Palindrome");
}
// Palindrome
// 6. Find Duplicate Elements
console.log("---- 6. Duplicate Elements ----");

let arr1 = [10, 20, 30, 20, 40, 10, 50];

let duplicates = arr1.filter((item, index) => arr1.indexOf(item) !== index);

console.log("Duplicates:", [...new Set(duplicates)]);
// [10, 20]
// 7. Second Largest Number (No Sort)
console.log("----7.  Second Largest ----");

let arr2 = [10, 50, 30, 80, 60];

let max = -Infinity, second = -Infinity;

for (let num of arr2) {
  if (num > max) {
    second = max;
    max = num;
  } else if (num > second && num !== max) {
    second = num;
  }
}

console.log("Second Largest:", second);
// 60
// 8. Character Frequency
console.log("---- 8. Character Frequency ----");

let str4 = "javascript";
let freq = {};

for (let ch of str4) {
  freq[ch] = (freq[ch] || 0) + 1;
}

console.log("Character Frequency:", freq);
// { j:1, a:2, v:1, s:1, c:1, r:1, i:1, p:1, t:1 }
// 9. Find Missing Number
console.log("---- 9. Missing Number ----");

let arr3 = [1, 2, 3, 5, 6];

let n = arr3.length + 1;

let total = (n * (n + 1)) / 2;
let sum = arr3.reduce((a, b) => a + b, 0);

console.log("Missing:", total - sum);
// 4
// 10. Group Objects by Property
console.log("---- 10. Group by Department ----");

let employees = [
  { name: "John", department: "IT" },
  { name: "Alice", department: "HR" },
  { name: "Bob", department: "IT" },
  { name: "David", department: "Finance" },
  { name: "Sarah", department: "HR" }
];

let grouped = {};

for (let emp of employees) {
  if (!grouped[emp.department]) {
    grouped[emp.department] = [];
  }
  grouped[emp.department].push(emp.name);
}

for (let dept in grouped) {
  console.log(dept + ":", grouped[dept].join(" "));
}

/*
IT: John Bob
HR: Alice Sarah
Finance: David
*/