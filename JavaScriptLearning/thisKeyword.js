console.log(this)
var user={
    firstName:'Natraj',
    courseCount:7,
    getCourseCount: function(){
        console.log("Line 7", this)
    }
}
user.getCourseCount()