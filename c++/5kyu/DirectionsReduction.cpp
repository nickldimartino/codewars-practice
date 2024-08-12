/*
Write a function dirReduc which will take an array of strings and returns an 
array of strings with the needless directions removed (W<->E or S<->N side by 
side).
*/

#include <iostream>

class DirReduction
{
public:
    static std::vector<std::string> dirReduc(std::vector<std::string> &arr) {
      std::vector<std::string> stack;
      const int sz = arr.size();
      
      stack.push_back(arr[0]);
      
      for (int i = 1; i < sz; i++) {
        int len = stack.size();
        
        stack.push_back(arr[i]);
        
        if (len >= 1) {
          if (stack[len-1] == "NORTH" && stack[len] == "SOUTH") {
            stack.pop_back();
            stack.pop_back();
          } else if (stack[len-1] == "SOUTH" && stack[len] == "NORTH") {
            stack.pop_back();
            stack.pop_back();
          } else if (stack[len-1] == "EAST" && stack[len] == "WEST") {
            stack.pop_back();
            stack.pop_back();
          } else if (stack[len-1] == "WEST" && stack[len] == "EAST") {
            stack.pop_back();
            stack.pop_back();
          }
        }
      }
      
      return stack;
    }
};
