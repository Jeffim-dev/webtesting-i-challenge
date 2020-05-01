const { repair, succeed, fail, get } = require("./enhancer.js");

describe("enhancer.js", () => {
  describe("repair()", () => {
    it("accepts an item with the durability resotred to 100", () => {
      const actualItem = {
        name: "AAA",
        durability: 10,
        enhancement: 15
      };
      const expectedItem = {
        name: "AAA",
        durability: 100,
        enhancement: 15
      };
    
      expect(repair(actualItem)).toEqual(expectedItem);
    });
  }); 

  describe("succeed()", () => {
    it("increases enhancement by 1", () => {
      const actualItem = {
        name: "AAA",
        durability: 30,
        enhancement: 15
      };
      const expectedItem = {
        name: "AAA",
        durability: 30,
        enhancement: 16
      };

      expect(succeed(actualItem)).toEqual(expectedItem);
    });

    it("doesn't change enhancement if the enhancement is 20", () => {
      const actualItem = {
        name: "AAA",
        durability: 20,
        enhancement: 20
      };
      const expectedItem = {
        name: "AAA",
        durability: 20,
        enhancement: 20
      };

      expect(succeed(actualItem)).toEqual(expectedItem);
    });
  });

  describe("fail()", () => {
    it("decreases durability by 5 if the enhancement is less than 15", () => {
      const actualItem = {
        name: "AAA",
        durability: 50,
        enhancement: 14
      };

      const expectedItem = {
        name: "AAA",
        durability: 45,
        enhancement: 14
      };

      expect(fail(actualItem)).toEqual(expectedItem);
    });

    it("decrease durability by 10 if the enhancement is 15 or more", () => {
      const actualItem = {
        name: "AAA",
        durability: 45,
        enhancement: 15
      };

      const expectedItem = {
        name: "AAA",
        durability: 35,
        enhancement: 15
      };

      expect(fail(actualItem)).toEqual(expectedItem);
    });

    it("decrease enhancement by 1 if the enhancement is greater than 16", () => {
      const actualItem = {
        name: "AAA",
        durability: 50,
        enhancement: 17,
      };

      const expectedItem = {
        name: "AAA",
        durability: 40,
        enhancement: 16,
      };

      expect(fail(actualItem)).toEqual(expectedItem);
    });
  });
});