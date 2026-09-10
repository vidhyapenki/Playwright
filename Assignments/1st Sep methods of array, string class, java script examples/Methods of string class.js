// BASIC
console.log("------- BASIC string length -------");

let str = "Hello World";

console.log("length:", str.length); // 11

//----------

//EXTRACT / SUBSTRING
console.log("------- EXTRACT / SUBSTRING -------");

let str1 = "JavaScript";

console.log("slice:", str1.slice(0, 4)); // "Java"
console.log("substring:", str1.substring(0, 4)); // "Java"
console.log("substr (deprecated):", str1.substr(0, 4)); // "Java"

console.log("slice:", str1.slice(4, 10)); // "Script"
console.log("substring:", str1.substring(4, 10)); // "Script"
console.log("substr (deprecated):", str1.substr(4, 6)); // "Script"

//--------
//REPLACE
console.log("------- REPLACE -------");

let str2 = "Hello World";

console.log("replace:", str2.replace("World", "JS")); // "Hello JS"
console.log("replaceAll:", str2.replaceAll("l", "x")); // "Hexxo Worxd"

//--------
//CASE CONVERSION
console.log("------- CASE CONVERSION -------");

let str3 = "hello";

console.log("toUpperCase:", str3.toUpperCase()); // "HELLO"
console.log("toLowerCase:", str3.toLowerCase()); // "hello"

//-----------
//TRIM
console.log("------- TRIM -------");

let str4 = "  hi  ";

console.log("trim:", str4.trim()); // "hi"
console.log("trimStart:", str4.trimStart()); // "hi  "
console.log("trimEnd:", str4.trimEnd()); // "  hi"

//-----------------
//PADDING
console.log("------- PADDING -------");

let str5 = "5";

console.log("padStart:", str5.padStart(3, "0")); // "005"
console.log("padEnd:", str5.padEnd(3, "0")); // "500"

//-------------------------
//CHARACTER ACCESS
console.log("------- CHARACTER ACCESS -------");

let str6 = "Code";

console.log("charAt:", str6.charAt(1)); // "o"
console.log("at(1):", str6.at(1)); // "o"
console.log("at(-1):", str6.at(-1)); // "e"
console.log("charCodeAt:", str6.charCodeAt(0)); // 67

//-------------------------
//SEARCH / FIND
console.log("------- SEARCH / FIND -------");

let str7 = "banana";

console.log("indexOf:", str7.indexOf("a")); // 1
console.log("lastIndexOf:", str7.lastIndexOf("a")); // 5
console.log("includes:", str7.includes("na")); // true
console.log("startsWith:", str7.startsWith("ba")); // true
console.log("endsWith:", str7.endsWith("na")); // true
console.log("search:", str7.search("na")); // 2

//-------------------------
//SPLIT & REPEAT
console.log("------- SPLIT & REPEAT -------");

let str8 = "a,b,c";

console.log("split:", str8.split(",")); // ["a","b","c"]

let str9 = "Hi ";
console.log("repeat:", str9.repeat(3)); // "Hi Hi Hi "

//-------------------------
//REGEX MATCH
console.log("------- MATCH -------");

let str10 = "test test";

console.log("match:", str10.match(/test/g)); // ["test","test"]
console.log("matchAll:", [...str10.matchAll(/test/g)]);
// [["test"],["test"]]

//-------------------------
//COMPARE
console.log("------- COMPARE -------");

console.log("localeCompare:", "a".localeCompare("b")); // -1

//-------------------------
//CONVERT

console.log("------- CONVERT -------");

let str11 = "Hello";

console.log("toString:", str11.toString()); // "Hello"
console.log("valueOf:", str11.valueOf()); // "Hello"