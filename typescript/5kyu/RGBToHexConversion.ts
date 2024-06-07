/* 
The rgb function is incomplete. Complete it so that passing in RGB decimal values will result 
in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any 
values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.
*/

export function rgb(r: number, g: number, b: number): string {
  // the rgb values cannot be less than 0 or greater than 255
  if (r < 0) r = 0;
  if (r > 255) r = 255;
  if (g < 0) g = 0;
  if (g > 255) g = 255;
  if (b < 0) b = 0;
  if (b > 255) b = 255;
  
  // initialize each rgb value to a hex string and capitalized
  let red: string = r.toString(16).toUpperCase();
  let green: string = g.toString(16).toUpperCase();
  let blue: string = b.toString(16).toUpperCase();
  
  // if the number of digits in the rgb string is 1
  // then prefix the character with a 0
  if (red.length === 1) red = `0${red}`;
  if (green.length === 1) green = `0${green}`;
  if (blue.length === 1) blue = `0${blue}`;
  
  // concatenate the rgb values and return it
  return red+green+blue;
}
