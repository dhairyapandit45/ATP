const employees = [
  {
    eno: 101,
    name: "Ravi",
    marks: [78, 82, 91],
  },
  {
    eno: 102,
    
    name: "Bhanu",
    marks: [65, 70, 68],
  },
  {
    eno: 103,
    name: "Sneha",
    marks: [88, 92, 95],
  },
  {
    eno: 104,
    name: "Kiran",
    marks: [55, 60, 58],
  },
  {
    eno: 105,
    name: "Anitha",
    marks: [90, 85, 87],
  },
];




//Insert new Emp at 2nd position
//Remove an emp with name "Kiran"
//Change the last mark 95 to 75 of emp  "Sneha"

//Insert new Emp at 2nd position
employees.splice(1,0,{eno:106,name:"yuvi",marks:[70,80,90]});
console.log(employees);


//Remove an emp with name "Kiran"
for(i in employees ){
    if(employees[i].name=="Kiran")
    {
        employees.splice(i,1);
    }
}
console.log(employees);


//Change the last mark 95 to 75 of emp  "Sneha"
for(i in employees ){
    if(employees[i].name=="Sneha")
    {
        for(j in  employees[i].marks){
          if( employees[i].marks[j]==95)
        employees[i].marks.splice(j,1,75);
    }
}
}
console.log(employees);


