# Constructor and Prototype

- [Constructor](#constructor)
- [Changing the `constructor` of an object](#changing-the-constructor-of-an-object)
- [Changing the `constructor` of a function](#changing-the-constructor-of-a-function)
- [`this` keyword in constructor functions](#this-keyword-in-constructor-functions)
- [Prototype](#prototype)
  - [Prototype Inheritance Example](#prototype-inheritance-example)
  - [Performance](#performance)
  - [Bad Practice: Extension of native prototypes](#bad-practice-extension-of-native-prototypes)

## Constructor

Sometimes we need a "blueprint" for creating many objects of the same "type". The way to create an "object type", is to
use an object _constructor function_. Objects of the same type are created by calling the constructor function with the
`new` keyword.

```js
function Person(first, last, age) {
	this.firstName = first;
	this.lastName = last;
	this.age = age;
	this.fullName = function() {
		return `${this.firstName}, ${this.lastName}`;
	}
}
const me = new Person('Nacho', 'Herrera', 25);
```

> In a constructor function the value of `this` will become the new object when a new object is created.

The `constructor` property returns a reference to the `Object` constructor function that created the instance object.
Note that the value of this property is a reference to the function itself.

All objects, except objects created with `Object.create(null)` will have a `constructor` property.
Objects created without the explicit use of a constructor function (such as object- and array-literals) will
have a `constructor` property that points to the Fundamental Object constructor type for that object.

```js
let o = {};
o.constructor === Object // true

let a = [];
a.constructor === Array // true

let n = new Number(3);
n.constructor === Number // true

function Tree(name) { this.name = name }
let myTree = new Tree('Redwood')
console.log(`myTree.constructor is ${myTree.constructor}`);
```

## Prototype

To provide inheritance, objects can have `prototype` object (on the Object's `constructor` functions), which acts as a template object from where objects can inherit methods and properties.

An object's prototype object may also have its own prototype object, which it inherits methods and properties from, and so on. This is often referred to as __Prototype Chain__.

In JS, a link is made between the object instance and its prototype, and the methods and properties are found by __walking up the chain of prototypes__.

> We can use `Object.getPrototypeOf(obj)` to get the property on the constructor. For example, `Object.getPrototypeOf(new Foobar())` refers to the same object as `Foobar.prototype`.

### Prototype Inheritance Example

Suppose we have the following code:

```js
let person1 = new Person('Nacho', 'Herrera');
```

What's happening is that `person1` inherits from prototype of `Person` which inherits from the prototype of `Object`. This is why you can call a method on person1 that's actually defined on `Object`, such as `person1.valueOf()`.

Since JS doesn't exactly have sub-class objects, Prototype is a useful workaround to make a "base class" object of certain functions that act as objects.

```js
var Person = function(name) {
  this.name = name;
  this.canTalk = true;
};

Person.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name);
  }
};

var Employee = function(name, title) {
  Person.call(this, name);
  this.title = title;
};

Employee.prototype = Object.create(Person.prototype);
// If you don't set Object.prototype.constructor to Employee, 
// it will take prototype.constructor of Person (parent). 
Employee.prototype.constructor = Employee;

Employee.prototype.greet = function() {
  if (this.canTalk) {
    console.log('Hi, I am ' + this.name + ', the ' + this.title);
  }
};

var Customer = function(name) {
  Person.call(this, name);
};

Customer.prototype = Object.create(Person.prototype);
// If you don't set Object.prototype.constructor to Customer, 
// it will take prototype.constructor of Person (parent). 
Customer.prototype.constructor = Customer; 

var bob = new Employee('Bob', 'Builder');
var joe = new Customer('Joe');
var rg = new Employee('Red Green', 'Handyman');
var mike = new Customer('Mike');

bob.greet();
// Hi, I am Bob, the Builder

joe.greet();
// Hi, I am Joe

rg.greet();
// Hi, I am Red Green, the Handyman

mike.greet();
// Hi, I am Mike
```

### Prototype chain lookup time

Lookup time for properties that are high up on the prototype chain can have a negative impact on the performance, and this may be significant where performance is critical. Additionally, trying to access nonexistent properties will always traverse the full prototype chain.

Also, when iterating over the properties of an object, __every__ enumerable property that is on the prototype chain will be enumerated. To check whether an object has a property defined on _itself_ and not somewhere on its prototype chain, it is necessary to use the `hasOwnProperty` method which all objects inherit from `Object.prototype`.

## Gotchas

### Changing the `constructor` of an object

It's not always safe to rely on the `constructor` property of an object, except for Boolean, Number, and String,
as they have read-only native constructors.

```js
myVar.constructor = myType
```

### Changing the `constructor` of a function

Mostly this property is used for defining a function as a function-constructor for further calling it with
`new` and prototype-inherits chain.

```js
function Parent() {/* ... */}
Parent.prototype.parentMethod = function parentMethod() {}

function Child() { Parent.call(this) }

Child.prototype = Object.create(Parent.prototype)
Child.prototype.constructor = Child // return original constructor to child after re-defining its prototype
```

## Monkey Patching: Extension of native prototypes

Extending native prototypes is usually considered a bad practice.

This technique is called __monkey patching__ and __breaks encapsulation__.

The only good reason for extending a built-in prototype is to backport the features of newer JS engines.
