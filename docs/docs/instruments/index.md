---
sidebar_position: 1
---

# Instruments
Most synths are [Tone.js](https://tonejs.github.io/) instruments with a Zen wrapper to standardise their public methods. Methods can be `settable` - you can set them only once at the outset of the event - and/or `mutable` - they can be mutated whilst the event is playing. For example, `pan` sets the stereo placement of an event, `_pan` move events around the stereo field whilst they are playing. Parameters differ for each synth type. Parameters without a corresponding method - for example, the use of `modi` outside of a frequency modulating synth - are ignored.

## Generic Methods
Most synths accept the following parameters:
* `n` | `_n`: midi note number.
* `dur`: duration of the event. Can be set only once, at the beginning of a synth's lifecycle.
* `amp` | `_amp`: amplitude. 0 - 1. Is mutable.
* `vol` | `_vol`: volume. 0 - 1. In most cases is simply an alias for `amp`.
* `a`: amplitude envelope attack. In seconds.
* `d`: amplitude envelope decay. In seconds.
* `s`: amplitude envelope sustain level. 0 - 1.
* `r`: amplitude envelope release. In seconds.
* `curve` : set curve of attack, decay and release portions of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `curvea` : set curve of attack portion of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `curved` : set curve of decay portion of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `curver` : set curve of release portion of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `pan` | `_pan`: stereo placement. -1 - 1.
* `channel`: the channel the synth is routed through. Each stream defaults to its corresponding channel, so this parameter can usually be ignored.

## Presets
<!-- TODO -->

## Available Instruments
Zen's synthesis engine ships with the following instruments:
* [fm](/docs/docs/instruments/fm)
* [sampler](/docs/docs/instruments/sampler)
* [granular](/docs/docs/instruments/granular)
* [drum](/docs/docs/instruments/drum)
<!-- * [karplus](/docs/docs/instruments/karplus) -->
* [mono](/docs/docs/instruments/mono)
* [duo](/docs/docs/instruments/duo)
* [metal](/docs/docs/instruments/metal)