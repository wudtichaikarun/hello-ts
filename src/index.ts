import { ReferenceItem, Encyclopedia } from "./class";
// press f5 to build

/**----------creating and using classes----------  */
let ref: ReferenceItem = new ReferenceItem("Update Facts and Figures", 2019);
ref.printItem();
// invoked set publisher
ref.publisher = "Random Data Publishing";
// invoked get publisher
console.log(ref.publisher);

/**----------extending classes----------  */
let refBook = new Encyclopedia("World", 2013, 10);
refBook.printItem(); // can assess year
// refBook.year = 1900; got an error because year decare by protected
