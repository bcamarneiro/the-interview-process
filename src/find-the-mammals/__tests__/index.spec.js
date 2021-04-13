import { expect } from "chai";
import findTheMammals from "../index";

const animals = [
  {
    type: "Dog",
    mammal: true,
  },
  {
    type: "Snake",
    mammal: false,
  },
  {
    type: "Cheetah",
    mammal: true,
  },
];

describe("Find the Mammals test", () => {
  describe("findTheMammals function", () => {
    it("should say return the mamals", () => {
      expect(findTheMammals(animals)).to.eql([
        {
          type: "Dog",
          mammal: true,
        },
        {
          type: "Cheetah",
          mammal: true,
        },
      ]);
    });
  });
});
