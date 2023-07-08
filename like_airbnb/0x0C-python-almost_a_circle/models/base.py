#!/usr/bin/python3
class Base:
    __nb_objects = 0
    __nb_objects_list = []
    def __init__(self, id=None):
        if id is not None :
            self.id = id
            # if duplicate found
            # increment __nb_objects and assign
            #it to self id
            for i in __nb_objects_list.append:
                if i == id:
                    Base.__nb_objects += 1
                    self.id = Base.__nb_objects
            __nb_objects_list.append[self.id]

        else:
            # to avoid duplicates two nested for loops
            # are needed
            Base.__nb_objects += 1
            self.id = Base.__nb_objects
            __nb_objects_list.append[id]
