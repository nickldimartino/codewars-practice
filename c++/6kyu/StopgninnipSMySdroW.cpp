/*
Write a function that takes in a string of one or more words, 
and returns the same string, but with all words that have five 
or more letters reversed (Just like the name of this Kata). Strings 
passed in will consist of only letters and spaces. Spaces will 
be included only when more than one word is present.
*/

#include <sstream>

std::string spinWords(const std::string &str)
{
  std::vector<std::string> words;
  std::istringstream iss(str);
  std::string word;
  std::string retStr = "";
  
  while (getline(iss, word, ' ')) {
    words.push_back(word);
  }
  
  const int sz = words.size();
  
  for (int i = 0; i < sz; i++) {
    int wordSize = words[i].size();
    
    if (wordSize >= 5) {
      std::reverse(words[i].begin(), words[i].end());
      retStr += words[i];
    } else {
      retStr += words[i];
    }
    
    if (i != sz-1) {
      retStr += " ";
    }
  }
  
  return retStr;
}
