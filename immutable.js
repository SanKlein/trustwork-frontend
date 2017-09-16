const { Map } = require('immutable')
const map1 = Map( {a: 1, b: 2, c: 3 })
const map2 = map1.set('b', 2)
assert(map1.equals(map2) === true)
const map3 = map1.set('b', 50)
assert(map1.equals(map3) === false)

const clone = map1;

const { List } = require('immutable')
const list1 = List([ 1, 2 ]);
const list2 = list1.push(3, 4, 5);
const list3 = list2.unshift(0);
const list4 = list1.concat(list2, list3);
assert(list1.size === 2);
assert(list2.size === 5);
assert(list3.size === 6);
assert(list4.size === 13);
assert(list4.get(0) === 1);

const alpha = Map({ a: 1, b: 2, c: 3, d: 4 });
alpha.map((v, k) => k.toUpperCase()).join();
// 'A,B,C,D'

// accepts plain javascript objects
const map4 = Map({ a: 1, b: 2, c: 3, d: 4 })
const map5 = Map({ c: 10, a: 20, t: 30 })
const obj = { d: 100, o: 200, g: 300 }
const map6 = map1.merge(map5, obj);
// Map { a: 20, b: 2, c: 10, d: 100, t: 30, o: 200, g: 300 }

const { Seq } = require('immutable')
const myObject = { a: 1, b: 2, c: 3 }
Seq(myObject).map(x => x * x).toObject();
// { a: 1, b: 4, c: 9 }

const { fromJS } = require('immutable')

const newObj = { 1: "one" }
Object.keys(newObj) // [ "1" ]
newObj["1"] // "one"
newObj[1]   // "one"

const map = fromJS(newObj)
map.get("1") // "one"
map.get(1)   // undefined

const deep = Map({ a: 1, b: 2, c: List([ 3, 4, 5 ]) })
deep.toObject() // { a: 1, b: 2, c: List [ 3, 4, 5 ] }
deep.toArray() // [ 1, 2, List [ 3, 4, 5 ] ]
deep.toJS() // { a: 1, b: 2, c: [ 3, 4, 5 ] }
JSON.stringify(deep) // '{"a":1,"b":2,"c":[3,4,5]}'

const nested = fromJS({ a: { b: { c: [ 3, 4, 5 ] } } })
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ] } } }

const nested2 = nested.mergeDeep({ a: { b: { d: 6 } } })
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 6 } } }

nested2.getIn([ 'a', 'b', 'd' ]) // 6

const nested3 = nested2.updateIn([ 'a', 'b', 'd' ], value => value + 1)
// Map { a: Map { b: Map { c: List [ 3, 4, 5 ], d: 7 } } }

const nested4 = nested3.updateIn([ 'a', 'b', 'c' ], list => list.push(6))
// Map { a: Map { b: Map { c: List [ 3, 4, 5, 6 ], d: 7 } } }

const oddSquares = Seq([ 1, 2, 3, 4, 5, 6, 7, 8 ])
  .filter(x => x % 2)
  .map(x => x * x)

console.log(oddSquares.get(1)); // 9

const seq = Map({ a: 1, b: 2, c: 3 }).toSeq()

seq.flip().map(key => key.toUpperCase()).flip().toObject();
// { A: 1, B: 1, C: 1 }

const { Map, is } = require('immutable')
const map7 = Map({ a: 1, b: 2, c: 3 })
const map8 = Map({ a: 1, b: 2, c: 3 })
assert(map7 !== map8) // two different instances
assert(is(map7, map8)) // have equivalent values
assert(map7.equals(map8)) // alternatively use the equals method

const list5 = List([ 1, 2, 3 ]);
const list6 = list5.withMutations(function (list) {
  list.push(4).push(5).push(6);
});
assert(list5.size === 3);
assert(list6.size === 6);
