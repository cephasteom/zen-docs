---
sidebar_position: 3
---
# The Editor

## Key Bindings
* `shift + return` - evaluate / play code
* `esc` - stop everything
* `shift + esc` - stop visuals but continue sound - useful if your machine is grinding to a halt
* `ctrl + <0 - 9>` - paste stream boilerplate snippet

## Features
* `shift + click` the numbers along the bottom to save a code block. `click` to recall.

## Getting Help
For quick help whilst you're making music, or to interrogate what's going on in your code, use the `print()` function. For example, `print(t)` will print the variable `t` once on execution. `print(t, true)` will print the variable `t` on each iteration.

* `print(samples())` to get a list of available samples
* `print(fx())` to get a list of fx and fx params
* `print(synths())` to get a list of synths
* `print(params(type))` to get a list of synth params, for example `print(params('fm'))`

