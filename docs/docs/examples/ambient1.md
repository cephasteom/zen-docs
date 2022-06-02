# Ambient 1
Reference s0.x and s0.y in all streams, then gradually move these positions to affect every other stream.

```js
bpm=125

xps=[`scale scales d\`${c%32 < 16 ? 'minPent' : 'dorian'}`, 'delay 0.5', 'delayfb 0.75', 'delaytime 3', 'reverb 0.5', 'locut 300']
zps=['hicut range 500 10000', 'moda range 1 0.1', 'mods range 0.1 1',  'modcurve exp']

const i = c%64 * 4
s0.xps=['inst fm', '+degree 1', 'a 1', 'dur 4', 'cut 0']
s0.yps=['_modi range 1 2', '_harm range 0.25 1 0.25']
s0.zps=[]
s0.x=noise(t/128) * i
s0.y=t*4
s0.z=noise(t/64) * i
s0.e=(c4 && 1n) || bnoise(t, 0.3, 2)
s0.m=1

s1.xps=['inst fm', 'dur 4', 'cut 1', 'carrmod sine', 'reverb 1']
s1.yps=['+degree range 1 10 1', '_modi range 0.1 1', '_harm range 0.5 3 0.5', 'vol range 0.1 1']
s1.zps=['a range 1 0.1']
s1.x=t*4
s1.y=s0.x + (s*0.25)
s1.z=s0.z + (s * 0.25)
s1.e=bnoise(t, 0.3, 3)
s1.m=0

s2.xps=['inst fm', 'a 1', 'dur range 4 1', 'cut 2', 'reverb 1']
s2.yps=['+degree range 1 10 1', 'modi range 0.1 1', 'vol range 0.1 1']
s2.zps=['carrosc seq sine fatsine', 'a range 1 0.1', 'r range 0.1 1']
s2.x=t*4
s2.y=s0.x + (s*0.5)
s2.z=s0.z + (s*0.5)
s2.e=bnoise(t, 0.3, 5)
s2.m=0

s3.xps=['inst fm', 'a 1', 'dur range 4 1', 'oscs 4', 'spread range 10 100', 'reverb 1']
s3.yps=['+degree range 1 10 1', '_modi range 0.1 2', 'vol range 0.1 1']
s3.zps=['carrosc seq fatsine sine']
s3.x=t*4
s3.y=s0.x + (s*0.75)
s2.z=s0.z
s3.e=bnoise(t, 0.3, 7)
s3.m=1

s4.xps=['inst fm', '+degree rand 1 12 1', 'cut 4', 'dur rand 0.1 0.3']
s4.yps=['_modi range 1 5']
s4.zps=['+n seq 0 12', 'a 0.01']
s4.x=t*4
s4.y=s0.x
s4.z=c%32 > 16 && ((c2 && 1n) || s0.e) ? s/2 : 0
s4.e=4n
```