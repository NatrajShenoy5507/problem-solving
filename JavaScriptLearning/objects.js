var user={
    firstName:'Natraj',
    secondName:'Shenoy',
    age:24,
    role:'QA',
    phone:{
        phoneName:'iPhone 13',
        phoneStorage:128,
        phoneColor:'White'
    },
    courseList:[],
    buyCourse: function(courseName){
        this.courseList.push(courseName)
    },
    getCourseCount: function(){
        return `${this.firstName} is enrolled in total of ${this.courseList.length} courses`
    }
}
var courseList=true
user.facebookSignIn= true;
console.log(user.getCourseCount())