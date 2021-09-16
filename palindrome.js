const { nodelist } = require("./linkedlist.js");

console.log("imported yayyy", nodelist);
class Node {
  constructor(value, node = null) {
    this.value = value;
    this.next = null;
    // this.prev
  }
}

const palindrome = (list) => {
  let ourArrayOrSomething = createArray(list);
  // 	compare last to first index
  // 	  pop shift
  while (ourArrayOrSomething.length > 1) {
    let first = ourArrayOrSomething.shift();
    let last = ourArrayOrSomething.pop();
    if (first !== last) return false;
  }
  return true;
  // 	working to the midddle
  // 	if numbers dont match return false
  // 	can return true if we reach the middle
  // 	if len is 0, 1 return true
};

const createArray = (node) => {
  let array = [];
  while (node) {
    array.push(node.value);
    node = node.next;
  }
  return array;
};

console.log(palindrome(nodelist.head));

// 1 2 1 1 1

// 1 1

// 2 1
