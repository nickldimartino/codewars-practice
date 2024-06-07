export class Challenge {
  static solution(number: number) {
    // initialize a sum
    let sum: number = 0;

    // if the received number is less than 0, return the sum
    if (number < 0) return sum;

    // iterate to the received number
    for (let i = 0; i < number; i++) {
      // if the current iteration is divisble by 3 or 5
      if (i % 3 === 0 || i % 5 === 0) {
        // add the iteration to the sum
        sum += i;
      }
    }

    // return the sum
    return sum;
  }
}
