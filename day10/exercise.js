/* 1. Find the unique values.
 */
// function unique(arr) {
//   return new Set(arr);
// }

// let values = [
//   "Hare",
//   "Krishna",
//   "Hare",
//   "Krishna",
//   "Krishna",
//   "Krishna",
//   "Hare",
//   "Hare",
//   ":-O",
// ];

// console.log(unique(values));

// /*
// 2. Write a function aclean(arr) that returns an array cleaned from anagrams.
// */
// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// function aclean(params) {
//   const set = new Set(params);
//   for (const item of set) {
//     console.log("🚀 ~ aclean ~ item:", item);
//   }
// }

// console.log(aclean(arr)); // "nap, teachers, ear" or "PAN, cheaters, era"

/*
3. Solve the error!
*/
// let map = new Map();

// map.set("name", "John");

// let keys = map.keys();

// keys.push("more"); // Error: keys.push is not a function

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }
}

const ll = new LinkList();

ll.insertFirst(100);
ll.insertFirst(200);

console.log("🚀 ~ ll:", ll);
