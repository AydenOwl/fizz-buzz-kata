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