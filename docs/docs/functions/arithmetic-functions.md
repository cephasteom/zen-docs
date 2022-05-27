---
sidebar_position: 1
---

# Arithmetic Functions
Functions that return numbers. Useful for x, y, and z stream parameters.

## noise
A one-dimensional, simplex noise function.  
`noise(t)`
* `t`: time

```js
s0.x=noise(t/q) * (q*4) + s/4
s0.y=s - (t%s)
```

## noise2d
<!-- TODO -->

## perlin
A one-dimensional, perlin noise function.  
`perlin(t)`
* `t`: time

```js
s0.x=perlin(t/q) * s
s0.y=s - (t%s)
```

## perlin2d
<!-- TODO -->
## spike
<!-- TODO -->
## stick
<!-- TODO -->
## reset
<!-- TODO -->