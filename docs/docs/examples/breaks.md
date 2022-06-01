# Breaks

```js
bpm=160
v.y = -45

const shouldFill = t%(4*q) > (3*q) || t%(2*q) > 48 
const zPat = (t%(16*q) < 8*q && 1)
    || (t%(16*q) < 12*q && s/2)
    || (t%(16*q) < 16*q && s*0.75)
zps=['scale scales d`hirajoshi e`dorian c`minor']

s1.xps=['inst sampler', 's cpu2', 'i 0', 'cut [0,1,2]', 'dur 2', 'r 0.5']
s1.yps=[]
s1.zps=[]
s1.x=t*4
s1.y=s/2
s1.z=zPat
s1.e=!shouldFill && (1n || off(t, t => 1n, -20))
s1.m=0

s2.xps=['inst synth', 'degree range 1 2 3 5 7 8', '-n 12', 'dur range 1 2', 'cut 2']
s2.yps=['osc fmsine', 'oscmod sine', '_oscmodi range 2 4', '_oscharm range 1 0.25 0.25']
s2.zps=[]
s2.x=!shouldFill ? t*4 : t*6
s2.y=!shouldFill ? noise(t) * 8 : noise(t/q) * s
s2.z=zPat
s2.e=!shouldFill ? 2n : bnoise(t, 0.5, 16)
s2.m=1

s0.xps=['inst sampler', 's breaks', 'i rand 0 1', 'begin range 0 1', 'cut 0', 'locut 300']
s0.zps=['+i seq 0 1 2', 'snap seq 512 512 512 256']
s0.x=shouldFill ? floor(noise(t/q) * 16) * (s/16) + (s/16) : t*2
s0.y=s/2
s0.z=zPat
s0.e=t%(16*q) > 12*q ? 8n : !s2.e && t%32 < 16 ? 8n : 16n
s0.m=0


s3.xps=['inst synth', 'osc seq fatsine fattri', 'degree seq [1,3,5] [0,2,4]', 'dur 4', 'cut 3', 'a range 0.1 1', 'oscs 2']
s3.yps=['reverb 1', 'locut 300', 'spread range 10 100']
s3.zps=['+n range 0 24 12']
s3.x=t*2
s3.y=t*0.5
s3.z=zPat
s3.e=!shouldFill && 2n
s3.m=0
```