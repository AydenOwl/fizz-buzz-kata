import {FizzBuzz} from "./src/FizzBuzz";

for (let i = 1; i < 101; i++) {
    const result = new FizzBuzz().display(i)
    console.log(result)
}