/*
Given an array of integers, find the one that appears an odd number of times.

There will always be only one integer that appears an odd number of times.
*/

#include <vector>
#include <iostream>

int findOdd(const std::vector<int>& numbers){
  const int sz = numbers.size();
  int cnt = 0;
  int foundVal = 0;
  
  for (int i = 0; i < sz; i++) {
    cnt = 0;
    int curVal = numbers[i];
    for (int j = 0; j < sz; j++) {
      if (curVal == numbers[j]) {
        cnt++;
      }
    }
    
    if (cnt % 2 != 0) {
      foundVal = curVal;
      break;
    } else {
      continue;
    }
  }
  return foundVal;
}
