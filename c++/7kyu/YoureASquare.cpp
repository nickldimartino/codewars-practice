/*
Given an integral number, determine if it's a square number:
*/

#include <cmath>

bool is_square(int n)
{
  const int sq = sqrt(n);
  return sq*sq == n;
}
