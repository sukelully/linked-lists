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
  }

  const getHead = () => {
    return head;
  }

  const getTail = () => {
    return tail;
  }

  const toString = () => {
    let outputString = `( ${head.getVal()} ) -> `;
    let current = head;

    while (current.getNext()) {
      current = current.getNext();
      outputString += `( ${current.getVal()} ) -> `;
    }
    outputString += 'null';
    return outputString;
  }

  return {
    append,
    prepend,
    getHead,
    getTail,
    toString
  };
}
