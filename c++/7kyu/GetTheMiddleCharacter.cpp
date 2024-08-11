/*
You are going to be given a word. Your job is to return the middle 
character of the word. If the word's length is odd, return the middle 
character. If the word's length is even, return the middle 2 characters.
*/

std::string get_middle(std::string input) 
{
  const int sz = input.size();
  int middle = 0;
  std::string retVal = "";
  
  if (sz % 2 != 0) {
    middle = sz / 2;
    retVal = input[middle];
  } else {
    middle = (sz / 2) - 1;
    retVal += input[middle];
    retVal += input[middle+1];
  }
  
  return retVal;
}
