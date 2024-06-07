/* 
You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. 
We want to create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. It must return the display 
text as shown in the examples:
*/

export const likes = (a : string[]) : string => {
  // initialize the length of the received array
  const len: number = a.length;

  // if the array is empty, no one likes this
  if (len <= 0) return "no one likes this";

  // if the array has 1 name, one person likes this
  if (len === 1) return `${a[0]} likes this`;

  // if the array has 2 names, two people like this
  if (len === 2) return `${a[0]} and ${a[1]} like this`;

  // if the array has 3 names, three people like this
  if (len === 3) return `${a[0]}, ${a[1]} and ${a[2]} like this`;

  // if the array has more than 3 names, many people like this
  return `${a[0]}, ${a[1]} and ${len-2} others like this`;
}
