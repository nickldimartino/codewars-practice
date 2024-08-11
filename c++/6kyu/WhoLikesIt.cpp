/*
You probably know the "like" system from Facebook and other pages. 
People can "like" blog posts, pictures or other items. We want to 
create the text that should be displayed next to such an item.

Implement the function which takes an array containing the names of people that like an item. 
*/

#include <string>
#include <vector>

std::string likes(const std::vector<std::string> &names)
{
  const int sz = names.size();
  if (sz == 0) {
    return "no one likes this";
  } else if (sz == 1) {
    return names[0] + " likes this";
  } else if (sz == 2) {
    return names[0] + " and " + names[1] + " like this";
  } else if (sz == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  } else {
    return names[0] + ", " + names[1] + " and " + std::to_string(sz - 2) + " others like this";
  }
}
