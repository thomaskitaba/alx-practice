#!/usr/bin/python3
class Base:
    __nb_objects = 0
    __nb_objects_list = []
    def __init__(self, id=None):
        if id is not None :

            # if duplicate found
            # increment __nb_objects and assign
            #it to self id
            for i in Base.__nb_objects_list:
                if i == id:
                    print("id already exists")
                    exit(0)
            self.id = id
            Base.__nb_objects_list.append(self.id)
        else:
            # to avoid duplicates two nested for loops
            # are needed
            Base.__nb_objects += 1
            for i in Base.__nb_objects_list:
                if Base.__nb_objects == i:
                    Base.__nb_objects += 1

            self.id = Base.__nb_objects
            Base.__nb_objects_list.append(self.id)
