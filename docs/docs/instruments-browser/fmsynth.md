---
sidebar_position: 2
---
# FM Synth
`fm`; a frequency modulating synth, using the classic setup of a single carrier and modulator. 

## Basic Parameters
In addition to the [generic methods](/docs/docs/instruments-browser/), the FM Synth also accepts:
* `modi`: modulation index. 0 - infinity. Is mutable.
* `harm`: harmonicity ratio. 0 - infinity. Is mutable.
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
## Advanced Parameters
[Tone.js](https://tonejs.github.io/) also allows you to choose the [oscillator type](/docs/docs/instruments-browser/resources/oscillators#oscillator-types), amount of oscillators, and time delay between each, for both the carrier and modulator signals.
* `carrosc` : oscillator type for carrier signal. Default 'sine`.
* `carroscs`: amount of oscillators comprising the carrier signal.
* `carrspread`: time offset between each oscillator in ms.

* `modosc` : oscillator type for carrier signal. Default 'sine`.
* `modoscs`: amount of oscillators comprising the carrier signal.
* `modspread`: time offset between each oscillator in ms.

If you choose a modulating [oscillator type](/docs/docs/instruments-browser/resources/oscillators#oscillator-types) for either the carrier or modulator, further modulation is possible, including the [modulation type](/docs/docs/instruments-browser/resources/oscillators#modulation-types), modulation index and harmonicity.
* `carrmod` : carrier signal modulation type. sine | square | tri | saw
* `carrmodi` : carrier signal modulation index - fm oscillator only.
* `carrharm` : carrier signal harmonicity ratio - fm and am oscillators only.

* `modmod` : modulation signal modulation type.
* `modmodi` : modulation signal modulation type.
* `modharm` : modulation signal modulation type.

## Presets
Presets include `fm-bd`, `fm-sd`, and `fm-hh`, for bass drum, snare drum and hi-hats, respectively.