#include "main.h"

int main(void)
{
node *head;
int number, index;

number = index = 0;
head = NULL;

/*Create the default node, to expriment on*/
create_node(&head, 10); /*create the first node*/
insert_node_end(&head, 100);
insert_node_end(&head, 1000);
insert_node_end(&head, 10000);
insert_node_end(&head, 100000);


/*print the initial node with its valus*/
print_list(&head); /*TODO: print 1*/

/*accept number and index from user */
printf("Enter number to Insert: ");
scanf("%d", &number);

printf("--------------------------\n");

insert_node_start(&head, number);

printf("--------------------------\n");

insert_node_end(&head, number);
printf("node with value: %d inserted at the START and END of the node :\n\n", number);

print_list(&head); /*TODO: print 1*/

printf("--------------------------\n");
printf("assuming the first node is index 0 : ");
printf("To insert node at a given location provide Number and Index:\n");

printf("Number: ");
scanf("%d", &number);
printf("\nIndex: ");
scanf("%d", &index);


insert_node_middle(&head, index, number);

printf("\nnode with value: %d inserted at Index %d :\n\n", number, index);
print_list(&head); /*TODO: print 1*/
printf("--------------------------\n");

printf("--------------------------\n");
free_node(&head);
return (0);
}