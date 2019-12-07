import { ReferenceItem } from "./class";

// press f5 to build
let ref: ReferenceItem = new ReferenceItem("Update Facts and Figures", 2019);
ref.printItem();
// invoked set publisher
ref.publisher = "Random Data Publishing";
// invoked get publisher
console.log(ref.publisher);
