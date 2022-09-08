---
sidebar_position: 2
---
# FM Synth
`fm`; a frequency modulating synth, using the classic setup of a single carrier and modulator. See [FM Synth](https://tonejs.github.io/docs/14.7.77/FMSynth) in Tone.js.

## Basic Parameters
In addition to the [generic methods](/docs/docs/instruments/), the `fm` also accepts:
* `modi` | `_modi`: modulation index. 0+.
* `harm` | `_harm`: harmonicity ratio. > 0.
* `moda`: modulation envelope attack. In seconds.
* `modd`: modulation envelope decay. In seconds.
* `mods`: modulation envelope sustain level. 0 - 1.
* `modr`: modulation envelope release. In seconds.
* `modcurve` : set curve of attack, decay and release portions of modulation envelope. Either 'lin' or 'exp'. Default 'lin'.
* `modcurvea` : set curve of attack portion of modulation envelope. Either 'lin' or 'exp'. Default 'lin'.
* `modcurved` : set curve of decay portion of modulation envelope. Either 'lin' or 'exp'. Default 'lin'.
* `modcurver` : set curve of release portion of modulation envelope. Either 'lin' or 'exp'. Default 'lin'.

```js
xps=['scale scales d`dorian', 'reverb range 0 0.5', 'inst fm', 'cut 1']

s1.xps=['inst fm', 'dur range 0.5 1', '_modi range 0 10', '_harm range 0.5 2 0.25']
s1.yps=['degree range 1 8', 'moda range 0 0.5']
s1.x=noise(t/q) * (q*4) + s/4
s1.y=((t*2)%s) + ((c*t*q))
s1.e=s1.y%s < s/2 ? 8n : 16n
s1.m=true
```
## Presets
<!-- TODO -->