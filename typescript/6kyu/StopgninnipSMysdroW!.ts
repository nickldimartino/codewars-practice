/*
Write a function that takes in a string of one or more words, and returns the same string, but with all words that have five or more 
letters reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included 
only when more than one word is present.
*/

export function spinWords(words: string): string {
  // split the received string into individual words
  const splitWords: string[] = words.split(" ");

  // initialize an empty string to return
  let retWord: string = "";

  // if the current string is greater than or equal to 5, reverse the word and add it to the return string, else add the original word
  splitWords.forEach(w => { w.length >= 5 ? retWord += `${w.split("").reverse().join("")} ` : retWord += `${w} ` });

  // return the string without white spaces at the ends
  return retWord.trim();
}
