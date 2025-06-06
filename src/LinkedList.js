export default function LinkedList(name) {
  return {
    name,
    greet() {
      console.log(name);
    },
  };
}
