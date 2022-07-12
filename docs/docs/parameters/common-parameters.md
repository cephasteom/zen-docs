---
sidebar_position: 1
---

# Common Parameters
## n
`n` refers to midi note number. E.g. 60 = middle C / C4. It accepts a single value, can handle polyphony, and can use parameter functions such as [seq](/docs/docs/parameters/parameter-functions#seq), [range](/docs/docs/parameters/parameter-functions#range), and [chords](/docs/docs/parameters/parameter-functions#chords).
```js
// a single note
'n 60'
// a single chord
'n [40,44,47]'
// sequence
'n seq 36 38 [42,44] 50'
// range 
'n range 0 12 1'
// a chord sequence
'n chords c`minor g`dom7'
```

`n` can be combined using maths operators:
```js
// define a sequence, transpose by 1 or 2 octaves
xps=['n seq 0 4 7', '+n seq 12 24']
```
The example below maps a chromatic scale to the x axis.
```js
xps=['n range 36 48 1']
s0.x=t*8
s0.y=s/2
s0.e=12n
```

## dur
`dur` determines how long each note should sustain, before being released. It is measured in beats, and so is relative to the bpm.
```js
'dur range 0.1 1'
```

## inst
`inst` sets the instrument, or synth, to use, which in turn determines the active parameters. The [Instruments](/docs/docs/instruments-browser/) section lists available instruments and their parameters. If no `inst` is set, defaults to the `fm` synth.

```js
xps=['inst seq fm mem-bd']
s0.x=t*8
s0.y=s/2
s0.e=2n
```

## adsr
`a`, `d`, `s` and `r` are used to control the envelope of most instruments. `a`, `d` and `r` are measured in beats so are relative to the bpm. `s` is a sustain level between 0 and 1.

```js
xps=['inst fm']
yps=['a range 0.01 0.5', 'd 0.1', 's 0.5', 'r 2']
s0.x=t*8
s0.y=t*4
s0.e=2n
```
## cut
Using `cut`, events in one stream can release events in another. Expects integers, or arrays of integers, representing stream indexes
```js
'cut [0,1]'
```

Here, stream `0` cuts off events in its own stream and in stream `1`, each time an event occurs.
```js
s0.xps=['cut [0,1]', 'dur 4']
s0.x=s*0.5
s0.y=t*8
s0.e=4n

s1.xps=['dur 4']
s1.x=s*0.5
s1.y=s - t*8
s1.e=!4n && 8n
```