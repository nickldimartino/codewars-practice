/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

export const findOdd = (xs: number[]): number => {
  // initialize the return value
  let retVal: number = xs[0];

  // if the received value is only one character, return it
  if (xs.length === 1) return retVal;

  // iterate over the received number
  for (let i: number = 0; i < xs.length; i++) {
    // initialize a count
    let cnt: number = 0;

    // // iterate over the received number
    for (let j: number = 0; j < xs.length; j++) {
      // if both values are the same
      if (xs[i] === xs[j]) {
        // increment the count
        cnt++;
      }
    }

    // if the current count is not divisible by 2
    if (cnt % 2 !== 0) {
      // set the return value to the current value
      retVal = xs[i];
      break;
    }
  }

  // return the value with an odd number of occurences
  return retVal;
};
