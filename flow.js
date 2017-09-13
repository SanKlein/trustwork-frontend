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
