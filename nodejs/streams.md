# Streams

<!-- TOC -->
* [Streams](#streams)
* [What are streams?](#what-are-streams)
  * [Types](#types)
    * [Writable streams examples](#writable-streams-examples)
    * [Readable streams examples](#readable-streams-examples)
  * [Object Mode](#object-mode)
* [Buffering](#buffering)
<!-- TOC -->

# What are streams?

Node provides a [Web Streams API](https://nodejs.org/api/webstreams.html#web-streams-api),
which is an interface for working with streaming data in Node.js.

Web Streams API is an implementation of the [WHATWG Streams Standard](https://streams.spec.whatwg.org/).

Streams can be readable, writable, or both.

> In Node, all streams are instances of `EventEmitter`.

## Types

There are three primary types of objects

* __Writable__: streams to which data can be written (e.g, `fs.createWriteStream()`)
* __Readable__: streams from which data can be read (e.g, `fs.createReadStream()`)
* __Transform__: Streams that are bot _Readable_ and _Writable_ and that can modify or transform the data
as it is written and read (e.g, `zlib.createDeflate()`)

### Writable streams examples

* HTTP requests, on the client
* HTTP responses, on the server
* fs write streams
* zlib streams
* cypto streams
* TCP sockets
* child process stdin
* process.stdout, process.stderr

### Readable streams examples

* HTTP responses, on the client
* HTTP requests, on the server
* fs read streams
* zlib streams
* crypto streams
* TCP sockets
* child process stdout and stderr
* process.stdin


## Object Mode

All streams created by Node.js APIs operate exclusively on strings and `Buffer` (or `Uint8Array`) objects.
It is possible, however, for stream implementations to work with other types of JavaScript values (except `null`).
Such streams are considered to operate in _'Object Mode'_.

Stream instances are switched into object mode using the `objectMode` option when the stream is created.

# Buffering

Both _Writable_ and _Readable_ streams will store data in an internal buffer that can be retrieved
using `writable.writableBuffer` or `readable.readableBuffer`, respectively.
