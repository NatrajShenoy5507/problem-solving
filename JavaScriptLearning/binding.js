const hitesh = {
    firstName :"Hitesh",
    lastName : "Choudhary",
    role: "Admin",
    courseCount: 3,
    getInfo : function(){
        console.log(`
        FirstName is ${this.firstName}
        LastName is ${this.lastName}
        Courses: ${this.courseCount}
        `)
    }
    }
    const natraj ={
        firstName :"Natraj",
        lastName : "Shenoy",
        role: "Developer",
        courseCount: 5,
    }
   var natrajInfo= hitesh.getInfo.bind(natraj);
   natrajInfo()
   //bind gives reference back and should run it
   