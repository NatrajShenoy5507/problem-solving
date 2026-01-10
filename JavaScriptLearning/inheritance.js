const User = require('./classes')
class subAdmin extends User{
    constructor(name, email){
       super(name, email)
    }
    getAdminInfo(){
        return "Iam Sub Admin"
    }
    login(){
        return "Login for Admin Only"
        super()
    }
}
const tom =new subAdmin("Tom", "tom@jeery.com")
console.log(tom.getAdminInfo())
console.log(tom.login())
console.log(tom.getInfo())