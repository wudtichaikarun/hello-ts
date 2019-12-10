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

/**
 * Lexical scope
 * - Lexical scope just mean, what is the value of `this` when you invoke a function
 */

/**
 * Type Aliases & extends
 */
// Type aliases
type StringOrNumber = string | number;
const x: StringOrNumber = 2;
// this i the ONLY time you'll see a type on the RHS of assignment
type HasName = { name: string };

// Extends
// Interfaces can extend from other interfaces
interface HasInternationalPhoneNumber extends HasPhoneNumber {
  countryCode: string;
}

/**
 * Call & Construct signatures
 */
// Construct (function signature)
interface ContactMessenger1 {
  (contact: HasEmail | HasPhoneNumber, message: string): void;
}
// same as above just syntax sugar
type ContactMessenger2 = (
  contact: HasEmail | HasPhoneNumber,
  message: string
) => void;
// Note: we don't need type annotations for contact or message
const emailer: ContactMessenger1 = (_contact, _message) => {
  // implement logic..
};
// construct signatures can be described as well
interface ContactConstructor {
  new (...args: any[]): HasEmail | HasPhoneNumber;
}

/**
 * Dictionary Objects & Index
 */
interface PhoneNumberDict {
  // arr[o], foo['myProp']
  [numberName: string]:
    | undefined
    | {
        areaCode: number;
        num: number;
      };
}

const d: PhoneNumberDict = {};
if (d.abc) {
  d.abc;
}

const phoneDict: PhoneNumberDict = {
  office: { areaCode: 321, num: 55555555 }
  // home: { areaCodeeeeee: 333, num: 222222 } // try editing
};

/**
 * Recursive type
 */
// problem data type for value 1 | 2 | 3 | array that contain value of 1 | 2 | 3
// type NumVal = 1 | 2 | 3 | NumArr // got error because it's circle ref
// type NumArr = NumVal[]

// use hosting concept to fix the problem
// link to explain how the hosting work  https://www.udemy.com/course/understand-javascript/learn/lecture/2237452#overview
type NumVal = 1 | 2 | 3 | NumArr;
interface NumArr extends Array<NumVal> {}
const xx: NumVal = 1;
const xxx: NumVal = [1, 2, 3, 1, 1, [2, 3, 1]];
const xxxx: NumVal = [1, 2, 3];
// const aa: NumVal = 4; // got error
// const aaa: NumVal = [1,4]; // got error

/** Lazy versus Eager
 * What difference between `Type And Interface` ?
 * - Type aliases are eager
 * - Interfaces are lazy
 */

/**
 * Type test module name `json-types`
 * - link https://frontendmasters.com/courses/typescript-v2/type-tests/
 */

/**
 * Classes  Access modifier keywords - `who can access this thing`
 * - public - everyone
 * - protected - me and subclasses
 * - private - only me
 */
