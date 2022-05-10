---
sidebar_position: 3
---
# Parameter Functions
Multiple values can be supplied to a parameter using the syntax `<param> <functionName> <...args>`.
## range
`<param> range <low> <high> <step?>`  
Map a range from low to high across the canvas. Omit the step for a continuous range, provide the step to quantize values. Values should all be numbers.
```js
// continuous range from 0 to 4
s0.xps=['modi range 0 4']
// range from 1 to 4, in steps of 0.5
s0.xps=['harm range 1 4 0.5']
```
## rangex
To do
## seq
`<param> seq <...args>`  
Map a sequence of values across the canvas. Accepts any number of arguments, which can be numbers, strings, or arrays of numbers where appropriate.
```js
// n accepts arrays as it can handle polyphony
s0.xps=['n seq 36 38 [40,42,45] 60']
// instrument expects strings
s0.xps=['inst seq fm mem-bd']
```
## sine
To do
## square
To do
## saw
To do
## tri
To do
## noise
To do

## chords
To do
## scales
Map a series of scales across the canvas. Scales are written using syntax ```<root`name>```, as in ```d`dorian```. Where the root is omitted, it returns the desired scale with a default tonic of C.

Although this can be passed directly to `n`, it is intended for be used by combining the `scale` and `degree` parameters. See [scale](/docs/docs/parameters/special-parameters#scale) and [degree](/docs/docs/parameters/special-parameters#degree).
```js
zps=['scale scales c`ionian d`dorian f`lydian g`mixolydian a`aeolian']

s0.xps=['degree seq [1,3,5,6]', 'dur 1', 'cut 0']
s0.x=t*4
s0.y=t*4
s0.z=s * ((c%6)/6)
s0.e=8n
```
