const Employee = require("./Employee");


//In C# the Engineer class is inheriting the properties of the employee class 
class Engineer extends Employee 
{
    constructor (name, id, email, github) 
    {
        super(name, id, email);
        this.github = github;
    }
    getRole() 
    {
        return "Engineer";
    }
    getGithub() 
    {
        return this.github;
    }
}

module.exports = Engineer;