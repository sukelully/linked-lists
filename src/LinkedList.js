import Node from "./Node.js";

export default function LinkedList() {
  let head = null;
  
  const append = (val) => {
    const node = Node(val);
    let current = head;
    
    if (!head) {
      console.log(node.getVal());
      head = node;
    } else {
      while (current.getNext()) {
        current = current.getNext();
      }
      console.log(node.getVal());
      current.setNext(node);
    }
  };

  const toString = () => {
    
  }

  return {
    append,
    toString
  };
}
