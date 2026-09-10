// Add / Remove

let arr = [1, 2, 3];

// push
arr.push(4);        // [1,2,3,4]

// pop
arr.pop();          // [1,2,3]

// shift
arr.shift();        // [2,3]

// unshift
arr.unshift(0);     // [0,2,3]

// splice (remove/insert)
arr.splice(1, 1);   // remove 1 item → [0,3]
arr.splice(1, 0, 5); // insert → [0,5,3]