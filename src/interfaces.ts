export interface Book {
  id: number;
  title: string;
  author: string;
  available: boolean;
}

// Generic Interfaces
export interface Inventory<T> {
  //   getNewestItem: () => Text;
  //   addItem: (newItem: T) => void;
  getAllItems: () => Array<T>;
}

export interface Magazine {
  title: string;
  publisher: string;
}
