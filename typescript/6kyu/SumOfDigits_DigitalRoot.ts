/* 
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in 
this way until a single-digit number is produced. The input will be a non-negative integer.
*/

export const digitalRoot = (n:number):number => {
  // split the received number by each digit
  let arr: string[] = n.toString().split("");

  // initalize a sum
  let sum: number = 0;

  // add each number in the array to the sum
  arr.forEach((e: string) => {
    sum += Number(e);
  });

  // if the current sum has 2 or more digits
  if (sum.toString().split("").length >= 2) {
    // recursively call this function and return the result
    return digitalRoot(sum);
  }

  // return the current sum if it has 1 digit
  return sum;
};
