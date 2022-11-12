const courseList = [{code: "ACIT 1620", name: "Web Fundamental technologies"},
{code: "ACIT 1420", name: "Introduction to System Administration"},
{code: "ACIT 1630", name: "Database Systems"},
]

let userInput = prompt('Enter four digit BCIT course:')
if(isNaN(userInput) | userInput.length !== 4){
    userInput = prompt('Invalid data')
}

let coursename = false;
    for (course of courseList){
        if(course.code.includes(userInput)){
            console.log('Yes I am Taking the course:', course.code, " - ", course.name)
            hasName = true;
        }
    }

if(!coursename){
    courseList.push({code:userInput, name: null})
}
console.log(courseList)



