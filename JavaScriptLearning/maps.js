var myMap = new Map()

myMap.set(0,"Natraj")
myMap.set(1,"Shenoy")
myMap.set(2,"M")
myMap.set(3,"Ambika")
myMap.set(4,"Nayak")
myMap.set(5,"N")

console.log(myMap)

for(let [key, value] of myMap){
    console.log(`Key is ${key} & Value is ${value}`)
}

myMap.forEach((key, value)=>console.log(`${value}`))