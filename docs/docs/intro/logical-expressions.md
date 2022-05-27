---
sidebar_position: 5
---

# Logical Expressions
Logical expressions are used to determine when a stream should trigger and event, or mutate, and are assigned to the `e` and `m` properties of a stream object, respectively. Javascript is able to convert none boolean values to `true` or `false` due to its built-in type coercion.

Below, the stream `s0` triggers a single synth event every cycle; `(t%q)` returns a `0` (understood as `false` due to type coercion) once per cycle, inverted to `true` with `!` - see below for [an easier way to do this](#note-values).
```js
s0.x=t*(s/q)
s0.y=s/2
s0.e=!(t%q)
```

Here, `s0` and `s1` each trigger an event every quarter note, with `s1` events offset by an eighth note each time. 
```js
s0.x=t*(s/q)
s0.y=s * 0.25
s0.e=!(t%(q/4))

s1.x=t*(s/q)
s1.y=s * 0.75
s1.e=!((t+q/8)%(q/4))
```

This stream moves horizontally, mutating in the first half of the canvas only, signified by coloured points.
```js
s0.x=t*4
s0.y=s/2
s0.m=(t*4)%s < s/2
```

## Note Values
Common note values are accepted in place of more complex logical expressions. These are `1n`, `2n`, `3n`, `4n`, `5n` ... `32n`. For example:
```js
s0.x=t*(s/q)
s0.y=s/2
s0.e=4n
```
In the above example, `4n` represents quarter notes and is replaced before evaluation with the longhand expression `!(t%(q/4))`. The precise accuracy of these depends on the number of divisions per cycle, as defined by the variable `q`. For example, when `q` is equal to 32, `2n`, `4n` and `8n` will fall precisely on a division of the bar. For note values where 32 does not divide cleanly - `3n`, `5n` or `6n` - the calculation must be rounded to an integer in order that the expression evaluates at some point to `true`: `3n`, being rounded down, falls on divisions 0, 10, and 21. Where such inaccuracies are intolerable, `q` can be set to a higher, or more mathematically appropriate, value.

Other streams' values can be referenced to define causal relationships:
```js
s0.x=t*(s/q)
s0.y=s * 0.25
s0.e=1n

s1.x=t*(s/q)
s1.y=s * 0.75
s1.e=!s0.e && 4n
```
Here, `s0` events occur once per cycle, whilst `s1` events occur every quarter note, except when `s0.e` is true.

Boolean values for triggering events and mutations can also be generated using [logical functions](/docs/docs/functions/logical-functions).