/* 
Create a function taking a positive integer between 1 and 3999 (both included) as its parameter and returning 
a string containing the Roman Numeral representation of that integer.
*/

export function solution(number: number): string {
  // create arrays for the decimals and roman numerals
  let decimals: number[] = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  var romans: string[] = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
  
  // initialize the return string
  let result: string = "";
  
  // save the received number in a new variable so the parameter is not modified
  let recNum: number = number;
  
  // map over the decimals
  decimals.map((val: number, idx: number) => {
    // the received number should not be less than the mapped value
    while (recNum >= val) {
      // add the roman numeral to the string
      result += romans[idx];
      
      // remove the roman numerlal equivalent number from the received number
      recNum -= val;
    }
  });
  
  // return the roman numeral string
  return result;
}
