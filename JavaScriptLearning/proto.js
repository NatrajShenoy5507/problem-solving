var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
        console.log(`Course count is: ${this.courseCount}`)
    };
};
User.prototype.getFirstName = function(){
    console.log(`Your First Name is : ${this.firstName}`)
}
var natraj = new User('Natraj', 4)
natraj.getFirstName()