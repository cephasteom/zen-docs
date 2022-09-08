---
sidebar_position: 5
---
# Granular
`granular` | `grains`: granular playback of [samples](/docs/docs/instruments/resources/samples) loaded into a buffer. See [Grain Player](https://tonejs.github.io/docs/14.7.77/GrainPlayer) in Tone.js.

## Parameters
* `bank`: reference a [sample](/docs/docs/instruments/resources/samples) bank name.
* `i`: the index of the sample within the directory
* `n` | `_n`: the note the sample should play at - this assumes that all samples are tuned to C4. As opposed to the [sampler](/docs/docs/instruments/sampler), this is independent of the playback rate.
* `rate` | `_rate`: rate at which the sample is played through. 2 is twice the speed, 0.5 is half the speed, etc.
* `snap`: snap playback rate to size of the canvas and the bpm. Use either `rate` or `snap`, you can't use both.
* `begin`: the position in the sample where grains begin playing from. 0 is the beginning of the sample, 1 is the end, etc.
* `end`: the position in the sample where playback loops back to `begin`. 0 is the beginning of the sample, 1 is the end, etc.
* `size`: the size of the grain in beats. E.g. 0.5 is 2 grains per beat, 0.125 is 8 grains per beat. N.B. needs some work, appears to affect playback position.
* `overlap`: amount of crossfade transition between grains.



```js
s0.xps=[
    'inst granular', 
    'bank breaks', 
    'i 0', 
    'cut 0', 
    'begin range 0 1', 
    'snap 1',
    'dur 4',
    'overlap 0.5'
]
s0.x=t*4
s0.y=s/2
s0.e=1n
s0.m=1
```