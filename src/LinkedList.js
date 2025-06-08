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
    toString,
  };
}
