/* 
Write a function dirReduc which will take an array of strings and returns an 
array of strings with the needless directions removed (W<->E or S<->N side by side).
*/

export function dirReduc(arr: string[]): string[] {
  // initialize length of received array
  const len: number = arr.length;
  
  // initialize empty stack
  let dir: string[] = [];
  
  // add the first element in received array to stack
  dir.push(arr[0]);
  
  // iterate over the received array
  for (let i: number = 1; i < len; i ++) {
    // save the length of the stack
    let m: number = dir.length;
    
    // add the current iteration to the stack
    dir.push(arr[i]);
    
    // the stack must be greater than or equal to 1
    if (m >= 1) {
      // if the stack has redundant directions
      // then remove them
      if (dir[m] === "NORTH" && dir[m-1] === "SOUTH" ||
          dir[m] === "SOUTH" && dir[m-1] === "NORTH" ||
          dir[m] === "EAST" && dir[m-1] === "WEST" ||
          dir[m] === "WEST" && dir[m-1] === "EAST") {
        dir.pop();
        dir.pop();
      }
    } 
  }
  
  // return the necessary directions left in the stack
  return dir;
}
