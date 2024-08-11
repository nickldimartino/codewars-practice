/*
Move the first letter of each word to the end of it, then add "ay" 
to the end of the word. Leave punctuation marks untouched.
*/

#include <sstream>
#include <iostream>

std::string pig_it(std::string str)
{
  std::istringstream iss(str);
  std::string s;
  std::vector<std::string> words;
  std::string pigLatin = "";
  std::string fc  = "";
  std::string word = "";
  std::string newStr = "";
  
  while (getline(iss, s, ' ')) {
    words.push_back(s);
  }
  
  int sz = words.size();
  
  for (int i = 0; i < sz; i++) {
    int len = words[i].size();
    fc = words[i].substr(0, 1);
    
    if (fc == "!" || fc == "." || fc == "?" || fc == ",") {
      newStr = fc;
    } else {
      word = words[i].substr(1, len);
      newStr = word + fc + "ay";
    }
    
    pigLatin += newStr;
    
    if (i != sz-1) {
      pigLatin += " ";
    }
  }
  
  return pigLatin;
}
