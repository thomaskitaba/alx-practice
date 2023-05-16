#include "main.h"

int main(void)
{
node *head;
head = NULL;

create_node(&head, 3); /*create the first node*/
insert_node_end(&head, 57);
insert_node_end(&head, 5);
insert_node_end(&head, 34);
insert_node_end(&head, 946);

print_list(&head); /*TODO: print 1*/
printf("--------------------------\n");
printf("insert_node at the start of the node :\n");
insert_node_start(&head, 1);
print_list(&head); /*TODO: print 1*/
printf("--------------------------\n");

printf("--------------------------\n");
printf("insert_node at the a given index :\n");
printf("assuming the first node is index 0 :\n");
insert_node_middle(&head, 6, 54);
print_list(&head); /*TODO: print 1*/
printf("--------------------------\n");

printf("--------------------------\n");
free_node(&head);
return (0);
}