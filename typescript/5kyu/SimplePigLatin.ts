/* 
Move the first letter of each word to the end of it, then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/

export const pigIt = (a : string) : string =>  {
  // split the received string by each word
  let words: string[] = a.split(" ");

  // return the mapped words array
  return words.map((word: string) => {
    // if the current word is alphabetical characters
    // then return the pig latin word
    // else return the word
    return word.match(/[A-z]/i)
      ? `${word.substr(1)}${word.substr(0, 1)}ay` 
      : word
    // join the mapped array of words together by spaces
  }).join(" ");
}
