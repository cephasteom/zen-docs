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
Returns the lo value, but 'spikes' to the hi when trigger evaluates as `true`. Returns to its original position over the given duration - expressed as a fraction of a cycle.

`spike(trigger: bool, lo: number, hi: number, dur: number)`
```js
s1.x=t*4
s1.y=spike(1n, s*0, s/2, 0.5)
```
## stick
Returns the lo value, but 'sticks' on hi for the given duration after trigger has evaluated as `true`. 

`stick(trigger: bool, lo: number, hi: number, dur: number)`
```js
s1.x=t*4
s1.y=stick(1n, s*0, s/2, 0.5)
```

If you want to use another stream to trigger an event, wrap it in {} to reference the original expression, rather than the result. For example"
```js
s0.e=1n

s1.x=t*4
s1.y=stick((s0.e), s*0, s/2, 0.5)
```


## reset
Reset a pattern to the beginning each time it receives a true value. `true` resets `t` in the internal state, `false` is ignored.

`reset(expr: number, trigger: boolean)`

```js
// reset x and y to the beginning every bar.
s0.x=reset(t*16, 1b)
s0.y=reset(noise(t*q) * s, 1b)
```

## walk
Take a random walk (Brownian motion). To set x, y, and z simultaneously, see below.

`walk()`

```js
// random walk adding values between -5 and 5 each step
s0.x=walk() * 16
s0.y=walk() * 32
```

## walk3d
Take a random walk (Brownian motion). For use with the xyz parameter, returns the array `[x,y,z]`.

`walk3d()`

```js
// three dimensional, random walk
s0.xyz=walk3d().map(i => i*32)

// three dimensional, random walk
s0.xyz=walk3d().map(i => i*32)
s0.z=0 // overwrite a parameter should you wish
```

## bounce
Bouncing ball algorithm. Requires an ID to keep track of the internal state.

`bounce(hi?: number?, lo?: number, trigger?: boolean, friction?: number, speed?: number)`

```js
// bounce on the y axis whilst travelling across the x
s0.x=t*2
s0.y=bounce()

// slow bounce from top to half way down the screen
s0.x=t*2
s0.y=bounce( s - 1, s/2, 4b, 0.1)

// reset every beat
s0.x=t*8
s0.y=bounce(s/2, 0, 4n, 4)

// trigger event on bounce
s0.x=noise(t/q) * s
s0.y=bounce(s-(s/16), 0)
s0.e=!s0.y
```

## constrain
Constrain a stream between two values. Stream reverses on reaching the upper value.

`constrain(value, lo=0, hi=s)`

```js
// constrain x between 0 and half of the canvas
// trigger an event when it hits either hi or lo
s0.x=constrain(t*8, 0, s/2)
s0.y=t*4
s0.e=[0, s/2].includes(s0.x)
```
