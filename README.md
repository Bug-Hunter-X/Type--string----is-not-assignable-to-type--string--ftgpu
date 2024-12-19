# Type 'string[]' is not assignable to type 'string'
This bug demonstrates a common type error in TypeScript where an array of strings is passed to a function expecting a single string.

The `greeter` function is defined to accept a single string argument. However, the `user` variable is an array of strings.  Attempting to pass `user` to `greeter` results in a type error because TypeScript's type system correctly identifies the type mismatch.

The solution involves either modifying the `greeter` function to accept an array of strings or modifying the way the `user` variable is used to pass a single string to the function.

This simple example highlights the importance of careful type checking in TypeScript to prevent unexpected runtime errors.