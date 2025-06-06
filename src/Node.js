export default function Node(value = null) {
  let val = value;
  let nextNode = null;

  return {
    nextNode,

    getVal() {
      return val;
    },
    getNext() {
      return nextNode;
    },
    setNext(node) {
      nextNode = node;
    },
  };
}
