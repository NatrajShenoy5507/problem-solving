const User = require('./classes')

const natraj = new User("Natraj Shenoy", "natrajshenoy@gmail.com")
console.log(natraj.getInfo())
natraj.enrollCourse("React Zero to Hero")
natraj.enrollCourse("Javascript Mastery")
console.log(natraj.getCourseList())
let courses = natraj.getCourseList();
courses.forEach(c=>console.log(c))