/*
In this simple assignment you are given a number and have to make it negative. But maybe the number is already negative?
*/

int makeNegative(int num)
{
  if (num > 0) {
    return num * (-1);
  } else {
    return num;
  }
}
