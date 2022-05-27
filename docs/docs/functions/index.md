# Functions
Zen supplies a number of functions to keep your expressions readable and brief. These can be roughly divided into:
* Time functions - functions that manipulate time
* Arithmetic functions - functions that return a number. Useful for x, y and z stream parameters
* Logical functions - functions that return a true or false value. Useful for event and mutation parameters

Many of these functions expect an expression as an argument, and manipulate the value of `t` for a particular effect. When passing expressions as arguments, *they must be wrapped in a function with `t` as the argument* - for example, `t => !2n && 4n`, rather than simply `!2n && 4n`. Otherwise, the result of an expression is passed as the argument, giving us no ability to manipulate `t`. Using a function enables us to pass in a changed `t` value at the point of execution.

Furthermore, when referencing another stream parameter - `s0.e`, `s1.x`, `s5.z`, etc. - within one of these functions, *omit the `.` in order to pass the expression assigned to the parameter, rather than the result of the expression*. Under the hood, the parser replaces these shorthands with the code assigned at the corresponding stream parameter. For example,
```js
s0.e=!2n && 4n

s1.e=off(t, t => s0e, 16)
```
is replaced by:
```js
s0.e=!2n && 4n

s1.e=off(t, t => !2n && 4n, 16)
```