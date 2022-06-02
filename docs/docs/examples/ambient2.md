# Ambient2

```js
bpm=160
v.b=1

const zPat = (floor(c/16)%4) * (s/4)

xps=[
    'inst fm', 
    'reverb 0.5',
    'delay 0.25', 'delaytime 3', 'delayfb 0.5'
]
yps=['dur range 0.5 0.1', 'harm 1']
zps=['scale scales f`majPent d`dorian f`lydian a`aeolian']

s0.xps=[]
s0.yps=['_modi range 1 0.5', '_harm range 0.5 2 0.5', 'moda range 1 0.1', 'cut 0', 'degree sine 1 8 1']
s0.zps=[]
s0.x=fast(t, t => sin(t/64)*(s/2), 2)
s0.y=cos(t/q)*(s/2)-128
s0.z=zPat
s0.e=c%16 < 8 ? 2n : 4n
s0.m=0

console.log()

s1.xps=['degree sine 1 16 1', 'a range 0.1 1', 'cut 1']
s1.yps=[]
s1.zps=[]
s1.x=off(t, t => s0x, c%16)
s1.y=0
s1.z=s0.z
s1.e=!s0.e && 16n
s1.m=0

s2.yps=['degree sine 1 16 1', '_modi range 1 0.5', '_harm range 0.5 3 0.5', 'moda range 1 0.1', 'cut 2']
s2.zps=[]
s2.x=slow(t, t => s0x, 2)
s2.y=fast(t, t => s0y, 2)
s2.z=s0.z
s2.e=c%32 > 16 && c%16 < 8 ? 2n : 4n
s2.m=1
```