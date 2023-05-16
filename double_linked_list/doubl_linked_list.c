#include "main.h"

node *add_node(node **head, int num)
{

}
/*-----------------------------------------------------------------*/
node *create_node(node **head, int num)
{
node *list;
list = *head;
list = (node *)malloc(sizeof(node));
list->n = num;
list->prev = NULL;
list->next = NULL;
*head = list;
return (*head);
}
/*-----------------------------------------------------------------*/
node *insert_node_start(node **head, int num)
{
    node *list;
    list = (node *)malloc(sizeof(node));
    /*add case to check if malloc went wrong*/
    list->n = num;
    if (*head == NULL)
    {
        list->next = NULL;
        list->prev = NULL;
        *head = list;
        return (*head);
    }
    list->next = *head;
    (*head)->prev = list;

    *head = list;
    printf("INFO: node with n = %d added at the begning\n", list->n);
    return (*head);
}
/*-----------------------------------------------------------------*/
node *insert_node_middle(node **head, int idx, int num)
{
    node *list, *current, *Next;
    int i;
    list = current = Next = NULL;
    i = 0;
    if (head == NULL)
    {
        printf("INFO: empty node");
        return (NULL);
    }
    current = Next = *head;
    if (idx == 0)
    {
        *head = insert_node_start(head, num);
        printf("INFO: numbert inserted at index [%d]\n", idx);
        return (*head);
    }
    /*loop accros the node and find the index*/
    while(i < idx)
    {
        current = Next;
        i++;
        Next = current->next;
        /*check if idx is outof range*/
    }

    if (Next == NULL)
    {
        *head = insert_node_end(&(*head), num);
        return (*head);
    }
    list = (node *)malloc(sizeof(node));
    /*check if malloc was succesfull*/
    if (list == NULL)
    {
        printf("INFO: Malloc was unsuccessful");
        return NULL;
    }
    list->n = num;
    current->next = list;
    list->next = Next;
    Next->prev = list;
    list->prev =current;

    return (*head);
}
/*-----------------------------------------------------------------*/
node *insert_node_end(node **head, int num)
{
node *list, *current, *Next;
if (*head == NULL)
{
    printf("INFO: Empty Node");
    return (NULL);
}
current = *head;
Next = current->next;

while(Next)
{
    current = Next;
    Next = Next->next;
}
list = (node *)malloc(sizeof(node));
if (list == NULL)
{
    printf("INFO: Malloc was unsuccessful");
    return NULL;
}
list->n = num;
current->next = list;
list->prev = current;
list->next = NULL;

return (*head);
}

/*-----------------------------------------------------------------*/
void print_list(node **head)
{
    node *temp_head;
    int i;
    temp_head = *head;
    i = 0;
    /*check if there is node to print*/
    if (*head == NULL)
    {
        printf("INFO: Nothing to print");
        return;
    }
    for(temp_head; temp_head != NULL; temp_head = temp_head->next)
    {
        i++;
        printf("node %d =  %d \t",i ,temp_head->n);
    }
    printf("\nCAUTION: memory allocated but not freed = %d\n", i);
}
/*-----------------------------------------------------------------*/
void free_node(node **head)
{
node *current, *Next;
int j;
j = 0;

if (*head == NULL)
{
    printf("INFO: Nothing to free");
    return;
}
current = Next = *head;
while (Next)
{
    j++;
    Next = current->next;
    free(current);
    current = Next;
}
printf("Success memory freed: %d", j);
}