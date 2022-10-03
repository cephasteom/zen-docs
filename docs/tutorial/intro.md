---
sidebar_position: 1
---

# 5 Minute Tutorial

Let's learn **Zen in less than 5 minutes**.
## Getting Started

Zen requires no installation beyond a modern browser. We recommend that you use Google Chrome.

In your browser, navigate to [https://zen.cephasteom.co.uk/](https://zen.cephasteom.co.uk/).

You're ready to begin.

## Controls
Copy and paste this example in to the editor then:
* use `shift + return` to execute the code.
* use `esc` to toggle sound and visuals on and off.
* refresh the browser window if everything goes horribly wrong.
```js
//TODO
```
Nice. So what does it all mean?
## Time and the `t` variable

Zen provides you with the variable `t` to represent time. This increments `q` times per cycle.

Zen uses the concept of *streams* to represent the movement of an object through space.

A stream is written as an object literal with parameters for each axis. Use the `t` variable to write arithmetical expressions to move the stream around the canvas.

```js
s0.x=t*4
s0.y=128
```
Or, using methods from the Math object:

```js
s0.x=cos(t/32*4)*64+128
s0.y=sin(t/32*4)*64+128
```
Or, using `c` to get the cycle number:
```js
s0.x=cos(t/32*4)*32+128
s0.y=sin(t/32*4)*64+128
s0.z=!(c%2) ? t*8 : 255 - (t*8)
```
## Events
A stream has a further parameter for events - `e`. Use logical expressions to trigger musical events:
```js
s0.x=t*(128/32)
s0.y=s/2
s0.e=!(t%16)
```
Or, use common note value shorthands:
```js
s0.x=t*(128/32)
s0.y=s/2
s0.e=8n
```

## Parameters
Map sonic, musical, and effects parameters across each axis of the canvas, using the `xps`, `yps` and `zps` parameters of each stream:
```js
xps=['n 60', 'dur rand 0.1 1', 'inst fm', 'modi range 0 10']
yps=['harm range 0.25 3.5']
zps=['reverb range 0 1']

s0.x=cos(t/32*4)*32+128
s0.y=sin(t/32*4)*64+128
s0.z=!(c%2) ? t*8 : 255 - (t*8)
s0.e=4n
```

## Mutations
A stream has a further parameter for mutations - `m`. Prefix mutable parameters with a `_`, then use logical expressions to mutate all synths within a stream:
```js
s0.xps=['_n seq 36 38 39 43 46 48', 'dur rand 0.1 1', 'inst fm', '_modi range 0 10', '+n 12']
s0.yps=['_harm range 2 5', '_crush 8 12']
s0.zps=['reverb range 0 1', 'cut 0']

s0.x=cos(t/32*4)*32+128
s0.y=noise(t/q)*s
s0.z=!(c%2) ? t*8 : 255 - (t*8)
s0.e=s0.y > 128 ? 16n : 4n
s0.m=t%32 < 16
```

## Combining Parameters
<!-- TODO -->

## Next Steps
Head over the [documentation introduction](/docs/docs/intro/) to learn in more depth. 