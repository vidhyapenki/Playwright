var name ="vid";
console.log(name);
//var, let and const
var m=200;
console.log(20);


let m1 = 200;
console.log(m1);

const m2 = 400;
console.log(m2);

let m3 = true;
console.log(m3);

/* VAR
1. It can be reassigned
2. It can be redeclared
3. It is function scoped
*/

console.log("*****************************")
var firstname = "John";
console.log(firstname);
firstname = "Doe"; //REASSIGNED
console.log(firstname);
var firstname = 200;//REDECLARE
console.log(firstname);

function addTwoNumber(){
var a = 10;
var b = 20;
var c = a+b;
console.log(c);
var b = 30;
console.log(b);
}

addTwoNumber();
// A Pair of curly bracket is called block

/* LET
1. It can be reassigned
2. It cannot be redeclared
3. It is block scoped
*/
console.log("**********************LET***********************")
let decimal1 = 10.67;
console.log(decimal1);
decimal1 = 10.99; //REASSIGNED
console.log(decimal1);
let decimal2 = 29.4;
console.log(decimal2);

{
console.log("Inside Block");
let decimal3 = 39.44;
console.log(decimal3);
}

console.log("Outside Block");
let decimal3 = 49.44;
console.log(decimal3); //ERROR - decimal3 is not defined
console.log("**********************CONST***********************")


/* CONST
1. It cannot be reassigned
2. It cannot be redeclared
3. It is block scoped
*/

const a1 = 10.55
console.log(a1)
const a2 = 939
console.log(a2)
{
    const a3 = 1000  
    console.log(a3)
}
let an=true;
console.log(an);
console.log(typeof an);
