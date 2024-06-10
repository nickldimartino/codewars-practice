/* 
Use the ROT13 cipher to decipher to word.
For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.
*/

export function rot13(str: string): string {
  // create a dictionary for letters to numbers
  const dict: any = {
    'A': 1, 'B': 2, 'C': 3, 'D': 4, 'E': 5, 'F': 6, 'G': 7, 'H': 8,
    'I': 9, 'J': 10, 'K': 11, 'L': 12, 'M': 13, 'N': 14, 'O': 15, 'P': 16,
    'Q': 17, 'R': 18, 'S': 19, 'T': 20, 'U': 21, 'V': 22, 'W': 23, 'X': 24,
    'Y': 25, 'Z': 26
  }
  // create a dictionary for numbers to letters
  const dict2: any = {
    1: 'A', 2: 'B', 3: 'C', 4: 'D', 5: 'E', 6: 'F', 7: 'G', 8: 'H',
    9: 'I', 10: 'J', 11: 'K', 12: 'L', 13: 'M', 14: 'N', 15: 'O', 16: 'P',
    17: 'Q', 18: 'R', 19: 'S', 20: 'T', 21: 'U', 22: 'V', 23: 'W', 24: 'X',
    25: 'Y', 26: 'Z'
  }
  
  // initialize an empty string to fill with the cipher
  let retStr: string = "";
  
  // iterate over the received string
  for (let i: number = 0; i < str.length; i++) {
    // if the current iteration is a number, special character, or space
    if (/\d/.test(str[i]) || /\W|_/.test(str[i]) || str[i] === " ") {
      // addd it to the return string
      retStr += str[i];
    } else {
      // convert the current iteration to upper case for dictionary lookup
      let curr: string = str[i].toUpperCase();
      
      // set a flag for the current iteration's case
      let isUpper: boolean = str[i] === str[i].toUpperCase() ? true : false;
      
      // initialize a value for the new cipher value
      let newVal: number;
      
      // check if the current iteration is above or below 13 for the cipher
      if (dict[curr] < 13) {
        // add 13 if it's below 13
        newVal = dict[curr]+13;
        // if the value is above 26, then go around to 1
        if (newVal === 27) newVal = 1;
      } else {
        // subtract 13 if it's above 13
        newVal = dict[curr]-13;
        // if the value is 0, then go around to 26
        if (newVal === 0) newVal = 26;
      }
      
      // set the case of the current iteration to the original now that lookup is done
      isUpper ? retStr += dict2[newVal].toUpperCase() : retStr += dict2[newVal].toLowerCase();
    }
  }
  
  // return the ROT13 cipher string
  return retStr;
}
