---
sidebar_position: 3
---
# Helper Functions
Some useful utility functions.

## mtr
Map to range.

`mtr(x, inLo, inHi, outLo, outHi)`

## mtsr
Map to step range.

`mtr(x, inLo, inHi, outLo, outHi, step)`

## ttb
Text to binary. Useful for [bpat](/docs/docs/functions/logical-functions).

`ttb(string, slice)`

```js
s0.x = t*4
s0.y = s/2
s0.e = bpat(ttb('hello world!', 16), 1)
```

## ntb
Number to binary. Useful for [bpat](/docs/docs/functions/logical-functions).

`ntb(number, slice)`

```js
s0.x = t*4
s0.y = s/2
s0.e = bpat(ntb(32864738264, 32), 2)
```

## load
You can use `load()` to recall code blocks saved in the presets, allowing you to pattern musical sections. Under the hood, Zen's parser replaces `load()` with a full block of code, meaning that ternary conditional statements don't work. Use `if`, `elseif`, `else`, `switch`, etc. instead.

`load(id: number)`

```js
if(c%8 < 4) {
    load(1)
} else {
    load(2)
};
```