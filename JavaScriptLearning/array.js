var countries=['India','USA','Japan']
var states= new Array('Karnataka', 'Delhi','Mumbai')
states[3]="Goa"
console.log(countries)
states.unshift("Kerala")
console.log(states)
// countries.shift("Germany")
console.log(countries)

//CallBacks
var isEven=(element)=>{
    return element%2===0;
};
var result=[2,4,6,8].every((e)=>(e%2===0));
console.log(result)

