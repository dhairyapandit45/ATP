/*Test Data:
const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

Tasks:
    1. filter() students who passed (marks ≥ 40)
    2. map() to add a grade field
              ≥90 → A
              ≥75 → B
              ≥60 → C
              else → D

   3. reduce() to calculate average marks
   4. find() the student who scored 92
   5. findIndex() of student "Kiran"*/
   const students = [
  { id: 1, name: "Ravi", marks: 78 },
  { id: 2, name: "Anjali", marks: 92 },
  { id: 3, name: "Kiran", marks: 35 },
  { id: 4, name: "Sneha", marks: 88 },
  { id: 5, name: "Arjun", marks: 40 }
];

//filter() students who passed (marks ≥ 40)
   const r1 = students.filter(pass=>pass.marks>=40);
   console.log(r1);

//map() to add a grade field
 const r2 = students.map(student=>{
    let g;
    if(student.marks>=90)
        student.grade="A";
    else if(student.marks<90&&student.marks>=75)
        student.grade="B";
    else if(student.marks<75&&student.marks>=60)
        student.grade="c";
    else 
        student.grade="D"

    return student;

 })
console.log(r2);



//reduce() to calculate average marks
   const r3 = students.reduce((acc,total)=> acc+total.marks,0);
   const avg = r3/students.length;
   console.log(avg);
   
//find() the student who scored 92
   const r4 =students.find(above=>above.marks==92);
   console.log(r4);

//findIndex() of student "Kiran"
   const r5 = students.findIndex(name=>name.name=="Kiran");
   console.log(r5);

