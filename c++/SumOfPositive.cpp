/*
You get an array of numbers, return the sum of all of the positives ones.

Example [1,-4,7,12] => 1 + 7 + 12 = 20

Note: if there is nothing to sum, the sum is default to 0.
*/

#include <vector>

int positive_sum (const std::vector<int> arr){
  int sum = 0;
  
  for (int i = 0; i < arr.size(); i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    } else {
      continue;
    }
  }
  
  return sum;
}
