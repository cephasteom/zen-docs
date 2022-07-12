---
sidebar_position: 1
---

# Instruments (browser)
All synths are [Tone.js](https://tonejs.github.io/) instruments wrapped in a further layer of abstraction to standardise their public methods. These can be reduced to either `settable` or `mutable` methods, with method names mapping to parameter names. For example, `pan` determines the stereo placement of events, whereas `_pan` additionally provides values for mutations. Parameters differ for each synth type. Parameters without a corresponding method - for example, the use of `modi` outside of a frequency modulating synth - are ignored.

## Generic Methods
Most synths accept the following parameters:
* `n`: midi note number. Is mutable.
* `dur`: duration of the event. Can be set only once, at the beginning of a synth's lifecycle.
* `amp`: amplitude. 0 - 1. Is mutable.
* `vol`: volume. In many cases has the same effect as amp, but differs where, for example, the level of modulation is scaled to the synth amplitude. 0 - 1. Is mutable.
* `a`: amplitude envelope attack. In seconds.
* `d`: amplitude envelope decay. In seconds.
* `s`: amplitude envelope sustain level. 0 - 1.
* `r`: amplitude envelope release. In seconds.
* `curve` : set curve of attack, decay and release portions of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `curvea` : set curve of attack portion of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `curved` : set curve of decay portion of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `curver` : set curve of release portion of envelope. Either 'lin' or 'exp'. Default 'lin'.
* `pan`: stereo placement. -1 - 1. Is mutable.
* `channel`: the channel the synth is routed through. Streams default to separate channels so this parameter can usually be omitted. See channel effects and routing below for further implications of this parameter.

## Presets
Useful presets have been developed to aid brevity, and can be accessed using the syntax `instrument-preset`, as in `fm-bd`. These are listed after each example and editable in the usual way using the same parameters.

## Available Instruments
Zen's synthesis engine ships with the following instruments:
* [Synth](/docs/docs/instruments/synth)
* [FM Synth](/docs/docs/instruments/fmsynth)
* [Membrane](/docs/docs/instruments/membrane)
* [Metal](/docs/docs/instruments/metal)
* [Sampler](/docs/docs/instruments/sampler)