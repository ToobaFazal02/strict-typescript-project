# TypeScript Overview

TypeScript is used to build more reliable, maintainable, and scalable applications by adding **static type checking** and advanced features to JavaScript. It helps developers catch errors early during development (at "compile time") rather than at runtime, which is particularly beneficial for large, complex codebases and team collaboration.

## Purpose of TypeScript

The primary purpose of TypeScript is to enhance JavaScript development for enterprise-scale applications. It is a **syntactic superset** of JavaScript, meaning all valid JavaScript code is also valid TypeScript code, but TypeScript adds extra syntax and features.

## Key Features

* **Static Typing**: Developers can define the type of data (e.g., string, number, boolean) that variables, function parameters, and return values should hold. The compiler then checks for type mismatches.
* **Interfaces and Generics**: These features allow developers to define custom types and reusable type structures, enabling class-based object-oriented programming (OOP) principles.
* **Modern JavaScript Features**: TypeScript supports the latest ECMAScript features and can transpile them into older JavaScript versions (like ES5) to ensure compatibility with a wide range of browsers.

## Why Use TypeScript?

* **Early Error Detection**: Catching type-related bugs during the development phase (compile time) reduces debugging effort.
* **Improved Code Quality**: Explicit types serve as living documentation, making code easier to read for team members.
* **Enhanced Developer Tooling**: IDEs provide better IntelliSense, navigation, and real-time error checking.
* **Scalability**: Helps manage complexity in large projects with hundreds of files, ensuring consistency.
* **Seamless Integration**: Integrates with frameworks like Angular, React, and Vue through the DefinitelyTyped repository.

---

## Code Example: Type Annotations with Objects

Type annotation with objects allows you to specify the type of property that the object should have.

```typescript
let personExTwo: {
    name: string;
    age: number;
    jobTitle: string;
    address: {
        street: string;
        city: string;
        country: string;
    };
} = {
    name: "John Doe",
    age: 30,
    jobTitle: "Software Engineer",
    address: {
        street: "123 Main St",
        city: "Anytown",
        country: "USA"
    }
};

