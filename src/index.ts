import { HasEmail, HasPhoneNumber } from "./interface";
/**
 *  Variable declarations
 */
const a: string = "romantic";
const b: number = 12;

/**
 * Arrays & Tuples
 */
// array
let n: number[] = [1, 2];
// n.push("1"); // got error

// tuples, which has a fixed length
let nn: [number, string, boolean] = [100, "romantic", true];
// Note tuples should not use Array method because it's not type safe
nn.push(1, 2, 3, 4); // should error but not!!!

/**
 * Object types & Interfaces
 */
// Object
let address: { houseNumber: number; streetName: string };
address = {
  houseNumber: 1234,
  streetName: "AA Street"
};
// Object with optional operator (?)
let addressB: { houseNumber: number; streetName?: string };
addressB = {
  houseNumber: 111
};
// Interfaces
interface Address {
  houseNumber: number;
  streetName?: string;
}
const addressC: Address = {
  houseNumber: 222
};

/**
 * Intersection & Union types
 * - The `and` and `or` operators
 */
// Intersection types `|`
let contactInfo: HasEmail | HasPhoneNumber =
  Math.random() > 0.5
    ? {
        // assign it to a HasPhoneNumber
        name: "Romantic",
        phone: 12345678
      }
    : {
        // assign it to a HasEmail
        name: "Romantic",
        email: "ro@ro.com"
      };
// contactInfo. // Note: we can only access the .name property

// Union types `&`
let otherContactInfo: HasEmail & HasPhoneNumber = {
  // we must initialize it to a shape that's assignable to HasEmail and HasPhoneNumber
  name: "Mike",
  email: "Mike@mail.com",
  phone: 233445566
};

/**
 * Function
 */
function sendEmail(to: HasEmail): { recipient: string; body: string } {
  return {
    recipient: `${to.name} <${to.email}>`,
    body: "You're pre-qualified for a loan!"
  };
}
// arrow-function variant
const sendTextMessage = (
  to: HasPhoneNumber
): { recipient: string; body: string } => {
  return {
    recipient: `${to.name} <${to.phone}>`,
    body: "You're pre-qualified for a loan!"
  };
};

/**
 * Function Signature Overloading
 */

// provide multiple function signatures
function contactPeople(method: "email", ...people: HasEmail[]): void;
function contactPeople(method: "phone", ...people: HasPhoneNumber[]): void;

// function implementation
function contactPeople(
  method: "email" | "phone",
  ...people: (HasPhoneNumber | HasEmail)[]
): void {
  if (method === "email") {
    (people as HasEmail[]).forEach(sendEmail);
  }
  if (method === "phone") {
    (people as HasPhoneNumber[]).forEach(sendTextMessage);
  }
}
// email works
contactPeople("email", { name: "Ro A", email: "Ro@ro.com" });
// phone works
contactPeople("phone", { name: "Ro A", phone: 1234567 });
// mixing does not work
// contactPeople("phone", { name: "Ro A", email: "Ro@ro.com" });
