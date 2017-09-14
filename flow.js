// Flow - https://flow.org/en/docs/getting-started/
// Flow is a static type checker for JavaScript

// @flow
function square(n: number): number {
  return n * n;
}

square("2"); // Error!

// infers what types you want to use
// @flow
function square(n) {
  return n * n; // Error!
}

square("2");

// @flow
function concat(a: string, b: string) {
  return a + b;
}

concat("A", "B"); // Works!
concat(1, 2); // Error!

// @flow
function method(x: number, y: string, z: boolean) {
  // ...
}

method(3.14, "hello", true);

// @flow
"foo" + "foo"; // Works!
"foo" + 42;    // Works!
"foo" + {};    // Error!
"foo" + [];    // Error!

// @flow
function acceptsNull(value: null) {
  /* ... */
}

function acceptsUndefined(value: void) { // equivalence of undefined
  /* ... */
}

acceptsNull(null);      // Works!
acceptsNull(undefined); // Error!
acceptsUndefined(null);      // Error!
acceptsUndefined(undefined); // Works!

// maybe types
// @flow
function acceptsMaybeString(value: ?string) {
  // ...
}

acceptsMaybeString("bar");     // Works!
acceptsMaybeString(undefined); // Works!
acceptsMaybeString(null);      // Works!
acceptsMaybeString();          // Works!

// optional object property
({ propertyName?: string })

// @flow
function acceptsObject(value: { foo?: string }) {
  // ...
}

acceptsObject({ foo: "bar" });     // Works!
acceptsObject({ foo: undefined }); // Works!
acceptsObject({ foo: null });      // Error!
acceptsObject({});                 // Works!

// optional function parameters
function method(param?: string) { /* ... */ }

// @flow
function acceptsOptionalString(value?: string) {
  // ...
}

acceptsOptionalString("bar");     // Works!
acceptsOptionalString(undefined); // Works!
acceptsOptionalString(null);      // Error!
acceptsOptionalString();          // Works!

// literal types as values
// @flow
function acceptsTwo(value: 2) {
  // ...
}

acceptsTwo(2);   // Works!
// $ExpectError
acceptsTwo(3);   // Error!
// $ExpectError
acceptsTwo("2"); // Error!

// union types
// @flow
function getColor(name: "success" | "warning" | "danger") {
  switch (name) {
    case "success" : return "green";
    case "warning" : return "yellow";
    case "danger"  : return "red";
  }
}

getColor("success"); // Works!
getColor("danger");  // Works!
// $ExpectError
getColor("error");   // Error!

// group of possible types
function stringifyBasicValue(value: string | number) {
  return '' + value;
}

// functions with param types and return types
// @flow
function concat(a: string, b: string): string {
  return a + b;
}

concat("foo", "bar"); // Works!
// $ExpectError
concat(true, false);  // Error!

// rest parameters
function method(...args: Array<number>) {
  // ...
}

// define subtypes
type TypeA = 1 | 2 | 3;
type TypeB = 1 | 2 | 3 | 4 | 5;
