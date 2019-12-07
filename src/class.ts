abstract class ReferenceItem {
  private _publisher: string;
  static department: string = "Research";

  constructor(public title: string, protected year: number) {}

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}.`);
    console.log(`Department: ${ReferenceItem.department}`);
  }

  get publisher(): string {
    return this._publisher;
  }

  set publisher(newPublisher: string) {
    this._publisher = newPublisher;
  }

  abstract printCitation(): void;
}

class Encyclopedia extends ReferenceItem {
  constructor(newTitle: string, newYear: number, public edition: number) {
    // init value to class ReferenceItem
    super(newTitle, newYear);
  }

  // override method get all feature from parent method and extend feature
  printItem(): void {
    super.printItem();
    console.log(`Edition: ${this.edition} (${this.year})`);
  }

  // got error if don't have abstract printCitation() method
  printCitation(): void {
    console.log(`${this.title} - ${this.year}`);
  }
}

export { ReferenceItem, Encyclopedia };
