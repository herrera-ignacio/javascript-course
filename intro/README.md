# What is JavaScript

JavaScript (JS) is an interpreted/just-in-time compiled programming language with first-class functions.

While it is most well-known as the scripting language for Web pages, many non-browser environments also use it, including Adobe Acrobat, Adobe Photoshop, SVG images, Yahoo's Widget engine, server-side environments such as Node.js, NoSQL databases like open source Apache CouchDB, embedded computers, complete desktop environments like GNOME, and others.

JavaScript was created in 1995 by Brendan Eich while he was an engineer at Netscape and first released with Netscape 2 early in 1996. Several months later, Microsoft released JScript with IE3. Several months after that, Netscape submitted JavaScript to Ecma International, a European standards organization, which resulted in the first edition of the ECMAScript standard that year.

The standard received a significant update as ECMAScript edition 3 in 1999, and it has stayed pretty much stable ever since. ECMAScript edition 5 was published in December of 2009, and for the 6th major edition of the standard, it was published in June of 2015.

## Important Concepts

* Interpreted/Just-in-time Compiled
* Scripting language
* Sever-side/Client-side
* First Class Functions
* Prototype-based
* Multi-Paradigm
* Single-threaded
* Dynamic language

### Interpreted/Just-in-time Compiled

Javascript is a lightweight interpreted language. Web browser receives the JS code in its original text form and runs the script from that. From a technical standpoint, most modern JS interpreters actually use a technique called just-in-time compiling to improve performance. Javascript code gets compiled into a faster, binary format while the script is being used, so that it can be run as quickly as possible. However, JS is still considered an interpreted language, since compilation is handled at run time, rather than ahead of time.

### Scripting language

Unlike most programming languages, it has no concept of input or output. It is designed to run as a scripting language in a host environment, and it is up to the host environment to provide mechanisms for communicating with the outside world.

### Server-side/Client-side

Client-side code is code that is run on the user's computer, for example, when a web page is viewed, the page's client-side code is downloaded, then run and displayed by the browser.

Server-side code on the other hand is run on he server, then its results are downloaded and displayed in the browser for example.

Javascript can be used both as client-side and server-side language, for example in Node.js environments.

### First Class Functions

A programming language is said to have First-class functions when functions are treated like any other variable.

### Prototype-based

JavaScript supports object-oriented programming with object prototypes instead of classes (see Prototype Inheritance).

### Multi-Paradigm

JavaScript also supports functional programming, because functions are objects they may be stored in variables and passed around like any other object, and imperative styles.

### Dynamic

Dynamic is used to describe both client-side and server-side languages, and it refers to the ability to update the display of a web-page/app to how different things in different circumstances, generating new content as required. Server-side code dynamically generates new content on the server, e.g. pulling data from a database, whereas client-side JS dynamically generates new content inside the browser on the client, e.g. creating a new HTML table, filling it with data requested from the server, and displaying the table in a web page.

A web page/app with no dynamically updating content is referred to as Static, it shows the same content all the time.

## ECMAScript Historical

* ECMAScript 1 (1997)
* ECMAScript 2 (1998)
* ECMAScript 3 (1999)
  * Regular Expressions
  * `try` and `catch`
* ECMAScript 4 (never released)
* ES5 - ECMAScript 5 (2009)
  * `use strict` mode
  * JSON support
  * `String.trim()`
  * `Array.isArray()`
  * Array iteration methods
  * `Promise`
* ECMAScript 5.1 (2011)
* ES6 - EMCAScript 2015
  * `let` and `const`
  * default parameter values
  * `Array.find()`
  * `Array.findIndex()`
* ECMAScript 2016
  * Exponential operator `**`
  * `Array.prototype.includes`
* ECMAScript 2017
  * String padding
  * new Object properties
  * `async`/`await`
  * Shared memory
* ECMAScript 2018
  * Rest oeprator & Spread properties `...`
  * Asynchronous Iteration
  * `Promise.finally()`
  * `RegExp`
