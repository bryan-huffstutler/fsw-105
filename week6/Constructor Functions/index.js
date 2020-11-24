let employees = [];

function Employee (name, title, salary, status = "Full Time"){
  this.name = name;
  this.title = title;
  this.salary = salary;
  this.status = status;
  this.printEmployeeForm = function (){
    console.log(`Name: ${name} \nTitle: ${title} \nSalary: ${salary} \nStatus: ` + this.status);
  };
  employees.push(this);
}

let bobSmith = new Employee("Bob Smith", "Supervisor", "$58,000");

let johnDoe = new Employee("John Doe", "Contractor", "Paid Per Job");
johnDoe.status = "Contractor";

let janeDoe = new Employee("Jane Doe", "Field Technician", "$42,000");


bobSmith.printEmployeeForm();
johnDoe.printEmployeeForm();
janeDoe.printEmployeeForm();
/*
function addEmployeeToAnArray(emp){
  employees.push(emp);
}

//Add each employee instance to the array
addEmployeeToAnArray(bobSmith);
addEmployeeToAnArray(johnDoe);
addEmployeeToAnArray(janeDoe);
*/
console.log(employees);