var User = function (firstName, courseCount) {
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function () {
    console.log(`Course count is: ${this.courseCount}`)
    };
    };
    var hitesh = new User("hitesh", 2);
    console.log(hitesh.firstName);
   
    var sam = new User("Sam", 1);
    console.log(sam.getCourseCount());