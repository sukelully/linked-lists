import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  let current = head;
  
  const append = (val) => {
    const node = Node(val);
    if (!head) {
      head = node;
    } else {
      while (!current.getNext()) {
        current.setNext(node);
        console.log(current.getVal());
        current = current.getNext();
      }
    }
  };

  const toString = () => {
    if (!head) return;
    let outputString = head.getVal();
    let current = head;

    while (!current.getNext()) {
      console.log(current.getVal());
      current = current.getNext();
      outputString += current.getVal();
    }

    return outputString;
  }

  return {
    append,
    toString
  };
}
