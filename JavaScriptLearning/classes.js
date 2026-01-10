//Classes and Objects in JavaScript

//Classes are like blue print

class User{
    constructor(name, email){
        this.name=name;
        this.email=email
    }
    #courseList=[]; //This is Private
    getInfo(){
        return{name: this.name, email:this.email}
    }
    enrollCourse(name){         //Setters
        this.#courseList.push(name)
    }
    getCourseList(){            //Getters
        return this.#courseList;
    }
     login(){     //ststic is personal property type
        return("You are Logged in")
    }
}

module.exports= User





