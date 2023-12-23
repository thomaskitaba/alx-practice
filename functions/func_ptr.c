#include <stdio.h>
#include <string.h>
#include <stdlib.h>

typedef struct calc_opt{
    char *opt;
    int (*func)(int, int);
} calc_opt;

int add(int a, int b) { return (a + b); }
int sub(int a, int b) { return (a - b); }
int mul(int a, int b) { return (a * b); }
int divide(int a, int b) { return (a / b); }

void execute(char *a, char *opr, char *b)
{
int i;
printf("arg[1]: %s\narg[2]: %s\narg[3]: %s\n", a, opr, b);
calc_opt options[] ={ {"+", add}, {"-", sub}, {"*", mul}, {"/", divide}, {NULL, NULL}};
i = 0;
while (options[i].opt)  /*~~ (*(options + 1)->opt) */
{
    if (strcmp(opr, options[i].opt) == 0)
    {
        /*convert a and b to int*/
        printf("operatory selected: %s\n", opr);
        /* printing asci value of char*/
        int aa = (int)*a;
        int bb = (int)*b;
        printf("a: %d\t b: %d\n", aa, bb);

        printf("result:  %d\n", options[i].func(atoi(a), atoi(b)));
        return;
    }
    i++;
}
printf("Operator provided doesnot exist\n");
return;
}

int main(int argc, char *argv[])
{
    /*declare function pointer*/

    if (argc != 4)
    {
        fprintf(stderr, "Usage op1 operator op2\n");
    }
    execute(argv[1], argv[2], argv[3]);
    return (0);
}