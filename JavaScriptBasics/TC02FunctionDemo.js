//Ways to create function in JavaScript
function addition(a, b) { //Parameter Function
    let c = a + b;
    console.log(c);
}

addition("true", "false", "hello"); //Argument Function

function areaOfSquare(side) {
    let area = side * side;
    console.log(area);
}
areaOfSquare(10);
areaOfSquare(20);
areaOfSquare(30); 

//Arrow Function
const areaOfRectangle = (l, b) =>{
    let area = l * b;
    console.log(area);
}

areaOfRectangle(10, 20);


const addTwoNumber1 = function addFn(a, b){
return a + b;
}

console.log(addTwoNumber1(10, 20));