---
sidebar_position: 5
---
# Sampler
`sampler` | `samp`: playback [samples](/docs/docs/instruments/resources/samples) loaded into a buffer. See [Player](https://tonejs.github.io/docs/14.7.77/Player) in Tone.js.

## Parameters
* `bank`: reference a [sample](/docs/docs/instruments/resources/samples) bank name.
* `i`: the index of the sample within the directory
* `n` | `_n`: the note the sample should play at - this assumes that all samples are tuned to C4. Additional tuning may be required with rate.
* `rate` | `_rate`: speed of sample. 2 is twice the speed, 0.5 is half the speed, etc.
* `snap`: snap playback rate to size of the canvas and the bpm. Can be used in conjunction with `rate` and `n`.
* `begin`: where to begin in the sample. 0.5 begins halfway through the sample, 0.25 a quarter, etc.

```js
bpm=160

s0.xps=['inst sampler', 'bank breaks', 'cut 0', 'begin range 0 1', 'snap 1']
s0.x=t*4
s0.y=s/2
s0.e=1n
```

```js
bpm=180

const shouldFill = t%(4*q) > (3*q) || t%(2*q) > 48 

s1.xps=['inst sampler', 'bank cpu2', 'i 0', 'cut [1]', 'dur 2', 'r 0.5']
s1.x=t*4
s1.y=s/2
s1.e=!shouldFill && (1n || off(t, t => 1n, -20))

s0.xps=['inst sampler', 'bank breaks', 'i 1', 'snap 1', 'begin range 0 1', 'cut 0', 'locut 300', 'r 0.5']
s0.x=shouldFill ? floor(noise(t/q) * 16) * (s/16) + (s/16) : t*2
s0.y=s/2
s0.e=t%32 < 16 ? 8n : 16n
s0.m=1
```