# JavaScript Complete Course

This is a complete course to become an advanced JavaScript developer. Here you will find all you need to know to develop any type of application (web, mobile, cli, etc) from scratch using JavaScript.

I will cover both Frontend and Backend related topics. You will learn the importance of testing your code, and how to do it, how to build your own Web HTTP Server, and develop dynamic and responsive web/mobile applications.

- [1.Introduction to Programming](#1introduction-to-programming)
- [2.JavaScript Fundamentals](#2javascript-fundamentals)
- [3. Node](#3-node)
- [How to approach](#how-to-approach)
  - [What to focus on](#what-to-focus-on)

This course will be developed iteratively so you might not find everything yet. I plan to cover everything you might need to learn javascript from beginner to advanced and land a job, 100% free. It's impossible to cover every single topic, and it would be a waste of time trying to learn every single detail of a technology that's continuously evolving. Rather, I'll focus on the core concepts and good practices. Once you get a solid understanding of JavaScript's foundations, you'll be able to solve almost anything using some logical thinking and your favorite search engine.

At the end of this README you'll find my own word of advice on how to approach this content, and how to get the most of it. I strongly suggest you to read it if you are a newcomer to programming in general.

## 1.Introduction to Programming

- [What is JavaScript and ECMAScript](./intro/README.md)
- [HTML, CSS and JavaScript](./intro/html-css.md)
- [What is an API](./intro/apis.md)
  - Web APIs & Web Services
  - Browser API
  - Node API

## 2.JavaScript Fundamentals

- [Language Reference](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference)
- [Variables: Block-level vs Function-level scope](./vanilla/vars.md)
- [Objects in detail](./vanilla/objects.md)
- [Prototypes and Constructors](./vanilla/proto.md)
- [`this` keyword](./vanilla/this.md)
- [Built-in Collections](./vanilla/collections.md)
- [Hoisting](./vanilla/hoisting.md)
- [Promises](./vanilla/promises.md)
- [Strict mode](./vanilla/strict.md)

## 3. Node

- [Node, event-driven, non-blocking I/O model](./nodejs)
- [Event Loop](./nodejs/eventloop.md)
- [Asynchronous Code](./nodejs/asynchronous.md)
  - [Callbacks](./nodejs/callbacks.md)
  - [Promises](./nodejs/promises.md)
  - [async/await](./nodejs/async-await.md)
- [Buffers](./nodejs/buffers.md)
- [Streams](./nodejs/streams.md)
- [Back-pressure in Streams](./nodejs/backpressuring.md)
- [Event Emitters](./nodejs/event-emitters.md)
- [Anatomy of HTTP Transaction](./nodejs/http-anatomy.md)

## How to approach

In my humble opinion, based on some years learning multiple programming languages (C, C++, Java, JavaScript, Python, Golang), multiple frameworks (Express, Angular, React, jQuery, React-Native, Django, Flask, Boostrap, Materialize, etc), and applying those in projects of all sizes, I came to find that the most efficient way to learn a new language and be productive with it fast, is to focus on some things more than others.

### What to focus on

- __Syntax rather than semantics__: how to form a valid sentence rather than how does a specific library declares it functions or even standard library, those you can always search online.
- __Ugly first__: don't focus on language best practices from day one, rather focus on getting the job done first. This will help you later while trying to learn way one solution may be better than other in different contexts.
- __Name your problems__: one of the most important things to learn, is how to search for answers and already implemented solutions. You can't search for a solution if you don't know how to describe the problem you are trying to solve. Always have a clear understanding of what problem you are addressing at any given time.
- __Divide and conquer__: we can all agree that usually searching "how to build a webpage" won't give you a clear answer on how to build your specific webpage with its unique requirements and so. Here's the importance of knowing how to describe a problem as smaller pieces, so that if you can solve this smaller pieces, you can then combine them to give a proper solution to the bigger problem. Try to think of any problem you need to face, as smaller problems. Following the example of the webpage, we could think of, how to insert javascript into html, how to create a responsive navbar, how to create a contact form, how to navigate between pages, etc...
- __Focus on processes, rather than tools__: there will always be a more trending, cooler, "better" tool that gives a solution to one of your specific problems. Try to focus on the "process" behind the solution, what the programming language lets you do, its features and capabilities, you can search for the tool that works best for you if you know which type of process/feature you are trying to accomplish. For example, it's way more important knowing that JavaScript has frameworks built on top of it that provides WebSockets / RealTime communication capabilities, for example if you are trying to build a chat, rather than knowing there's a library called socket.io that implements this. This way your critical and creative thinking don't get restricted with a library capabilities but rather the bigger capabilities of the language, and it will be just a matter of looking for libraries or already implemented solutions that suits your need, or even build your own tools.
