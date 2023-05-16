#ifndef MAIN_H
#define MAIN_H
#include <stdio.h>
#include <stdlib.h>


typedef struct node {
    int n;
    struct node *prev;
    struct node *next;
} node;

node *add_node(node **head, int num);
node *create_node(node **head, int num);
node *insert_node_end(node **head, int num);
node *insert_node_start(node **head, int num);
node *insert_node_middle(node **head, int idx, int num);
void print_list(node **head);
void free_node(node **head);


#endif