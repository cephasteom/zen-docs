---
sidebar_position: 2
---
# Variables
The following variables represent global constants or changing values, and can be used throughout your code:
* `t`: the current time, expressed as an integer.
* `q`: the amount of divisions per cycle: usually 32. The variable `t`, therefore, increments `q` times per cycle.
* `c`: the current cycle.
* `s`: a variable that represents the size of the canvas: usually 256.
* `s0 .. s7`: objects representing streams, with x, y, e and m parameters (see below).