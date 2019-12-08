export function Purge<T>(inventory: Array<T>): Array<T> {
  // implement logic ...
  return inventory.splice(1, inventory.length);
}
