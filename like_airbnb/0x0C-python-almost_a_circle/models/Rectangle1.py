#!/usr/bin/python3
from base import Base


class Rectangle(Base):
    def __init__(self, width, height, x=0, y=0, id=None):
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y



b1 = Rectangle(1, 2)  # 1
print("b1: {}".format(b1.id))
b2 = Rectangle(1, 2) # 2
print("b2: {}".format(b2.id))

b3 = Rectangle(1, 2, 0, 0, 4) # 4
print("b3: {}".format(b3.id))

b4 = Rectangle(1, 2, 0, 0) # 3
print("b4: {}".format(b4.id))

b5 = Rectangle(1, 2, 0, 0, 6)  # 4
print("b5: {}".format(b5.id))

b6 = Rectangle(1, 2, 0, 0)
print("b6: {}".format(b6.id))

b7 = Rectangle(1, 2)
print("b7: {}".format(b7.id))

b8 = Rectangle(1, 2, 0, 0, 8)
print("b8: {}".format(b8.id))

print("base.__nb_object = {}".format(Base._Base__nb_objects_list))
print("base.__nb_object = {}".format(Base._Base__nb_objects))