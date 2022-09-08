---
sidebar_position: 1
---
# Synth
`synth`; a flexible synth, with control over oscillator type and modulating oscillator, where appropriate.

## Basic Parameters
In addition to the [generic methods](/docs/docs/instruments/), the Synth also accepts:
* `osc` : [oscillator type](/docs/docs/instruments/resources/oscillators#oscillator-types). Default 'sine`.
* `oscs`: amount of oscillators.
* `spread`: time offset between each oscillator, in ms.
* `oscmod` : oscillator modulation type. sine | square | tri | saw
* `oscmodi` : oscillator modulation index - fm oscillator only. Is mutable.
* `oscharm` : oscillator harmonicity ratio - fm and am oscillators only. Is mutable.

```js
bpm=120
s0.xps=['inst synth', 'cut 0', 'dur 1', 'osc fmsine', 'oscmod square', '_oscmodi sine 0 10', '_oscharm cosine 1 2']
s0.yps=['curve exp', 'a range 0.1 1', 'n 36']
s0.x=t*4
s0.y=s/2
s0.e=4n
s0.m=1
```

## Presets
<!-- TODO -->