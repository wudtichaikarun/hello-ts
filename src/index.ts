import { Purge } from "./utils";
import { Book } from "./interfaces";
// f5 for run code
/**
 * Using Array<T>
 * - Type parameter specifies the type the array can contain
 * Type parameters are part of the type
 * let fictionBooks: Array<Book>
 */

// Generic Function --------- ex 1.
function LogAndReturn<T>(thing: T): T {
  console.log(thing);
  return thing;
}
LogAndReturn<string>("log this");

// Generic Function -------- ex 2
let inventory: Array<Book> = [
  {
    id: 1,
    title: "Ulysses",
    author: "James Joyce",
    available: true
  },
  {
    id: 2,
    title: "A Farewell to Arms",
    author: "Ernest Hemingway",
    available: false
  }
];

// let purgedBooks: Array<Book> = Purge<Book>(inventory);
let purgedBooks: Array<Book> = Purge(inventory); // signature same as above
purgedBooks.forEach(book => console.log(book.title));

let purgedNumber: Array<number> = Purge<number>([1, 2, 3, 4]);
console.log(purgedNumber);
