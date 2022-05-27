# Functions
Zen supplies a number of functions to keep your expressions readable and brief. These can be roughly divided into:
* Time functions - functions that manipulate time
* Arithmetic functions - functions that return a number. Useful for x, y and z stream parameters
* Logical functions - functions that return a true or false value. Useful for event and mutation parameters

Many of these functions expect an expression as an argument, and manipulate the value of `t` for a particular effect. When passing expressions as arguments, *they must be wrapped in a function with `t` as the argument* - for example, `t => !2n && 4n`, rather than simply `!2n && 4n`. Otherwise, the result of an expression is passed as the argument, rather than a function that delays the evaluation of the expression until `t` has been changed in some way.

Furthermore, when referencing a stream parameter - `s0.e`, `s1.x`, `s5.z`, etc. - within one of these functions, *omit the `.` in order to pass the expression assigned to this parameter*. Otherwise, the result of the expression is passed, rather than the expression itself which can be re-evaluated with a new value of `t` - for example, `t => s0e || 3n` rather than `t => s0.e || 3n`. Under the hood, the parser will replace `s0e` with the code assigned at `s0.e=`.