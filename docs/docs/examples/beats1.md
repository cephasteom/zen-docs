# Beats 1
```js
bpm=140

zps=[
    'scale scales f`majPent d`dorian f`lydian a`aeolian', 
    'chord chords f`maj7 d`minor7 a`minor a`minor',
    'delaytime 1.5', 'delayfb 0.75'
]

s0.xps=['inst sampler', 's bd808', 'i 9', 'cut [0,1,3]', 'r 0.1', 'dur 1']
s0.yps=[]
s0.zps=[]
s0.x=t*4
s0.y=s*0.25
s0.z=(floor(c/16)%4) * (s/4)
s0.e=(c2 && 1n) || (!4n && bnoise(t, 0.3, 8))
s0.m=0

s1.xps=['inst sampler', 's clap808', 'i 0', 'cut [0,1,4]', 'locut 300']
s1.yps=[]
s1.zps=[]
s1.x=t*4
s1.y=s/2
s1.z=s0.z
s1.e=off(t, t => 1n, c2 ? -8 : -4)
s1.m=0

s2.xps=['inst sampler', 's hh', 'i 1', 'cut 2', 'vol 0.9', 'dur 0.25', 'locut 300', 'pan rand -0.5 0.5']
s2.yps=[]
s2.zps=[]
s2.x=t*4
s2.y=s*0.75
s2.z=s0.z
s2.e=!s0.e && !s1.e && bnoise(t, 0.5, 8)
s2.m=0

s3.xps=['inst fm', '_harm 0.25', '_modi range 2 20', 'dur 2', 'modosc saw', 'cut 3']
s3.yps=['degree sine 1 8 1', 'a range 0.5 2', 'moda range 0.5 2', 'modcurve exp']
s3.zps=[]
s3.x=spike(t, t => s1e, 0, s/2, 16)
s3.y=reset(t, 0, t => t*4, s0.e)
s3.z=s0.z
s3.e=reset(t, 1, t => s1e, s0.e)
s3.m=1

s4.xps=['inst fm', 'cut 4', 'reverb 0.5', 'delay 0.5', 'dur range 0.5 1', 'moda 0.5',  'carrosc tri']
s4.yps=['inversion sine 1 5 1', '_modi range 1 2', '_harm range 0.5 2 0.25', '-n 12']
s4.zps=[]
s4.x=spike(t, t => s0e, s*0.25, s*0.75, 16)
s4.y=t*4
s4.z=s0.z
s4.e=reset(t, 1, t => s0e, s1.e)
s4.m=1

s5.xps=['inst synth', 'dur 0.1', 'oscs 2', 'spread range 10 100', '_modmodi range 10 1']
s5.yps=['_degree rand 1 16 1', 'osc seq fatsine fattri fmsine fmtri', 'delay rand 0.5 0']
s5.zps=[]
s5.x=spike(t, t => s1e, s*0.75, s*0.25, 16)
s5.y=t*4
s5.z=s0.z
s5.e=s2.e
s5.m=btoggle(0, s0.e)
```