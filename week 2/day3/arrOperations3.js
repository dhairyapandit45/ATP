/*ASSIGNMENT 3:
-------------
Employee Payroll Processor

You are building a salary processing module in a company HR app.

Test data:
const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

Tasks:
    1. filter() employees from IT department
    2. map() to add:
            netSalary = salary + 10% bonus

    3. reduce() to calculate total salary payout
    4. find() employee with salary 30000
    5. findIndex() of employee "Neha"*/


const employees = [
  { id: 201, name: "Amit", salary: 45000, department: "IT" },
  { id: 202, name: "Neha", salary: 60000, department: "HR" },
  { id: 203, name: "Rahul", salary: 75000, department: "IT" },
  { id: 204, name: "Pooja", salary: 30000, department: "Sales" }
];

//  filter() employees from IT department
const r1 = employees.filter(emp => emp.department == "IT");
console.log(r1);

//  map() to add netSalary = salary + 10% bonus
let r2 = employees.map((employee) => {
  employee.netSalary = employee.salary + (employee.salary * 0.10)
  return employee
})
console.log(r2);

// reduce() total salary payout
const r3 = employees.reduce((acc, emp) => acc + emp.salary, 0);
console.log(r3);

// find() employee with salary 30000
const r4 = employees.find(emp => emp.salary == 30000);
console.log(r4);

// findIndex() of employee "Neha"
const r5 = employees.findIndex(emp => emp.name == "Neha");
console.log(r5);