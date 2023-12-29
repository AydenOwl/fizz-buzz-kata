export class FizzBuzz {
    public display(number: number): string {
        let result = ""

        if (this.isMultipleOfThree(number)) {
            result += "Fizz"
        }
        if (this.isMultipleOfFive(number)) {
            result += "Buzz"
        }

        const isMultiple = result !== "";

        if (isMultiple) {
            return result
        }

        return number.toString()
    }

    private isMultipleOfThree(number: number) {
        return this.isMultipleOf(number, 3)
    }

    private isMultipleOfFive(number: number) {
        return this.isMultipleOf(number, 5);
    }

    private isMultipleOf(number: number, multiple: number) {
        return number % multiple === 0;
    }
}