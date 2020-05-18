// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email, github);
    // this.officeNum = officeNum;
    this.role = "Manager";
    this.github = github;
  }
  getRole() {
    return this.role;
  }
  getGithub() {
    return this.github;
  }

  //   getOfficeNum() {
  //     return this.officeNum;
  //   }
}
module.exports = Manager;
