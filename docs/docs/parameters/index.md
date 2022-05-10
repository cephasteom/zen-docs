# Parameters
The following is an overview only. You might want to read the tutorial for more guidance.

## Overview
Parameters are mapped to the x, y and z axes of the canvas, either globally, or per stream, and are written as arrays of special parameters strings.
```js
// Global parameters - these are available for all streams
xps=['n seq 34 36 38 40']
yps=['pan range -1 1']
zps=['reverb 0.5', 'chorus range 0 1']

// Local parameters - only available to the particular stream
s0.xps=['inst fm']
s0.yps=['harm range 1 4 0.25']
```

When you trigger an event or mutation at a particular point in space, under the hood, these compile to an object - for example `{n: 36, reverb: 0.25, harm: 3.75}` - and sent to the synthesis engine as arguments.

## Syntax
### Single values
Single values can be supplied to parameters using the syntax `<name> <value>`, as in:
```js
s0.xps=['n 60']
```
### Multiple values
Multiple values can be supplied to parameters using the syntax `<name> <functionName> <...args>`, as in:
```js
// a continuous range of values
s0.xps=['modi range 0 4']
// a step range of values
s0.xps=['n range 0 12 1']
// a sequence of values
s0.xps=['amp seq 0 0.25 0.5 0.75']
```
See [Parameter Functions](/docs/docs/parameters/parameter-functions) for a list of available functions

## Combining Parameters
Parameters are inherited from global `xps`, `yps`, `zps`, then stream `xps`, `yps`, `zps`. Duplicate parameters overwrite each other, but you can combine most parameters using the common maths operators `+`, `-`, `*`, `/` - for example:
```js
xps=['+n seq 34 36 38 40']
```

## Mutating Parameters
Prefix a parameter name with a `_` if you want it to modulate when a stream mutates.
```js
// harmonicity mutates, modi doesn't
s0.xps=['_harm range 1 4', 'modi seq 1 4 2 3']
s0.m=t%q < q/2
```

## Parameter Names
Zen is pretty agnostic about the parameter names you provide - to keep things open for integration with other tech. That said, there's a few [common parameters](/docs/docs/parameters/common-parameters) which you'll use a lot, and others that become active when you've chosen a particular instrument. Common parameter names are listed in this section, with instrument specific parameters listed in the instruments section.