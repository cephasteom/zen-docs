# Voicing
```js
'voicing [1,3,5] [3,5,6,9]'
```
`voicing` populates the `n` parameter with chords defined by generic scale degrees, ie. `3 5 6 9` or `7 9 10 12`. It first looks for preceding instances of `scale` within its own stream or in the global parameters. Then, using the stream's position in space, it calculates the correct scale and returns a chord based on the degrees provided. This enables one to define generic, or global, harmonic movement on one axis, and specific voicings for each stream on another. Where no instance of `scale` exists, `voicing` uses a c major scale.  
## Arguments
`voicing ...<voicing>`  
* `voicing`: any number of voicings, written as arrays.

## Example
```js
xps=['scale 8 f`lydian c`minor']

s0.yps=['voicing [1,5]', '-n 12', 'dur 0.5']
s0.x=s*0.25
s0.y=t*8
s0.e=4n

s1.yps=['voicing [3,6,9] [7,9,10,12]', 'dur 1', 'vol 0.5']
s1.x=s*0.75
s1.y=t*8
s1.e=2n
```