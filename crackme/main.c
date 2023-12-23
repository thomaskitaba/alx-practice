#include <stdio.h>
#include <string.h>
int main(int argc, char *argv[])
{
	if (argc != 2)
	{
		printf("Usage: password\n");
		return (1);
	}
	if (strcmp(argv[1], "123456a") == 0)
	{
		printf("Loging Succesful\n");
		return (0);
	}
	printf("Try again\n");
	return (1);
}

