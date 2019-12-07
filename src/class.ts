// original version
/*
class ReferenceItem {
  // properties in class default public
  title: string; // same as public title:string
  private year: number;

  constructor(title: string, year: number) {
    this.title = title;
    this.year = year;
  }

  printItem(): void {
    console.log(`${this.title} was published in ${this.year}.`);
  }
}
*/

// short version
class ReferenceItem {
  private _publisher: string;
  static department: string = "Research";

  constructor(public title: string, private year: number) {}

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
}

export { ReferenceItem };
