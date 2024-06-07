/* 
If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Finish the solution so that it returns the sum of all the multiples of 3 or 5 below the number passed in.

Additionally, if the number is negative, return 0.

Note: If the number is a multiple of both 3 and 5, only count it once.
*/

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
