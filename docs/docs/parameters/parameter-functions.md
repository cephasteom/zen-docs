---
sidebar_position: 0
---
# Parameter Functions
Multiple values can be supplied to a parameter using the syntax `<param> <functionName> <...args>`.
## range
`<param> range <low> <high> <step?> <frequency?>`  
Map a range from low to high across the canvas. Omit the step for a continuous range, provide the step to quantize values. Frequency determines how many times range is mapped across the canvas. Values should all be numbers.
```js
// continuous range from 0 to 4
s0.xps=['modi range 0 4']
// range from 1 to 4, in steps of 0.5
s0.xps=['harm range 1 4 0.5']
// range from 1 to 16, in steps of 1, mapped twice across the canvas
s0.xps=['harm range 1 16 1 2']
```
## seq
`<param> seq <...args>`  
Map a sequence of values across the canvas. Accepts any number of arguments, which can be numbers, strings, or arrays of numbers where appropriate.
```js
// n accepts arrays as it can handle polyphony
s0.xps=['n seq 36 38 [40,42,45] 60']
// instrument expects strings
s0.xps=['inst seq fm mem-bd']
```
## scale
`<param> scale <root\'scale> <length>`  
Maps a scale across the canvas. Nominally, to be used with `n` but may have other applications where a parameter accepts integers in that range. See list of [scales](/docs/docs/parameters/scales) for possible values.
```js
// c dorian mode, comprised of 16 notes, mapped across the x axis
s0.xps=['n scale c`dorian 16']
```
## sine
`<param> sine <low> <high> <step> <frequency>`  
Map a sequence of sine values across the canvas. Scale between high and low value and set the amount of cycles that fit onto the canvas using frequency.
```js
s0.xps=['n sine 36 72 4 8', 'dur 4', 'cut 0']
s0.x=t*4
s0.y=s/2
s0.e=16n
```

## cosine
`<param> cosine <low> <high> <step> <frequency>`  
Map a sequence of cosine values across the canvas. Scale between high and low value and set the amount of cycles that fit onto the canvas using frequency.
```js
s0.xps=['n 60', '_vol cosine 0.5 0.9 0 4', 'dur 4', 'cut 0']
s0.x=t*4
s0.y=s/2
s0.e=1n
s0.m=1
```
## noise
`<param> noise <low> <high> <step>`  
Map a sequence of noise values across the canvas. Noise is seeded so stays the same until you refresh the page. 
```js
s0.xps=['n rand 36 72 4 8', 'dur 4', 'cut 0', 'harm rand 0.25 4 0.25']
s0.x=t*4
s0.y=s/2
s0.e=16n
```
## rand
`<param> rand <low> <high> <step>`  
Map a sequence of random values across the canvas. Sequence changes each time you execute the code. For repeatable results, use [noise](#noise).
```js
s0.xps=['n rand 36 72 4 8', 'dur 4', 'cut 0', 'harm rand 0.25 4 0.25']
s0.x=t*4
s0.y=s/2
s0.e=16n
```
## chords
Map a series of chords across the canvas. Chords are written using syntax ```<root`name>```, as in ```d`minorSharp5```. Where the root is omitted, it returns the desired chord with a default tonic of C.

This can be passed directly to `n`. It is also intended for combining the `chord` and `inversion` parameters. See [chord](/docs/docs/parameters/special-parameters#chord) and [inversion](/docs/docs/parameters/special-parameters#inversion).
```js
zps=['chord chords c`min7 d`min7']

// inversion inverts chords in chord parameter above and compiles to the n parameter
s0.xps=['inversion seq  0 1 2 3', 'dur 1', 'cut 0']
s0.x=t*4
s0.y=t*4
s0.z=s * ((c%6)/6)
s0.e=8n

// Can also be passed directly to the n parameter
s1.xps=['n chords c`min7 d`min7', 'dur 1', 'cut 0']
...
```
## scales
Map a series of scales across the canvas. Scales are written using syntax ```<root`name>```, as in ```d`dorian```. Where the root is omitted, it returns the desired scale with a default tonic of C.

Although this can be passed directly to `n`, it is intended to be used by combining the `scale` and `degree` parameters. See [scale](/docs/docs/parameters/special-parameters#scale) and [degree](/docs/docs/parameters/special-parameters#degree).
```js
zps=['scale scales c`ionian d`dorian f`lydian g`mixolydian a`aeolian']

s0.xps=['degree seq [1,3,5,6]', 'dur 1', 'cut 0']
s0.x=t*4
s0.y=t*4
s0.z=s * ((c%6)/6)
s0.e=8n
```
