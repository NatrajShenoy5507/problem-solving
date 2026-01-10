//For Each Loop
const names=[
    'HI',
    'My',
    'Name',
    'Is',
    'Natraj',
    'Shenoy',
    'born',
    'on',
    20,
    05,
    1998
]
// names.forEach((m)=>(console.log(m)))
const symbol={
    yt:'YT',
    ig:'IG',
    fb:'FB'
}
for (const n in symbol){
    console.log(`Key is ${n} and Value is ${symbol[n]}`)
}