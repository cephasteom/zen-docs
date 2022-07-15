---
sidebar_position: 1
---

# Arithmetic Functions
Functions that return numbers. Useful for x, y, and z stream parameters.

## noise
A one-dimensional, simplex noise function.  
`noise(x)`
* `x`: a changing value - probably `t`

```js
s0.x=noise(t/q) * (q*4) + s/4
s0.y=s - (t%s)
```

## noise2d
A two-dimensional, simplex noise function.  
`noise(x, y)`
* `x`: a changing value - probably `t`
* `y`: another changing value

## perlin
A one-dimensional, perlin noise function.  
`perlin(t)`
* `t`: time

```js
s0.x=perlin(t/q) * s
s0.y=s - (t%s)
```

## perlin2d
A two-dimensional, perlin noise function. 
## spike
Returns the first value, but 'spikes' to the second when expr evaluates as `true`. Returns to its original position over the given duration - expressed as a fraction of a cycle.

`spike(t, expr, val1, val2, dur = 0.5)`
```js
// use stream 0's events to trigger a spike, lasting for half a cycle.
// N.B. the use of `s0e` rather than `s0.e` to reference the expression rather than the value
s1.x=spike(t, t => s0e, s*0.75, s*0.25, 0.5)
```
## stick
Returns the first value, but 'sticks' on the second for the given duration after expr has evaluated as `true`. 

`stick(t, expr, val1, val2, dur=0.5)`
```js
// same as above, but the second value sticks, rather than interpolating back to the original value
// N.B. the use of `s0e` rather than `s0.e` to reference the expression rather than the value
s1.x=stick(t, t => s0e, s*0.75, s*0.25, 0.5)
```


## reset
Reset a pattern to the beginning each time it receives a true value. `true` resets `t` in the internal state, `false` is ignored. Requires an ID to keep track of the internal state. 

`reset(t, i=0, expr, bool)`

```js
// reset x to 0 each time stream 0's events are true
s1.x=reset(t, 0, t => t*4, s0.e)
```

## walk
Take a random walk (Brownian motion). Requires an ID to keep track of the internal state. To set x, y, and z simultaneously, see below.

`walk(i=0, range=4, offset=0)`

```js
// random walk adding values between -5 and 5 each step
s0.x=walk(0, 10)
s0.y=walk(1, 10)

// random walk adding values between -2 and 6 each step
s0.x=walk(0, 8, 2)
s0.y=walk(1, 8, 2)
```

## walk3d
Take a random walk (Brownian motion). For use with the xyz parameter, returns the array `[x,y,z]`.

`walk3d(i=0, range=4, offset=0)`

```js
// three dimensional, random walk adding values between -5 and 5 each step
s0.xyz=walk3d(0, 10)

// three dimensional, random walk adding values between -2 and 6 each step
s0.xyz=walk3d(0, 8, 2)
s0.z=0 // overwrite a parameter should you wish
```
