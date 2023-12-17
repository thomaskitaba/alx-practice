#!/usr/bin/python3
import json
import csv


class Base:
    __nb_objects = 0
    __nb_objects_list = []
    __object_update = 0
    def __init__(self, id=None):
        if id is not None :

            # if duplicate found
            # increment __nb_objects and assign
            #it to self id
            for i in Base.__nb_objects_list:
                if i == id:
                    # dont change increment the nb_object value
                    # just update the other attributes
                    if Base.__object_update == 0:
                        print("id already exists")
                        exit(0)
                    else:
                        self.id = id
                        Base.__object_update == 0
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

    @staticmethod
    def to_json_string(list_dictionaries):
        if not list_dictionaries:
            return "[]"
        return (json.dumps(list_dictionaries))

    @classmethod
    def save_to_file_csv(cls, list_objs):
        f_name = "{}.csv".format(cls.__name__)
        fieldnames = ""
        entry_to_file = []
        with open(f_name, 'W', newline='') as f:
            if not list_objs or list_objs == []:
                f.write("[]")
            else:
                fieldnames = list_objs[0].to_dictionary().keys()
            dict_writer = csv.DictWriter(f, fieldnames=fieldnames)

            for obj in list_objs:
                entry_to_file.append(obj.to_dict())
            dict_writer.writerows(entry_to_file)