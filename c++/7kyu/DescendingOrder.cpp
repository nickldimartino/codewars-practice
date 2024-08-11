/*
Your task is to make a function that can take any non-negative integer as 
an argument and return it with its digits in descending order. Essentially, 
rearrange the digits to create the highest possible number.
*/

#include <cinttypes>
#include <iostream>
#include <sstream>
#include <vector>

uint64_t descendingOrder(uint64_t a)
{
  // convert received uint to a string
  const std::string numStr = std::to_string(a);
  
  // save the size of the string
  int len = numStr.size();
  
  // declare vector nums
  std::vector<int> nums;
  
  // declare return string
  std::string retStr = "";
  
  // iterate over the string and push the int value into the vector
  for (int i = 0; i < len; i++) {
    int n = int(numStr[i] - '0');
    nums.push_back(n);
  }
  
  // sort the nums vector in desending order
  std::sort(nums.begin(), nums.end(), std::greater{});
  
  // save the size of the nums array
  int numsSize = nums.size();
  
  // iterate over the nums vector and add each num value to a string
  for (int i = 0; i < numsSize; i++) {
    retStr += std::to_string(nums[i]);
  }
  
  // save a uint64 value
  uint64_t value;
  
  // input string stream to operate on the return string
  std::istringstream iss(retStr);
  
  // add the operable string to the return value
  iss >> value;

  return value;
}
