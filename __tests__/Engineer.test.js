const Employee = require("../lib/Employee");
const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getGithub", () => {
    it("should return the engineer's github username", () => {
      const engineer = new Engineer(
        "Carisse",
        524,
        "myemail@gmail.com",
        "Carissella"
      );
      expect(engineer.getGithub()).toBe("Carissella");
    });
  });

  describe("getRole", () => {
    it("should return 'Engineer'", () => {
      const engineer = new Engineer(
        "Carisse",
        524,
        "myemail@gmail.com",
        "Carissella"
      );
      expect(engineer.getRole()).toBe("Engineer");
    });
  });
});