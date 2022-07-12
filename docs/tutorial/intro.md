---
sidebar_position: 1
---

# Quickstart Tutorial

Let's learn **Zen in less than 5 minutes**.

## Browser vs. App
Zen comes in two forms - a browser version which lives at [https://zen.cephasteom.co.uk/](https://zen.cephasteom.co.uk/), and a downloadable app (coming soon). The former is essentially Zen-lite - there are more limited synth and effects options - but it's pretty convenient as you can just load a webpage and you're done. By comparison, the app has a slightly different architecture, generating sounds using [Supercollider](https://supercollider.github.io/) instead of web audio. It's therefore more powerful, performs better, but there's requires a more involved setup. Watch this space for this to be released.

The Zen language is identical in each version, but keep an eye out for synths and effects labelled with `app only`, as these won't work in the browser.
## Getting Started

To get started, we'll use Zen-lite, which requires no installation beyond a modern browser. We recommend that you use Google Chrome.

In your browser, navigate to [https://zen.cephasteom.co.uk/](https://zen.cephasteom.co.uk/).

You're ready to begin.

## Controls
Copy and paste this example in to the editor then:
* use `shift + return` to execute the code.
* use `esc` to toggle sound and visuals on and off.
* refresh the browser window if everything goes horribly wrong.
```js
bpm=125

xps=[`scale scales d\`${c%32 < 16 ? 'minPent' : 'dorian'}`, 'delay 0.5', 'delayfb 0.75', 'delaytime 3', 'reverb 0.5', 'locut 300']
zps=['hicut range 500 10000', 'moda range 1 0.1', 'mods range 0.1 1',  'modcurve exp']

const i = c%64 * 4
s0.xps=['inst fm', '+degree 1', 'a 1', 'dur 4', 'cut 0']
s0.yps=['_modi range 1 2', '_harm range 0.25 1 0.25']
s0.zps=[]
s0.x=noise(t/128) * i
s0.y=t*4
s0.z=noise(t/64) * i
s0.e=(c4 && 1n) || bnoise(t, 0.3, 2)
s0.m=1

s1.xps=['inst fm', 'dur 4', 'cut 1', 'carrmod sine', 'reverb 1']
s1.yps=['+degree range 1 10 1', '_modi range 0.1 1', '_harm range 0.5 3 0.5', 'vol range 0.1 1']
s1.zps=['a range 1 0.1']
s1.x=t*4
s1.y=s0.x + (s*0.25)
s1.z=s0.z + (s * 0.25)
s1.e=bnoise(t, 0.3, 3)
s1.m=0

s2.xps=['inst fm', 'a 1', 'dur range 4 1', 'cut 2', 'reverb 1']
s2.yps=['+degree range 1 10 1', 'modi range 0.1 1', 'vol range 0.1 1']
s2.zps=['carrosc seq sine fatsine', 'a range 1 0.1', 'r range 0.1 1']
s2.x=t*4
s2.y=s0.x + (s*0.5)
s2.z=s0.z + (s*0.5)
s2.e=bnoise(t, 0.3, 5)
s2.m=0

s3.xps=['inst fm', 'a 1', 'dur range 4 1', 'oscs 4', 'spread range 10 100', 'reverb 1']
s3.yps=['+degree range 1 10 1', '_modi range 0.1 2', 'vol range 0.1 1']
s3.zps=['carrosc seq fatsine sine']
s3.x=t*4
s3.y=s0.x + (s*0.75)
s2.z=s0.z
s3.e=bnoise(t, 0.3, 7)
s3.m=1

s4.xps=['inst fm', '+degree rand 1 12 1', 'cut 4', 'dur rand 0.1 0.3']
s4.yps=['_modi range 1 5']
s4.zps=['+n seq 0 12', 'a 0.01']
s4.x=t*4
s4.y=s0.x
s4.z=c%32 > 16 && ((c2 && 1n) || s0.e) ? s/2 : 0
s4.e=4n
```
Nice. So what does it all mean?
## Time and the `t` variable

Zen provides you with the variable `t` to represent time. This increments 32 times per cycle.

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