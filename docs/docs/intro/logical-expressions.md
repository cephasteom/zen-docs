---
sidebar_position: 5
---

# Logical Expressions
Logical expressions are used to determine when a stream should trigger an event or mutate. They are assigned to the `e` and `m` properties of a stream object and should be a true/false (boolean) value. However, Javascript is able to convert non-boolean values to `true` or `false` due to its built-in type coercion.

Below, the stream `s0` triggers a single synth event every cycle; `(t%q)` returns a `0` (understood as `false` due to type coercion) once per cycle, inverted to `true` with `!` - see below for [an easier way to do this](#note-values).
```js
s0.x=t*(s/q)
s0.y=s/2
s0.e=!(t%q)
```

Here, `s0` and `s1` trigger events every quarter note, with `s1` events offset by an eighth note each time. 
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
Common note values are accepted in place of more complex logical expressions. These are `1n`, `2n`, `3n`, `4n`, `6n`, `8n`, `12n`, `16n`, and `24n`. For example:
```js
s0.x=t*(s/q)
s0.y=s/2
s0.e=4n
```
In the above example, `4n` represents quarter notes and is replaced before evaluation with the longhand expression `!(t%(q/4))`. Less common values, such as `5n` are accepted, but will fall on the nearest division of the cycle. 

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