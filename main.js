import LinkedList from "./src/LinkedList.js";

const list = LinkedList();

list.append("dog");
list.append("cat");
list.append("ant");
list.prepend("dinosaur");

console.log(list.toString());
console.log(list.pop());
console.log(list.toString());
