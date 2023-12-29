import {FizzBuzz} from "../src/FizzBuzz";

describe("FizzBuzz", () => {
    it("displays number when not a multiple of 3 or 5", () => {
        const number = 1
        const result = new FizzBuzz().display(number)
        expect(result).toStrictEqual("1")
    })
    it("displays Fizz when number is divisible by 3", () => {
        const multipleOfThree = 9
        const result = new FizzBuzz().display(multipleOfThree);
        expect(result).toStrictEqual("Fizz")
    })
})