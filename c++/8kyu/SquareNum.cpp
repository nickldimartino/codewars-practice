/*
Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

#include <vector>
#include <cmath>

int square_sum(const std::vector<int>& numbers)
{
  int len = numbers.size();
  int sum = 0;
  
  for (int i = 0; i < len; i++) {
//     sum += numbers[i] * numbers[i];
      sum += pow(numbers[i], 2);
  }
  
  return sum;
}
