import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  // let tail = null;
  
  const append = (val) => {
    const node = Node(val);
    let current = head;
    
  //   if (!head) {
  //     console.log(`head: ${node.getVal()}`);
  //     tail = node;
  //     head = node;
  //   } else {
  //     tail.setNext(node);
  //     tail = tail.getNext();
  //     current.setNext(node);
  //   }
  // };

  if (!head) {
    head = node;
  } else {
    while (current.getNext()) {
      current = current.getNext();
    }
    current.setNext(node);
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
