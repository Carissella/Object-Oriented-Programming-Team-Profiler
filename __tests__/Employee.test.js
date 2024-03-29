const { extname } = require("path");
const Employee = require("../lib/Employee");

describe("Employee", () => {
    describe("constructor", () => {
        it("would create employee object with a name, id, and email property", () => {
            const employee = new Employee("Carisse", 524, "myemail@gmail.com");

            expect(employee).toEqual({
                name: "Carisse",
                id: 524,
                email: "myemail@gmail.com",
            });
        });
    });

    describe("getName", () => {
        it("would return the employee's name", () => {
            const employee = new Employee("Carisse", 524, "myemail@gmail.com");

            expect(employee.getName()).toBe("Carisse");
        });
    });

    describe("getId", () => {
        it("would return the employee's ID", () => {
            const employee = new Employee("Carisse", 524, "myemail@gmail.com");
    
          expect(employee.getId()).toBe(524);
        });
      });
    
      describe("getEmail", () => {
        it("would return the employee's email", () => {
            const employee = new Employee("Carisse", 524, "myemail@gmail.com");
    
          expect(employee.getEmail()).toBe("myemail@gmail.com");
        });
      });
    
      describe("getRole", () => {
        it("would return 'Employee'", () => {
            const employee = new Employee("Carisse", 524, "myemail@gmail.com");
    
          expect(employee.getRole()).toBe("Employee");
        });
      });

    });