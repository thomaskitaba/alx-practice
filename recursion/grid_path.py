#!/usr/bin/python3
def grid_path(row, col):
  if (row == 1 or col == 1):
    return 1
  else:
    return grid_path(row - 1, col) + grid_path(row, col -1)

if __name__ == '__main__':
  print(grid_path(4, 5))
