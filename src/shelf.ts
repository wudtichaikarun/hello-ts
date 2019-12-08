interface ShelfItem {
  title: string;
}

export default class Shelf<T extends ShelfItem> {
  private _items: Array<T> = new Array<T>();

  add(item: T): void {
    this._items.push(item);
  }

  getFirst(): T {
    return this._items[0];
  }

  // method find and printTitles T must have properties title `<T extends ShelfItem>`
  find(title: string): T {
    return this._items.filter(item => item.title === title)[0];
  }

  printTitles(): void {
    this._items.forEach(item => console.log(`printTitles: ${item.title} `));
  }
}
