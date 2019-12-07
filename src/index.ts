import { ReferenceItem, Encyclopedia } from "./class";
// press f5 to build

/**
 * Abstract classes
 * - created with the `abstract` keyword
 * - base classes that may not be instantiated
 * - may contain implementation details
 * - abstract method are not implemented
 */

/**----------not be instantiated ----------  */
// let ref: ReferenceItem = new ReferenceItem("Update Facts and Figures", 2019); // got error

/**----------extending classes----------  */
let refBook: ReferenceItem = new Encyclopedia("World", 2013, 10);
refBook.printCitation();
