function init (){
    var firstName = 'Natraj';
    function sayFirstName(){
        console.log(this.firstName)
    }
    sayFirstName()
}
init()
console.log(firstName)