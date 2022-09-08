---
sidebar_position: 3
---
# Drum Synth
`drum`; a synth using a single oscillator with a pitch and amplitude ramping envelopes, suitable for kick or tom hits. See [Membrane Synth](https://tonejs.github.io/docs/14.7.77/MembraneSynth) in Tone.js.

## Parameters
In addition to the [generic methods](/docs/docs/instruments/), the Membrane Synth also accepts:
* `octs`: the number of octaves over which the pitch ramps. 0 - 10.

```js
xps=['reverb 0 1', 'revtime 4']

s0.xps=['inst drum', 'octs 5', 'n 34']
s0.x=t*4
s0.y=s/2
s0.e=1n || bnoise(t, 0.5, 8)

s1.xps=['inst fm', 'dur range 0.5 1', '_modi range 0 1', '_harm range 0.5 2 0.25']
s1.yps=['scale scales d`dorian', 'degree range 1 24', '+n 0 12 12', 'moda range 0 1.5', 'cut 1']
s1.x=noise(t/q) * (q*4) + s/4
s1.y=((t*2)%s) + ((c*t*q))
s1.e=!s0.e && 16n
s1.m=true
```

## Presets
<!-- TODO -->