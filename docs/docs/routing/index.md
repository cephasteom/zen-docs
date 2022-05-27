# Routing
## Multichannel
Zen for the browser is designed to be plugin and play. Later iterations may enable more custom configuration. However, currently by default, Zen connects to your output (in most cases your stereo speakers or headphones), giving you two channels of audio. 

If your output device has more channels than this, Zen automatically places each stream on a stereo pair, with effects routed to the final pair. Ie. if your output device has 8 channels:
```js
s0 // on channels 0 and 1
s1 // on channels 2 and 3
s2 // on channels 4 and 5
effects // on channels 6 and 7
```
