/* 
You are given an array (which will have a length of at least 3, but could be very large) 
containing integers. The array is either entirely comprised of odd integers or entirely 
comprised of even integers except for a single integer N. Write a method that takes the 
array as an argument and returns this "outlier" N.
*/

export function findOutlier(integers: number[]): number {
  // initialize variable for array length
  const len: number = integers.length;
  
  // initialize positive and negative counts
  let posCnt: number = 0;
  let negCnt: number = 0;
  
  // iterate over the recevied array
  for (let i: number = 0; i < len; i++) {
    // if the current iteration is positive
    // increase the positive count
    // if the current iteration is negative
    // increase the negative count
    // else continue
    if (integers[i] % 2 === 0) {
      posCnt++;
    } else if (integers[i] % 2 !== 0) {
      negCnt++;
    } else {
      continue;
    }
  }
  
  // iterate over the received array
  for (let j: number = 0; j < len; j++) {
    // if the positive count is 1 and the current iteration is positive
    // then the current iteration is the only positive value
    // if the negative count is 1 and the current iteration is negative
    // then the current iteration is the only negative value
    if (posCnt === 1 && integers[j] % 2 === 0) {
      return integers[j];
    } else if (negCnt === 1 && integers[j] % 2 !== 0) {
      return integers[j];
    } else {
      continue;
    }
  }
  
  // a parity outlier was not found
  return -1;
}
