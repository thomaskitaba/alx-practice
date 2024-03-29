#!/usr/bin/python3
from base import Base


class Rectangle(Base):
    def __init__(self, width, height, x=0, y=0, id=None):
        super().__init__(id)
        self.width = width
        self.height = height
        self.x = x
        self.y = y

    @property
    def width(self):
        return self.__width

    @width.setter
    def width(self, value):
        if type(value) != int:
            raise TypeError("width must be an integer")
        if value <= 0:
            raise ValueError("width must be > 0")
        self.__width = value

    @property
    def height(self):
        return self.__height
    @height.setter
    def height(self, value):
        if type(value) != int:
                raise TypeError("height must be an integer")
        if value <= 0:
            raise ValueError("height must be > 0")
        self.__height = value

    @property
    def x(self):
        return self.__x

    @x.setter
    def x(self, value):
        if not isinstance(value, int):
            raise TypeError("x muste be an integer")
        if value < 0:
            raise ValueError("x must be >= 0")

        self.__x = value

    @property
    def y(self):
        return self.__y
    @y.setter
    def y(self, value):
        if not isinstance(value, int):
            raise TypeError("y muste be an integer")
        if value < 0:
            raise ValueError("y must be >= 0")
        self.__y = value

    def area(self):
        return self.__width * self.__height

    def display(self):
        for row in range(self.y):
            print ("y")
        for row in range(self.height):
            for x in range(self.x):
                print("x", end="")
            for col in range(self.width):
                print("#", end="")
            print()

    def __str__(self):
        return f"[Rectangle] ({self.id}) {self.x}/{self.y} - {self.width}/{self.height}"

    def update(self, *args):
        if args and len(args) > 0:  # TODO: task 8. Update #0

            for count, arg in enumerate(args):
                if count == 0:
                    if arg is None:
                        # dont change increment the nb_object value
                        # inside the base __init__ function
                        # just update the other attributes
                        Base._Base__object_update = 1
                        self.__init__(self.width,
                                      self.height,
                                      self.x, self.y, self.id)
                    else:
                        self.id = args[count]
                if count == 1:
                    self.width = args[count]
                if count == 2:
                    self.height = args[count]
                if count == 3:
                    self.x = args[count]
                if count == 4:
                    self.y = args[count]


    def to_dictionary(self):
        return {
            "id": self.id,
            "width": self.width,
            "height": self.height,
            "x": self.x,
            "y": self.y
        }

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

b8 = Rectangle(5, 5, 4, 4, 8)

print("base.__nb_object = {}".format(Base._Base__nb_objects_list))
print("base.__nb_object = {}".format(Base._Base__nb_objects))

b8.display()
print("b8 Original:")
print("b8-> w:{}, h:{}, id: {}, area: {}".format(b8.width, b8.height, b8.id, b8.area()))


print(b8)

args = (None, 4, 4, 2, 2) #if id = None or original id then it wont be changed
b8.update(*args)   #TODO: update
print(b8)
print("---------------------------------------------------------")
print("Instance to Dictionary")
print("using __dict__ = {}".format(b8.__dict__))
print("using to_dictionary function{}".format(b8.to_dictionary()))

print("---------------------------------------------------------")
print("dictionary to Json")
dictionary = b8.to_dictionary()
json_dictionary = Base.to_json_string([dictionary])
print("[instance to dictiounary] type({}): {}".format(type(dictionary), dictionary))
print("[to json str] type({}): {}".format(type(json_dictionary), json_dictionary))

print("---------------------------------------------------------")
print("Json to file")