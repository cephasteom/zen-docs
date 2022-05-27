---
sidebar_position: 4
---
# Arithmetic Expressions
Arithmetic expressions are used to define the trajectory of streams as they move in time and are assigned to the `x`, `y`, and `z` properties of a stream object. These properties accept numbers only, hence the use of arithmetic expressions. In the following example, `s0` moves vertically, down the middle of the canvas, at a rate of one pixel per division.
```js
s0.x=s/2
s0.y=t 
```
Values are wrapped to the size of the canvas. In the case of the example above, when `t` reaches 256, the stream will reappear at the top.

Logical operators - such as `&&`, `||` - and ternary expressions - `condition ? ifTrue : ifFalse` - can add greater complexity to the movement of the stream.
```js
s0.x=!(c%2) ? t*8 : s - (t*8)
s0.y=s/2
```
Here, `!(c%2)` evaluates as true when the cycle number is even, resulting in a forward and backwards motion across the x axis of the canvas.

Common constants and functions provided by the global `Math` object, such as `Math.sin()`, `Math.cos()` and `Math.random()`, are available, with `Math.` omitted for brevity, making possible such expressions as:
```js
const size = s/4
const offset = s/2
s0.x=cos(t/32*4)*size+offset
s0.y=sin(t/32*4)*size+offset
```

Zen provides a number of [arithmetic functions](/docs/docs/functions/arithmetic-functions/) to assist you in writing these expressions.