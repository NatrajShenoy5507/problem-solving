// const user=["Natraj Shenoy", 25, "QA Engineer"]
// var [name, age, role]= user;

const myUser={
    name:'Natraj Shenoy',
    age:25,
    role:'QA Engineer'
}
console.log(myUser.role)

//Destructure
const {name, age, role}= myUser;
console.log("Age",age)