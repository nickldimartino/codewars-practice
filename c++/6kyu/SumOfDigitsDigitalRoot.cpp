/*
Digital root is the recursive sum of all the digits in a number.

Given n, take the sum of the digits of n. If that value has more 
than one digit, continue reducing in this way until a single-digit 
number is produced. The input will be a non-negative integer.
*/

#include <iostream>
#include <numeric>

int digital_root(int n)
{
  const std::string str = std::to_string(n);
  std::vector<int> nums;
  
  for (char c : str) {
    int ival = c - '0';
    nums.push_back(ival);
  }
  
  int sum = std::accumulate(nums.begin(), nums.end(), 0);

  if (sum > 9) {
    return digital_root(sum);
  }
  
  return sum;
}
