---
sidebar_position: 0
---

# Time Functions
Functions used to manipulate time. 
## off
`off(t, expr, dur)`  
Offset `t` (time) by a given duration - expressed as a fraction of a cycle.
```js
// move across the canvas
s0.x=t*4
s0.y=s*0.25

// reference s0's x movement (s0x) and offset by half a cycle
s1.x=off(t, t => s0x, 0.5)
s1.y=s*0.75
```
## slow
`slow(t, expr, value)`  
Slow down `t` (time) by a value. 2 equals half time, etc.
```js
// move across the canvas
s0.x=t*4
s0.y=s*0.25

// the same movement at half speed
s1.x=slow(t, t => s0x, 2)
s1.y=s*0.75
```
## fast
`fast(t, expr, value)`  
Speed up `t` (time) by a value. 2 equals twice as fast, etc.
```js
// move across the canvas
s0.x=t*4
s0.y=s*0.25

// the same movement twice as fast
s1.x=fast(t, t => s0x, 2)
s1.y=s*0.75
```
