---
sidebar_position: 4
---

# Visuals
Zen has it's own inbuilt visualiser, hosted separately and served through an iframe so that they render on a separate thread. This greatly improves performance and opens opportunity for you to create you own visuals.

## Custom Visuals
To use a custom script, add the following query string to the app url:

`?visuals-src=<some-url>`

For example:
`?visuals-src=http://localhost:3002`

To see what data Zen sends out, put the following snippet into your script, and go from there:
```js
window.addEventListener("message", function(e) {
    const { sender, action, t, data} = e.data
    if (sender !== 'zen') return;
    
    console.log(action, t, data)
});
```