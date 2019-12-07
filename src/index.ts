import { ReferenceItem } from "./class";
// press f5 to build

/**----------using class expressions ----------  */
let Newspaper = class extends ReferenceItem {
  printCitation(): void {
    console.log(`Newspaper: ${this.year}`);
  }
};
let myPaper = new Newspaper("The Gazette", 2016);
myPaper.printCitation();

class Novel extends class {
  title: string;
} {
  mainCharacter: string;
}

let favoriteNovel = new Novel();
/**
 * favoriteNovel.  editor will auto suggest .title, .mainCharacter
 */
favoriteNovel.title = "Romantic";
console.log(favoriteNovel.title);
