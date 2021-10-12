const Employee = require("./Employee");

//In C# the Intern class is inheriting the properties of the employee class 
class Intern extends Employee 
{
    constructor (name, id, email, school) 
    {
        super (name, id, email);
        this.school = school;
    }
    getRole() 
    {
        return "Intern";
    }
    getSchool() 
    {
        return this.school;
    }
}

module.exports = Intern;