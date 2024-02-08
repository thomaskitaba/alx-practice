#!/usr/bin/python3

import sys

def validPostion(ans, row, col):
	for A in ans:
		# check if vertical to another queen
		if A[1] == col:
			return False
		# check if horizontat to another queen
		if A[0] == row:
			return False
		if abs(A[0] - row) == abs(A[1] - col):
			return False
	return True

def nqueens(N):
	row = 0
	ans = []
	col = 0
	def backtrack(row):
		if row == N:
			print(ans)
			return
		for col in range(N):
			if validPostion(ans, row, col):
				ans.append([row, col])
				backtrack(row + 1)
				ans.pop()
			if col == N:
				return

	backtrack(0)


if __name__ == '__main__':
	if len(sys.argv) != 2:
		print("Usage: nquesns N")
		sys.exit(1)
	if not sys.argv[1].isdigit():
		print("N must be a number")
		sys.exit(1)
	else:
		n = int(sys.argv[1])
	if n < 4:
		print("N nust be at leat 4")
		sys.exit(1)
	nqueens(n)
