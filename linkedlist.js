class Node {
  constructor(value, node = null) {
    this.value = value;
    this.next = null;
    // this.prev
  }
}

class SinglyLinkedList {
  constructor(node) {
    if (node instanceof Node) {
      this.head = node;
    } else if (node instanceof Array) {
      SinglyLinkedList.arrayToLinkedList(node, this);
    }
    this.cachedTail = null;
  }

  // insertNode(node){}//index
  static arrayToLinkedList(array, context) {
    const safeArray = [...array];
    context.head = new Node(safeArray.shift());
    let currNode = context.head;
    safeArray.forEach((num) => {
      const nextNum = safeArray.shift();
      const nextNode = new Node(nextNum);
      [currNode.next, currNode] = [nextNode, nextNode];
    });
    context.tail = currNode;
  }
  push(node) {
    const theTail = this.tail;
    theTail.next = node;
    [this.tail, this.tail.next] = [node, node];
  }

  get tail() {
    if (this.cachedTail) return cachedTail;
    let currNode = this.head;
    while (currNode.next) {
      currNode = currNode.next;
    }
    return currNode;
  }

  set tail(node) {
    if (this.tail) {
      [this.tail.next, this.tail] = [node, node];
    } else {
      this.tail = node;
    }
    this.cachedTail = this.tail;
  }
  deleteNodeVal(argetVal) {
    let deletedNode = null;
    let curr = this.head;
    if (this.head.value == targetVal) {
      deletedNode = this.head;
      [this.head, this.head.next] = [this.head.next, null];
      return deletedNode === null ? "not found" : deletedNode;
    }

    while (true) {
      if (curr.next == null) break;
      if (curr.next.value === targetVal) {
        // check if head or tail

        deletedNode = curr.next;
        if (curr.next === this.tail) {
          [this.tail, curr.next] = [curr, this.tail];
          return deletedNode === null ? "not found" : deletedNode;
        } else {
          [curr.next, curr.next.next] = [curr.next.next, null];
        }
        break;
      } else {
        curr = curr.next;
      }
    }
    return deletedNode === null ? "not found" : deletedNode;
  }

  findNode(val) {
    [prev, node];
  }
}

n1 = new Node(1, null);
n2 = new Node(2, null);
n3 = new Node(2, null);
n4 = new Node(1, null);
nodelist = new SinglyLinkedList(n1);
nodelist.push(n2);
nodelist.push(n3);
nodelist.push(n4);
console.log("this is nodelist", nodelist);

console.log("we deleted", nodelist.deleteNodeVal(2));
// console.log("nodelist is ", nodelist);
// linkedList = new SinglyLinkedList([1, 2, 3, 4]);
// console.log(linkedList.head, linkedList);
module.exports = { nodelist };
// l.deleteNode(n3);
