---
sidebar_position: 2
---
# Logical Functions
Functions that return a true or false (boolean). These are always prefixed by a `b` to denote boolean - as in `bnoise` or `btoggle` - and are useful for triggering events or mutations.
## bnoise
This function passes `t` to a simplex noise algorithm, returning a smooth streams of values between 0 and 1.  
`bnoise(t, threshold, quantize)`
* `t`: time
* `threshold`: the value which, when exceeded, returns true. Should be between 0 and 1.
* `quantize`: limits `true` results to a particular note value - defaults to quarter notes

```js
s0.x=t*(s/q)
s0.y=s * 0.25
s0.e=bnoise(t,0.3,8)
```
Events are trigged when the noise value exceeds a threshold of 0.3. This will be infrequent, resulting in a sparse, eighth note pattern.

## bnoise2d
Same as above, but with two-dimensions.

`bnoise2d(t, x, y, threshold, quantize)`

## btoggle
To create interesting pattern interferences, it can be useful to toggle a stream's data between two states using the events of another.  
N.B. this is a rare function that doesn't require time passed in as its first argument.

`btoggle(i, bool)`
* `i`: an integer value used as an identifier, in order that the function's internal state can keep track of different streams.
* `bool`: true values toggle the internal state, whereas false values are ignored and have no effect

```js
s0.x=t*(s/q)
s0.y=s * 0.25
s0.e=2n

s1.x=t*(s/q)
s1.y=s * 0.75
s1.e=1n
s1.m=btoggle(0, s0.e) 
```
Here, `s0` events occur every half note. `s1` events occur every bar: mutations toggled on and off whenever `s0.e` is true.

## bstick
Will stick `true` for the given duration after receiving a `true` value.

`bstick(t, expr, duration=0.5)`

```js
// mutate for half a cycle each time stream 0's triggers an event
s1.m=bstick(t, t => s0e, 0.25)
```