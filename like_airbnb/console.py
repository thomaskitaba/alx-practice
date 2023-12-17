#!/usr/bin/python3
import cmd
import sys

class MyCommandInterpreter(cmd.Cmd):
    intro = "Welcome to the command interpreter. Type 'help' to see available commands."
    prompt = "(command) "

    def do_hello(self, arg):
        """Prints a greeting message."""
        print("Hello, world!")

    def alias_greet(self, arg):
        """Alias for the 'hello' command."""
        self.do_hello(arg)

    def do_greet(self, arg):
        print("Greeting message")

    def do_quit(self, arg):
        """Exits the command interpreter."""
        print("Exiting...")
        return True

if __name__ == '__main__':
    if not sys.stdin.isatty():  # Check if there is piped input
        for line in sys.stdin:
            line = line.strip()  # Remove any leading/trailing whitespace
            interpreter = MyCommandInterpreter()
            interpreter.onecmd(line)
    else:
        interpreter = MyCommandInterpreter()
        interpreter.cmdloop()
