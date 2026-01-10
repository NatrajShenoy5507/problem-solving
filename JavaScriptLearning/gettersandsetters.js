const User = require('./classes')

const ambika = new User("Ambika", "nambika2022@gmail.com")
console.log(ambika.getInfo());
ambika.enrollCourse('JAVA Developement')
ambika.enrollCourse('Android Application Developement')
console.log(ambika.getCourseList())
console.log(ambika.courseList)