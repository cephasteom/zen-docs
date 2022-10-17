# Functions
Zen supplies a number of functions to keep your expressions readable and brief. These can be roughly divided into:
* Time functions - functions that manipulate time
* Arithmetic functions - functions that return a number. Useful for x, y and z stream parameters
* Logical functions - functions that return a true or false value. Useful for event and mutation parameters

Many of these functions expect an expression as an argument, and manipulate the value of `t` for a particular effect. 

When referencing another stream parameter - `s0.e`, `s1.x`, `s5.z`, etc. - within an expression, *wrap the reference in {} in order to pass the expression assigned to the parameter, rather than the result of the expression*. Under the hood, the parser replaces these shorthands with the code assigned at the corresponding stream parameter. For example,
```js
s0.e=1n

s1.x=t*4
s1.y=spike((s0.e), s*0, s/2, 0.5)
```