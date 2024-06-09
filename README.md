# JavaScript Complete Course

<!-- TOC -->
* [JavaScript Complete Course](#javascript-complete-course)
* [What's this about?](#whats-this-about)
  * [How to approach](#how-to-approach)
  * [1.Introduction to Programming](#1introduction-to-programming)
  * [2. JavaScript Fundamentals](#2-javascript-fundamentals)
  * [3. Node](#3-node)
  * [4. Exercises](#4-exercises)
<!-- TOC -->

# What's this about?

This is a complete course to become an advanced JavaScript developer. Here you will find all you need to know to develop any type of application (web, mobile, cli, etc) from scratch using JavaScript.

I will cover both Frontend and Backend related topics. You will learn the importance of testing your code, and how to do it, how to build your own Web HTTP Server, and develop dynamic and responsive web/mobile applications.

This course will be developed iteratively, so you might not find everything yet. I plan to cover everything you might
need to learn javascript from beginner to advanced and land a job, 100% free. It's impossible to cover every single
topic, and it would be a waste of time trying to learn every single detail of a technology that's continuously evolving.
Rather, I'll focus on the core concepts and good practices. Once you get a solid understanding of JavaScript's
foundations, you'll be able to solve almost anything using some logical thinking and your favorite search engine.

At the end of this README you'll find my own word of advice on how to approach this content, 
and how to get the most of it. I strongly suggest you to read it if you are a newcomer to programming in general.

## How to approach

In my humble opinion, based on some years learning multiple programming languages and opinionated frameworks, and 
applying those in projects of all sizes in the industry,
I came to realize that the most efficient way for me to learn a new technology and be productive with it fast,
is to focus on some specific things more than others.

- __Syntax rather than semantics__: how to form a valid sentence rather than how does a specific library declares it functions or even standard library, those you can always search online.
- __Ugly first__: don't focus on language best practices from day one, rather focus on getting the job done first. This will help you later while trying to learn way one solution may be better than other in different contexts.
- __Name your problems__: one of the most important things to learn, is how to search for answers and already implemented solutions. You can't search for a solution if you don't know how to describe the problem you are trying to solve. Always have a clear understanding of what problem you are addressing at any given time.
- __Divide and conquer__: we can all agree that usually searching "how to build a webpage" won't give you a clear answer on how to build your specific webpage with its unique requirements and so. Here's the importance of knowing how to describe a problem as smaller pieces, so that if you can solve this smaller pieces, you can then combine them to give a proper solution to the bigger problem. Try to think of any problem you need to face, as smaller problems. Following the example of the webpage, we could think of, how to insert javascript into html, how to create a responsive navbar, how to create a contact form, how to navigate between pages, etc...
- __Focus on processes, rather than tools__: there will always be a more trending, cooler, "better" tool that gives a solution to one of your specific problems. Try to focus on the "process" behind the solution, what the programming language lets you do, its features and capabilities, you can search for the tool that works best for you if you know which type of process/feature you are trying to accomplish. For example, it's way more important knowing that JavaScript has frameworks built on top of it that provides WebSockets / RealTime communication capabilities, for example if you are trying to build a chat, rather than knowing there's a library called socket.io that implements this. This way your critical and creative thinking don't get restricted with a library capabilities but rather the bigger capabilities of the language, and it will be just a matter of looking for libraries or already implemented solutions that suits your need, or even build your own tools.

# Content

## Introduction to Programming

- [What is JavaScript and ECMAScript](./intro/README.md)
- [HTML, CSS and JavaScript](./intro/html-css.md)
- [What is an API](./intro/apis.md)
  - Web APIs & Web Services
  - Browser API
  - Node API

## JavaScript Fundamentals

- [Language Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Grammar and types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types)
- [Control flow and error handling](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling)
- [Expressions and operators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_operators)
- [Loops and iteration](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration)
- [Functions](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Functions)
- [Scope: Block-level vs Function-level](./vanilla/vars.md)
- [Lexical scope & Closures](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures)
- [Built-in objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#built-ins)
  - [Primitives](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)
    - [Numbers and dates](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Numbers_and_dates)
  - Collections
    - [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
    - [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map)
    - [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set)
    - [WeakMap](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakMap)
    - [WeakSet](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/WeakSet)
- [Objects in detail](./vanilla/objects.md)
- [Prototypes and Constructors](./vanilla/proto.md)
- [`this` keyword](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this)
- [Hoisting](./vanilla/hoisting.md)
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules)
- [Strict mode](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode#no_this_substitution)
- [Single Threaded JS](https://developer.mozilla.org/en-US/docs/Glossary/Thread)
  - [Introducing Workers](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing_workers)
  - [Web Workers API and timers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
  - [Microtasks](https://developer.mozilla.org/en-US/docs/Web/API/HTML_DOM_API/Microtask_guide/In_depth)
- [Asynchronous programming](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing)
  - [Callbacks](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Asynchronous/Introducing#callbacks)
  - [Promises](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Using_promises)
- [Iterators and generators](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Iterators_and_generators)
- [Meta programming (Proxy and Reflect)](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Meta_programming)
- [Memory management and garbage collection](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_management)

## Node

> I highly recommend going through the [NodeJS learning material](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs).

- [Node, event-driven, non-blocking I/O model](https://nodejs.org/en/learn/getting-started/introduction-to-nodejs)
- [Concurrency model and the Event Loop](https://nodejs.org/en/learn/asynchronous-work/event-loop-timers-and-nexttick)
- [Buffers](./nodejs/buffers.md)
- [Streams](./nodejs/streams.md)
  - [Backpressuring in Streams](https://nodejs.org/en/learn/modules/backpressuring-in-streams)
- [Event Emitters](./nodejs/event-emitters.md)
- [Anatomy of HTTP Transaction](./nodejs/http-anatomy.md)

## Exercises

- [Code Array.prototype.reduce](exercises/array/reduce-replica)

