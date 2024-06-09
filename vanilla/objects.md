# Objects in detail

- [JavaScript Object](#javascript-object)
- [Properties](#properties)
  - [Data Property](#data-property)
  - [Accessor Property](#accessor-property)
- [Example - Creating objects](#example---creating-objects)
- [Example - Functions as objects](#example---functions-as-objects)
- [Prototype](#prototype)
- [Copying Objects and `Object.assign()`](#copying-objects-and-objectassign)
- [Object Methods](#object-methods)

## JavaScript Object

In classic OOP, objects are _collections of data and methods_. JS is a prototype-based language that uses __functions as classes__.

In JS, objects can be seen as a __collection of properties__, which can be added and removed after initialization.

## Properties

Property types can be values of any types, including other objects, and consists of either a string-value name or `Symbol`, and a property _Descriptor_.

There are two types of Object Properties which have certain attributes.

### Data Property

Associates a key with a value and has the following attributes:

- `value` (any)
- `writable` (boolean): property value can be changed.
- `enumerable` (boolean): property shows up in `for...in` loops unless property's key is a `Symbol`.
- `configurable` (boolean): property descriptor and existence, if you can delete or change attribute.

### Accessor Property

Associates a key with one of two _Accessor Functions_ (`get` and `set`) to retrieve or store a value and
has the following attributes:

- `set` (function)
- `get` (function)
- `enumerable` (boolean)
- `configurable` (boolean)

## Examples

### Creating objects

```js
const obj1 = {};
Object.defineProperty(object1, 'property1', {
 value: 42,
 writable: false,
 get() { return45 }
});
obj1.property1 = 77; // error!
object1.property1; // 42
```

### Functions as objects

Functions are regular objects with the additional capability of being callable. We can attach functions to another functions.

```js
function Person(first, last) {
 return {
  first: first,
  last: last,
  fullName: function() { return `${this.first}, ${this.last}` }
 }
}
const me = Person('Ignacio', 'Herrera');
me.fullName(); // Ignacio, Herrera

// Note that we can call fullName alone, without calling it from a person's object
// in this case, `this` would be bounded to the global object.
const fullName = me.fullName;
fullName(); // undefined
```

## Copying Objects

### Using `Object.assign()`

Sometimes we'll see ourselves wanting to make a copy of an object.

`Object.assign()` copies all enumerable own properties from one or more source objects to a target object and returns it. It does the following:

- Merging objects.
- Shallow copy.
- Copying symbol-typed properties.
- Properties on prototype chain and non-enumerable cannot be copied.
- Copying accessors.

Let's see an example:

```js
const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };
const returnedTarget = Object.assign(target, source);
console.log(target === returnedTarget); // true;
console.log(returnedTarget); // { a: 1, b: 4, c: 5 }
```

Something interesting happens when we try copping Accessor Properties:

```js
const o = {
 foo: 1,
 get bar() { return 2; }
}
let copy = Object.assign({}, obj);
console.log(copy); // { foo: 1, bar: 2 }
```

If we wanted to copy all descriptors, we could do something like this:

```js
function completeAssign(target, ...sources) {
 sources.forEach(source => {
  let descriptors = Object.keys(source).reduce((descriptors, key) => {
   descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
   return descriptors;
  }, {});
 });
}
```

## Object Methods

Almost everything in JavaScript is built on top of Object's methods, so it would be smart to get a glance on those and understand what are they intents.

Please [refer to the MDN documentation for latest updates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object).
