import { HasEmail, HasPhoneNumber } from "./interface";
/**
 * Classes  Access modifier keywords - `who can access this thing`
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */

/**
 * Definite Assignment & Lazy
 */

export class OtherContact implements HasEmail, HasPhoneNumber {
  protected age = 0;
  private passwordVal: string | undefined;
  constructor(public name: string, public email: string, public phone: number) {
    this.age = 35;
  }

  get password(): string {
    if (this.passwordVal) {
      return this.passwordVal;
    }

    this.passwordVal = Math.round(Math.random() * 1e14).toString(32);
    return this.passwordVal;
  }

  async init() {
    this.passwordVal;
  }
}
