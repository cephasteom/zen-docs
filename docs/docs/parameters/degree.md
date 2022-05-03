# Degree
```js
'degree 0 2 4 6'
```
Similar to `voicing`, `degree` populates the `n` parameter using generic scale degrees and a preceding instance of the `scale` parameter. However, `degree` returns only single notes. Using the stream's position in space, it calculates the scale then returns a note from the degrees provided. Whereas `voicing` uses `1` for tonic, `2` for supertonic, and so on, `degree` currently uses zero indexing to facilitate easier calculations.
## Arguments
`degree ...<degree>`
* `degree`: any number of degrees which form a sequence across the axis.

## Example
```js
xps=['scale 8 f`minor c`minor']

s0.yps=['voicing [3,5,6,9] [7,9,10,12]', 'dur 1', 'vol 0.5']
s0.x=s*0.75
s0.y=t*8
s0.e=2n

s1.yps=['degree 0 2 4 6 1 3 5 7']
s1.x=s*0.5
s1.y=t*8
s1.e=8n
```