import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  let tail = null;

  const append = (val) => {
    if (val === null || val === undefined) return;
    const node = Node(val);

    if (!head) {
      tail = node;
      head = node;
    } else {
      tail.setNext(node);
      tail = node;
    }
  };

  const prepend = (val) => {
    if (val === null || val === undefined) return;
    const node = Node(val);

    if (!head) {
      head = node;
      tail = node;
    } else {
      node.setNext(head);
      head = node;
    }
  };

  const size = () => {
    let count = 0;
    let current = head;

    while (current) {
      count++;
      current = current.getNext();
    }
    return count;
  }

  const getHead = () => head;

  const getTail = () => tail;

  const at = (index) => {
    if (index < 0 || index >= size()) return "Error";

    let current = head;

    for (let i = 0; i < index; i++) {
      current = current.getNext();
    }

    return current;
  }

  const pop = () => {
    let popped = null;
    if (size() === 0) return;
    if (size() === 1) {
      head = null;
      popped = tail.getVal();
      tail = null;
    } else {
      popped = tail.getVal();
      tail = at(size() - 2);
      tail.setNext(null);
    }
    return popped;
  }

  const contains = (val) => {
    let current = head;

    while (current) {
      if (current.getVal() === val) return true;
      current = current.getNext();
    }
    return false;
  }

  const toString = () => {
    let outputString = `( ${head.getVal()} ) -> `;
    let current = head;

    while (current.getNext()) {
      current = current.getNext();
      outputString += `( ${current.getVal()} ) -> `;
    }
    outputString += "null";
    return outputString;
  };

  return {
    append,
    prepend,
    size,
    getHead,
    getTail,
    at,
    pop,
    contains,
    toString,
  };
}
