# Inst
`inst` sets the instrument, or synth, to use, which in turn determines the active parameters. The [Instruments](/docs/docs/instruments/) section lists available instruments and their parameters.
## Arguments
`inst ...<name>`
* `name`: any number of instrument names which will be mapped across the canvas. A stream can therefore use multiple instruments.

## Example
```js
xps=['inst fm mem-bd']
s0.x=t*8
s0.y=s/2
s0.e=2n
```

