export class FizzBuzz {
    public display(number: number): string {
        if (this.isMultipleOfThree(number)) {
            return "Fizz"
        }
        return number.toString()
    }

    private isMultipleOfThree(number: number) {
        return number % 3 === 0;
    }
}