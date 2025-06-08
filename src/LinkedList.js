import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  let tail = null;

  const append = (val) => {
    const node = Node(val);

    if (!head) {
      tail = node;
      head = node;
    } else {
      tail.setNext(node);
      tail = node;
    }
  };

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
    toString
  };
}
