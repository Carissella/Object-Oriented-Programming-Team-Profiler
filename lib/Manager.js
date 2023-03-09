const Employee = require("./Intern")

class Manager extends Employee{
    constructor (
        name, id, email, github, school, officeNumber
    )
    {
        super(name, id, email, github, school)
        this.officeNumber = officeNumber
    }

    getRole() {
        return "Manager"
    }

    getOfficeNumber() {
        return this.officeNumber
    }
}
module.exports = Manager