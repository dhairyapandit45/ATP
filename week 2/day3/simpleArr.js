const courses = ["javascript", "react", "node", "mongodb", "express"];

// 1. filter() courses with name length > 5
let filtered = courses.filter((course) => course.length > 5)
console.log(filtered)

// 2. map() to convert course names to uppercase
let uppercase = courses.map((course) => course.toUpperCase())
console.log(uppercase)

// 3. reduce() to generate a single string: "JAVASCRIPT | REACT | NODE | MONGODB | EXPRESS"
let combined = courses.reduce((acc, course, index) => {
  if (index === 0) {
    return course.toUpperCase();
  }
  return acc + " | " + course.toUpperCase();
}, "")
console.log(combined)

// 4. find() the course "react"
let found = courses.find((course) => course === "react")
console.log(found)

// 5. findIndex() of "node"
let foundIndex = courses.findIndex((course) => course === "node")
console.log(foundIndex)