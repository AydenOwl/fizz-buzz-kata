export class FizzBuzz {
    public display(number: number): string {
        if (this.isMultipleOfThree(number) && this.isMultipleOfFive(number)) {
            return "FizzBuzz"
        }
        if (this.isMultipleOfThree(number)) {
            return "Fizz"
        }
        if (this.isMultipleOfFive(number)) {
            return "Buzz"
        }

        return number.toString()
    }

    private isMultipleOfFive(number: number) {
        return number % 5 === 0;
    }

    private isMultipleOfThree(number: number) {
        return number % 3 === 0;
    }
}