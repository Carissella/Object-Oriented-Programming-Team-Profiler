const Employee = require("../lib/Employee")
const Manager = require("../lib/Manager")

describe("Manager", () => {
    describe("getOfficeNumber", () => {
        it("would return the managers office number", () => {
            const manager = new Manager(
                "Carisse",
                524,
                "myemail@gmail.com",
                10203040
            );
            expect(manager.getOfficeNumber()).toBe(10203040);
        });
    });

     describe("getRole", () => {
       it("should return 'Manager'", () => {
         const manager = new Manager(
           "Carisse",
           524,
           "myemail@gmail.com",
          10203040
         );
         expect(manager.getRole()).toBe("Manager");
       });
     });
})