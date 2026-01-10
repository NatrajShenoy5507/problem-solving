function init() {
    var firstName = "Natraj Shenoy";
    function sayFirstName() {
        return console.log(firstName);
    }
    return sayFirstName;
}
var value = init();
// console.log(value)
value()

function doAddition(x){
    return function(y){
        return x+y;
    }
}
var add5 = doAddition(3)
console.log(add5(3))

console.log(doAddition(5)(3))   //curring Topic
