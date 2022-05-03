
# Cut
```js
'cut [0,1] [2,3]'
```
Using `cut`, events in one stream can release events in another.
## Arguments
`cut ...<id>`
* `id`: any number of integers, or arrays of integerss, representing stream IDs - such as `0` or `[1,2]` - mapped equally across the canvas. These can include the stream calling the cut function.
## Example
```js
s0.xps=['cut [0]', 'dur 4']
s0.x=s*0.5
s0.y=t*8
s0.e=4n
```
This releases all active synths in stream `s0`, each time an event is triggered.