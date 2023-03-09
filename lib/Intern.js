const Employee = require("./Engineer")

class Intern extends Engineer{
    constructor (
        name, id, email, github, school
    )
    {
        super(name, id, email, github)
        this.school = school
    }

    getRole() {
        return "Intern"
    }
    getSchool() {
        return this.school
    }
}
module.exports = Intern