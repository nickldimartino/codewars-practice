/*
In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
*/

#include <string>
#include <iostream>
#include <sstream>
#include <vector> 
using namespace std;

std::string highAndLow(const std::string& numbers) {
  // istringstream is an input string class to operate on strings
  // sets the stream to the input string of numbers
  istringstream iss(numbers);
  
  // string iterator oof the string
  string s;
  
  // save an empty vector for the nums
  vector<int> nums;
  
  // add each string number split by the spaces to the nums vector
  while ( getline( iss, s, ' ' ) ) {
    nums.push_back(stoi(s));
  }
  
  // get the min and max values of the nums
  int max = *max_element(nums.begin(), nums.end());
  int min = *min_element(nums.begin(), nums.end());
  
  // return the max and min values as a single string
  return to_string(max) + " " + to_string(min);
}
