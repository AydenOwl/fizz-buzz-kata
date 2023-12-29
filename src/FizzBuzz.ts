export class FizzBuzz {
    public display(number: number): string {
        if (this.isMultipleOfThree(number)) {
            return "Fizz"
        }
        if (number % 5 === 0) {
            return "Buzz"
        }
        return number.toString()
    }

    private isMultipleOfThree(number: number) {
        return number % 3 === 0;
    }
}