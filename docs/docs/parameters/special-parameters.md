---
sidebar_position: 2
---
# Special Parameters
## scale
```js
'scale scales d`dorian c`minor g`mixolydian'
```
Intended to hold a list of [scales](/docs/docs/parameters/scales), `scale` does not make a sound itself, but is 'hooked into' by the [degree](#degree) parameters further downstream. It is commonly used to set a global harmony, which can then be called on and interpreted in different ways by different streams. 

It is best populated with the [scales](/docs/docs/parameters/parameter-functions#scales) parameter function, but can also be populated by other methods like so:
```js
'scale seq [0,2,4,5,7,8] [0,3,6,9]'
```

For a working example, see [degree](#degree) below. 

## degree
```js
'degree seq 0 2 4 6'
```
`degree` populates the `n` parameter using generic scale degrees and a preceding instance of the [scale](#scale) parameter (see above), from which it inherits the scales to derive its degrees from. It can handle single notes and polyphony, meaning that you can use it for lines and/or voicings.

Using the stream's position in space, it calculates the scale then returns a note from the degrees provided. `degree` uses `1` for tonic, `2` for supertonic, and so on, rather than zero-indexing, to facilitate thinking in intervals.

It can be combined with preceding instances of `n` using operators. 
```js
xps=['reverb 0', 'pan range -1 1', 'revtime 2']

zps=['scale scales ionian dorian lydian mixolydian aeolian', '+n range 0 18 3']

s0.xps=['+degree seq [1,3,5,6] [3,5,6,9]', 'dur 1', 'cut 0', '-n 0']
s0.x=t*4
s0.y=t*4
s0.z=s * ((c%6)/6)
s0.e=8n
```