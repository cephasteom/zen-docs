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
<!-- TODO -->

## btoggle
To create interesting pattern interferences between events and mutations, it can be useful to toggle a stream's mutation on and off using the events of another.  
`btoggle(t, shouldToggle, i)`
* `t`: time
* `shouldToggle`: true values toggle the internal state, whereas false values are ignored and have no effect
* `i`: an integer value used as an identifier, in order that the function's internal state can keep track of different streams.

```js
s0.x=t*(s/q)
s0.y=s * 0.25
s0.e=2n

s1.x=t*(s/q)
s1.y=s * 0.75
s1.e=1n
s1.m=btoggle(t, s0.e, 0) 
```
Here, `s0` events occur every half note. `s1` events occur every bar: mutations toggled on and off whenever `s0.e` is true.

## bstick
<!-- TODO -->