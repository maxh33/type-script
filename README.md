# TypeScript Learning Repository

This repository contains various TypeScript examples and concepts that I have learned. Each file demonstrates different features and best practices in TypeScript.

## What I Learned

### Basic Types

- **Boolean, Number, and String Types**: Demonstrated in `tipos_basicos.ts`.
- **Arrays and Tuples**: Usage of arrays and tuples with specific types.
- **Union Types**: Combining multiple types using the union operator (`|`).
- **Any Type**: Usage of the `any` type and why it is not recommended.

### Functions

- **Function Declarations and Arrow Functions**: Demonstrated in `functions.ts`.
- **Rest Parameters**: Using the rest operator to handle multiple arguments.
- **Void and Return Types**: Specifying return types for functions.

### Type Casting

- **Type Casting**: Converting variables from one type to another using `as` syntax, demonstrated in `casting.ts`.

### Custom Types

- **Type Aliases**: Creating custom types using the `type` keyword, demonstrated in `custom_types.ts`.

### Object-Oriented Programming

- **Classes and Inheritance**: Creating classes, constructors, and inheritance, demonstrated in `oo.ts`.
- **Access Modifiers**: Using `public`, `private`, and `protected` access modifiers.
- **Static Methods**: Defining static methods in classes.

### Interfaces

- **Interfaces**: Creating and implementing interfaces, demonstrated in `interface.ts`.
- **Extending Interfaces**: Using the `extends` keyword to create complex interfaces.

### DOM Manipulation

- **DOM Manipulation**: Accessing and manipulating DOM elements, demonstrated in `dom.ts`.

### Error Handling

- **Error Handling**: Using `try-catch` blocks to handle errors in functions, demonstrated in `hello_multiple.ts`.

## Requirements

To run and test the examples in this repository, you need to have the following installed:

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **TypeScript**: On Terminal Install TypeScript globally using npm:
  ```sh
  npm install -g typescript
  ```

## Running the Examples

1. Clone the repository:
    ```sh
    git clone https://github.com/maxh33/type-script.git
    ```
2. Navigate to the project directory:
    ```sh
    cd type-script
    ```
3. Compile the TypeScript files using `npx`:
    ```sh
    npx tsc
    ```
4. Run the compiled JavaScript files using Node.js:
    ```sh
    node .\dist\file_to_test.js
    ```

* Replace `file_to_test` with the actual file name you want to run, for example:
    ```sh
    node .\dist\hello_multiple.js
    ```


