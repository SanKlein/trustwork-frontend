// Spread Syntax - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_operator

// syntax
myFunction(...iterableObj);

[...iterableObj, 4, 5, 6];

let objClone = { ...obj };

// spread in function calls instead of apply function
function myFunction(x, y, z) { }
var args = [0, 1, 2];
myFunction(...args);

// spread in array literals instead of push, splice, or concat
var parts = ['shoulders', 'knees'];
var lyrics = ['head', ...parts, 'and', 'toes'];
// ["head", "shoulders", "knees", "and", "toes"]

// copy an array
var arr = [1, 2, 3];
var arr2 = [...arr]; // like arr.slice()
arr2.push(4);

// arr2 becomes [1, 2, 3, 4]
// arr remains unaffected

// unsuitable for copying multidimentional arrays since it only goes one level deep
var a = [[1], [2], [3]];
var b = [...a];
b.shift().shift(); // 1
// Now array a is affected as well: [[], [2], [3]]

// concat arrays
var arr1 = [0, 1, 2];
var arr2 = [3, 4, 5];
arr1 = [...arr1, ...arr2];

// shallow clone of object literal
var obj1 = { foo: 'bar', x: 42 };
var obj2 = { foo: 'baz', y: 13 };

var clonedObj = { ...obj1 };
// Object { foo: "bar", x: 42 }

var mergedObj = { ...obj1, ...obj2 };
// Object { foo: "baz", x: 42, y: 13 }


// notes continued - https://github.com/tc39/proposal-object-rest-spread/blob/master/Spread.md

// override properties
let aWithOverrides = { ...a, x: 1, y: 2 };
// equivalent to
let aWithOverrides = { ...a, ...{ x: 1, y: 2 } };
// equivalent to
let x = 1, y = 2, aWithOverrides = { ...a, x, y };

// default properties
let aWithDefaults = { x: 1, y: 2, ...a };

// null/undefined are ignored
let emptyObject = { ...null, ...undefined }; // no runtime error
