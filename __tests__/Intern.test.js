const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern")

describe("Intern", () => {
  describe("getSchool", () => {
    it("should return the interns school", () => {
      const intern = new Intern (
        "Carisse", 
        524, 
        "myemail@gmail.com", 
        "Virginia Commonwealth University");
      expect(intern.getSchool()).toBe("Virginia Commonwealth University");
    });
  });

  describe("getRole", () => {
    it("should return 'Intern'", () => {
      const intern = new Intern (
        "Carisse",
        524,
        "myemail@gmail.com",
        "Virginia Commonwealth University");
      expect(intern.getRole()).toBe("Intern");
    });
  });
});