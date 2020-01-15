var employees = [""]

function Employee(name, jobT, salery, status){
    this.name = name
    this.jobT = jobT
    this.salery = salery
    this.status = status

}
var employee1 = new Employee("rick","shut up","more","whenever")

var employee2 = new Employee("morty","doboy","nothin","24d")

var employee3 = new Employee("noob","broo","stacks","fulltime")

var employee4 = new Employee("jerry","broke","none","never")


employees.push(employee1)

employees.push(employee2)

employees.push(employee3)

employees.push(employee4)
console.log(employees)