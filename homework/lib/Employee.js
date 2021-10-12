
//Setting up the class object like this makes it better to under stand the structure
//This is very much like C# programming and how a class is created.
//this is similar to that of an empty C# class with getters and setters
class Employee
{
    constructor(name, id, email)
    {
        this.name = name;
        this.id = id;
        this.email = email;
    }
    
    getName()
    {
        return this.name;
    }

    getId()
    {
        return this.id;
    }

    getEmail()
    {
        return this.email;
    }

    getRole()
    {
        return "Employee";
    }

}

module.exports = Employee;