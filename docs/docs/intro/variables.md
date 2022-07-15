---
sidebar_position: 2
---
# Syntax

## Variables
The following variables represent global constants or changing values, and can be used throughout your code:
* `t`: the current time, expressed as an integer.
* `q`: the amount of divisions per cycle: usually 32. The variable `t`, therefore, increments `q` times per cycle.
* `c`: the current cycle.
* `s`: a variable that represents the size of the canvas: usually 256.
* `s0 .. s7`: objects representing streams, with x, y, e and m parameters (see below).

## Streams
A basic stream is written:
```js
// Stream 0
s0.xps=         // parameters mapped across the x axis (array of strings)
s0.yps=         // parameters mapped across the y axis (array of strings)
s0.zps=         // parameters mapped across the z axis (array of strings)
s0.x=           // an arithmetic expression defining the x position (a number)
s0.y=           // an arithmetic expression defining the y position (a number)
s0.z=           // an arithmetic expression defining the z position (a number)
s0.xyz=         // set x, y, and z parameters simultaneously. Expects an array of values/expressions.
s0.e=           // an logical expression controlling when a stream should trigger an event (true / false)
s0.m=           // an logical expression controlling when a stream should mutate (true / false)
```