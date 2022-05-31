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