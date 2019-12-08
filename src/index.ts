import { Purge } from "./utils";
import Shelf from "./shelf";
import { Book, Inventory, Magazine } from "./interfaces";
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

// Generic interfaces
let bookInventory: Inventory<Book> = {
  getAllItems: () => inventory
};
let allBooks: Array<Book> = bookInventory.getAllItems();
console.log(allBooks);

// Generic Classes
class Catalog<T> implements Inventory<T> {
  private catalogItems = new Array<T>();
  addItem(newItem: T) {
    this.catalogItems.push(newItem);
  }
  // implement other interface methods ...
  getAllItems() {
    return this.catalogItems;
  }
}

let bookCatalog = new Catalog<Book>();

// Demo Creating and Using Generic work with type Book
let bookShelf: Shelf<Book> = new Shelf<Book>();
inventory.forEach(book => bookShelf.add(book));
let firstBook: Book = bookShelf.getFirst();
// console.log(firstBook);

// Demo Creating and Using Generic work with type Magazine
let magazines: Array<Magazine> = [
  {
    title: "Programming Language Monthly",
    publisher: "code Mags"
  },
  {
    title: "Literary Fiction Quarterly",
    publisher: "College press"
  }
];
let magazineShelf: Shelf<Magazine> = new Shelf<Magazine>();
magazines.forEach(mag => magazineShelf.add(mag));
let firstMagazine: Magazine = magazineShelf.getFirst();

// Demo Creating and Using Generic work with type number
let numberShelf: Shelf<number> = new Shelf<number>();
[2, 3, 5, 6].forEach(num => numberShelf.add(num));
let firstNumber: number = numberShelf.getFirst();
