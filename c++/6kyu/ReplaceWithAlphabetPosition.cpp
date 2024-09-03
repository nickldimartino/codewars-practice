/*
Welcome.

In this kata you are required to, given a string, replace every letter with its position in the alphabet.

If anything in the text isn't a letter, ignore it and don't return it.

"a" = 1, "b" = 2, etc.
*/

#include <string>

std::string alphabet_position(const std::string &text) {
  // create a dictionary of the alphabet characters and their alphabet index
  std::map<char, int> dict = {
    {'a', 1}, {'b', 2}, {'c', 3}, {'d', 4}, {'e', 5}, {'f', 6},
    {'g', 7}, {'h', 8}, {'i', 9}, {'j', 10}, {'k', 11}, {'l', 12},
    {'m', 13}, {'n', 14}, {'o', 15}, {'p', 16}, {'q', 17}, {'r', 18},
    {'s', 19}, {'t', 20}, {'u', 21}, {'v', 22}, {'w', 23}, {'x', 24},
    {'y', 25}, {'z', 26}
  };

  // save the size of the received string
  const int sz = text.size();

  // initialize an empty string
  std::string retStr = "";

  // iterate over the received string
  for (int i = 0; i < sz; i++) {
    // iterate over the dictionary
    for (auto const& c : dict) {
      // save the current char and make it lowercase
      char ch = (char)tolower(text[i]);
      // if the current char matches the dictionary alphabet character
      if (ch == c.first) {
        // add the corresponding alphabet index to the return string
        retStr += std::to_string(c.second);
        // add a space
        retStr += " ";
      }
    }
  }
  // return the string with the index and removing the last whitespace
  return retStr.substr(0, retStr.size()-1);
}
