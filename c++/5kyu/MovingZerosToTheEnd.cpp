/*
Write an algorithm that takes an array and moves all of the zeros 
to the end, preserving the order of the other elements.
*/

#include <vector>

std::vector<int> move_zeroes(const std::vector<int>& input) {
  const int sz = input.size();
  int cnt = 0;
  std::vector<int> nums;
  
  for (int i = 0; i < sz; i++) {
    if (input[i] != 0) {
      nums.push_back(input[i]);
    } else {
      cnt++;
    }
  }

  for (int i = 0; i < cnt; i++) {
    nums.push_back(0);
  }
  
  return nums;
}
