#!/usr/bin/env python3
"""
  write a recursive function that given an input n
  sums all nonnegative integers up to n
"""
def partition(n, m):
  if n == 0:
    return 1
  elif m == 0 or n < 0:
    return 0
  else:
    return(partition(n - m, m) + partition(n, m - 1))

if __name__ == "__main__":
  print(partition(5, 3))
