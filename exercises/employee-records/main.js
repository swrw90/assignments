var employees = []

function Employee(name, title, salary, status) {
    this.name = name;
    this.title = title;
    this.salary = salary;
    this.status = "Full Time";
    this.printEmployeeForm = function() {
        console.log(this);
    }
}

var jim = new Employee("jim", "Student", "$" + 0, "");

var bob = new Employee("bob", "Student", "$" + 0, "");

var bill = new Employee("bill", "Student", "$" + 0, "");

bill.status = "Part Time"

bill.printEmployeeForm();