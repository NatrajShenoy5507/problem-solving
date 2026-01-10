//Context
//Two types of Context: Global and Execution Context
//Execution Context: 1) Variable Object, 2) Scope Chain 3) this
//Rule:
// 1) Function declarations are scanned and made available
// 2) Variable declarations are also scanned and made undefined
tipper("100")
function tipper(a){
    var bill = parseInt (a);
    console.log(bill + 5)
}
// bigTipper(10) // This wont execute because bigTipper is a variable and not a function
var bigTipper=function (a){     
var bill = parseInt(a);
console.log(bill + 5)
}

var name="Natraj";
console.log(name)

//Scope Chain 
var name= "Nattu";
console.log("Nattu")

function nameNattu(){
    console.log("")
}

//This keyword : Gives access to the global scope like Window and all
console.log(this)
var game="Cricket";
function sayGame(){
    var name='Natraj Shenoy'
    console.log(this)
}
sayGame()
