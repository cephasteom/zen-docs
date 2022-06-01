---
sidebar_position: 5
---
# Sampler
`sampler`: playback [samples](/docs/docs/instruments/resources/samples) loaded into a buffer.

## Parameters
* `sound` or `s`: reference a [sample](/docs/docs/instruments/resources/samples) pack name.
* `i`: the index of the sample within the directory
* `n`: the note the sample should play - this assumes that all samples are tuned to C4. Additional tuning may be required with rate. Is mutable.
* `a`: fade in time
* `r`: fade out time
* `rate`: speed of sample. 2 is twice the speed, 0.5 is half the speed, etc. Is mutable.
* `begin`: where to begin in the sample. 0.5 begins halfway through the sample, 0.25 a quarter, etc.
* `snap`: snap playback rate to a number of sample divisions. E.g. 128 plays the sample over 4 cycles. 

```js
bpm=160

const shouldFill = t%(4*q) > (3*q) || t%(2*q) > 48 

s1.xps=['inst sampler', 's cpu2', 'i 0', 'cut [0,1]', 'dur 2', 'r 0.5']
s1.yps=[]
s1.zps=[]
s1.x=t*4
s1.y=s/2
s1.z=0
s1.e=!shouldFill && (1n || off(t, t => 1n, -20))
s1.m=0

s0.xps=['inst sampler', 's breaks', 'i rand 0', 'snap 512', 'begin range 0 1', 'cut 0', 'locut 300']
s0.x=shouldFill ? floor(noise(t/q) * 16) * (s/16) + (s/16) : t*2
s0.y=s/2
s0.e=t%32 < 16 ? 8n : 16n
s0.m=1
```